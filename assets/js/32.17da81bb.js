(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{462:function(t,e,s){"use strict";s.r(e);var a=s(43),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"code-generation-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-generation-design"}},[t._v("#")]),t._v(" Code generation design")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#safe-code-generation"}},[t._v("Safe code generation")])]),s("li",[s("a",{attrs:{href:"#code-optimization"}},[t._v("Code optimization")])]),s("li",[s("a",{attrs:{href:"#user-defined-keywords"}},[t._v("User-defined keywords")])])])]),s("p"),t._v(" "),s("p",[t._v("Starting from v7 Ajv uses "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/lib/compile/codegen/index.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("CodeGen module"),s("OutboundLink")],1),t._v(" that replaced "),s("a",{attrs:{href:"https://github.com/olado/dot",target:"_blank",rel:"noopener noreferrer"}},[t._v("doT"),s("OutboundLink")],1),t._v(" templates used earlier.")]),t._v(" "),s("p",[t._v("The motivations for this change:")]),t._v(" "),s("ul",[s("li",[t._v("doT templates were difficult to maintain and to change, particularly for the occasional contributors.")]),t._v(" "),s("li",[t._v("they discouraged modularity within validation keywords code and also led to implicit dependencies between different parts of code.")]),t._v(" "),s("li",[t._v("they had risks of remote code execution in case untrusted schemas were used, even though all identified issues were patched.")]),t._v(" "),s("li",[t._v("ES6 template literals that are now widely supported offer a great alternative to both ASTs and to plain string concatenation - this option was not available when Ajv started.")])]),t._v(" "),s("h2",{attrs:{id:"safe-code-generation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#safe-code-generation"}},[t._v("#")]),t._v(" Safe code generation")]),t._v(" "),s("p",[t._v("CodeGen module defines two tagged templates that should be passed to all code generation methods and used in other tagged templates:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("_")]),t._v(" - to create instances of private _Code class that will not be escaped when used in code or other tagged templates.")]),t._v(" "),s("li",[s("code",[t._v("str")]),t._v(" - to create code for string expressions.")])]),t._v(" "),s("p",[t._v("For example, this code:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Name is a subclass of _Code that can be safely used in code - it only allows valid identifiers")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// gen.const creates a unique variable name with the prefix "num".')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("const")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"num"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// _`...` returns the instance of _Code with safe interpolation of `num` and `x`.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if `x` was a string, it would be inserted into code as a quoted string value rather than as a code fragment,")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// so if `x` contained some code, it would not be executed.")]),t._v("\n  _"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" > ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"greater"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smaller or equal"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("comparison"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// msg creates a string expression with concatenation - see generated code below")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type Code = _Code | Name, _Code can only be constructed with template literals")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" is ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("comparison"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" than ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// msg is _Code instance, so it will be inserted via another template without quotes")]),t._v("\n  gen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("code")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("console.log(")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("generates this javascript code:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" is greater than 0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" is smaller or equal than 0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v(".const")]),t._v(", "),s("code",[t._v(".if")]),t._v(" and "),s("code",[t._v(".code")]),t._v(" above are methods of CodeGen class that generate code inside class instance "),s("code",[t._v("gen")]),t._v(" - see "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/lib/compile/codegen/index.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("source code"),s("OutboundLink")],1),t._v(" for all available methods and "),s("a",{attrs:{href:"../spec/codegen.spec.ts"}},[t._v("tests")]),t._v(" for other code generation examples.")]),t._v(" "),s("p",[t._v("These methods only accept instances of private class "),s("code",[t._v("_Code")]),t._v(", other values will be rejected by Typescript compiler - the risk to pass unsafe string is mitigated on type level.")]),t._v(" "),s("p",[t._v("If a string variable were used in "),s("code",[t._v("_")]),t._v(" template literal, its value would be safely wrapped in quotes - in many cases it is quite useful, as it allows to inject values that can be either string or number via the same template. In the worst case, the generated code could be invalid, but it will prevent the risk of code execution that attacker could pass via untrusted schema as a string value that should be inserted in code (e.g., instead of a number). Also see the comment in the example.")]),t._v(" "),s("h2",{attrs:{id:"code-optimization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-optimization"}},[t._v("#")]),t._v(" Code optimization")]),t._v(" "),s("p",[t._v("CodeGen class generates code trees and performs several optimizations before the code is rendered:")]),t._v(" "),s("ol",[s("li",[t._v("removes empty and unreachable branches (e.g. "),s("code",[t._v("else")]),t._v(" branch after "),s("code",[t._v("if(true)")]),t._v(", etc.).")]),t._v(" "),s("li",[t._v("removes unused variable declarations.")]),t._v(" "),s("li",[t._v('replaces variables that are used only once and assigned expressions that are explicitly marked as "constant" (i.e. having referential transparency) with the expressions themselves.')])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Optimizations assume no side effects")]),t._v(" "),s("p",[t._v("These optimizations assume that the expressions in "),s("code",[t._v("if")]),t._v(" conditions, "),s("code",[t._v("for")]),t._v(" statement headers and assigned expressions are free of any side effects - this is the case for all pre-defined validation keywords.")])]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"../spec/codegen.spec.ts"}},[t._v("these tests")]),t._v(" for examples.")]),t._v(" "),s("p",[t._v("By default Ajv does 1-pass optimization - based on the test suite it reduces the code size by 10.5% and the number of tree nodes by 16.7% (TODO benchmark the validation time). The second optimization pass changes it by less than 0.1%, so you won't need it unless you have really complex schemas or if you generate standalone code and want it to pass relevant eslint rules.")]),t._v(" "),s("p",[t._v("Optimization mode can be changed with "),s("RouterLink",{attrs:{to:"/api.html#options"}},[t._v("options")]),t._v(":")],1),t._v(" "),s("ul",[s("li",[s("code",[t._v("{code: {optimize: false}}")]),t._v(" - to disable (e.g., when schema compilation time is more important),")]),t._v(" "),s("li",[s("code",[t._v("{code: {optimize: 2}}")]),t._v(" - 2-pass optimization.")])]),t._v(" "),s("h2",{attrs:{id:"user-defined-keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-keywords"}},[t._v("#")]),t._v(" User-defined keywords")]),t._v(" "),s("p",[t._v("While tagged template literals wrap passed strings based on their run-time values, CodeGen class methods rely on types to ensure safety of passed parameters - there is no run-time checks that the passed value is an instance of _Code class.")]),t._v(" "),s("p",[t._v("It is strongly recommended to define additional keywords only with Typescript - using plain JavaScript would still allow passing unsafe strings to code generation methods.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Optimization and side-effects")]),t._v(" "),s("p",[t._v("If your user-defined keywords need to have side-effects that are removed by optimization (see above), you may need to disable it.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);