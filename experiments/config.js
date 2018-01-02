const conf = {
  "map": {
    "_stream_transform": "nm:readable-stream/transform",
    "@types/core-js": "nm:@types/core-js",
    "@types/node": "nm:@types/node",
    "ajv": "nm:ajv",
    "amdefine": "nm:amdefine",
    "asn1": "nm:asn1",
    "assert-plus": "nm:assert-plus",
    "asynckit": "nm:asynckit",
    "aws-sign2": "nm:aws-sign2",
    "aws4": "nm:aws4",
    "balanced-match": "nm:balanced-match",
    "bcrypt-pbkdf": "nm:bcrypt-pbkdf",
    "bl": "nm:bl",
    "bluebird": "nm:bluebird",
    "boom": "nm:boom",
    "brace-expansion": "nm:brace-expansion",
    "browser-split": "nm:browser-split",
    "buffer-peek-stream": "nm:buffer-peek-stream",
    "caseless": "nm:caseless",
    "chownr": "nm:chownr",
    "co": "nm:co",
    "combined-stream": "nm:combined-stream",
    "commander": "nm:commander",
    "concat-map": "nm:concat-map",
    "core-util-is": "nm:core-util-is",
    "cryptiles": "nm:cryptiles",
    "dashdash": "nm:dashdash",
    "deep-equal": "nm:deep-equal",
    "deepmerge": "nm:deepmerge",
    "delayed-stream": "nm:delayed-stream",
    "ecc-jsbn": "nm:ecc-jsbn",
    "end-of-stream": "nm:end-of-stream",
    "extend": "nm:extend",
    "extsprintf": "nm:extsprintf",
    "fast-deep-equal": "nm:fast-deep-equal",
    "fast-json-stable-stringify": "nm:fast-json-stable-stringify",
    "forever-agent": "nm:forever-agent",
    "form-data": "nm:form-data",
    "fractal-core": "nm:fractal-core",
    "free-style": "nm:free-style",
    "fs-jetpack": "nm:fs-jetpack",
    "getpass": "nm:getpass",
    "glob": "nm:glob",
    "graceful-fs": "nm:graceful-fs",
    "graceful-readlink": "nm:graceful-readlink",
    "har-schema": "nm:har-schema",
    "har-validator": "nm:har-validator",
    "hawk": "nm:hawk",
    "hoek": "nm:hoek",
    "http-signature": "nm:http-signature",
    "idb": "nm:idb",
    "idb.filesystem.js": "nm:idb.filesystem.js",
    "inflight": "nm:inflight",
    "inherits": "nm:inherits",
    "is-typedarray": "nm:is-typedarray",
    "isarray": "nm:isarray",
    "isexe": "nm:isexe",
    "isstream": "nm:isstream",
    "jsbn": "nm:jsbn",
    "json-schema": "nm:json-schema",
    "json-schema-traverse": "nm:json-schema-traverse",
    "json-stringify-safe": "nm:json-stringify-safe",
    "jspm-npm": "nm:jspm-npm",
    "jsprim": "nm:jsprim",
    "lodash": "nm:lodash",
    "lodash.escape": "nm:lodash.escape",
    "lodash.forown": "nm:lodash.forown",
    "lodash.kebabcase": "nm:lodash.kebabcase",
    "lodash.remove": "nm:lodash.remove",
    "lodash.uniq": "nm:lodash.uniq",
    "mime-db": "nm:mime-db",
    "mime-types": "nm:mime-types",
    "minimatch": "nm:minimatch",
    "minimist": "nm:minimist",
    "mkdirp": "nm:mkdirp",
    "oauth-sign": "nm:oauth-sign",
    "object-assign": "nm:object-assign",
    "once": "nm:once",
    "parse-sel": "nm:parse-sel",
    "path-is-absolute": "nm:path-is-absolute",
    "performance-now": "nm:performance-now",
    "process-nextick-args": "nm:process-nextick-args",
    "pump": "nm:pump",
    "punycode": "nm:jspm-nodelibs-punycode",
    "qs": "nm:qs",
    "readable-stream": "nm:readable-stream",
    "readdirp": "nm:readdirp",
    "request": "nm:request",
    "rsvp": "nm:rsvp",
    "safe-buffer": "nm:safe-buffer",
    "semver": "nm:semver",
    "set-immediate-shim": "nm:set-immediate-shim",
    "setimmediate": "nm:setimmediate",
    "snabbdom": "nm:snabbdom",
    "sntp": "nm:sntp",
    "source-map": "nm:source-map",
    "source-map-support": "nm:source-map-support",
    "sshpk": "nm:sshpk",
    "string_decoder": "nm:jspm-nodelibs-string_decoder",
    "stringstream": "nm:stringstream",
    "tar-fs": "nm:tar-fs",
    "tar-stream": "nm:tar-stream",
    "tough-cookie": "nm:tough-cookie",
    "traceur": "nm:traceur",
    "tunnel-agent": "nm:tunnel-agent",
    "tweetnacl": "nm:tweetnacl",
    "typestyle": "nm:typestyle",
    "util-deprecate": "nm:util-deprecate",
    "uuid": "nm:uuid",
    "verror": "nm:verror",
    "which": "nm:which",
    "wrappy": "nm:wrappy",
    "xtend": "nm:xtend",
    "assert": "nm:jspm-nodelibs-assert",
    "buffer": "nm:jspm-nodelibs-buffer",
    "child_process": "nm:jspm-nodelibs-child_process",
    "cluster": "nm:jspm-nodelibs-cluster",
    "console": "nm:jspm-nodelibs-console",
    "constants": "nm:jspm-nodelibs-constants",
    "crypto": "nm:jspm-nodelibs-crypto",
    "dgram": "nm:jspm-nodelibs-dgram",
    "dns": "nm:jspm-nodelibs-dns",
    "domain": "nm:jspm-nodelibs-domain",
    "events": "nm:jspm-nodelibs-events",
    "fs": "nm:jspm-nodelibs-fs",
    "http": "nm:jspm-nodelibs-http",
    "https": "nm:jspm-nodelibs-https",
    "module": "nm:jspm-nodelibs-module",
    "net": "nm:jspm-nodelibs-net",
    "os": "nm:jspm-nodelibs-os",
    "path": "nm:jspm-nodelibs-path",
    "process": "nm:jspm-nodelibs-process",
    "querystring": "nm:jspm-nodelibs-querystring",
    "readline": "nm:jspm-nodelibs-readline",
    "repl": "nm:jspm-nodelibs-repl",
    "stream": "nm:jspm-nodelibs-stream",
    "sys": "nm:jspm-nodelibs-sys",
    "timers": "nm:jspm-nodelibs-timers",
    "tls": "nm:jspm-nodelibs-tls",
    "tty": "nm:jspm-nodelibs-tty",
    "url": "nm:jspm-nodelibs-url",
    "util": "nm:jspm-nodelibs-util",
    "vm": "nm:jspm-nodelibs-vm",
    "zlib": "nm:jspm-nodelibs-zlib"
  },
  "packages": {
    "nm:@types/core-js": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "format": "cjs"
    },
    "nm:@types/node": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "format": "cjs"
    },
    "nm:ajv": {
      "map": {
        "./lib/compile": "./lib/compile/index.js",
        "ajv": "."
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "dist/ajv.bundle.js": {
          "cjsRequireDetection": false
        },
        "dist/regenerator.min.js": {
          "format": "amd"
        }
      },
      "main": "lib/ajv.js",
      "format": "cjs"
    },
    "nm:amdefine": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "amdefine.js",
      "format": "cjs"
    },
    "nm:asn1": {
      "map": {
        "./lib": "./lib/index.js",
        "./lib/ber": "./lib/ber/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib/ber/reader.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/ber/writer.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "tst/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:assert-plus": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "assert.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "assert.js",
      "format": "cjs"
    },
    "nm:asynckit": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:aws-sign2": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:aws4": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "aws4.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "aws4.js",
      "format": "cjs"
    },
    "nm:balanced-match": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:bcrypt-pbkdf": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:bl": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "bl.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "test/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "bl.js",
      "format": "cjs"
    },
    "nm:bluebird": {
      "map": {
        "./js/release/bluebird.js": {
          "browser": "./js/browser/bluebird.js"
        }
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "js/release/bluebird.js",
      "format": "cjs"
    },
    "nm:boom": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:brace-expansion": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:browser-split": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:buffer-peek-stream": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "buffer-peek-stream.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "test.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "buffer-peek-stream.js",
      "format": "cjs"
    },
    "nm:caseless": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:chownr": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "chownr.js",
      "format": "cjs"
    },
    "nm:co": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:combined-stream": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/combined_stream.js",
      "format": "cjs"
    },
    "nm:commander": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:concat-map": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:core-util-is": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "test.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/util.js",
      "format": "cjs"
    },
    "nm:cryptiles": {
      "map": {
        "./lib": "./lib/index.js",
        "boom": "node_modules/cryptiles/node_modules/boom"
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:cryptiles/node_modules/boom": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:dashdash": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/dashdash.js",
      "format": "cjs"
    },
    "nm:deep-equal": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "test/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:deepmerge": {
      "map": {
        "./dist/umd.js": {
          "browser": "./dist/cjs.js"
        }
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "dist/es.js": {
          "format": "esm"
        },
        "rollup.config.js": {
          "format": "esm"
        }
      },
      "main": "dist/umd.js",
      "format": "cjs"
    },
    "nm:delayed-stream": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/delayed_stream.js",
      "format": "cjs"
    },
    "nm:ecc-jsbn": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "index.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:end-of-stream": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:extend": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:extsprintf": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/extsprintf.js",
      "format": "cjs"
    },
    "nm:fast-deep-equal": {
      "map": {
        "./benchmark": "./benchmark/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:fast-json-stable-stringify": {
      "map": {
        "./benchmark": "./benchmark/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:forever-agent": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:form-data": {
      "map": {
        "./lib/form_data.js": {
          "browser": "./lib/browser.js"
        }
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "lib/form_data.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/form_data.js",
      "format": "cjs"
    },
    "nm:fractal-core": {
      "map": {
        "./core": "./core/index.js",
        "./interfaces/view": "./interfaces/view/index.js",
        "./toHTML": "./toHTML/index.js",
        "./toHTML/modules": "./toHTML/modules/index.js",
        "./utils": "./utils/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "core/index.d.ts": {
          "format": "esm"
        },
        "utils/index.d.ts": {
          "format": "esm"
        }
      },
      "main": "core/index.js",
      "format": "cjs"
    },
    "nm:free-style": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "dist.es2015/free-style.js": {
          "format": "esm"
        }
      },
      "main": "dist/free-style.js",
      "format": "cjs"
    },
    "nm:fs-jetpack": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "benchmark/utils.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/utils/validate.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/write.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "spec/append.spec.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "spec/assert_path.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "spec/file.spec.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "spec/read.spec.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "spec/utils/validate.spec.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "spec/write.spec.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "main.js",
      "format": "cjs"
    },
    "nm:getpass": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:glob": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "glob.js",
      "format": "cjs"
    },
    "nm:graceful-fs": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "graceful-fs.js",
      "format": "cjs"
    },
    "nm:graceful-readlink": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:har-schema": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:har-validator": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/promise.js",
      "format": "cjs"
    },
    "nm:hawk": {
      "map": {
        "./lib": "./lib/index.js",
        "./lib/index.js": {
          "browser": "./dist/browser.js"
        }
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:hoek": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "lib/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:http-signature": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib/signer.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/verify.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:idb": {
      "map": {
        "./lib/node.js": {
          "browser": "./lib/idb.js"
        }
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/node.js",
      "format": "cjs"
    },
    "nm:idb.filesystem.js": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "src/idb.filesystem.js",
      "format": "cjs"
    },
    "nm:inflight": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "inflight.js",
      "format": "cjs"
    },
    "nm:inherits": {
      "map": {
        "./inherits.js": {
          "browser": "./inherits_browser.js"
        }
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "inherits.js",
      "format": "cjs"
    },
    "nm:is-typedarray": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:isarray": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:isexe": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:isstream": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "isstream.js",
      "format": "cjs"
    },
    "nm:jsbn": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:json-schema": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/validate.js",
      "format": "cjs"
    },
    "nm:json-schema-traverse": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:json-stringify-safe": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "stringify.js",
      "format": "cjs"
    },
    "nm:jspm-npm": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "lib/auth.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/node-transformer.js": {
          "cjsRequireDetection": false
        },
        "lib/npmrc.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:jsprim": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/jsprim.js",
      "format": "cjs"
    },
    "nm:lodash": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "_cloneBuffer.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "isBuffer.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lodash.js",
      "format": "cjs"
    },
    "nm:lodash.escape": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:lodash.forown": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:lodash.kebabcase": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:lodash.remove": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:lodash.uniq": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:mime-db": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:mime-types": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:minimatch": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "minimatch.js",
      "format": "cjs"
    },
    "nm:minimist": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:mkdirp": {
      "map": {
        "mkdirp": "."
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:oauth-sign": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:object-assign": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:once": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "once.js",
      "format": "cjs"
    },
    "nm:parse-sel": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:path-is-absolute": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:performance-now": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/performance-now.js",
      "format": "cjs"
    },
    "nm:process-nextick-args": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:pump": {
      "map": {
        "fs": {
          "browser": "@empty"
        }
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "test-browser.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:punycode": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "punycode.js",
      "format": "cjs"
    },
    "nm:qs": {
      "map": {
        "./lib": "./lib/index.js",
        "./test": "./test/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "dist/qs.js": {
          "cjsRequireDetection": false
        },
        "test/parse.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "test/stringify.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:readable-stream": {
      "map": {
        "./duplex.js": {
          "browser": "./duplex-browser.js"
        },
        "./lib/internal/streams/stream.js": {
          "browser": "./lib/internal/streams/stream-browser.js"
        },
        "./readable.js": {
          "browser": "./readable-browser.js"
        },
        "./writable.js": {
          "browser": "./writable-browser.js"
        },
        "util": {
          "browser": "@empty"
        }
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "lib/_stream_readable.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/_stream_writable.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/internal/streams/BufferList.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "readable.js",
      "format": "cjs"
    },
    "nm:readdirp": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "readdirp.js",
      "format": "cjs"
    },
    "nm:request": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "lib/helpers.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/multipart.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/oauth.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "request.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:rsvp": {
      "map": {
        "vertx": {
          "browser": "@empty"
        }
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "dist/es6/rsvp.es.js": {
          "format": "esm"
        },
        "dist/rsvp.es.js": {
          "format": "esm"
        },
        "dist/rsvp.min.js": {
          "format": "amd"
        },
        "lib/*": {
          "format": "esm"
        }
      },
      "main": "dist/rsvp.js",
      "format": "cjs"
    },
    "nm:safe-buffer": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "index.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "test.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:semver": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "semver.js",
      "format": "cjs"
    },
    "nm:set-immediate-shim": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:setimmediate": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "setImmediate.js",
      "format": "cjs"
    },
    "nm:snabbdom": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "dist/h.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom-attributes.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom-class.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom-dataset.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom-eventlisteners.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom-patch.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom-props.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom-style.js": {
          "cjsRequireDetection": false
        },
        "dist/snabbdom.js": {
          "cjsRequireDetection": false
        },
        "dist/tovnode.js": {
          "cjsRequireDetection": false
        },
        "es/h.js": {
          "format": "esm"
        },
        "es/helpers/attachto.js": {
          "format": "esm"
        },
        "es/htmldomapi.js": {
          "format": "esm"
        },
        "es/is.js": {
          "format": "esm"
        },
        "es/modules/attributes.js": {
          "format": "esm"
        },
        "es/modules/class.js": {
          "format": "esm"
        },
        "es/modules/dataset.js": {
          "format": "esm"
        },
        "es/modules/eventlisteners.js": {
          "format": "esm"
        },
        "es/modules/hero.js": {
          "format": "esm"
        },
        "es/modules/props.js": {
          "format": "esm"
        },
        "es/modules/style.js": {
          "format": "esm"
        },
        "es/snabbdom.bundle.js": {
          "format": "esm"
        },
        "es/snabbdom.js": {
          "format": "esm"
        },
        "es/thunk.js": {
          "format": "esm"
        },
        "es/tovnode.js": {
          "format": "esm"
        },
        "es/vnode.js": {
          "format": "esm"
        },
        "examples/carousel-svg/build.js": {
          "cjsRequireDetection": false
        },
        "examples/hero/build.js": {
          "cjsRequireDetection": false
        },
        "examples/reorder-animation/build.js": {
          "cjsRequireDetection": false
        },
        "examples/svg/build.js": {
          "cjsRequireDetection": false
        }
      },
      "main": "snabbdom.js",
      "format": "cjs"
    },
    "nm:sntp": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "lib/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:source-map": {
      "map": {
        "source-map": "."
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/source-map.js",
      "format": "cjs"
    },
    "nm:source-map-support": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "amd-test/script.js": {
          "format": "amd"
        },
        "source-map-support.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "test.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "source-map-support.js",
      "format": "cjs"
    },
    "nm:sshpk": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib/algs.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/certificate.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/dhe.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/ed-compat.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/fingerprint.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/formats/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/identity.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/key.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/private-key.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/signature.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/ssh-buffer.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "lib/utils.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:string_decoder": {
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib/*": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "lib/string_decoder.js",
      "format": "cjs"
    },
    "nm:stringstream": {
      "map": {
        "stringstream": "."
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "example.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "stringstream.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "stringstream.js",
      "format": "cjs"
    },
    "nm:tar-fs": {
      "map": {
        "./test": "./test/index.js"
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:tar-stream": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "headers.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "pack.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:tough-cookie": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/cookie.js",
      "format": "cjs"
    },
    "nm:traceur": {
      "map": {
        "semver": "node_modules/traceur/node_modules/semver"
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "dist/commonjs/node/NodeCompiler.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "src/Compiler.js": {
          "format": "esm"
        },
        "src/HTMLImportTranscoder.js": {
          "format": "esm"
        },
        "src/Options.js": {
          "format": "esm"
        },
        "src/WebPageTranscoder.js": {
          "format": "esm"
        },
        "src/browser/*": {
          "format": "esm"
        },
        "src/codegeneration/*": {
          "format": "esm"
        },
        "src/compiler-imports.js": {
          "format": "esm"
        },
        "src/loader/InlineLoaderCompiler.js": {
          "format": "esm"
        },
        "src/loader/InternalLoader.js": {
          "format": "esm"
        },
        "src/loader/Loader.js": {
          "format": "esm"
        },
        "src/loader/LoaderCompiler.js": {
          "format": "esm"
        },
        "src/loader/ModuleStore.js": {
          "format": "esm"
        },
        "src/loader/NodeTraceurLoader.js": {
          "format": "esm"
        },
        "src/loader/TraceurLoader.js": {
          "format": "esm"
        },
        "src/loader/loader-imports.js": {
          "format": "esm"
        },
        "src/loader/system-map.js": {
          "format": "esm"
        },
        "src/loader/version.js": {
          "format": "esm"
        },
        "src/loader/webLoader.js": {
          "format": "esm"
        },
        "src/node/NodeCompiler.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        },
        "src/node/NodeLoaderCompiler.js": {
          "format": "esm"
        },
        "src/node/get-dependencies.js": {
          "format": "esm"
        },
        "src/outputgeneration/ParseTreeMapWriter.js": {
          "format": "esm"
        },
        "src/outputgeneration/ParseTreeWriter.js": {
          "format": "esm"
        },
        "src/outputgeneration/SourceMapIntegration.js": {
          "format": "esm"
        },
        "src/outputgeneration/SourceMapIntegration.js-template": {
          "format": "esm"
        },
        "src/outputgeneration/TreeWriter.js": {
          "format": "esm"
        },
        "src/outputgeneration/regexpuRewritePattern.js": {
          "format": "esm"
        },
        "src/outputgeneration/toSource.js": {
          "format": "esm"
        },
        "src/runtime/async.js": {
          "format": "esm"
        },
        "src/runtime/checkObjectCoercible.js": {
          "format": "esm"
        },
        "src/runtime/classes.js": {
          "format": "esm"
        },
        "src/runtime/destructuring.js": {
          "format": "esm"
        },
        "src/runtime/exportStar.js": {
          "format": "esm"
        },
        "src/runtime/frozen-data.js": {
          "format": "esm"
        },
        "src/runtime/generators.js": {
          "format": "esm"
        },
        "src/runtime/global-imports.js": {
          "format": "esm"
        },
        "src/runtime/has-native-symbols.js": {
          "format": "esm"
        },
        "src/runtime/jsx.js": {
          "format": "esm"
        },
        "src/runtime/modules/*": {
          "format": "esm"
        },
        "src/runtime/new-unique-string.js": {
          "format": "esm"
        },
        "src/runtime/polyfills-imports.js": {
          "format": "esm"
        },
        "src/runtime/polyfills/*": {
          "format": "esm"
        },
        "src/runtime/private-symbol.js": {
          "format": "esm"
        },
        "src/runtime/private-weak-map.js": {
          "format": "esm"
        },
        "src/runtime/private.js": {
          "format": "esm"
        },
        "src/runtime/properTailCalls.js": {
          "format": "esm"
        },
        "src/runtime/runtime-modules.js": {
          "format": "esm"
        },
        "src/runtime/spread.js": {
          "format": "esm"
        },
        "src/runtime/symbols.js": {
          "format": "esm"
        },
        "src/runtime/template.js": {
          "format": "esm"
        },
        "src/semantics/*": {
          "format": "esm"
        },
        "src/staticsemantics/*": {
          "format": "esm"
        },
        "src/syntax/IdentifierToken.js": {
          "format": "esm"
        },
        "src/syntax/JsxIdentifierToken.js": {
          "format": "esm"
        },
        "src/syntax/KeywordToken.js": {
          "format": "esm"
        },
        "src/syntax/Keywords.js": {
          "format": "esm"
        },
        "src/syntax/LineNumberTable.js": {
          "format": "esm"
        },
        "src/syntax/LiteralToken.js": {
          "format": "esm"
        },
        "src/syntax/ParseTreeValidator.js": {
          "format": "esm"
        },
        "src/syntax/ParseTreeVisitor.js": {
          "format": "esm"
        },
        "src/syntax/Parser.js": {
          "format": "esm"
        },
        "src/syntax/PredefinedName.js": {
          "format": "esm"
        },
        "src/syntax/Scanner.js": {
          "format": "esm"
        },
        "src/syntax/SourceFile.js": {
          "format": "esm"
        },
        "src/syntax/Token.js": {
          "format": "esm"
        },
        "src/syntax/TokenType.js": {
          "format": "esm"
        },
        "src/syntax/trees/ParseTree.js": {
          "format": "esm"
        },
        "src/syntax/trees/ParseTreeType.js": {
          "format": "esm"
        },
        "src/syntax/trees/ParseTrees.js": {
          "format": "esm"
        },
        "src/syntax/trees/StateMachine.js": {
          "format": "esm"
        },
        "src/syntax/unicode-tables.js": {
          "format": "esm"
        },
        "src/traceur-import.js": {
          "format": "esm"
        },
        "src/traceur.js": {
          "format": "esm"
        },
        "src/util-imports.js": {
          "format": "esm"
        },
        "src/util/*": {
          "format": "esm"
        }
      },
      "main": "src/node/api.js",
      "format": "cjs"
    },
    "nm:traceur/node_modules/semver": {
      "map": {
        "./semver.js": {
          "browser": "./semver.browser.js"
        },
        "./test": "./test/index.js"
      },
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "semver.js",
      "format": "cjs"
    },
    "nm:tunnel-agent": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        },
        "index.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:tweetnacl": {
      "map": {
        "buffer": {
          "browser": "@empty"
        },
        "crypto": {
          "browser": "@empty"
        }
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "nacl-fast.js",
      "format": "cjs"
    },
    "nm:typestyle": {
      "map": {
        "./lib": "./lib/index.js"
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib.es2015/index.js": {
          "format": "esm"
        },
        "lib.es2015/internal/*": {
          "format": "esm"
        }
      },
      "main": "lib/index.js",
      "format": "cjs"
    },
    "nm:util-deprecate": {
      "map": {
        "./node.js": {
          "browser": "./browser.js"
        }
      },
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "node.js",
      "format": "cjs"
    },
    "nm:uuid": {
      "map": {
        "./lib/rng.js": {
          "browser": "./lib/rng-browser.js"
        },
        "./lib/sha1.js": {
          "browser": "./lib/sha1-browser.js"
        }
      },
      "meta": {
        "*.json": {
          "format": "json"
        },
        "lib/sha1.js": {
          "globals": {
            "Buffer": "buffer/global"
          }
        }
      },
      "main": "index.js",
      "format": "cjs"
    },
    "nm:verror": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "lib/verror.js",
      "format": "cjs"
    },
    "nm:which": {
      "meta": {
        "*": {
          "globals": {
            "process": "process"
          }
        },
        "*.json": {
          "format": "json"
        }
      },
      "main": "which.js",
      "format": "cjs"
    },
    "nm:wrappy": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "wrappy.js",
      "format": "cjs"
    },
    "nm:xtend": {
      "meta": {
        "*.json": {
          "format": "json"
        }
      },
      "main": "immutable.js",
      "format": "cjs"
    }
  },
  "paths": {
    "nm:": "node_modules/"
  }
}