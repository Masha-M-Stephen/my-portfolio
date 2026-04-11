/**
 * Monkey-patch fs.readlink / fs.readlinkSync to gracefully handle EISDIR errors
 * on Windows drives (e.g. D:\) where readlink on regular files returns EISDIR.
 * This is a known Node.js + Windows + non-C: drive / exFAT issue.
 */
const fs = require("fs");

// Convert EISDIR to EINVAL, which is the standard "not a symlink" error code.
// This tells enhanced-resolve that the file is not a symlink instead of crashing.
function fixEisdirError(err) {
  if (err && err.code === "EISDIR") {
    err.code = "EINVAL";
    err.errno = -22;
  }
  return err;
}

const originalReadlinkSync = fs.readlinkSync;
fs.readlinkSync = function patchedReadlinkSync(path, options) {
  try {
    return originalReadlinkSync.call(fs, path, options);
  } catch (err) {
    throw fixEisdirError(err);
  }
};

const originalReadlink = fs.readlink;
fs.readlink = function patchedReadlink(path, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }
  originalReadlink.call(fs, path, options, function (err, linkString) {
    callback(fixEisdirError(err), linkString);
  });
};
