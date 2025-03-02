/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs-extra")
const path = require("path")
const core = require("@actions/core")

async function run() {
  try {
    // Get environment variables
    const issueBody = process.env.ISSUE_BODY

    if (!issueBody) {
      throw new Error("Issue body is empty or not provided")
    }

    console.log("Processing issue body...")

    // Process the entire issue body as JSON
    processJsonContent(issueBody)

    console.log("Successfully processed issue and created JSON files")
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`)
  }
}

function processJsonContent(jsonContent) {
  // Parse the JSON content
  let jsonArray
  try {
    jsonArray = JSON.parse(jsonContent)
  } catch (e) {
    throw new Error(`Failed to parse JSON content: ${e.message}`)
  }

  // Ensure it's an array
  if (!Array.isArray(jsonArray)) {
    throw new Error("Issue body must contain a JSON array")
  }

  // Create the target directory if it doesn't exist
  const targetDir = path.join("project", "src", "resources", "transcript")
  fs.ensureDirSync(targetDir)

  // Process each object in the array
  jsonArray.forEach((jsonObj) => {
    // Generate a filename based on the object properties or index
    const filename = jsonObj.slug
    const filePath = path.join(targetDir, filename)

    // Write the JSON file
    fs.writeFileSync(filePath, JSON.stringify(jsonObj, null, 2))
    console.log(`Created file: ${filePath}`)
  })
}

run()

