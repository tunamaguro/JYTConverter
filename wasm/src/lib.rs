mod utils;

use serde::de::Error;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm!");
}

#[wasm_bindgen]
pub fn j2y(s: &str) -> String {
    let json: serde_json::Value = serde_json::from_str(s).unwrap();
    serde_yaml::to_string(&json).unwrap()
}

#[wasm_bindgen]
pub fn j2t(s: &str) -> String {
    let json: serde_json::Value = serde_json::from_str(s).unwrap();
    toml::to_string(&json).unwrap()
}

#[wasm_bindgen]
pub fn y2j(s: &str) -> String {
    let yaml: serde_yaml::Value = serde_yaml::from_str(s).unwrap();
    serde_json::to_string(&yaml).unwrap()
}

#[wasm_bindgen]
pub fn y2t(s: &str) -> String {
    let yaml: serde_yaml::Value = serde_yaml::from_str(s).unwrap();
    toml::to_string(&yaml).unwrap()
}

#[wasm_bindgen]
pub fn t2j(s: &str) -> String {
    let toml: toml::Value = toml::from_str(s).unwrap();
    serde_json::to_string(&toml).unwrap()
}

#[wasm_bindgen]
pub fn t2y(s: &str) -> String {
    let toml: toml::Value = toml::from_str(s).unwrap();
    serde_yaml::to_string(&toml).unwrap()
}
