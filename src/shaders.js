var SHADERS = {"tileplane":{"src":{"vertex":"\nprecision mediump float;\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vTexCoord = aTexCoord;\n}\n","fragment":"\nprecision mediump float;\nuniform sampler2D uTileImage;\nvarying vec2 vTexCoord;\nvoid main() {\n  vec4 texel = texture2D(uTileImage, vec2(vTexCoord.x, -vTexCoord.y));\n  gl_FragColor = texel;\n}\n"},"attributes":["aPosition","aTexCoord"],"uniforms":["uMatrix","uTileImage"]}};
