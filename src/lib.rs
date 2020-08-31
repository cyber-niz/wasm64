extern crate base64;
use wasm_bindgen::prelude::*;

// Encrypt to base64
#[wasm_bindgen]
pub fn ec(cleartext: &str) -> String {
  let encoded = base64::encode(cleartext.as_bytes());
  return encoded;
}
pub fn dc(cleartext: &str) -> String {
  let decoded = base64::decode(cleartext.as_bytes());
  return decoded;
}
