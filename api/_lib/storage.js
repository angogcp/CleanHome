const fs = require('fs');
const path = require('path');
const os = require('os');

const tmpDir = os.tmpdir();

function tmpPath(filename) {
  return path.join(tmpDir, filename);
}

function rootPath(filename) {
  return path.join(process.cwd(), filename);
}

function readData(filename) {
  const t = tmpPath(filename);
  if (fs.existsSync(t)) {
    try {
      const data = fs.readFileSync(t, 'utf8');
      return JSON.parse(data || '[]');
    } catch (e) {
      return [];
    }
  }
  try {
    const data = fs.readFileSync(rootPath(filename), 'utf8');
    return JSON.parse(data || '[]');
  } catch (e) {
    return [];
  }
}

function writeData(filename, data) {
  try {
    fs.writeFileSync(tmpPath(filename), JSON.stringify(data, null, 2));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = { readData, writeData };