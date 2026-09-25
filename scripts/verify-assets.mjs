import { createHash } from "node:crypto"
import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const fixturePath = path.join(root, "tests", "fixtures", "asset-hashes.json")
const expected = JSON.parse(await readFile(fixturePath, "utf8"))

async function verifyDirectory(relativeDirectory) {
  const directory = path.join(root, relativeDirectory)
  const actualFiles = (await readdir(directory)).sort()
  const actualImages = actualFiles.filter((file) => /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(file))
  const expectedFiles = Object.keys(expected).sort()
  if (JSON.stringify(actualImages) !== JSON.stringify(expectedFiles)) {
    throw new Error(`${relativeDirectory}: expected images ${expectedFiles.join(", ")}; found ${actualImages.join(", ")}`)
  }
  for (const file of expectedFiles) {
    const buffer = await readFile(path.join(directory, file))
    const actual = createHash("sha256").update(buffer).digest("hex")
    if (actual !== expected[file]) throw new Error(`${relativeDirectory}/${file}: SHA-256 mismatch`)
  }
  return expectedFiles.length
}

const directories = process.argv.slice(2)
const targets = directories.length > 0 ? directories : ["public/assets"]
for (const target of targets) {
  const count = await verifyDirectory(target)
  console.log(`${target}: ${count} assets verified`)
}
