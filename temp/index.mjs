var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : false ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* globals module */

var global_scope =
  // eslint-disable-next-line no-undef
  (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.Math === Math) ? commonjsGlobal :
  (typeof self !== 'undefined' && self.Math === Math) ? self : {};

/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ReadableStream_1;
/* eslint-disable no-restricted-globals */

let isReadableStreamSupported = false;
{
  // MS Edge may say it has ReadableStream but they are not up to spec yet.
  try {
    // eslint-disable-next-line no-new
    new ReadableStream({
      start(controller) {
        controller.close();
      },
    });
    isReadableStreamSupported = true;
  } catch (e) {
    // The ReadableStream constructor cannot be used.
  }
}
{
  ReadableStream_1 = ReadableStream;
}

/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var URL_1;
/* eslint-disable no-restricted-globals */

{
  let isURLSupported = false;
  try {
    if (false && typeof URL.prototype === 'object' &&
        ('origin' in URL.prototype)) ;
  } catch (ex) {
    // The `URL` constructor cannot be used.
  }

  {
    URL_1 = URL;
  }
}

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];

const NativeImageDecoding = {
  NONE: 'none',
  DECODE: 'decode',
  DISPLAY: 'display',
};

// Permission flags from Table 22, Section 7.6.3.2 of the PDF specification.
const PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800,
};

const TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4,
};

const ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3,
};

const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26,
};

const AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200,
};

const AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000,
};

const AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5,
};

const StreamType = {
  UNKNOWN: 0,
  FLATE: 1,
  LZW: 2,
  DCT: 3,
  JPX: 4,
  JBIG: 5,
  A85: 6,
  AHX: 7,
  CCF: 8,
  RL: 9,
};

const FontType = {
  UNKNOWN: 0,
  TYPE1: 1,
  TYPE1C: 2,
  CIDFONTTYPE0: 3,
  CIDFONTTYPE0C: 4,
  TRUETYPE: 5,
  CIDFONTTYPE2: 6,
  TYPE3: 7,
  OPENTYPE: 8,
  TYPE0: 9,
  MMTYPE1: 10,
};

const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5,
};

const CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2,
};

// All the possible operations for an operator list.
const OPS = {
  // Intentionally start from 1 so it is easy to spot bad operators that will be
  // 0's.
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
};

const UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font',
};

const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2,
};

let verbosity = VerbosityLevel.WARNINGS;

function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}

function getVerbosityLevel() {
  return verbosity;
}

// A notice for devs. These are good for things that are helpful to devs, such
// as warning that Workers were disabled, which is important to devs but not
// end users.
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log('Info: ' + msg);
  }
}

// Non-fatal warnings.
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log('Warning: ' + msg);
  }
}

// Deprecated API function -- display regardless of the `verbosity` setting.
function deprecated(details) {
  console.log('Deprecated API usage: ' + details);
}

function unreachable(msg) {
  throw new Error(msg);
}

function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}

// Checks if URLs have the same origin. For non-HTTP based URLs, returns false.
function isSameOrigin(baseUrl, otherUrl) {
  try {
    var base = new URL_1(baseUrl);
    if (!base.origin || base.origin === 'null') {
      return false; // non-HTTP url
    }
  } catch (e) {
    return false;
  }

  var other = new URL_1(otherUrl, base);
  return base.origin === other.origin;
}

// Checks if URLs use one of the whitelisted protocols, e.g. to avoid XSS.
function _isValidProtocol(url) {
  if (!url) {
    return false;
  }
  switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return true;
    default:
      return false;
  }
}

/**
 * Attempts to create a valid absolute URL.
 *
 * @param {URL|string} url - An absolute, or relative, URL.
 * @param {URL|string} baseUrl - An absolute URL.
 * @returns Either a valid {URL}, or `null` otherwise.
 */
function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }
  try {
    var absoluteUrl = baseUrl ? new URL_1(url, baseUrl) : new URL_1(url);
    if (_isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) { /* `new URL()` will throw on incorrect data. */ }
  return null;
}

function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, { value,
                                     enumerable: true,
                                     configurable: true,
                                     writable: false, });
  return value;
}

function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}

var PasswordException = (function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }

  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;

  return PasswordException;
})();

var UnknownErrorException = (function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }

  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;

  return UnknownErrorException;
})();

var InvalidPDFException = (function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }

  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;

  return InvalidPDFException;
})();

var MissingPDFException = (function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }

  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;

  return MissingPDFException;
})();

var UnexpectedResponseException =
    (function UnexpectedResponseExceptionClosure() {
  function UnexpectedResponseException(msg, status) {
    this.name = 'UnexpectedResponseException';
    this.message = msg;
    this.status = status;
  }

  UnexpectedResponseException.prototype = new Error();
  UnexpectedResponseException.constructor = UnexpectedResponseException;

  return UnexpectedResponseException;
})();

var MissingDataException = (function MissingDataExceptionClosure() {
  function MissingDataException(begin, end) {
    this.begin = begin;
    this.end = end;
    this.message = 'Missing data [' + begin + ', ' + end + ')';
  }

  MissingDataException.prototype = new Error();
  MissingDataException.prototype.name = 'MissingDataException';
  MissingDataException.constructor = MissingDataException;

  return MissingDataException;
})();

var XRefParseException = (function XRefParseExceptionClosure() {
  function XRefParseException(msg) {
    this.message = msg;
  }

  XRefParseException.prototype = new Error();
  XRefParseException.prototype.name = 'XRefParseException';
  XRefParseException.constructor = XRefParseException;

  return XRefParseException;
})();

/**
 * Error caused during parsing PDF data.
 */
let FormatError = (function FormatErrorClosure() {
  function FormatError(msg) {
    this.message = msg;
  }

  FormatError.prototype = new Error();
  FormatError.prototype.name = 'FormatError';
  FormatError.constructor = FormatError;

  return FormatError;
})();

/**
 * Error used to indicate task cancellation.
 */
let AbortException = (function AbortExceptionClosure() {
  function AbortException(msg) {
    this.name = 'AbortException';
    this.message = msg;
  }

  AbortException.prototype = new Error();
  AbortException.constructor = AbortException;

  return AbortException;
})();

var NullCharactersRegExp = /\x00/g;

function removeNullCharacters(str) {
  if (typeof str !== 'string') {
    warn('The argument for removeNullCharacters must be a string.');
    return str;
  }
  return str.replace(NullCharactersRegExp, '');
}

function bytesToString(bytes) {
  assert(bytes !== null && typeof bytes === 'object' &&
         bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  var strBuf = [];
  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join('');
}

function stringToBytes(str) {
  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
  var length = str.length;
  var bytes = new Uint8Array(length);
  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xFF;
  }
  return bytes;
}

/**
 * Gets length of the array (Array, Uint8Array, or string) in bytes.
 * @param {Array|Uint8Array|string} arr
 * @returns {number}
 */
function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }
  assert(arr.byteLength !== undefined);
  return arr.byteLength;
}

/**
 * Combines array items (arrays) into single Uint8Array object.
 * @param {Array} arr - the array of the arrays (Array, Uint8Array, or string).
 * @returns {Uint8Array}
 */
function arraysToBytes(arr) {
  // Shortcut: if first and only item is Uint8Array, return it.
  if (arr.length === 1 && (arr[0] instanceof Uint8Array)) {
    return arr[0];
  }
  var resultLength = 0;
  var i, ii = arr.length;
  var item, itemLength;
  for (i = 0; i < ii; i++) {
    item = arr[i];
    itemLength = arrayByteLength(item);
    resultLength += itemLength;
  }
  var pos = 0;
  var data = new Uint8Array(resultLength);
  for (i = 0; i < ii; i++) {
    item = arr[i];
    if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }
    itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }
  return data;
}

function string32(value) {
  return String.fromCharCode((value >> 24) & 0xff, (value >> 16) & 0xff,
                             (value >> 8) & 0xff, value & 0xff);
}

// Calculate the base 2 logarithm of the number `x`. This differs from the
// native function in the sense that it returns the ceiling value and that it
// returns 0 instead of `Infinity`/`NaN` for `x` values smaller than/equal to 0.
function log2(x) {
  if (x <= 0) {
    return 0;
  }
  return Math.ceil(Math.log2(x));
}

function readInt8(data, start) {
  return (data[start] << 24) >> 24;
}

function readUint16(data, offset) {
  return (data[offset] << 8) | data[offset + 1];
}

function readUint32(data, offset) {
  return ((data[offset] << 24) | (data[offset + 1] << 16) |
         (data[offset + 2] << 8) | data[offset + 3]) >>> 0;
}

// Lazy test the endianness of the platform
// NOTE: This will be 'true' for simulated TypedArrays
function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return (view32[0] === 1);
}

// Checks if it's possible to eval JS expressions.
function isEvalSupported() {
  try {
    new Function(''); // eslint-disable-line no-new, no-new-func
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Get the value of an inheritable property.
 *
 * If the PDF specification explicitly lists a property in a dictionary as
 * inheritable, then the value of the property may be present in the dictionary
 * itself or in one or more parents of the dictionary.
 *
 * If the key is not found in the tree, `undefined` is returned. Otherwise,
 * the value for the key is returned or, if `stopWhenFound` is `false`, a list
 * of values is returned. To avoid infinite loops, the traversal is stopped when
 * the loop limit is reached.
 *
 * @param {Dict} dict - Dictionary from where to start the traversal.
 * @param {string} key - The key of the property to find the value for.
 * @param {boolean} getArray - Whether or not the value should be fetched as an
 *   array. The default value is `false`.
 * @param {boolean} stopWhenFound - Whether or not to stop the traversal when
 *   the key is found. If set to `false`, we always walk up the entire parent
 *   chain, for example to be able to find `\Resources` placed on multiple
 *   levels of the tree. The default value is `true`.
 */
function getInheritableProperty({ dict, key, getArray = false,
                                  stopWhenFound = true, }) {
  const LOOP_LIMIT = 100;
  let loopCount = 0;
  let values;

  while (dict) {
    const value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      if (!values) {
        values = [];
      }
      values.push(value);
    }
    if (++loopCount > LOOP_LIMIT) {
      warn(`getInheritableProperty: maximum loop count exceeded for "${key}"`);
      break;
    }
    dict = dict.get('Parent');
  }
  return values;
}

var Util = (function UtilClosure() {
  function Util() {}

  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];

  // makeCssRgb() can be called thousands of times. Using |rgbBuf| avoids
  // creating many intermediate strings.
  Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
    rgbBuf[1] = r;
    rgbBuf[3] = g;
    rgbBuf[5] = b;
    return rgbBuf.join('');
  };

  // Concatenates two transformation matrices together and returns the result.
  Util.transform = function Util_transform(m1, m2) {
    return [
      m1[0] * m2[0] + m1[2] * m2[1],
      m1[1] * m2[0] + m1[3] * m2[1],
      m1[0] * m2[2] + m1[2] * m2[3],
      m1[1] * m2[2] + m1[3] * m2[3],
      m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
      m1[1] * m2[4] + m1[3] * m2[5] + m1[5]
    ];
  };

  // For 2d affine transforms
  Util.applyTransform = function Util_applyTransform(p, m) {
    var xt = p[0] * m[0] + p[1] * m[2] + m[4];
    var yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  };

  Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
    var d = m[0] * m[3] - m[1] * m[2];
    var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  };

  // Applies the transform to the rectangle and finds the minimum axially
  // aligned bounding box.
  Util.getAxialAlignedBoundingBox =
    function Util_getAxialAlignedBoundingBox(r, m) {

    var p1 = Util.applyTransform(r, m);
    var p2 = Util.applyTransform(r.slice(2, 4), m);
    var p3 = Util.applyTransform([r[0], r[3]], m);
    var p4 = Util.applyTransform([r[2], r[1]], m);
    return [
      Math.min(p1[0], p2[0], p3[0], p4[0]),
      Math.min(p1[1], p2[1], p3[1], p4[1]),
      Math.max(p1[0], p2[0], p3[0], p4[0]),
      Math.max(p1[1], p2[1], p3[1], p4[1])
    ];
  };

  Util.inverseTransform = function Util_inverseTransform(m) {
    var d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d,
      (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  };

  // Apply a generic 3d matrix M on a 3-vector v:
  //   | a b c |   | X |
  //   | d e f | x | Y |
  //   | g h i |   | Z |
  // M is assumed to be serialized as [a,b,c,d,e,f,g,h,i],
  // with v as [X,Y,Z]
  Util.apply3dTransform = function Util_apply3dTransform(m, v) {
    return [
      m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
      m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
      m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
    ];
  };

  // This calculation uses Singular Value Decomposition.
  // The SVD can be represented with formula A = USV. We are interested in the
  // matrix S here because it represents the scale values.
  Util.singularValueDecompose2dScale =
    function Util_singularValueDecompose2dScale(m) {

    var transpose = [m[0], m[2], m[1], m[3]];

    // Multiply matrix m with its transpose.
    var a = m[0] * transpose[0] + m[1] * transpose[2];
    var b = m[0] * transpose[1] + m[1] * transpose[3];
    var c = m[2] * transpose[0] + m[3] * transpose[2];
    var d = m[2] * transpose[1] + m[3] * transpose[3];

    // Solve the second degree polynomial to get roots.
    var first = (a + d) / 2;
    var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
    var sx = first + second || 1;
    var sy = first - second || 1;

    // Scale values are the square roots of the eigenvalues.
    return [Math.sqrt(sx), Math.sqrt(sy)];
  };

  // Normalize rectangle rect=[x1, y1, x2, y2] so that (x1,y1) < (x2,y2)
  // For coordinate systems whose origin lies in the bottom-left, this
  // means normalization to (BL,TR) ordering. For systems with origin in the
  // top-left, this means (TL,BR) ordering.
  Util.normalizeRect = function Util_normalizeRect(rect) {
    var r = rect.slice(0); // clone rect
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  };

  // Returns a rectangle [x1, y1, x2, y2] corresponding to the
  // intersection of rect1 and rect2. If no intersection, returns 'false'
  // The rectangle coordinates of rect1, rect2 should be [x1, y1, x2, y2]
  Util.intersect = function Util_intersect(rect1, rect2) {
    function compare(a, b) {
      return a - b;
    }

    // Order points along the axes
    var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
        orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
        result = [];

    rect1 = Util.normalizeRect(rect1);
    rect2 = Util.normalizeRect(rect2);

    // X: first and second points belong to different rectangles?
    if ((orderedX[0] === rect1[0] && orderedX[1] === rect2[0]) ||
        (orderedX[0] === rect2[0] && orderedX[1] === rect1[0])) {
      // Intersection must be between second and third points
      result[0] = orderedX[1];
      result[2] = orderedX[2];
    } else {
      return false;
    }

    // Y: first and second points belong to different rectangles?
    if ((orderedY[0] === rect1[1] && orderedY[1] === rect2[1]) ||
        (orderedY[0] === rect2[1] && orderedY[1] === rect1[1])) {
      // Intersection must be between second and third points
      result[1] = orderedY[1];
      result[3] = orderedY[2];
    } else {
      return false;
    }

    return result;
  };

  return Util;
})();

const ROMAN_NUMBER_MAP = [
  '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
  '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
  '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'
];

/**
 * Converts positive integers to (upper case) Roman numerals.
 * @param {integer} number - The number that should be converted.
 * @param {boolean} lowerCase - Indicates if the result should be converted
 *   to lower case letters. The default value is `false`.
 * @return {string} The resulting Roman number.
 */
function toRomanNumerals(number, lowerCase = false) {
  assert(Number.isInteger(number) && number > 0,
         'The number should be a positive integer.');
  let pos, romanBuf = [];
  // Thousands
  while (number >= 1000) {
    number -= 1000;
    romanBuf.push('M');
  }
  // Hundreds
  pos = (number / 100) | 0;
  number %= 100;
  romanBuf.push(ROMAN_NUMBER_MAP[pos]);
  // Tens
  pos = (number / 10) | 0;
  number %= 10;
  romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
  // Ones
  romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);

  const romanStr = romanBuf.join('');
  return (lowerCase ? romanStr.toLowerCase() : romanStr);
}

const PDFStringTranslateTable = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014,
  0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C,
  0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160,
  0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC
];

function stringToPDFString(str) {
  var i, n = str.length, strBuf = [];
  if (str[0] === '\xFE' && str[1] === '\xFF') {
    // UTF16BE BOM
    for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(
        (str.charCodeAt(i) << 8) | str.charCodeAt(i + 1)));
    }
  } else {
    for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
    }
  }
  return strBuf.join('');
}

function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}

function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}

function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

function isBool(v) {
  return typeof v === 'boolean';
}

function isNum(v) {
  return typeof v === 'number';
}

function isString(v) {
  return typeof v === 'string';
}

function isArrayBuffer(v) {
  return typeof v === 'object' && v !== null && v.byteLength !== undefined;
}

// Checks if ch is one of the following characters: SPACE, TAB, CR or LF.
function isSpace(ch) {
  return (ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A);
}

/**
 * Promise Capability object.
 *
 * @typedef {Object} PromiseCapability
 * @property {Promise} promise - A promise object.
 * @property {function} resolve - Fulfills the promise.
 * @property {function} reject - Rejects the promise.
 */

/**
 * Creates a promise capability object.
 * @alias createPromiseCapability
 *
 * @return {PromiseCapability} A capability object contains:
 * - a Promise, resolve and reject methods.
 */
function createPromiseCapability() {
  var capability = {};
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = resolve;
    capability.reject = reject;
  });
  return capability;
}

var createObjectURL = (function createObjectURLClosure() {
  // Blob/createObjectURL is not available, falling back to data schema.
  var digits =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  return function createObjectURL(data, contentType, forceDataSchema = false) {
    if (!forceDataSchema && URL_1.createObjectURL) {
      const blob = new Blob([data], { type: contentType, });
      return URL_1.createObjectURL(blob);
    }

    var buffer = 'data:' + contentType + ';base64,';
    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2, d2 = ((b1 & 3) << 4) | (b2 >> 4);
      var d3 = i + 1 < ii ? ((b2 & 0xF) << 2) | (b3 >> 6) : 64;
      var d4 = i + 2 < ii ? (b3 & 0x3F) : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }
    return buffer;
  };
})();

var util = /*#__PURE__*/Object.freeze({
	__proto__: null,
	FONT_IDENTITY_MATRIX: FONT_IDENTITY_MATRIX,
	IDENTITY_MATRIX: IDENTITY_MATRIX,
	OPS: OPS,
	VerbosityLevel: VerbosityLevel,
	UNSUPPORTED_FEATURES: UNSUPPORTED_FEATURES,
	AnnotationBorderStyleType: AnnotationBorderStyleType,
	AnnotationFieldFlag: AnnotationFieldFlag,
	AnnotationFlag: AnnotationFlag,
	AnnotationType: AnnotationType,
	FontType: FontType,
	ImageKind: ImageKind,
	CMapCompressionType: CMapCompressionType,
	AbortException: AbortException,
	InvalidPDFException: InvalidPDFException,
	MissingDataException: MissingDataException,
	MissingPDFException: MissingPDFException,
	NativeImageDecoding: NativeImageDecoding,
	PasswordException: PasswordException,
	PasswordResponses: PasswordResponses,
	PermissionFlag: PermissionFlag,
	StreamType: StreamType,
	TextRenderingMode: TextRenderingMode,
	UnexpectedResponseException: UnexpectedResponseException,
	UnknownErrorException: UnknownErrorException,
	Util: Util,
	toRomanNumerals: toRomanNumerals,
	XRefParseException: XRefParseException,
	FormatError: FormatError,
	arrayByteLength: arrayByteLength,
	arraysToBytes: arraysToBytes,
	assert: assert,
	bytesToString: bytesToString,
	createPromiseCapability: createPromiseCapability,
	createObjectURL: createObjectURL,
	deprecated: deprecated,
	getInheritableProperty: getInheritableProperty,
	getLookupTableFactory: getLookupTableFactory,
	getVerbosityLevel: getVerbosityLevel,
	info: info,
	isArrayBuffer: isArrayBuffer,
	isBool: isBool,
	isEmptyObj: isEmptyObj,
	isNum: isNum,
	isString: isString,
	isSpace: isSpace,
	isSameOrigin: isSameOrigin,
	createValidAbsoluteUrl: createValidAbsoluteUrl,
	isLittleEndian: isLittleEndian,
	isEvalSupported: isEvalSupported,
	log2: log2,
	readInt8: readInt8,
	readUint16: readUint16,
	readUint32: readUint32,
	removeNullCharacters: removeNullCharacters,
	get ReadableStream () { return ReadableStream_1; },
	get URL () { return URL_1; },
	setVerbosityLevel: setVerbosityLevel,
	shadow: shadow,
	string32: string32,
	stringToBytes: stringToBytes,
	stringToPDFString: stringToPDFString,
	stringToUTF8String: stringToUTF8String,
	utf8StringToString: utf8StringToString,
	warn: warn,
	unreachable: unreachable
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(util);

/* Copyright 2015 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_LINK_REL = 'noopener noreferrer nofollow';
const SVG_NS = 'http://www.w3.org/2000/svg';

class DOMCanvasFactory {
  create(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error('invalid canvas size');
    }
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    return {
      canvas,
      context,
    };
  }

  reset(canvasAndContext, width, height) {
    if (!canvasAndContext.canvas) {
      throw new Error('canvas is not specified');
    }
    if (width <= 0 || height <= 0) {
      throw new Error('invalid canvas size');
    }
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  }

  destroy(canvasAndContext) {
    if (!canvasAndContext.canvas) {
      throw new Error('canvas is not specified');
    }
    // Zeroing the width and height cause Firefox to release graphics
    // resources immediately, which can greatly reduce memory consumption.
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  }
}

class DOMCMapReaderFactory {
  constructor({ baseUrl = null, isCompressed = false, }) {
    this.baseUrl = baseUrl;
    this.isCompressed = isCompressed;
  }

  fetch({ name, }) {
    if (!this.baseUrl) {
      return Promise.reject(new Error(
        'The CMap "baseUrl" parameter must be specified, ensure that ' +
        'the "cMapUrl" and "cMapPacked" API parameters are provided.'));
    }
    if (!name) {
      return Promise.reject(new Error('CMap name must be specified.'));
    }
    return new Promise((resolve, reject) => {
      let url = this.baseUrl + name + (this.isCompressed ? '.bcmap' : '');

      let request = new XMLHttpRequest();
      request.open('GET', url, true);

      if (this.isCompressed) {
        request.responseType = 'arraybuffer';
      }
      request.onreadystatechange = () => {
        if (request.readyState !== XMLHttpRequest.DONE) {
          return;
        }
        if (request.status === 200 || request.status === 0) {
          let data;
          if (this.isCompressed && request.response) {
            data = new Uint8Array(request.response);
          } else if (!this.isCompressed && request.responseText) {
            data = stringToBytes(request.responseText);
          }
          if (data) {
            resolve({
              cMapData: data,
              compressionType: this.isCompressed ?
                CMapCompressionType.BINARY : CMapCompressionType.NONE,
            });
            return;
          }
        }
        reject(new Error('Unable to load ' +
                         (this.isCompressed ? 'binary ' : '') +
                         'CMap at: ' + url));
      };

      request.send(null);
    });
  }
}

class DOMSVGFactory {
  create(width, height) {
    assert(width > 0 && height > 0, 'Invalid SVG dimensions');

    let svg = document.createElementNS(SVG_NS, 'svg:svg');
    svg.setAttribute('version', '1.1');
    svg.setAttribute('width', width + 'px');
    svg.setAttribute('height', height + 'px');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

    return svg;
  }

  createElement(type) {
    assert(typeof type === 'string', 'Invalid SVG element type');

    return document.createElementNS(SVG_NS, type);
  }
}

/**
 * @typedef {Object} PageViewportParameters
 * @property {Array} viewBox - The xMin, yMin, xMax and yMax coordinates.
 * @property {number} scale - The scale of the viewport.
 * @property {number} rotation - The rotation, in degrees, of the viewport.
 * @property {number} offsetX - (optional) The vertical, i.e. x-axis, offset.
 *   The default value is `0`.
 * @property {number} offsetY - (optional) The horizontal, i.e. y-axis, offset.
 *   The default value is `0`.
 * @property {boolean} dontFlip - (optional) If true, the x-axis will not be
 *   flipped. The default value is `false`.
 */

/**
 * @typedef {Object} PageViewportCloneParameters
 * @property {number} scale - (optional) The scale, overriding the one in the
 *   cloned viewport. The default value is `this.scale`.
 * @property {number} rotation - (optional) The rotation, in degrees, overriding
 *   the one in the cloned viewport. The default value is `this.rotation`.
 * @property {boolean} dontFlip - (optional) If true, the x-axis will not be
 *   flipped. The default value is `false`.
 */

/**
 * PDF page viewport created based on scale, rotation and offset.
 */
class PageViewport {
  /**
   * @param {PageViewportParameters}
   */
  constructor({ viewBox, scale, rotation, offsetX = 0, offsetY = 0,
                dontFlip = false, }) {
    this.viewBox = viewBox;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;

    // creating transform to convert pdf coordinate system to the normal
    // canvas like coordinates taking in account scale and rotation
    let centerX = (viewBox[2] + viewBox[0]) / 2;
    let centerY = (viewBox[3] + viewBox[1]) / 2;
    let rotateA, rotateB, rotateC, rotateD;
    rotation = rotation % 360;
    rotation = rotation < 0 ? rotation + 360 : rotation;
    switch (rotation) {
      case 180:
        rotateA = -1; rotateB = 0; rotateC = 0; rotateD = 1;
        break;
      case 90:
        rotateA = 0; rotateB = 1; rotateC = 1; rotateD = 0;
        break;
      case 270:
        rotateA = 0; rotateB = -1; rotateC = -1; rotateD = 0;
        break;
      // case 0:
      default:
        rotateA = 1; rotateB = 0; rotateC = 0; rotateD = -1;
        break;
    }

    if (dontFlip) {
      rotateC = -rotateC; rotateD = -rotateD;
    }

    let offsetCanvasX, offsetCanvasY;
    let width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = Math.abs(viewBox[3] - viewBox[1]) * scale;
      height = Math.abs(viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = Math.abs(viewBox[2] - viewBox[0]) * scale;
      height = Math.abs(viewBox[3] - viewBox[1]) * scale;
    }
    // creating transform for the following operations:
    // translate(-centerX, -centerY), rotate and flip vertically,
    // scale, and translate(offsetCanvasX, offsetCanvasY)
    this.transform = [
      rotateA * scale,
      rotateB * scale,
      rotateC * scale,
      rotateD * scale,
      offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY,
      offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY
    ];

    this.width = width;
    this.height = height;
  }

  /**
   * Clones viewport, with optional additional properties.
   * @param {PageViewportCloneParameters} - (optional)
   * @return {PageViewport} Cloned viewport.
   */
  clone({ scale = this.scale, rotation = this.rotation,
          dontFlip = false, } = {}) {
    return new PageViewport({
      viewBox: this.viewBox.slice(),
      scale,
      rotation,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      dontFlip,
    });
  }

  /**
   * Converts PDF point to the viewport coordinates. For examples, useful for
   * converting PDF location into canvas pixel coordinates.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @return {Object} Object containing `x` and `y` properties of the
   *   point in the viewport coordinate space.
   * @see {@link convertToPdfPoint}
   * @see {@link convertToViewportRectangle}
   */
  convertToViewportPoint(x, y) {
    return Util.applyTransform([x, y], this.transform);
  }

  /**
   * Converts PDF rectangle to the viewport coordinates.
   * @param {Array} rect - The xMin, yMin, xMax and yMax coordinates.
   * @return {Array} Array containing corresponding coordinates of the rectangle
   *   in the viewport coordinate space.
   * @see {@link convertToViewportPoint}
   */
  convertToViewportRectangle(rect) {
    let tl = Util.applyTransform([rect[0], rect[1]], this.transform);
    let br = Util.applyTransform([rect[2], rect[3]], this.transform);
    return [tl[0], tl[1], br[0], br[1]];
  }

  /**
   * Converts viewport coordinates to the PDF location. For examples, useful
   * for converting canvas pixel location into PDF one.
   * @param {number} x - The x-coordinate.
   * @param {number} y - The y-coordinate.
   * @return {Object} Object containing `x` and `y` properties of the
   *   point in the PDF coordinate space.
   * @see {@link convertToViewportPoint}
   */
  convertToPdfPoint(x, y) {
    return Util.applyInverseTransform([x, y], this.transform);
  }
}

var RenderingCancelledException = (function RenderingCancelledException() {
  function RenderingCancelledException(msg, type) {
    this.message = msg;
    this.type = type;
  }

  RenderingCancelledException.prototype = new Error();
  RenderingCancelledException.prototype.name = 'RenderingCancelledException';
  RenderingCancelledException.constructor = RenderingCancelledException;

  return RenderingCancelledException;
})();

const LinkTarget = {
  NONE: 0, // Default value.
  SELF: 1,
  BLANK: 2,
  PARENT: 3,
  TOP: 4,
};

const LinkTargetStringMap = [
  '',
  '_self',
  '_blank',
  '_parent',
  '_top'
];

/**
 * @typedef ExternalLinkParameters
 * @typedef {Object} ExternalLinkParameters
 * @property {string} url - An absolute URL.
 * @property {LinkTarget} target - (optional) The link target.
 *   The default value is `LinkTarget.NONE`.
 * @property {string} rel - (optional) The link relationship.
 *   The default value is `DEFAULT_LINK_REL`.
 */

/**
 * Adds various attributes (href, title, target, rel) to hyperlinks.
 * @param {HTMLLinkElement} link - The link element.
 * @param {ExternalLinkParameters} params
 */
function addLinkAttributes(link, { url, target, rel, } = {}) {
  link.href = link.title = (url ? removeNullCharacters(url) : '');

  if (url) {
    const LinkTargetValues = Object.values(LinkTarget);
    let targetIndex =
      LinkTargetValues.includes(target) ? target : LinkTarget.NONE;
    link.target = LinkTargetStringMap[targetIndex];

    link.rel = (typeof rel === 'string' ? rel : DEFAULT_LINK_REL);
  }
}

// Gets the file name from a given URL.
function getFilenameFromUrl(url) {
  var anchor = url.indexOf('#');
  var query = url.indexOf('?');
  var end = Math.min(
    anchor > 0 ? anchor : url.length,
    query > 0 ? query : url.length);
  return url.substring(url.lastIndexOf('/', end) + 1, end);
}

class StatTimer {
  constructor(enable = true) {
    this.enabled = !!enable;
    this.started = Object.create(null);
    this.times = [];
  }

  time(name) {
    if (!this.enabled) {
      return;
    }
    if (name in this.started) {
      warn('Timer is already running for ' + name);
    }
    this.started[name] = Date.now();
  }

  timeEnd(name) {
    if (!this.enabled) {
      return;
    }
    if (!(name in this.started)) {
      warn('Timer has not been started for ' + name);
    }
    this.times.push({
      'name': name,
      'start': this.started[name],
      'end': Date.now(),
    });
    // Remove timer from started so it can be called again.
    delete this.started[name];
  }

  toString() {
    let times = this.times;
    // Find the longest name for padding purposes.
    let out = '', longest = 0;
    for (let i = 0, ii = times.length; i < ii; ++i) {
      let name = times[i]['name'];
      if (name.length > longest) {
        longest = name.length;
      }
    }
    for (let i = 0, ii = times.length; i < ii; ++i) {
      let span = times[i];
      let duration = span.end - span.start;
      out += `${span['name'].padEnd(longest)} ${duration}ms\n`;
    }
    return out;
  }
}

/**
 * Helps avoid having to initialize {StatTimer} instances, e.g. one for every
 * page, in cases where the collected stats are not actually being used.
 * This (dummy) class can thus, since all its methods are `static`, be directly
 * shared between multiple call-sites without the need to be initialized first.
 *
 * NOTE: This must implement the same interface as {StatTimer}.
 */
class DummyStatTimer {
  constructor() {
    unreachable('Cannot initialize DummyStatTimer.');
  }

  static time(name) {}

  static timeEnd(name) {}

  static toString() {
    return '';
  }
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;

    script.onload = resolve;
    script.onerror = function() {
      reject(new Error(`Cannot load script at: ${script.src}`));
    };
    (document.head || document.documentElement).appendChild(script);
  });
}

var dom_utils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	PageViewport: PageViewport,
	RenderingCancelledException: RenderingCancelledException,
	addLinkAttributes: addLinkAttributes,
	getFilenameFromUrl: getFilenameFromUrl,
	LinkTarget: LinkTarget,
	DEFAULT_LINK_REL: DEFAULT_LINK_REL,
	DOMCanvasFactory: DOMCanvasFactory,
	DOMCMapReaderFactory: DOMCMapReaderFactory,
	DOMSVGFactory: DOMSVGFactory,
	StatTimer: StatTimer,
	DummyStatTimer: DummyStatTimer,
	loadScript: loadScript
});

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class BaseFontLoader {
  constructor(docId) {
    if (this.constructor === BaseFontLoader) {
      unreachable('Cannot initialize BaseFontLoader.');
    }
    this.docId = docId;

    this.nativeFontFaces = [];
    this.styleElement = null;
    this.loadingContext = {
      requests: [],
      nextRequestId: 0,
    };
  }

  addNativeFontFace(nativeFontFace) {
    this.nativeFontFaces.push(nativeFontFace);
    document.fonts.add(nativeFontFace);
  }

  insertRule(rule) {
    let styleElement = this.styleElement;
    if (!styleElement) {
      styleElement = this.styleElement = document.createElement('style');
      styleElement.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`;
      document.documentElement.getElementsByTagName('head')[0].appendChild(
        styleElement);
    }

    const styleSheet = styleElement.sheet;
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
  }

  clear() {
    this.nativeFontFaces.forEach(function(nativeFontFace) {
      document.fonts.delete(nativeFontFace);
    });
    this.nativeFontFaces.length = 0;

    if (this.styleElement) {
      // Note: ChildNode.remove doesn't throw if the parentNode is undefined.
      this.styleElement.remove();
      this.styleElement = null;
    }
  }

  bind(fonts, callback) {
    const rules = [];
    const fontsToLoad = [];
    const fontLoadPromises = [];
    const getNativeFontPromise = function(nativeFontFace) {
      // Return a promise that is always fulfilled, even when the font fails to
      // load.
      return nativeFontFace.loaded.catch(function(reason) {
        warn(`Failed to load font "${nativeFontFace.family}": ${reason}`);
      });
    };

    for (const font of fonts) {
      // Add the font to the DOM only once; skip if the font is already loaded.
      if (font.attached || font.missingFile) {
        continue;
      }
      font.attached = true;

      if (this.isFontLoadingAPISupported) {
        const nativeFontFace = font.createNativeFontFace();
        if (nativeFontFace) {
          this.addNativeFontFace(nativeFontFace);
          fontLoadPromises.push(getNativeFontPromise(nativeFontFace));
        }
      } else {
        const rule = font.createFontFaceRule();
        if (rule) {
          this.insertRule(rule);
          rules.push(rule);
          fontsToLoad.push(font);
        }
      }
    }

    const request = this._queueLoadingCallback(callback);
    if (this.isFontLoadingAPISupported) {
      Promise.all(fontLoadPromises).then(request.complete);
    } else if (rules.length > 0 && !this.isSyncFontLoadingSupported) {
      this._prepareFontLoadEvent(rules, fontsToLoad, request);
    } else {
      request.complete();
    }
  }

  _queueLoadingCallback(callback) {
    function completeRequest() {
      assert(!request.done, 'completeRequest() cannot be called twice.');
      request.done = true;

      // Sending all completed requests in order of how they were queued.
      while (context.requests.length > 0 && context.requests[0].done) {
        const otherRequest = context.requests.shift();
        setTimeout(otherRequest.callback, 0);
      }
    }

    const context = this.loadingContext;
    const request = {
      id: `pdfjs-font-loading-${context.nextRequestId++}`,
      done: false,
      complete: completeRequest,
      callback,
    };
    context.requests.push(request);
    return request;
  }

  get isFontLoadingAPISupported() {
    unreachable('Abstract method `isFontLoadingAPISupported`.');
  }

  get isSyncFontLoadingSupported() {
    unreachable('Abstract method `isSyncFontLoadingSupported`.');
  }

  get _loadTestFont() {
    unreachable('Abstract method `_loadTestFont`.');
  }

  _prepareFontLoadEvent(rules, fontsToLoad, request) {
    unreachable('Abstract method `_prepareFontLoadEvent`.');
  }
}

let FontLoader;
{

FontLoader = class MozcentralFontLoader extends BaseFontLoader {
  get isFontLoadingAPISupported() {
    return shadow(this, 'isFontLoadingAPISupported',
                  false );
  }

  get isSyncFontLoadingSupported() {
    return shadow(this, 'isSyncFontLoadingSupported', true);
  }
};

} // End of PDFJSDev.test('CHROME || GENERIC')

const IsEvalSupportedCached = {
  get value() {
    return shadow(this, 'value', isEvalSupported());
  },
};

class FontFaceObject {
  constructor(translatedData, { isEvalSupported = true,
                                disableFontFace = false,
                                ignoreErrors = false,
                                onUnsupportedFeature = null,
                                fontRegistry = null, }) {
    this.compiledGlyphs = Object.create(null);
    // importing translated data
    for (let i in translatedData) {
      this[i] = translatedData[i];
    }
    this.isEvalSupported = isEvalSupported !== false;
    this.disableFontFace = disableFontFace === true;
    this.ignoreErrors = ignoreErrors === true;
    this._onUnsupportedFeature = onUnsupportedFeature;
    this.fontRegistry = fontRegistry;
  }

  createNativeFontFace() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    const nativeFontFace = new FontFace(this.loadedName, this.data, {});

    if (this.fontRegistry) {
      this.fontRegistry.registerFont(this);
    }
    return nativeFontFace;
  }

  createFontFaceRule() {
    if (!this.data || this.disableFontFace) {
      return null;
    }
    const data = bytesToString(new Uint8Array(this.data));
    // Add the @font-face rule to the document.
    const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
    const rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;

    if (this.fontRegistry) {
      this.fontRegistry.registerFont(this, url);
    }
    return rule;
  }

  getPathGenerator(objs, character) {
    if (this.compiledGlyphs[character] !== undefined) {
      return this.compiledGlyphs[character];
    }

    let cmds, current;
    try {
      cmds = objs.get(this.loadedName + '_path_' + character);
    } catch (ex) {
      if (!this.ignoreErrors) {
        throw ex;
      }
      if (this._onUnsupportedFeature) {
        this._onUnsupportedFeature({ featureId: UNSUPPORTED_FEATURES.font, });
      }
      warn(`getPathGenerator - ignoring character: "${ex}".`);

      return this.compiledGlyphs[character] = function(c, size) {
        // No-op function, to allow rendering to continue.
      };
    }

    // If we can, compile cmds into JS for MAXIMUM SPEED...
    if (this.isEvalSupported && IsEvalSupportedCached.value) {
      let args, js = '';
      for (let i = 0, ii = cmds.length; i < ii; i++) {
        current = cmds[i];

        if (current.args !== undefined) {
          args = current.args.join(',');
        } else {
          args = '';
        }
        js += 'c.' + current.cmd + '(' + args + ');\n';
      }
      // eslint-disable-next-line no-new-func
      return this.compiledGlyphs[character] = new Function('c', 'size', js);
    }
    // ... but fall back on using Function.prototype.apply() if we're
    // blocked from using eval() for whatever reason (like CSP policies).
    return this.compiledGlyphs[character] = function(c, size) {
      for (let i = 0, ii = cmds.length; i < ii; i++) {
        current = cmds[i];

        if (current.cmd === 'scale') {
          current.args = [size, -size];
        }
        c[current.cmd].apply(c, current.args);
      }
    };
  }
}

/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let compatibilityParams = Object.create(null);
{

  const userAgent =
    '';
  const isIE = /Trident/.test(userAgent);
  const isIOSChrome = /CriOS/.test(userAgent);

  // Checks if possible to use URL.createObjectURL()
  // Support: IE, Chrome on iOS
  (function checkOnBlobSupport() {
    // Sometimes IE and Chrome on iOS losing the data created with
    // createObjectURL(), see issues #3977 and #8081.
    if (isIE || isIOSChrome) {
      compatibilityParams.disableCreateObjectURL = true;
    }
  })();
}

var apiCompatibilityParams = Object.freeze(compatibilityParams);

/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ShadingIRs = {};

ShadingIRs.RadialAxial = {
  fromIR: function RadialAxial_fromIR(raw) {
    var type = raw[1];
    var colorStops = raw[2];
    var p0 = raw[3];
    var p1 = raw[4];
    var r0 = raw[5];
    var r1 = raw[6];
    return {
      type: 'Pattern',
      getPattern: function RadialAxial_getPattern(ctx) {
        var grad;
        if (type === 'axial') {
          grad = ctx.createLinearGradient(p0[0], p0[1], p1[0], p1[1]);
        } else if (type === 'radial') {
          grad = ctx.createRadialGradient(p0[0], p0[1], r0, p1[0], p1[1], r1);
        }

        for (var i = 0, ii = colorStops.length; i < ii; ++i) {
          var c = colorStops[i];
          grad.addColorStop(c[0], c[1]);
        }
        return grad;
      },
    };
  },
};

var createMeshCanvas = (function createMeshCanvasClosure() {
  function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
    // Very basic Gouraud-shaded triangle rasterization algorithm.
    var coords = context.coords, colors = context.colors;
    var bytes = data.data, rowSize = data.width * 4;
    var tmp;
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1; p1 = p2; p2 = tmp; tmp = c1; c1 = c2; c2 = tmp;
    }
    if (coords[p2 + 1] > coords[p3 + 1]) {
      tmp = p2; p2 = p3; p3 = tmp; tmp = c2; c2 = c3; c3 = tmp;
    }
    if (coords[p1 + 1] > coords[p2 + 1]) {
      tmp = p1; p1 = p2; p2 = tmp; tmp = c1; c1 = c2; c2 = tmp;
    }
    var x1 = (coords[p1] + context.offsetX) * context.scaleX;
    var y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
    var x2 = (coords[p2] + context.offsetX) * context.scaleX;
    var y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
    var x3 = (coords[p3] + context.offsetX) * context.scaleX;
    var y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
    if (y1 >= y3) {
      return;
    }
    var c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
    var c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
    var c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];

    var minY = Math.round(y1), maxY = Math.round(y3);
    var xa, car, cag, cab;
    var xb, cbr, cbg, cbb;
    var k;
    for (var y = minY; y <= maxY; y++) {
      if (y < y2) {
        k = y < y1 ? 0 : y1 === y2 ? 1 : (y1 - y) / (y1 - y2);
        xa = x1 - (x1 - x2) * k;
        car = c1r - (c1r - c2r) * k;
        cag = c1g - (c1g - c2g) * k;
        cab = c1b - (c1b - c2b) * k;
      } else {
        k = y > y3 ? 1 : y2 === y3 ? 0 : (y2 - y) / (y2 - y3);
        xa = x2 - (x2 - x3) * k;
        car = c2r - (c2r - c3r) * k;
        cag = c2g - (c2g - c3g) * k;
        cab = c2b - (c2b - c3b) * k;
      }
      k = y < y1 ? 0 : y > y3 ? 1 : (y1 - y) / (y1 - y3);
      xb = x1 - (x1 - x3) * k;
      cbr = c1r - (c1r - c3r) * k;
      cbg = c1g - (c1g - c3g) * k;
      cbb = c1b - (c1b - c3b) * k;
      var x1_ = Math.round(Math.min(xa, xb));
      var x2_ = Math.round(Math.max(xa, xb));
      var j = rowSize * y + x1_ * 4;
      for (var x = x1_; x <= x2_; x++) {
        k = (xa - x) / (xa - xb);
        k = k < 0 ? 0 : k > 1 ? 1 : k;
        bytes[j++] = (car - (car - cbr) * k) | 0;
        bytes[j++] = (cag - (cag - cbg) * k) | 0;
        bytes[j++] = (cab - (cab - cbb) * k) | 0;
        bytes[j++] = 255;
      }
    }
  }

  function drawFigure(data, figure, context) {
    var ps = figure.coords;
    var cs = figure.colors;
    var i, ii;
    switch (figure.type) {
      case 'lattice':
        var verticesPerRow = figure.verticesPerRow;
        var rows = Math.floor(ps.length / verticesPerRow) - 1;
        var cols = verticesPerRow - 1;
        for (i = 0; i < rows; i++) {
          var q = i * verticesPerRow;
          for (var j = 0; j < cols; j++, q++) {
            drawTriangle(data, context,
              ps[q], ps[q + 1], ps[q + verticesPerRow],
              cs[q], cs[q + 1], cs[q + verticesPerRow]);
            drawTriangle(data, context,
              ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow],
              cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
          }
        }
        break;
      case 'triangles':
        for (i = 0, ii = ps.length; i < ii; i += 3) {
          drawTriangle(data, context,
            ps[i], ps[i + 1], ps[i + 2],
            cs[i], cs[i + 1], cs[i + 2]);
        }
        break;
      default:
        throw new Error('illegal figure');
    }
  }

  function createMeshCanvas(bounds, combinesScale, coords, colors, figures,
                            backgroundColor, cachedCanvases, webGLContext) {
    // we will increase scale on some weird factor to let antialiasing take
    // care of "rough" edges
    var EXPECTED_SCALE = 1.1;
    // MAX_PATTERN_SIZE is used to avoid OOM situation.
    var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough
    // We need to keep transparent border around our pattern for fill():
    // createPattern with 'no-repeat' will bleed edges across entire area.
    var BORDER_SIZE = 2;

    var offsetX = Math.floor(bounds[0]);
    var offsetY = Math.floor(bounds[1]);
    var boundsWidth = Math.ceil(bounds[2]) - offsetX;
    var boundsHeight = Math.ceil(bounds[3]) - offsetY;

    var width = Math.min(Math.ceil(Math.abs(boundsWidth * combinesScale[0] *
      EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var height = Math.min(Math.ceil(Math.abs(boundsHeight * combinesScale[1] *
      EXPECTED_SCALE)), MAX_PATTERN_SIZE);
    var scaleX = boundsWidth / width;
    var scaleY = boundsHeight / height;

    var context = {
      coords,
      colors,
      offsetX: -offsetX,
      offsetY: -offsetY,
      scaleX: 1 / scaleX,
      scaleY: 1 / scaleY,
    };

    var paddedWidth = width + BORDER_SIZE * 2;
    var paddedHeight = height + BORDER_SIZE * 2;

    var canvas, tmpCanvas, i, ii;
    if (webGLContext.isEnabled) {
      canvas = webGLContext.drawFigures({
        width,
        height,
        backgroundColor,
        figures,
        context,
      });
      // https://bugzilla.mozilla.org/show_bug.cgi?id=972126
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight,
                                           false);
      tmpCanvas.context.drawImage(canvas, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    } else {
      tmpCanvas = cachedCanvases.getCanvas('mesh', paddedWidth, paddedHeight,
                                           false);
      var tmpCtx = tmpCanvas.context;

      var data = tmpCtx.createImageData(width, height);
      if (backgroundColor) {
        var bytes = data.data;
        for (i = 0, ii = bytes.length; i < ii; i += 4) {
          bytes[i] = backgroundColor[0];
          bytes[i + 1] = backgroundColor[1];
          bytes[i + 2] = backgroundColor[2];
          bytes[i + 3] = 255;
        }
      }
      for (i = 0; i < figures.length; i++) {
        drawFigure(data, figures[i], context);
      }
      tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
      canvas = tmpCanvas.canvas;
    }

    return {
      canvas,
      offsetX: offsetX - BORDER_SIZE * scaleX,
      offsetY: offsetY - BORDER_SIZE * scaleY,
      scaleX,
      scaleY,
    };
  }
  return createMeshCanvas;
})();

ShadingIRs.Mesh = {
  fromIR: function Mesh_fromIR(raw) {
    // var type = raw[1];
    var coords = raw[2];
    var colors = raw[3];
    var figures = raw[4];
    var bounds = raw[5];
    var matrix = raw[6];
    // var bbox = raw[7];
    var background = raw[8];
    return {
      type: 'Pattern',
      getPattern: function Mesh_getPattern(ctx, owner, shadingFill) {
        var scale;
        if (shadingFill) {
          scale = Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
        } else {
          // Obtain scale from matrix and current transformation matrix.
          scale = Util.singularValueDecompose2dScale(owner.baseTransform);
          if (matrix) {
            var matrixScale = Util.singularValueDecompose2dScale(matrix);
            scale = [scale[0] * matrixScale[0],
                     scale[1] * matrixScale[1]];
          }
        }

        // Rasterizing on the main thread since sending/queue large canvases
        // might cause OOM.
        var temporaryPatternCanvas = createMeshCanvas(bounds, scale, coords,
          colors, figures, shadingFill ? null : background,
          owner.cachedCanvases, owner.webGLContext);

        if (!shadingFill) {
          ctx.setTransform.apply(ctx, owner.baseTransform);
          if (matrix) {
            ctx.transform.apply(ctx, matrix);
          }
        }

        ctx.translate(temporaryPatternCanvas.offsetX,
                      temporaryPatternCanvas.offsetY);
        ctx.scale(temporaryPatternCanvas.scaleX,
                  temporaryPatternCanvas.scaleY);

        return ctx.createPattern(temporaryPatternCanvas.canvas, 'no-repeat');
      },
    };
  },
};

ShadingIRs.Dummy = {
  fromIR: function Dummy_fromIR() {
    return {
      type: 'Pattern',
      getPattern: function Dummy_fromIR_getPattern() {
        return 'hotpink';
      },
    };
  },
};

function getShadingPatternFromIR(raw) {
  var shadingIR = ShadingIRs[raw[0]];
  if (!shadingIR) {
    throw new Error(`Unknown IR type: ${raw[0]}`);
  }
  return shadingIR.fromIR(raw);
}

var TilingPattern = (function TilingPatternClosure() {
  var PaintType = {
    COLORED: 1,
    UNCOLORED: 2,
  };

  var MAX_PATTERN_SIZE = 3000; // 10in @ 300dpi shall be enough

  function TilingPattern(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
    this.operatorList = IR[2];
    this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
    this.bbox = IR[4];
    this.xstep = IR[5];
    this.ystep = IR[6];
    this.paintType = IR[7];
    this.tilingType = IR[8];
    this.color = color;
    this.canvasGraphicsFactory = canvasGraphicsFactory;
    this.baseTransform = baseTransform;
    this.type = 'Pattern';
    this.ctx = ctx;
  }

  TilingPattern.prototype = {
    createPatternCanvas: function TilinPattern_createPatternCanvas(owner) {
      var operatorList = this.operatorList;
      var bbox = this.bbox;
      var xstep = this.xstep;
      var ystep = this.ystep;
      var paintType = this.paintType;
      var tilingType = this.tilingType;
      var color = this.color;
      var canvasGraphicsFactory = this.canvasGraphicsFactory;

      info('TilingType: ' + tilingType);

      var x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];

      var topLeft = [x0, y0];
      // we want the canvas to be as large as the step size
      var botRight = [x0 + xstep, y0 + ystep];

      var width = botRight[0] - topLeft[0];
      var height = botRight[1] - topLeft[1];

      // Obtain scale from matrix and current transformation matrix.
      var matrixScale = Util.singularValueDecompose2dScale(this.matrix);
      var curMatrixScale = Util.singularValueDecompose2dScale(
        this.baseTransform);
      var combinedScale = [matrixScale[0] * curMatrixScale[0],
        matrixScale[1] * curMatrixScale[1]];

      // MAX_PATTERN_SIZE is used to avoid OOM situation.
      // Use width and height values that are as close as possible to the end
      // result when the pattern is used. Too low value makes the pattern look
      // blurry. Too large value makes it look too crispy.
      width = Math.min(Math.ceil(Math.abs(width * combinedScale[0])),
        MAX_PATTERN_SIZE);

      height = Math.min(Math.ceil(Math.abs(height * combinedScale[1])),
        MAX_PATTERN_SIZE);

      var tmpCanvas = owner.cachedCanvases.getCanvas('pattern',
        width, height, true);
      var tmpCtx = tmpCanvas.context;
      var graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
      graphics.groupLevel = owner.groupLevel;

      this.setFillAndStrokeStyleToContext(graphics, paintType, color);

      this.setScale(width, height, xstep, ystep);
      this.transformToScale(graphics);

      // transform coordinates to pattern space
      var tmpTranslate = [1, 0, 0, 1, -topLeft[0], -topLeft[1]];
      graphics.transform.apply(graphics, tmpTranslate);

      this.clipBbox(graphics, bbox, x0, y0, x1, y1);

      graphics.executeOperatorList(operatorList);
      return tmpCanvas.canvas;
    },

    setScale: function TilingPattern_setScale(width, height, xstep, ystep) {
      this.scale = [width / xstep, height / ystep];
    },

    transformToScale: function TilingPattern_transformToScale(graphics) {
      var scale = this.scale;
      var tmpScale = [scale[0], 0, 0, scale[1], 0, 0];
      graphics.transform.apply(graphics, tmpScale);
    },

    scaleToContext: function TilingPattern_scaleToContext() {
      var scale = this.scale;
      this.ctx.scale(1 / scale[0], 1 / scale[1]);
    },

    clipBbox: function clipBbox(graphics, bbox, x0, y0, x1, y1) {
      if (Array.isArray(bbox) && bbox.length === 4) {
        var bboxWidth = x1 - x0;
        var bboxHeight = y1 - y0;
        graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
        graphics.clip();
        graphics.endPath();
      }
    },

    setFillAndStrokeStyleToContext:
      function setFillAndStrokeStyleToContext(graphics, paintType, color) {
        let context = graphics.ctx, current = graphics.current;
        switch (paintType) {
          case PaintType.COLORED:
            var ctx = this.ctx;
            context.fillStyle = ctx.fillStyle;
            context.strokeStyle = ctx.strokeStyle;
            current.fillColor = ctx.fillStyle;
            current.strokeColor = ctx.strokeStyle;
            break;
          case PaintType.UNCOLORED:
            var cssColor = Util.makeCssRgb(color[0], color[1], color[2]);
            context.fillStyle = cssColor;
            context.strokeStyle = cssColor;
            // Set color needed by image masks (fixes issues 3226 and 8741).
            current.fillColor = cssColor;
            current.strokeColor = cssColor;
            break;
          default:
            throw new FormatError(`Unsupported paint type: ${paintType}`);
        }
      },

    getPattern: function TilingPattern_getPattern(ctx, owner) {
      var temporaryPatternCanvas = this.createPatternCanvas(owner);

      ctx = this.ctx;
      ctx.setTransform.apply(ctx, this.baseTransform);
      ctx.transform.apply(ctx, this.matrix);
      this.scaleToContext();

      return ctx.createPattern(temporaryPatternCanvas, 'repeat');
    },
  };

  return TilingPattern;
})();

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// <canvas> contexts store most of the state we need natively.
// However, PDF needs a bit more state, which we store here.

// Minimal font size that would be used during canvas fillText operations.
var MIN_FONT_SIZE = 16;
// Maximum font size that would be used during canvas fillText operations.
var MAX_FONT_SIZE = 100;
var MAX_GROUP_SIZE = 4096;

// Heuristic value used when enforcing minimum line widths.
var MIN_WIDTH_FACTOR = 0.65;
var MAX_SIZE_TO_COMPILE = 1000;

var FULL_CHUNK_HEIGHT = 16;

var IsLittleEndianCached = {
  get value() {
    return shadow(IsLittleEndianCached, 'value', isLittleEndian());
  },
};

function addContextCurrentTransform(ctx) {
  // If the context doesn't expose a `mozCurrentTransform`, add a JS based one.
  if (!ctx.mozCurrentTransform) {
    ctx._originalSave = ctx.save;
    ctx._originalRestore = ctx.restore;
    ctx._originalRotate = ctx.rotate;
    ctx._originalScale = ctx.scale;
    ctx._originalTranslate = ctx.translate;
    ctx._originalTransform = ctx.transform;
    ctx._originalSetTransform = ctx.setTransform;

    ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
    ctx._transformStack = [];

    Object.defineProperty(ctx, 'mozCurrentTransform', {
      get: function getCurrentTransform() {
        return this._transformMatrix;
      },
    });

    Object.defineProperty(ctx, 'mozCurrentTransformInverse', {
      get: function getCurrentTransformInverse() {
        // Calculation done using WolframAlpha:
        // http://www.wolframalpha.com/input/?
        //   i=Inverse+{{a%2C+c%2C+e}%2C+{b%2C+d%2C+f}%2C+{0%2C+0%2C+1}}

        var m = this._transformMatrix;
        var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];

        var ad_bc = a * d - b * c;
        var bc_ad = b * c - a * d;

        return [
          d / ad_bc,
          b / bc_ad,
          c / bc_ad,
          a / ad_bc,
          (d * e - c * f) / bc_ad,
          (b * e - a * f) / ad_bc
        ];
      },
    });

    ctx.save = function ctxSave() {
      var old = this._transformMatrix;
      this._transformStack.push(old);
      this._transformMatrix = old.slice(0, 6);

      this._originalSave();
    };

    ctx.restore = function ctxRestore() {
      var prev = this._transformStack.pop();
      if (prev) {
        this._transformMatrix = prev;
        this._originalRestore();
      }
    };

    ctx.translate = function ctxTranslate(x, y) {
      var m = this._transformMatrix;
      m[4] = m[0] * x + m[2] * y + m[4];
      m[5] = m[1] * x + m[3] * y + m[5];

      this._originalTranslate(x, y);
    };

    ctx.scale = function ctxScale(x, y) {
      var m = this._transformMatrix;
      m[0] = m[0] * x;
      m[1] = m[1] * x;
      m[2] = m[2] * y;
      m[3] = m[3] * y;

      this._originalScale(x, y);
    };

    ctx.transform = function ctxTransform(a, b, c, d, e, f) {
      var m = this._transformMatrix;
      this._transformMatrix = [
        m[0] * a + m[2] * b,
        m[1] * a + m[3] * b,
        m[0] * c + m[2] * d,
        m[1] * c + m[3] * d,
        m[0] * e + m[2] * f + m[4],
        m[1] * e + m[3] * f + m[5]
      ];

      ctx._originalTransform(a, b, c, d, e, f);
    };

    ctx.setTransform = function ctxSetTransform(a, b, c, d, e, f) {
      this._transformMatrix = [a, b, c, d, e, f];

      ctx._originalSetTransform(a, b, c, d, e, f);
    };

    ctx.rotate = function ctxRotate(angle) {
      var cosValue = Math.cos(angle);
      var sinValue = Math.sin(angle);

      var m = this._transformMatrix;
      this._transformMatrix = [
        m[0] * cosValue + m[2] * sinValue,
        m[1] * cosValue + m[3] * sinValue,
        m[0] * (-sinValue) + m[2] * cosValue,
        m[1] * (-sinValue) + m[3] * cosValue,
        m[4],
        m[5]
      ];

      this._originalRotate(angle);
    };
  }
}

var CachedCanvases = (function CachedCanvasesClosure() {
  function CachedCanvases(canvasFactory) {
    this.canvasFactory = canvasFactory;
    this.cache = Object.create(null);
  }
  CachedCanvases.prototype = {
    getCanvas: function CachedCanvases_getCanvas(id, width, height,
                                                 trackTransform) {
      var canvasEntry;
      if (this.cache[id] !== undefined) {
        canvasEntry = this.cache[id];
        this.canvasFactory.reset(canvasEntry, width, height);
        // reset canvas transform for emulated mozCurrentTransform, if needed
        canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        canvasEntry = this.canvasFactory.create(width, height);
        this.cache[id] = canvasEntry;
      }
      if (trackTransform) {
        addContextCurrentTransform(canvasEntry.context);
      }
      return canvasEntry;
    },
    clear() {
      for (var id in this.cache) {
        var canvasEntry = this.cache[id];
        this.canvasFactory.destroy(canvasEntry);
        delete this.cache[id];
      }
    },
  };
  return CachedCanvases;
})();

function compileType3Glyph(imgData) {
  var POINT_TO_PROCESS_LIMIT = 1000;

  var width = imgData.width, height = imgData.height;
  var i, j, j0, width1 = width + 1;
  var points = new Uint8Array(width1 * (height + 1));
  var POINT_TYPES =
      new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);

  // decodes bit-packed mask data
  var lineSize = (width + 7) & ~7, data0 = imgData.data;
  var data = new Uint8Array(lineSize * height), pos = 0, ii;
  for (i = 0, ii = data0.length; i < ii; i++) {
    var mask = 128, elem = data0[i];
    while (mask > 0) {
      data[pos++] = (elem & mask) ? 0 : 255;
      mask >>= 1;
    }
  }

  // finding interesting points: every point is located between mask pixels,
  // so there will be points of the (width + 1)x(height + 1) grid. Every point
  // will have flags assigned based on neighboring mask pixels:
  //   4 | 8
  //   --P--
  //   2 | 1
  // We are interested only in points with the flags:
  //   - outside corners: 1, 2, 4, 8;
  //   - inside corners: 7, 11, 13, 14;
  //   - and, intersections: 5, 10.
  var count = 0;
  pos = 0;
  if (data[pos] !== 0) {
    points[0] = 1;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j] = data[pos] ? 2 : 1;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j] = 2;
    ++count;
  }
  for (i = 1; i < height; i++) {
    pos = i * lineSize;
    j0 = i * width1;
    if (data[pos - lineSize] !== data[pos]) {
      points[j0] = data[pos] ? 1 : 8;
      ++count;
    }
    // 'sum' is the position of the current pixel configuration in the 'TYPES'
    // array (in order 8-1-2-4, so we can use '>>2' to shift the column).
    var sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
    for (j = 1; j < width; j++) {
      sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) +
            (data[pos - lineSize + 1] ? 8 : 0);
      if (POINT_TYPES[sum]) {
        points[j0 + j] = POINT_TYPES[sum];
        ++count;
      }
      pos++;
    }
    if (data[pos - lineSize] !== data[pos]) {
      points[j0 + j] = data[pos] ? 2 : 4;
      ++count;
    }

    if (count > POINT_TO_PROCESS_LIMIT) {
      return null;
    }
  }

  pos = lineSize * (height - 1);
  j0 = i * width1;
  if (data[pos] !== 0) {
    points[j0] = 8;
    ++count;
  }
  for (j = 1; j < width; j++) {
    if (data[pos] !== data[pos + 1]) {
      points[j0 + j] = data[pos] ? 4 : 8;
      ++count;
    }
    pos++;
  }
  if (data[pos] !== 0) {
    points[j0 + j] = 4;
    ++count;
  }
  if (count > POINT_TO_PROCESS_LIMIT) {
    return null;
  }

  // building outlines
  var steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
  var outlines = [];
  for (i = 0; count && i <= height; i++) {
    var p = i * width1;
    var end = p + width;
    while (p < end && !points[p]) {
      p++;
    }
    if (p === end) {
      continue;
    }
    var coords = [p % width1, i];

    var type = points[p], p0 = p, pp;
    do {
      var step = steps[type];
      do {
        p += step;
      } while (!points[p]);

      pp = points[p];
      if (pp !== 5 && pp !== 10) {
        // set new direction
        type = pp;
        // delete mark
        points[p] = 0;
      } else { // type is 5 or 10, ie, a crossing
        // set new direction
        type = pp & ((0x33 * type) >> 4);
        // set new type for "future hit"
        points[p] &= (type >> 2 | type << 2);
      }

      coords.push(p % width1);
      coords.push((p / width1) | 0);
      --count;
    } while (p0 !== p);
    outlines.push(coords);
    --i;
  }

  var drawOutline = function(c) {
    c.save();
    // the path shall be painted in [0..1]x[0..1] space
    c.scale(1 / width, -1 / height);
    c.translate(0, -height);
    c.beginPath();
    for (var i = 0, ii = outlines.length; i < ii; i++) {
      var o = outlines[i];
      c.moveTo(o[0], o[1]);
      for (var j = 2, jj = o.length; j < jj; j += 2) {
        c.lineTo(o[j], o[j + 1]);
      }
    }
    c.fill();
    c.beginPath();
    c.restore();
  };

  return drawOutline;
}

var CanvasExtraState = (function CanvasExtraStateClosure() {
  function CanvasExtraState() {
    // Are soft masks and alpha values shapes or opacities?
    this.alphaIsShape = false;
    this.fontSize = 0;
    this.fontSizeScale = 1;
    this.textMatrix = IDENTITY_MATRIX;
    this.textMatrixScale = 1;
    this.fontMatrix = FONT_IDENTITY_MATRIX;
    this.leading = 0;
    // Current point (in user coordinates)
    this.x = 0;
    this.y = 0;
    // Start of text line (in text coordinates)
    this.lineX = 0;
    this.lineY = 0;
    // Character and word spacing
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRenderingMode = TextRenderingMode.FILL;
    this.textRise = 0;
    // Default fore and background colors
    this.fillColor = '#000000';
    this.strokeColor = '#000000';
    this.patternFill = false;
    // Note: fill alpha applies to all non-stroking operations
    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.activeSMask = null;
    this.resumeSMaskCtx = null; // nonclonable field (see the save method below)
  }

  CanvasExtraState.prototype = {
    clone: function CanvasExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function CanvasExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    },
  };
  return CanvasExtraState;
})();

var CanvasGraphics = (function CanvasGraphicsClosure() {
  // Defines the time the executeOperatorList is going to be executing
  // before it stops and shedules a continue of execution.
  var EXECUTION_TIME = 15;
  // Defines the number of steps before checking the execution time
  var EXECUTION_STEPS = 10;

  function CanvasGraphics(canvasCtx, commonObjs, objs, canvasFactory,
                          webGLContext, imageLayer) {
    this.ctx = canvasCtx;
    this.current = new CanvasExtraState();
    this.stateStack = [];
    this.pendingClip = null;
    this.pendingEOFill = false;
    this.res = null;
    this.xobjs = null;
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.canvasFactory = canvasFactory;
    this.webGLContext = webGLContext;
    this.imageLayer = imageLayer;
    this.groupStack = [];
    this.processingType3 = null;
    // Patterns are painted relative to the initial page/form transform, see pdf
    // spec 8.7.2 NOTE 1.
    this.baseTransform = null;
    this.baseTransformStack = [];
    this.groupLevel = 0;
    this.smaskStack = [];
    this.smaskCounter = 0;
    this.tempSMask = null;
    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
    if (canvasCtx) {
      // NOTE: if mozCurrentTransform is polyfilled, then the current state of
      // the transformation must already be set in canvasCtx._transformMatrix.
      addContextCurrentTransform(canvasCtx);
    }
    this._cachedGetSinglePixelWidth = null;
  }

  function putBinaryImageData(ctx, imgData) {
    if (typeof ImageData !== 'undefined' && imgData instanceof ImageData) {
      ctx.putImageData(imgData, 0, 0);
      return;
    }

    // Put the image data to the canvas in chunks, rather than putting the
    // whole image at once.  This saves JS memory, because the ImageData object
    // is smaller. It also possibly saves C++ memory within the implementation
    // of putImageData(). (E.g. in Firefox we make two short-lived copies of
    // the data passed to putImageData()). |n| shouldn't be too small, however,
    // because too many putImageData() calls will slow things down.
    //
    // Note: as written, if the last chunk is partial, the putImageData() call
    // will (conceptually) put pixels past the bounds of the canvas.  But
    // that's ok; any such pixels are ignored.

    var height = imgData.height, width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;

    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0, destPos;
    var src = imgData.data;
    var dest = chunkImgData.data;
    var i, j, thisChunkHeight, elemsInThisChunk;

    // There are multiple forms in which the pixel data can be passed, and
    // imgData.kind tells us which one this is.
    if (imgData.kind === ImageKind.GRAYSCALE_1BPP) {
      // Grayscale, 1 bit per pixel (i.e. black-and-white).
      var srcLength = src.byteLength;
      var dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
      var dest32DataLength = dest32.length;
      var fullSrcDiff = (width + 7) >> 3;
      var white = 0xFFFFFFFF;
      var black = IsLittleEndianCached.value ? 0xFF000000 : 0x000000FF;
      for (i = 0; i < totalChunks; i++) {
        thisChunkHeight =
          (i < fullChunks) ? FULL_CHUNK_HEIGHT : partialChunkHeight;
        destPos = 0;
        for (j = 0; j < thisChunkHeight; j++) {
          var srcDiff = srcLength - srcPos;
          var k = 0;
          var kEnd = (srcDiff > fullSrcDiff) ? width : srcDiff * 8 - 7;
          var kEndUnrolled = kEnd & ~7;
          var mask = 0;
          var srcByte = 0;
          for (; k < kEndUnrolled; k += 8) {
            srcByte = src[srcPos++];
            dest32[destPos++] = (srcByte & 128) ? white : black;
            dest32[destPos++] = (srcByte & 64) ? white : black;
            dest32[destPos++] = (srcByte & 32) ? white : black;
            dest32[destPos++] = (srcByte & 16) ? white : black;
            dest32[destPos++] = (srcByte & 8) ? white : black;
            dest32[destPos++] = (srcByte & 4) ? white : black;
            dest32[destPos++] = (srcByte & 2) ? white : black;
            dest32[destPos++] = (srcByte & 1) ? white : black;
          }
          for (; k < kEnd; k++) {
             if (mask === 0) {
               srcByte = src[srcPos++];
               mask = 128;
             }

            dest32[destPos++] = (srcByte & mask) ? white : black;
            mask >>= 1;
          }
        }
        // We ran out of input. Make all remaining pixels transparent.
        while (destPos < dest32DataLength) {
          dest32[destPos++] = 0;
        }

        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else if (imgData.kind === ImageKind.RGBA_32BPP) {
      // RGBA, 32-bits per pixel.

      j = 0;
      elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
      for (i = 0; i < fullChunks; i++) {
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        srcPos += elemsInThisChunk;

        ctx.putImageData(chunkImgData, 0, j);
        j += FULL_CHUNK_HEIGHT;
      }
      if (i < totalChunks) {
        elemsInThisChunk = width * partialChunkHeight * 4;
        dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
        ctx.putImageData(chunkImgData, 0, j);
      }

    } else if (imgData.kind === ImageKind.RGB_24BPP) {
      // RGB, 24-bits per pixel.
      thisChunkHeight = FULL_CHUNK_HEIGHT;
      elemsInThisChunk = width * thisChunkHeight;
      for (i = 0; i < totalChunks; i++) {
        if (i >= fullChunks) {
          thisChunkHeight = partialChunkHeight;
          elemsInThisChunk = width * thisChunkHeight;
        }

        destPos = 0;
        for (j = elemsInThisChunk; j--;) {
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = src[srcPos++];
          dest[destPos++] = 255;
        }
        ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
      }
    } else {
      throw new Error(`bad image kind: ${imgData.kind}`);
    }
  }

  function putBinaryImageMask(ctx, imgData) {
    var height = imgData.height, width = imgData.width;
    var partialChunkHeight = height % FULL_CHUNK_HEIGHT;
    var fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
    var totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;

    var chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
    var srcPos = 0;
    var src = imgData.data;
    var dest = chunkImgData.data;

    for (var i = 0; i < totalChunks; i++) {
      var thisChunkHeight =
        (i < fullChunks) ? FULL_CHUNK_HEIGHT : partialChunkHeight;

      // Expand the mask so it can be used by the canvas.  Any required
      // inversion has already been handled.
      var destPos = 3; // alpha component offset
      for (var j = 0; j < thisChunkHeight; j++) {
        var mask = 0;
        for (var k = 0; k < width; k++) {
          if (!mask) {
            var elem = src[srcPos++];
            mask = 128;
          }
          dest[destPos] = (elem & mask) ? 0 : 255;
          destPos += 4;
          mask >>= 1;
        }
      }
      ctx.putImageData(chunkImgData, 0, i * FULL_CHUNK_HEIGHT);
    }
  }

  function copyCtxState(sourceCtx, destCtx) {
    var properties = ['strokeStyle', 'fillStyle', 'fillRule', 'globalAlpha',
                      'lineWidth', 'lineCap', 'lineJoin', 'miterLimit',
                      'globalCompositeOperation', 'font'];
    for (var i = 0, ii = properties.length; i < ii; i++) {
      var property = properties[i];
      if (sourceCtx[property] !== undefined) {
        destCtx[property] = sourceCtx[property];
      }
    }
    if (sourceCtx.setLineDash !== undefined) {
      destCtx.setLineDash(sourceCtx.getLineDash());
      destCtx.lineDashOffset = sourceCtx.lineDashOffset;
    }
  }

  function resetCtxToDefault(ctx) {
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#000000';
    ctx.fillRule = 'nonzero';
    ctx.globalAlpha = 1;
    ctx.lineWidth = 1;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 10;
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = '10px sans-serif';
    if (ctx.setLineDash !== undefined) {
      ctx.setLineDash([]);
      ctx.lineDashOffset = 0;
    }
  }

  function composeSMaskBackdrop(bytes, r0, g0, b0) {
    var length = bytes.length;
    for (var i = 3; i < length; i += 4) {
      var alpha = bytes[i];
      if (alpha === 0) {
        bytes[i - 3] = r0;
        bytes[i - 2] = g0;
        bytes[i - 1] = b0;
      } else if (alpha < 255) {
        var alpha_ = 255 - alpha;
        bytes[i - 3] = (bytes[i - 3] * alpha + r0 * alpha_) >> 8;
        bytes[i - 2] = (bytes[i - 2] * alpha + g0 * alpha_) >> 8;
        bytes[i - 1] = (bytes[i - 1] * alpha + b0 * alpha_) >> 8;
      }
    }
  }

  function composeSMaskAlpha(maskData, layerData, transferMap) {
    var length = maskData.length;
    var scale = 1 / 255;
    for (var i = 3; i < length; i += 4) {
      var alpha = transferMap ? transferMap[maskData[i]] : maskData[i];
      layerData[i] = (layerData[i] * alpha * scale) | 0;
    }
  }

  function composeSMaskLuminosity(maskData, layerData, transferMap) {
    var length = maskData.length;
    for (var i = 3; i < length; i += 4) {
      var y = (maskData[i - 3] * 77) +  // * 0.3 / 255 * 0x10000
              (maskData[i - 2] * 152) + // * 0.59 ....
              (maskData[i - 1] * 28);   // * 0.11 ....
      layerData[i] = transferMap ?
        (layerData[i] * transferMap[y >> 8]) >> 8 :
        (layerData[i] * y) >> 16;
    }
  }

  function genericComposeSMask(maskCtx, layerCtx, width, height,
                               subtype, backdrop, transferMap) {
    var hasBackdrop = !!backdrop;
    var r0 = hasBackdrop ? backdrop[0] : 0;
    var g0 = hasBackdrop ? backdrop[1] : 0;
    var b0 = hasBackdrop ? backdrop[2] : 0;

    var composeFn;
    if (subtype === 'Luminosity') {
      composeFn = composeSMaskLuminosity;
    } else {
      composeFn = composeSMaskAlpha;
    }

    // processing image in chunks to save memory
    var PIXELS_TO_PROCESS = 1048576;
    var chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
    for (var row = 0; row < height; row += chunkSize) {
      var chunkHeight = Math.min(chunkSize, height - row);
      var maskData = maskCtx.getImageData(0, row, width, chunkHeight);
      var layerData = layerCtx.getImageData(0, row, width, chunkHeight);

      if (hasBackdrop) {
        composeSMaskBackdrop(maskData.data, r0, g0, b0);
      }
      composeFn(maskData.data, layerData.data, transferMap);

      maskCtx.putImageData(layerData, 0, row);
    }
  }

  function composeSMask(ctx, smask, layerCtx, webGLContext) {
    var mask = smask.canvas;
    var maskCtx = smask.context;

    ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY,
                     smask.offsetX, smask.offsetY);

    var backdrop = smask.backdrop || null;
    if (!smask.transferMap && webGLContext.isEnabled) {
      let composed = webGLContext.composeSMask({
        layer: layerCtx.canvas,
        mask,
        properties: {
          subtype: smask.subtype,
          backdrop,
        },
      });
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(composed, smask.offsetX, smask.offsetY);
      return;
    }
    genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height,
                        smask.subtype, backdrop, smask.transferMap);
    ctx.drawImage(mask, 0, 0);
  }

  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
  var NORMAL_CLIP = {};
  var EO_CLIP = {};

  CanvasGraphics.prototype = {

    beginDrawing({ transform, viewport, transparency,
                   background = null, }) {
      // For pdfs that use blend modes we have to clear the canvas else certain
      // blend modes can look wrong since we'd be blending with a white
      // backdrop. The problem with a transparent backdrop though is we then
      // don't get sub pixel anti aliasing on text, creating temporary
      // transparent canvas when we have blend modes.
      var width = this.ctx.canvas.width;
      var height = this.ctx.canvas.height;

      this.ctx.save();
      this.ctx.fillStyle = background || 'rgb(255, 255, 255)';
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.restore();

      if (transparency) {
        var transparentCanvas = this.cachedCanvases.getCanvas(
          'transparent', width, height, true);
        this.compositeCtx = this.ctx;
        this.transparentCanvas = transparentCanvas.canvas;
        this.ctx = transparentCanvas.context;
        this.ctx.save();
        // The transform can be applied before rendering, transferring it to
        // the new canvas.
        this.ctx.transform.apply(this.ctx,
                                 this.compositeCtx.mozCurrentTransform);
      }

      this.ctx.save();
      resetCtxToDefault(this.ctx);
      if (transform) {
        this.ctx.transform.apply(this.ctx, transform);
      }
      this.ctx.transform.apply(this.ctx, viewport.transform);

      this.baseTransform = this.ctx.mozCurrentTransform.slice();

      if (this.imageLayer) {
        this.imageLayer.beginLayout();
      }
    },

    executeOperatorList: function CanvasGraphics_executeOperatorList(
                                    operatorList,
                                    executionStartIdx, continueCallback,
                                    stepper) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var i = executionStartIdx || 0;
      var argsArrayLen = argsArray.length;

      // Sometimes the OperatorList to execute is empty.
      if (argsArrayLen === i) {
        return i;
      }

      var chunkOperations = (argsArrayLen - i > EXECUTION_STEPS &&
                             typeof continueCallback === 'function');
      var endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
      var steps = 0;

      var commonObjs = this.commonObjs;
      var objs = this.objs;
      var fnId;

      while (true) {
        if (stepper !== undefined && i === stepper.nextBreakPoint) {
          stepper.breakIt(i, continueCallback);
          return i;
        }

        fnId = fnArray[i];

        if (fnId !== OPS.dependency) {
          this[fnId].apply(this, argsArray[i]);
        } else {
          var deps = argsArray[i];
          for (var n = 0, nn = deps.length; n < nn; n++) {
            var depObjId = deps[n];
            var common = depObjId[0] === 'g' && depObjId[1] === '_';
            var objsPool = common ? commonObjs : objs;

            // If the promise isn't resolved yet, add the continueCallback
            // to the promise and bail out.
            if (!objsPool.isResolved(depObjId)) {
              objsPool.get(depObjId, continueCallback);
              return i;
            }
          }
        }

        i++;

        // If the entire operatorList was executed, stop as were done.
        if (i === argsArrayLen) {
          return i;
        }

        // If the execution took longer then a certain amount of time and
        // `continueCallback` is specified, interrupt the execution.
        if (chunkOperations && ++steps > EXECUTION_STEPS) {
          if (Date.now() > endTime) {
            continueCallback();
            return i;
          }
          steps = 0;
        }

        // If the operatorList isn't executed completely yet OR the execution
        // time was short enough, do another execution round.
      }
    },

    endDrawing: function CanvasGraphics_endDrawing() {
      // Finishing all opened operations such as SMask group painting.
      if (this.current.activeSMask !== null) {
        this.endSMaskGroup();
      }

      this.ctx.restore();

      if (this.transparentCanvas) {
        this.ctx = this.compositeCtx;
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0); // Avoid apply transform twice
        this.ctx.drawImage(this.transparentCanvas, 0, 0);
        this.ctx.restore();
        this.transparentCanvas = null;
      }

      this.cachedCanvases.clear();
      this.webGLContext.clear();

      if (this.imageLayer) {
        this.imageLayer.endLayout();
      }
    },

    // Graphics state
    setLineWidth: function CanvasGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
      this.ctx.lineWidth = width;
    },
    setLineCap: function CanvasGraphics_setLineCap(style) {
      this.ctx.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function CanvasGraphics_setLineJoin(style) {
      this.ctx.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function CanvasGraphics_setMiterLimit(limit) {
      this.ctx.miterLimit = limit;
    },
    setDash: function CanvasGraphics_setDash(dashArray, dashPhase) {
      var ctx = this.ctx;
      if (ctx.setLineDash !== undefined) {
        ctx.setLineDash(dashArray);
        ctx.lineDashOffset = dashPhase;
      }
    },
    setRenderingIntent: function CanvasGraphics_setRenderingIntent(intent) {
      // Maybe if we one day fully support color spaces this will be important
      // for now we can ignore.
      // TODO set rendering intent?
    },
    setFlatness: function CanvasGraphics_setFlatness(flatness) {
      // There's no way to control this with canvas, but we can safely ignore.
      // TODO set flatness?
    },
    setGState: function CanvasGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];

        switch (key) {
          case 'LW':
            this.setLineWidth(value);
            break;
          case 'LC':
            this.setLineCap(value);
            break;
          case 'LJ':
            this.setLineJoin(value);
            break;
          case 'ML':
            this.setMiterLimit(value);
            break;
          case 'D':
            this.setDash(value[0], value[1]);
            break;
          case 'RI':
            this.setRenderingIntent(value);
            break;
          case 'FL':
            this.setFlatness(value);
            break;
          case 'Font':
            this.setFont(value[0], value[1]);
            break;
          case 'CA':
            this.current.strokeAlpha = state[1];
            break;
          case 'ca':
            this.current.fillAlpha = state[1];
            this.ctx.globalAlpha = state[1];
            break;
          case 'BM':
            this.ctx.globalCompositeOperation = value;
            break;
          case 'SMask':
            if (this.current.activeSMask) {
              // If SMask is currrenly used, it needs to be suspended or
              // finished. Suspend only makes sense when at least one save()
              // was performed and state needs to be reverted on restore().
              if (this.stateStack.length > 0 &&
                  (this.stateStack[this.stateStack.length - 1].activeSMask ===
                   this.current.activeSMask)) {
                this.suspendSMaskGroup();
              } else {
                this.endSMaskGroup();
              }
            }
            this.current.activeSMask = value ? this.tempSMask : null;
            if (this.current.activeSMask) {
              this.beginSMaskGroup();
            }
            this.tempSMask = null;
            break;
        }
      }
    },
    beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {

      var activeSMask = this.current.activeSMask;
      var drawnWidth = activeSMask.canvas.width;
      var drawnHeight = activeSMask.canvas.height;
      var cacheId = 'smaskGroupAt' + this.groupLevel;
      var scratchCanvas = this.cachedCanvases.getCanvas(
        cacheId, drawnWidth, drawnHeight, true);

      var currentCtx = this.ctx;
      var currentTransform = currentCtx.mozCurrentTransform;
      this.ctx.save();

      var groupCtx = scratchCanvas.context;
      groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
      groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);

      activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;

      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
        ['BM', 'source-over'],
        ['ca', 1],
        ['CA', 1]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      // Similar to endSMaskGroup, the intermediate canvas has to be composed
      // and future ctx state restored.
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();

      composeSMask(this.ctx, this.current.activeSMask, groupCtx,
                   this.webGLContext);
      this.ctx.restore();
      this.ctx.save(); // save is needed since SMask will be resumed.
      copyCtxState(groupCtx, this.ctx);

      // Saving state for resuming.
      this.current.resumeSMaskCtx = groupCtx;
      // Transform was changed in the SMask canvas, reflecting this change on
      // this.ctx.
      var deltaTransform = Util.transform(
        this.current.activeSMask.startTransformInverse,
        groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);

      // SMask was composed, the results at the groupCtx can be cleared.
      groupCtx.save();
      groupCtx.setTransform(1, 0, 0, 1, 0, 0);
      groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
      groupCtx.restore();
    },
    resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      // Resuming state saved by suspendSMaskGroup. We don't need to restore
      // any groupCtx state since restore() command (the only caller) will do
      // that for us. See also beginSMaskGroup.
      var groupCtx = this.current.resumeSMaskCtx;
      var currentCtx = this.ctx;
      this.ctx = groupCtx;
      this.groupStack.push(currentCtx);
      this.groupLevel++;
    },
    endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
      var groupCtx = this.ctx;
      this.groupLevel--;
      this.ctx = this.groupStack.pop();

      composeSMask(this.ctx, this.current.activeSMask, groupCtx,
                   this.webGLContext);
      this.ctx.restore();
      copyCtxState(groupCtx, this.ctx);
      // Transform was changed in the SMask canvas, reflecting this change on
      // this.ctx.
      var deltaTransform = Util.transform(
        this.current.activeSMask.startTransformInverse,
        groupCtx.mozCurrentTransform);
      this.ctx.transform.apply(this.ctx, deltaTransform);
    },
    save: function CanvasGraphics_save() {
      this.ctx.save();
      var old = this.current;
      this.stateStack.push(old);
      this.current = old.clone();
      this.current.resumeSMaskCtx = null;
    },
    restore: function CanvasGraphics_restore() {
      // SMask was suspended, we just need to resume it.
      if (this.current.resumeSMaskCtx) {
        this.resumeSMaskGroup();
      }
      // SMask has to be finished once there is no states that are using the
      // same SMask.
      if (this.current.activeSMask !== null && (this.stateStack.length === 0 ||
          this.stateStack[this.stateStack.length - 1].activeSMask !==
          this.current.activeSMask)) {
        this.endSMaskGroup();
      }

      if (this.stateStack.length !== 0) {
        this.current = this.stateStack.pop();
        this.ctx.restore();

        // Ensure that the clipping path is reset (fixes issue6413.pdf).
        this.pendingClip = null;

        this._cachedGetSinglePixelWidth = null;
      }
    },
    transform: function CanvasGraphics_transform(a, b, c, d, e, f) {
      this.ctx.transform(a, b, c, d, e, f);

      this._cachedGetSinglePixelWidth = null;
    },

    // Path
    constructPath: function CanvasGraphics_constructPath(ops, args) {
      var ctx = this.ctx;
      var current = this.current;
      var x = current.x, y = current.y;
      for (var i = 0, j = 0, ii = ops.length; i < ii; i++) {
        switch (ops[i] | 0) {
          case OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];
            if (width === 0) {
              width = this.getSinglePixelWidth();
            }
            if (height === 0) {
              height = this.getSinglePixelWidth();
            }
            var xw = x + width;
            var yh = y + height;
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(xw, y);
            this.ctx.lineTo(xw, yh);
            this.ctx.lineTo(x, yh);
            this.ctx.lineTo(x, y);
            this.ctx.closePath();
            break;
          case OPS.moveTo:
            x = args[j++];
            y = args[j++];
            ctx.moveTo(x, y);
            break;
          case OPS.lineTo:
            x = args[j++];
            y = args[j++];
            ctx.lineTo(x, y);
            break;
          case OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3],
                              x, y);
            j += 6;
            break;
          case OPS.curveTo2:
            ctx.bezierCurveTo(x, y, args[j], args[j + 1],
                              args[j + 2], args[j + 3]);
            x = args[j + 2];
            y = args[j + 3];
            j += 4;
            break;
          case OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
            j += 4;
            break;
          case OPS.closePath:
            ctx.closePath();
            break;
        }
      }
      current.setCurrentPoint(x, y);
    },
    closePath: function CanvasGraphics_closePath() {
      this.ctx.closePath();
    },
    stroke: function CanvasGraphics_stroke(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var strokeColor = this.current.strokeColor;
      // Prevent drawing too thin lines by enforcing a minimum line width.
      ctx.lineWidth = Math.max(this.getSinglePixelWidth() * MIN_WIDTH_FACTOR,
                               this.current.lineWidth);
      // For stroke we want to temporarily change the global alpha to the
      // stroking alpha.
      ctx.globalAlpha = this.current.strokeAlpha;
      if (strokeColor && strokeColor.hasOwnProperty('type') &&
          strokeColor.type === 'Pattern') {
        // for patterns, we transform to pattern space, calculate
        // the pattern, call stroke, and restore to user space
        ctx.save();
        ctx.strokeStyle = strokeColor.getPattern(ctx, this);
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.stroke();
      }
      if (consumePath) {
        this.consumePath();
      }
      // Restore the global alpha to the fill alpha
      ctx.globalAlpha = this.current.fillAlpha;
    },
    closeStroke: function CanvasGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },
    fill: function CanvasGraphics_fill(consumePath) {
      consumePath = typeof consumePath !== 'undefined' ? consumePath : true;
      var ctx = this.ctx;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      var needRestore = false;

      if (isPatternFill) {
        ctx.save();
        if (this.baseTransform) {
          ctx.setTransform.apply(ctx, this.baseTransform);
        }
        ctx.fillStyle = fillColor.getPattern(ctx, this);
        needRestore = true;
      }

      if (this.pendingEOFill) {
        ctx.fill('evenodd');
        this.pendingEOFill = false;
      } else {
        ctx.fill();
      }

      if (needRestore) {
        ctx.restore();
      }
      if (consumePath) {
        this.consumePath();
      }
    },
    eoFill: function CanvasGraphics_eoFill() {
      this.pendingEOFill = true;
      this.fill();
    },
    fillStroke: function CanvasGraphics_fillStroke() {
      this.fill(false);
      this.stroke(false);

      this.consumePath();
    },
    eoFillStroke: function CanvasGraphics_eoFillStroke() {
      this.pendingEOFill = true;
      this.fillStroke();
    },
    closeFillStroke: function CanvasGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },
    closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
      this.pendingEOFill = true;
      this.closePath();
      this.fillStroke();
    },
    endPath: function CanvasGraphics_endPath() {
      this.consumePath();
    },

    // Clipping
    clip: function CanvasGraphics_clip() {
      this.pendingClip = NORMAL_CLIP;
    },
    eoClip: function CanvasGraphics_eoClip() {
      this.pendingClip = EO_CLIP;
    },

    // Text
    beginText: function CanvasGraphics_beginText() {
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.textMatrixScale = 1;
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    endText: function CanvasGraphics_endText() {
      var paths = this.pendingTextPaths;
      var ctx = this.ctx;
      if (paths === undefined) {
        ctx.beginPath();
        return;
      }

      ctx.save();
      ctx.beginPath();
      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        ctx.setTransform.apply(ctx, path.transform);
        ctx.translate(path.x, path.y);
        path.addToPath(ctx, path.fontSize);
      }
      ctx.restore();
      ctx.clip();
      ctx.beginPath();
      delete this.pendingTextPaths;
    },
    setCharSpacing: function CanvasGraphics_setCharSpacing(spacing) {
      this.current.charSpacing = spacing;
    },
    setWordSpacing: function CanvasGraphics_setWordSpacing(spacing) {
      this.current.wordSpacing = spacing;
    },
    setHScale: function CanvasGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },
    setLeading: function CanvasGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },
    setFont: function CanvasGraphics_setFont(fontRefName, size) {
      var fontObj = this.commonObjs.get(fontRefName);
      var current = this.current;

      if (!fontObj) {
        throw new Error(`Can't find font for ${fontRefName}`);
      }

      current.fontMatrix = (fontObj.fontMatrix ?
                            fontObj.fontMatrix : FONT_IDENTITY_MATRIX);

      // A valid matrix needs all main diagonal elements to be non-zero
      // This also ensures we bypass FF bugzilla bug #719844.
      if (current.fontMatrix[0] === 0 ||
          current.fontMatrix[3] === 0) {
        warn('Invalid font matrix for font ' + fontRefName);
      }

      // The spec for Tf (setFont) says that 'size' specifies the font 'scale',
      // and in some docs this can be negative (inverted x-y axes).
      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }

      this.current.font = fontObj;
      this.current.fontSize = size;

      if (fontObj.isType3Font) {
        return; // we don't need ctx.font for Type3 fonts
      }

      var name = fontObj.loadedName || 'sans-serif';
      var bold = fontObj.black ? '900' : (fontObj.bold ? 'bold' : 'normal');
      var italic = fontObj.italic ? 'italic' : 'normal';
      var typeface = '"' + name + '", ' + fontObj.fallbackName;

      // Some font backends cannot handle fonts below certain size.
      // Keeping the font at minimal size and using the fontSizeScale to change
      // the current transformation matrix before the fillText/strokeText.
      // See https://bugzilla.mozilla.org/show_bug.cgi?id=726227
      var browserFontSize = size < MIN_FONT_SIZE ? MIN_FONT_SIZE :
                            size > MAX_FONT_SIZE ? MAX_FONT_SIZE : size;
      this.current.fontSizeScale = size / browserFontSize;

      var rule = italic + ' ' + bold + ' ' + browserFontSize + 'px ' + typeface;
      this.ctx.font = rule;
    },
    setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(mode) {
      this.current.textRenderingMode = mode;
    },
    setTextRise: function CanvasGraphics_setTextRise(rise) {
      this.current.textRise = rise;
    },
    moveText: function CanvasGraphics_moveText(x, y) {
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;
    },
    setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },
    setTextMatrix: function CanvasGraphics_setTextMatrix(a, b, c, d, e, f) {
      this.current.textMatrix = [a, b, c, d, e, f];
      this.current.textMatrixScale = Math.sqrt(a * a + b * b);

      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
    },
    nextLine: function CanvasGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },

    paintChar(character, x, y, patternTransform) {
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var textRenderingMode = current.textRenderingMode;
      var fontSize = current.fontSize / current.fontSizeScale;
      var fillStrokeMode = textRenderingMode &
        TextRenderingMode.FILL_STROKE_MASK;
      var isAddToPathSet = !!(textRenderingMode &
        TextRenderingMode.ADD_TO_PATH_FLAG);
      let patternFill = current.patternFill && font.data;

      var addToPath;
      if (font.disableFontFace || isAddToPathSet || patternFill) {
        addToPath = font.getPathGenerator(this.commonObjs, character);
      }

      if (font.disableFontFace || patternFill) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();
        addToPath(ctx, fontSize);
        if (patternTransform) {
          ctx.setTransform.apply(ctx, patternTransform);
        }
        if (fillStrokeMode === TextRenderingMode.FILL ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.fill();
        }
        if (fillStrokeMode === TextRenderingMode.STROKE ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.stroke();
        }
        ctx.restore();
      } else {
        if (fillStrokeMode === TextRenderingMode.FILL ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.fillText(character, x, y);
        }
        if (fillStrokeMode === TextRenderingMode.STROKE ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          ctx.strokeText(character, x, y);
        }
      }

      if (isAddToPathSet) {
        var paths = this.pendingTextPaths || (this.pendingTextPaths = []);
        paths.push({
          transform: ctx.mozCurrentTransform,
          x,
          y,
          fontSize,
          addToPath,
        });
      }
    },

    get isFontSubpixelAAEnabled() {
      // Checks if anti-aliasing is enabled when scaled text is painted.
      // On Windows GDI scaled fonts looks bad.
      var ctx = this.canvasFactory.create(10, 10).context;
      ctx.scale(1.5, 1);
      ctx.fillText('I', 0, 10);
      var data = ctx.getImageData(0, 0, 10, 10).data;
      var enabled = false;
      for (var i = 3; i < data.length; i += 4) {
        if (data[i] > 0 && data[i] < 255) {
          enabled = true;
          break;
        }
      }
      return shadow(this, 'isFontSubpixelAAEnabled', enabled);
    },

    showText: function CanvasGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      if (font.isType3Font) {
        return this.showType3Text(glyphs);
      }

      var fontSize = current.fontSize;
      if (fontSize === 0) {
        return;
      }

      var ctx = this.ctx;
      var fontSizeScale = current.fontSizeScale;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var spacingDir = vertical ? 1 : -1;
      var defaultVMetrics = font.defaultVMetrics;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];

      var simpleFillText =
        current.textRenderingMode === TextRenderingMode.FILL &&
        !font.disableFontFace && !current.patternFill;

      ctx.save();
      let patternTransform;
      if (current.patternFill) {
        // TODO: Patterns are not applied correctly to text if a non-embedded
        // font is used. E.g. issue 8111 and ShowText-ShadingPattern.pdf.
        ctx.save();
        let pattern = current.fillColor.getPattern(ctx, this);
        patternTransform = ctx.mozCurrentTransform;
        ctx.restore();
        ctx.fillStyle = pattern;
      }
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y + current.textRise);

      if (fontDirection > 0) {
        ctx.scale(textHScale, -1);
      } else {
        ctx.scale(textHScale, 1);
      }

      var lineWidth = current.lineWidth;
      var scale = current.textMatrixScale;
      if (scale === 0 || lineWidth === 0) {
        var fillStrokeMode = current.textRenderingMode &
          TextRenderingMode.FILL_STROKE_MASK;
        if (fillStrokeMode === TextRenderingMode.STROKE ||
            fillStrokeMode === TextRenderingMode.FILL_STROKE) {
          this._cachedGetSinglePixelWidth = null;
          lineWidth = this.getSinglePixelWidth() * MIN_WIDTH_FACTOR;
        }
      } else {
        lineWidth /= scale;
      }

      if (fontSizeScale !== 1.0) {
        ctx.scale(fontSizeScale, fontSizeScale);
        lineWidth /= fontSizeScale;
      }

      ctx.lineWidth = lineWidth;

      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];
        if (isNum(glyph)) {
          x += spacingDir * glyph * fontSize / 1000;
          continue;
        }

        var restoreNeeded = false;
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var character = glyph.fontChar;
        var accent = glyph.accent;
        var scaledX, scaledY, scaledAccentX, scaledAccentY;
        var width = glyph.width;
        if (vertical) {
          var vmetric, vx, vy;
          vmetric = glyph.vmetric || defaultVMetrics;
          vx = glyph.vmetric ? vmetric[1] : width * 0.5;
          vx = -vx * widthAdvanceScale;
          vy = vmetric[2] * widthAdvanceScale;

          width = vmetric ? -vmetric[0] : width;
          scaledX = vx / fontSizeScale;
          scaledY = (x + vy) / fontSizeScale;
        } else {
          scaledX = x / fontSizeScale;
          scaledY = 0;
        }

        if (font.remeasure && width > 0) {
          // Some standard fonts may not have the exact width: rescale per
          // character if measured width is greater than expected glyph width
          // and subpixel-aa is enabled, otherwise just center the glyph.
          var measuredWidth = ctx.measureText(character).width * 1000 /
            fontSize * fontSizeScale;
          if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
            var characterScaleX = width / measuredWidth;
            restoreNeeded = true;
            ctx.save();
            ctx.scale(characterScaleX, 1);
            scaledX /= characterScaleX;
          } else if (width !== measuredWidth) {
            scaledX += (width - measuredWidth) / 2000 *
              fontSize / fontSizeScale;
          }
        }

        // Only attempt to draw the glyph if it is actually in the embedded font
        // file or if there isn't a font file so the fallback font is shown.
        if (glyph.isInFont || font.missingFile) {
          if (simpleFillText && !accent) {
            // common case
            ctx.fillText(character, scaledX, scaledY);
          } else {
            this.paintChar(character, scaledX, scaledY, patternTransform);
            if (accent) {
              scaledAccentX = scaledX + accent.offset.x / fontSizeScale;
              scaledAccentY = scaledY - accent.offset.y / fontSizeScale;
              this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY,
                             patternTransform);
            }
          }
        }

        var charWidth = width * widthAdvanceScale + spacing * fontDirection;
        x += charWidth;

        if (restoreNeeded) {
          ctx.restore();
        }
      }
      if (vertical) {
        current.y -= x * textHScale;
      } else {
        current.x += x * textHScale;
      }
      ctx.restore();
    },

    showType3Text: function CanvasGraphics_showType3Text(glyphs) {
      // Type3 fonts - each glyph is a "mini-PDF"
      var ctx = this.ctx;
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;
      var fontDirection = current.fontDirection;
      var spacingDir = font.vertical ? 1 : -1;
      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var textHScale = current.textHScale * fontDirection;
      var fontMatrix = current.fontMatrix || FONT_IDENTITY_MATRIX;
      var glyphsLength = glyphs.length;
      var isTextInvisible =
        current.textRenderingMode === TextRenderingMode.INVISIBLE;
      var i, glyph, width, spacingLength;

      if (isTextInvisible || fontSize === 0) {
        return;
      }
      this._cachedGetSinglePixelWidth = null;

      ctx.save();
      ctx.transform.apply(ctx, current.textMatrix);
      ctx.translate(current.x, current.y);

      ctx.scale(textHScale, fontDirection);

      for (i = 0; i < glyphsLength; ++i) {
        glyph = glyphs[i];
        if (isNum(glyph)) {
          spacingLength = spacingDir * glyph * fontSize / 1000;
          this.ctx.translate(spacingLength, 0);
          current.x += spacingLength * textHScale;
          continue;
        }

        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var operatorList = font.charProcOperatorList[glyph.operatorListId];
        if (!operatorList) {
          warn(`Type3 character "${glyph.operatorListId}" is not available.`);
          continue;
        }
        this.processingType3 = glyph;
        this.save();
        ctx.scale(fontSize, fontSize);
        ctx.transform.apply(ctx, fontMatrix);
        this.executeOperatorList(operatorList);
        this.restore();

        var transformed = Util.applyTransform([glyph.width, 0], fontMatrix);
        width = transformed[0] * fontSize + spacing;

        ctx.translate(width, 0);
        current.x += width * textHScale;
      }
      ctx.restore();
      this.processingType3 = null;
    },

    // Type3 fonts
    setCharWidth: function CanvasGraphics_setCharWidth(xWidth, yWidth) {
      // We can safely ignore this since the width should be the same
      // as the width in the Widths array.
    },
    setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(xWidth,
                                                                        yWidth,
                                                                        llx,
                                                                        lly,
                                                                        urx,
                                                                        ury) {
      // TODO According to the spec we're also suppose to ignore any operators
      // that set color or include images while processing this type3 font.
      this.ctx.rect(llx, lly, urx - llx, ury - lly);
      this.clip();
      this.endPath();
    },

    // Color
    getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(IR) {
      var pattern;
      if (IR[0] === 'TilingPattern') {
        var color = IR[1];
        var baseTransform = this.baseTransform ||
                            this.ctx.mozCurrentTransform.slice();
        var canvasGraphicsFactory = {
          createCanvasGraphics: (ctx) => {
            return new CanvasGraphics(ctx, this.commonObjs, this.objs,
                                      this.canvasFactory, this.webGLContext);
          },
        };
        pattern = new TilingPattern(IR, color, this.ctx, canvasGraphicsFactory,
                                    baseTransform);
      } else {
        pattern = getShadingPatternFromIR(IR);
      }
      return pattern;
    },
    setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
      this.current.strokeColor = this.getColorN_Pattern(arguments);
    },
    setFillColorN: function CanvasGraphics_setFillColorN() {
      this.current.fillColor = this.getColorN_Pattern(arguments);
      this.current.patternFill = true;
    },
    setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.strokeStyle = color;
      this.current.strokeColor = color;
    },
    setFillRGBColor: function CanvasGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.ctx.fillStyle = color;
      this.current.fillColor = color;
      this.current.patternFill = false;
    },

    shadingFill: function CanvasGraphics_shadingFill(patternIR) {
      var ctx = this.ctx;

      this.save();
      var pattern = getShadingPatternFromIR(patternIR);
      ctx.fillStyle = pattern.getPattern(ctx, this, true);

      var inv = ctx.mozCurrentTransformInverse;
      if (inv) {
        var canvas = ctx.canvas;
        var width = canvas.width;
        var height = canvas.height;

        var bl = Util.applyTransform([0, 0], inv);
        var br = Util.applyTransform([0, height], inv);
        var ul = Util.applyTransform([width, 0], inv);
        var ur = Util.applyTransform([width, height], inv);

        var x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
        var y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
        var x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
        var y1 = Math.max(bl[1], br[1], ul[1], ur[1]);

        this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      } else {
        // HACK to draw the gradient onto an infinite rectangle.
        // PDF gradients are drawn across the entire image while
        // Canvas only allows gradients to be drawn in a rectangle
        // The following bug should allow us to remove this.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=664884

        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      }

      this.restore();
    },

    // Images
    beginInlineImage: function CanvasGraphics_beginInlineImage() {
      unreachable('Should not call beginInlineImage');
    },
    beginImageData: function CanvasGraphics_beginImageData() {
      unreachable('Should not call beginImageData');
    },

    paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(matrix,
                                                                        bbox) {
      this.save();
      this.baseTransformStack.push(this.baseTransform);

      if (Array.isArray(matrix) && matrix.length === 6) {
        this.transform.apply(this, matrix);
      }

      this.baseTransform = this.ctx.mozCurrentTransform;

      if (Array.isArray(bbox) && bbox.length === 4) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];
        this.ctx.rect(bbox[0], bbox[1], width, height);
        this.clip();
        this.endPath();
      }
    },

    paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
      this.restore();
      this.baseTransform = this.baseTransformStack.pop();
    },

    beginGroup: function CanvasGraphics_beginGroup(group) {
      this.save();
      var currentCtx = this.ctx;
      // TODO non-isolated groups - according to Rik at adobe non-isolated
      // group results aren't usually that different and they even have tools
      // that ignore this setting. Notes from Rik on implementing:
      // - When you encounter an transparency group, create a new canvas with
      // the dimensions of the bbox
      // - copy the content from the previous canvas to the new canvas
      // - draw as usual
      // - remove the backdrop alpha:
      // alphaNew = 1 - (1 - alpha)/(1 - alphaBackdrop) with 'alpha' the alpha
      // value of your transparency group and 'alphaBackdrop' the alpha of the
      // backdrop
      // - remove background color:
      // colorNew = color - alphaNew *colorBackdrop /(1 - alphaNew)
      if (!group.isolated) {
        info('TODO: Support non-isolated groups.');
      }

      // TODO knockout - supposedly possible with the clever use of compositing
      // modes.
      if (group.knockout) {
        warn('Knockout groups not supported.');
      }

      var currentTransform = currentCtx.mozCurrentTransform;
      if (group.matrix) {
        currentCtx.transform.apply(currentCtx, group.matrix);
      }
      if (!group.bbox) {
        throw new Error('Bounding box is required.');
      }

      // Based on the current transform figure out how big the bounding box
      // will actually be.
      var bounds = Util.getAxialAlignedBoundingBox(
                    group.bbox,
                    currentCtx.mozCurrentTransform);
      // Clip the bounding box to the current canvas.
      var canvasBounds = [0,
                          0,
                          currentCtx.canvas.width,
                          currentCtx.canvas.height];
      bounds = Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
      // Use ceil in case we're between sizes so we don't create canvas that is
      // too small and make the canvas at least 1x1 pixels.
      var offsetX = Math.floor(bounds[0]);
      var offsetY = Math.floor(bounds[1]);
      var drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
      var drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
      var scaleX = 1, scaleY = 1;
      if (drawnWidth > MAX_GROUP_SIZE) {
        scaleX = drawnWidth / MAX_GROUP_SIZE;
        drawnWidth = MAX_GROUP_SIZE;
      }
      if (drawnHeight > MAX_GROUP_SIZE) {
        scaleY = drawnHeight / MAX_GROUP_SIZE;
        drawnHeight = MAX_GROUP_SIZE;
      }

      var cacheId = 'groupAt' + this.groupLevel;
      if (group.smask) {
        // Using two cache entries is case if masks are used one after another.
        cacheId += '_smask_' + ((this.smaskCounter++) % 2);
      }
      var scratchCanvas = this.cachedCanvases.getCanvas(
        cacheId, drawnWidth, drawnHeight, true);
      var groupCtx = scratchCanvas.context;

      // Since we created a new canvas that is just the size of the bounding box
      // we have to translate the group ctx.
      groupCtx.scale(1 / scaleX, 1 / scaleY);
      groupCtx.translate(-offsetX, -offsetY);
      groupCtx.transform.apply(groupCtx, currentTransform);

      if (group.smask) {
        // Saving state and cached mask to be used in setGState.
        this.smaskStack.push({
          canvas: scratchCanvas.canvas,
          context: groupCtx,
          offsetX,
          offsetY,
          scaleX,
          scaleY,
          subtype: group.smask.subtype,
          backdrop: group.smask.backdrop,
          transferMap: group.smask.transferMap || null,
          startTransformInverse: null, // used during suspend operation
        });
      } else {
        // Setup the current ctx so when the group is popped we draw it at the
        // right location.
        currentCtx.setTransform(1, 0, 0, 1, 0, 0);
        currentCtx.translate(offsetX, offsetY);
        currentCtx.scale(scaleX, scaleY);
      }
      // The transparency group inherits all off the current graphics state
      // except the blend mode, soft mask, and alpha constants.
      copyCtxState(currentCtx, groupCtx);
      this.ctx = groupCtx;
      this.setGState([
        ['BM', 'source-over'],
        ['ca', 1],
        ['CA', 1]
      ]);
      this.groupStack.push(currentCtx);
      this.groupLevel++;

      // Reseting mask state, masks will be applied on restore of the group.
      this.current.activeSMask = null;
    },

    endGroup: function CanvasGraphics_endGroup(group) {
      this.groupLevel--;
      var groupCtx = this.ctx;
      this.ctx = this.groupStack.pop();
      // Turn off image smoothing to avoid sub pixel interpolation which can
      // look kind of blurry for some pdfs.
      if (this.ctx.imageSmoothingEnabled !== undefined) {
        this.ctx.imageSmoothingEnabled = false;
      } else {
        this.ctx.mozImageSmoothingEnabled = false;
      }
      if (group.smask) {
        this.tempSMask = this.smaskStack.pop();
      } else {
        this.ctx.drawImage(groupCtx.canvas, 0, 0);
      }
      this.restore();
    },

    beginAnnotations: function CanvasGraphics_beginAnnotations() {
      this.save();
      if (this.baseTransform) {
        this.ctx.setTransform.apply(this.ctx, this.baseTransform);
      }
    },

    endAnnotations: function CanvasGraphics_endAnnotations() {
      this.restore();
    },

    beginAnnotation: function CanvasGraphics_beginAnnotation(rect, transform,
                                                             matrix) {
      this.save();
      resetCtxToDefault(this.ctx);
      this.current = new CanvasExtraState();

      if (Array.isArray(rect) && rect.length === 4) {
        var width = rect[2] - rect[0];
        var height = rect[3] - rect[1];
        this.ctx.rect(rect[0], rect[1], width, height);
        this.clip();
        this.endPath();
      }

      this.transform.apply(this, transform);
      this.transform.apply(this, matrix);
    },

    endAnnotation: function CanvasGraphics_endAnnotation() {
      this.restore();
    },

    paintJpegXObject: function CanvasGraphics_paintJpegXObject(objId, w, h) {
      var domImage = this.objs.get(objId);
      if (!domImage) {
        warn('Dependent image isn\'t ready yet');
        return;
      }

      this.save();

      var ctx = this.ctx;
      // scale the image to the unit square
      ctx.scale(1 / w, -1 / h);

      ctx.drawImage(domImage, 0, 0, domImage.width, domImage.height,
                    0, -h, w, h);
      if (this.imageLayer) {
        var currentTransform = ctx.mozCurrentTransformInverse;
        var position = this.getCanvasPosition(0, 0);
        this.imageLayer.appendImage({
          objId,
          left: position[0],
          top: position[1],
          width: w / currentTransform[0],
          height: h / currentTransform[3],
        });
      }
      this.restore();
    },

    paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(img) {
      var ctx = this.ctx;
      var width = img.width, height = img.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;

      var glyph = this.processingType3;

      if (glyph && glyph.compiled === undefined) {
        if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
          glyph.compiled =
            compileType3Glyph({ data: img.data, width, height, });
        } else {
          glyph.compiled = null;
        }
      }

      if (glyph && glyph.compiled) {
        glyph.compiled(ctx);
        return;
      }

      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
                                                     width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();

      putBinaryImageMask(maskCtx, img);

      maskCtx.globalCompositeOperation = 'source-in';

      maskCtx.fillStyle = isPatternFill ?
                          fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);

      maskCtx.restore();

      this.paintInlineImageXObject(maskCanvas.canvas);
    },

    paintImageMaskXObjectRepeat:
      function CanvasGraphics_paintImageMaskXObjectRepeat(imgData, scaleX,
                                                          scaleY, positions) {
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;

      var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
                                                     width, height);
      var maskCtx = maskCanvas.context;
      maskCtx.save();

      putBinaryImageMask(maskCtx, imgData);

      maskCtx.globalCompositeOperation = 'source-in';

      maskCtx.fillStyle = isPatternFill ?
                          fillColor.getPattern(maskCtx, this) : fillColor;
      maskCtx.fillRect(0, 0, width, height);

      maskCtx.restore();

      var ctx = this.ctx;
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        ctx.save();
        ctx.transform(scaleX, 0, 0, scaleY, positions[i], positions[i + 1]);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height,
          0, -1, 1, 1);
        ctx.restore();
      }
    },

    paintImageMaskXObjectGroup:
      function CanvasGraphics_paintImageMaskXObjectGroup(images) {
      var ctx = this.ctx;

      var fillColor = this.current.fillColor;
      var isPatternFill = this.current.patternFill;
      for (var i = 0, ii = images.length; i < ii; i++) {
        var image = images[i];
        var width = image.width, height = image.height;

        var maskCanvas = this.cachedCanvases.getCanvas('maskCanvas',
                                                       width, height);
        var maskCtx = maskCanvas.context;
        maskCtx.save();

        putBinaryImageMask(maskCtx, image);

        maskCtx.globalCompositeOperation = 'source-in';

        maskCtx.fillStyle = isPatternFill ?
                            fillColor.getPattern(maskCtx, this) : fillColor;
        maskCtx.fillRect(0, 0, width, height);

        maskCtx.restore();

        ctx.save();
        ctx.transform.apply(ctx, image.transform);
        ctx.scale(1, -1);
        ctx.drawImage(maskCanvas.canvas, 0, 0, width, height,
                      0, -1, 1, 1);
        ctx.restore();
      }
    },

    paintImageXObject: function CanvasGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        warn('Dependent image isn\'t ready yet');
        return;
      }

      this.paintInlineImageXObject(imgData);
    },

    paintImageXObjectRepeat:
      function CanvasGraphics_paintImageXObjectRepeat(objId, scaleX, scaleY,
                                                          positions) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        warn('Dependent image isn\'t ready yet');
        return;
      }

      var width = imgData.width;
      var height = imgData.height;
      var map = [];
      for (var i = 0, ii = positions.length; i < ii; i += 2) {
        map.push({ transform: [scaleX, 0, 0, scaleY, positions[i],
                   positions[i + 1]], x: 0, y: 0, w: width, h: height, });
      }
      this.paintInlineImageXObjectGroup(imgData, map);
    },

    paintInlineImageXObject:
      function CanvasGraphics_paintInlineImageXObject(imgData) {
      var width = imgData.width;
      var height = imgData.height;
      var ctx = this.ctx;

      this.save();
      // scale the image to the unit square
      ctx.scale(1 / width, -1 / height);

      var currentTransform = ctx.mozCurrentTransformInverse;
      var a = currentTransform[0], b = currentTransform[1];
      var widthScale = Math.max(Math.sqrt(a * a + b * b), 1);
      var c = currentTransform[2], d = currentTransform[3];
      var heightScale = Math.max(Math.sqrt(c * c + d * d), 1);

      var imgToPaint, tmpCanvas;
      // typeof check is needed due to node.js support, see issue #8489
      if ((typeof HTMLElement === 'function' &&
           imgData instanceof HTMLElement) || !imgData.data) {
        imgToPaint = imgData;
      } else {
        tmpCanvas = this.cachedCanvases.getCanvas('inlineImage',
                                                  width, height);
        var tmpCtx = tmpCanvas.context;
        putBinaryImageData(tmpCtx, imgData);
        imgToPaint = tmpCanvas.canvas;
      }

      var paintWidth = width, paintHeight = height;
      var tmpCanvasId = 'prescale1';
      // Vertial or horizontal scaling shall not be more than 2 to not loose the
      // pixels during drawImage operation, painting on the temporary canvas(es)
      // that are twice smaller in size
      while ((widthScale > 2 && paintWidth > 1) ||
             (heightScale > 2 && paintHeight > 1)) {
        var newWidth = paintWidth, newHeight = paintHeight;
        if (widthScale > 2 && paintWidth > 1) {
          newWidth = Math.ceil(paintWidth / 2);
          widthScale /= paintWidth / newWidth;
        }
        if (heightScale > 2 && paintHeight > 1) {
          newHeight = Math.ceil(paintHeight / 2);
          heightScale /= paintHeight / newHeight;
        }
        tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId,
                                                  newWidth, newHeight);
        tmpCtx = tmpCanvas.context;
        tmpCtx.clearRect(0, 0, newWidth, newHeight);
        tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight,
                                     0, 0, newWidth, newHeight);
        imgToPaint = tmpCanvas.canvas;
        paintWidth = newWidth;
        paintHeight = newHeight;
        tmpCanvasId = tmpCanvasId === 'prescale1' ? 'prescale2' : 'prescale1';
      }
      ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight,
                                0, -height, width, height);

      if (this.imageLayer) {
        var position = this.getCanvasPosition(0, -height);
        this.imageLayer.appendImage({
          imgData,
          left: position[0],
          top: position[1],
          width: width / currentTransform[0],
          height: height / currentTransform[3],
        });
      }
      this.restore();
    },

    paintInlineImageXObjectGroup:
      function CanvasGraphics_paintInlineImageXObjectGroup(imgData, map) {
      var ctx = this.ctx;
      var w = imgData.width;
      var h = imgData.height;

      var tmpCanvas = this.cachedCanvases.getCanvas('inlineImage', w, h);
      var tmpCtx = tmpCanvas.context;
      putBinaryImageData(tmpCtx, imgData);

      for (var i = 0, ii = map.length; i < ii; i++) {
        var entry = map[i];
        ctx.save();
        ctx.transform.apply(ctx, entry.transform);
        ctx.scale(1, -1);
        ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h,
                      0, -1, 1, 1);
        if (this.imageLayer) {
          var position = this.getCanvasPosition(entry.x, entry.y);
          this.imageLayer.appendImage({
            imgData,
            left: position[0],
            top: position[1],
            width: w,
            height: h,
          });
        }
        ctx.restore();
      }
    },

    paintSolidColorImageMask:
      function CanvasGraphics_paintSolidColorImageMask() {
        this.ctx.fillRect(0, 0, 1, 1);
    },

    paintXObject: function CanvasGraphics_paintXObject() {
      warn('Unsupported \'paintXObject\' command.');
    },

    // Marked content

    markPoint: function CanvasGraphics_markPoint(tag) {
      // TODO Marked content.
    },
    markPointProps: function CanvasGraphics_markPointProps(tag, properties) {
      // TODO Marked content.
    },
    beginMarkedContent: function CanvasGraphics_beginMarkedContent(tag) {
      // TODO Marked content.
    },
    beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(
                                        tag, properties) {
      // TODO Marked content.
    },
    endMarkedContent: function CanvasGraphics_endMarkedContent() {
      // TODO Marked content.
    },

    // Compatibility

    beginCompat: function CanvasGraphics_beginCompat() {
      // TODO ignore undefined operators (should we do that anyway?)
    },
    endCompat: function CanvasGraphics_endCompat() {
      // TODO stop ignoring undefined operators
    },

    // Helper functions

    consumePath: function CanvasGraphics_consumePath() {
      var ctx = this.ctx;
      if (this.pendingClip) {
        if (this.pendingClip === EO_CLIP) {
          ctx.clip('evenodd');
        } else {
          ctx.clip();
        }
        this.pendingClip = null;
      }
      ctx.beginPath();
    },
    getSinglePixelWidth(scale) {
      if (this._cachedGetSinglePixelWidth === null) {
        const inverse = this.ctx.mozCurrentTransformInverse;
        // max of the current horizontal and vertical scale
        this._cachedGetSinglePixelWidth = Math.sqrt(Math.max(
          (inverse[0] * inverse[0] + inverse[1] * inverse[1]),
          (inverse[2] * inverse[2] + inverse[3] * inverse[3])));
      }
      return this._cachedGetSinglePixelWidth;
    },
    getCanvasPosition: function CanvasGraphics_getCanvasPosition(x, y) {
      var transform = this.ctx.mozCurrentTransform;
      return [
        transform[0] * x + transform[2] * y + transform[4],
        transform[1] * x + transform[3] * y + transform[5]
      ];
    },
  };

  for (var op in OPS) {
    CanvasGraphics.prototype[OPS[op]] = CanvasGraphics.prototype[op];
  }

  return CanvasGraphics;
})();

/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const GlobalWorkerOptions = Object.create(null);

/**
 * Defines global port for worker process. Overrides the `workerSrc` option.
 * @var {Object}
 */
GlobalWorkerOptions.workerPort = (GlobalWorkerOptions.workerPort === undefined ?
                                  null : GlobalWorkerOptions.workerPort);

/**
 * Path and filename of the worker file. Required when workers are enabled in
 * development mode. If unspecified in production builds, the worker will be
 * loaded based on the location of the `pdf.js` file.
 *
 * NOTE: The `workerSrc` should always be set in custom applications, in order
 *       to prevent issues caused by third-party frameworks and libraries.
 * @var {string}
 */
GlobalWorkerOptions.workerSrc = (true);

var worker_options = /*#__PURE__*/Object.freeze({
	__proto__: null,
	GlobalWorkerOptions: GlobalWorkerOptions
});

/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

async function resolveCall(fn, args, thisArg = null) {
  if (!fn) {
    return;
  }
  return fn.apply(thisArg, args);
}

function wrapReason(reason) {
  if (typeof reason !== 'object') {
    return reason;
  }
  switch (reason.name) {
    case 'AbortException':
      return new AbortException(reason.message);
    case 'MissingPDFException':
      return new MissingPDFException(reason.message);
    case 'UnexpectedResponseException':
      return new UnexpectedResponseException(reason.message, reason.status);
    default:
      return new UnknownErrorException(reason.message, reason.details);
  }
}

function makeReasonSerializable(reason) {
  if (!(reason instanceof Error) ||
      reason instanceof AbortException ||
      reason instanceof MissingPDFException ||
      reason instanceof UnexpectedResponseException ||
      reason instanceof UnknownErrorException) {
    return reason;
  }
  return new UnknownErrorException(reason.message, reason.toString());
}

function resolveOrReject(capability, success, reason) {
  if (success) {
    capability.resolve();
  } else {
    capability.reject(reason);
  }
}

function finalize(promise) {
  return Promise.resolve(promise).catch(() => {});
}

function MessageHandler(sourceName, targetName, comObj) {
  this.sourceName = sourceName;
  this.targetName = targetName;
  this.comObj = comObj;
  this.callbackId = 1;
  this.streamId = 1;
  this.postMessageTransfers = true;
  this.streamSinks = Object.create(null);
  this.streamControllers = Object.create(null);
  let callbacksCapabilities = this.callbacksCapabilities = Object.create(null);
  let ah = this.actionHandler = Object.create(null);

  this._onComObjOnMessage = (event) => {
    let data = event.data;
    if (data.targetName !== this.sourceName) {
      return;
    }
    if (data.stream) {
      this._processStreamMessage(data);
    } else if (data.isReply) {
      let callbackId = data.callbackId;
      if (data.callbackId in callbacksCapabilities) {
        let callback = callbacksCapabilities[callbackId];
        delete callbacksCapabilities[callbackId];
        if ('error' in data) {
          callback.reject(wrapReason(data.error));
        } else {
          callback.resolve(data.data);
        }
      } else {
        throw new Error(`Cannot resolve callback ${callbackId}`);
      }
    } else if (data.action in ah) {
      let action = ah[data.action];
      if (data.callbackId) {
        let sourceName = this.sourceName;
        let targetName = data.sourceName;
        Promise.resolve().then(function () {
          return action[0].call(action[1], data.data);
        }).then((result) => {
          comObj.postMessage({
            sourceName,
            targetName,
            isReply: true,
            callbackId: data.callbackId,
            data: result,
          });
        }, (reason) => {
          comObj.postMessage({
            sourceName,
            targetName,
            isReply: true,
            callbackId: data.callbackId,
            error: makeReasonSerializable(reason),
          });
        });
      } else if (data.streamId) {
        this._createStreamSink(data);
      } else {
        action[0].call(action[1], data.data);
      }
    } else {
      throw new Error(`Unknown action from worker: ${data.action}`);
    }
  };
  comObj.addEventListener('message', this._onComObjOnMessage);
}

MessageHandler.prototype = {
  on(actionName, handler, scope) {
    var ah = this.actionHandler;
    if (ah[actionName]) {
      throw new Error(`There is already an actionName called "${actionName}"`);
    }
    ah[actionName] = [handler, scope];
  },
  /**
   * Sends a message to the comObj to invoke the action with the supplied data.
   * @param {String} actionName - Action to call.
   * @param {JSON} data - JSON data to send.
   * @param {Array} [transfers] - Optional list of transfers/ArrayBuffers
   */
  send(actionName, data, transfers) {
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data,
    };
    this.postMessage(message, transfers);
  },
  /**
   * Sends a message to the comObj to invoke the action with the supplied data.
   * Expects that the other side will callback with the response.
   * @param {String} actionName - Action to call.
   * @param {JSON} data - JSON data to send.
   * @param {Array} [transfers] - Optional list of transfers/ArrayBuffers.
   * @returns {Promise} Promise to be resolved with response data.
   */
  sendWithPromise(actionName, data, transfers) {
    var callbackId = this.callbackId++;
    var message = {
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: actionName,
      data,
      callbackId,
    };
    var capability = createPromiseCapability();
    this.callbacksCapabilities[callbackId] = capability;
    try {
      this.postMessage(message, transfers);
    } catch (e) {
      capability.reject(e);
    }
    return capability.promise;
  },
  /**
   * Sends a message to the comObj to invoke the action with the supplied data.
   * Expect that the other side will callback to signal 'start_complete'.
   * @param {String} actionName - Action to call.
   * @param {JSON} data - JSON data to send.
   * @param {Object} queueingStrategy - strategy to signal backpressure based on
   *                 internal queue.
   * @param {Array} [transfers] - Optional list of transfers/ArrayBuffers.
   * @return {ReadableStream} ReadableStream to read data in chunks.
   */
  sendWithStream(actionName, data, queueingStrategy, transfers) {
    let streamId = this.streamId++;
    let sourceName = this.sourceName;
    let targetName = this.targetName;

    return new ReadableStream_1({
      start: (controller) => {
        let startCapability = createPromiseCapability();
        this.streamControllers[streamId] = {
          controller,
          startCall: startCapability,
          isClosed: false,
        };
        this.postMessage({
          sourceName,
          targetName,
          action: actionName,
          streamId,
          data,
          desiredSize: controller.desiredSize,
        });
        // Return Promise for Async process, to signal success/failure.
        return startCapability.promise;
      },

      pull: (controller) => {
        let pullCapability = createPromiseCapability();
        this.streamControllers[streamId].pullCall = pullCapability;
        this.postMessage({
          sourceName,
          targetName,
          stream: 'pull',
          streamId,
          desiredSize: controller.desiredSize,
        });
        // Returning Promise will not call "pull"
        // again until current pull is resolved.
        return pullCapability.promise;
      },

      cancel: (reason) => {
        let cancelCapability = createPromiseCapability();
        this.streamControllers[streamId].cancelCall = cancelCapability;
        this.streamControllers[streamId].isClosed = true;
        this.postMessage({
          sourceName,
          targetName,
          stream: 'cancel',
          reason,
          streamId,
        });
        // Return Promise to signal success or failure.
        return cancelCapability.promise;
      },
    }, queueingStrategy);
  },

  _createStreamSink(data) {
    let self = this;
    let action = this.actionHandler[data.action];
    let streamId = data.streamId;
    let desiredSize = data.desiredSize;
    let sourceName = this.sourceName;
    let targetName = data.sourceName;
    let capability = createPromiseCapability();

    let sendStreamRequest = ({ stream, chunk, transfers,
                               success, reason, }) => {
      this.postMessage({ sourceName, targetName, stream, streamId,
                         chunk, success, reason, }, transfers);
    };

    let streamSink = {
      enqueue(chunk, size = 1, transfers) {
        if (this.isCancelled) {
          return;
        }
        let lastDesiredSize = this.desiredSize;
        this.desiredSize -= size;
        // Enqueue decreases the desiredSize property of sink,
        // so when it changes from positive to negative,
        // set ready as unresolved promise.
        if (lastDesiredSize > 0 && this.desiredSize <= 0) {
          this.sinkCapability = createPromiseCapability();
          this.ready = this.sinkCapability.promise;
        }
        sendStreamRequest({ stream: 'enqueue', chunk, transfers, });
      },

      close() {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        sendStreamRequest({ stream: 'close', });
        delete self.streamSinks[streamId];
      },

      error(reason) {
        if (this.isCancelled) {
          return;
        }
        this.isCancelled = true;
        sendStreamRequest({ stream: 'error', reason, });
      },

      sinkCapability: capability,
      onPull: null,
      onCancel: null,
      isCancelled: false,
      desiredSize,
      ready: null,
    };

    streamSink.sinkCapability.resolve();
    streamSink.ready = streamSink.sinkCapability.promise;
    this.streamSinks[streamId] = streamSink;
    resolveCall(action[0], [data.data, streamSink], action[1]).then(() => {
      sendStreamRequest({ stream: 'start_complete', success: true, });
    }, (reason) => {
      sendStreamRequest({ stream: 'start_complete', success: false, reason, });
    });
  },

  _processStreamMessage(data) {
    let sourceName = this.sourceName;
    let targetName = data.sourceName;
    let streamId = data.streamId;

    let sendStreamResponse = ({ stream, success, reason, }) => {
      this.comObj.postMessage({ sourceName, targetName, stream,
                                success, streamId, reason, });
    };

    let deleteStreamController = () => {
      // Delete streamController only when start, pull and
      // cancel callbacks are resolved, to avoid "TypeError".
      Promise.all([
        this.streamControllers[data.streamId].startCall,
        this.streamControllers[data.streamId].pullCall,
        this.streamControllers[data.streamId].cancelCall
      ].map(function(capability) {
        return capability && finalize(capability.promise);
      })).then(() => {
        delete this.streamControllers[data.streamId];
      });
    };

    switch (data.stream) {
      case 'start_complete':
        resolveOrReject(this.streamControllers[data.streamId].startCall,
                        data.success, wrapReason(data.reason));
        break;
      case 'pull_complete':
        resolveOrReject(this.streamControllers[data.streamId].pullCall,
                        data.success, wrapReason(data.reason));
        break;
      case 'pull':
        // Ignore any pull after close is called.
        if (!this.streamSinks[data.streamId]) {
          sendStreamResponse({ stream: 'pull_complete', success: true, });
          break;
        }
        // Pull increases the desiredSize property of sink,
        // so when it changes from negative to positive,
        // set ready property as resolved promise.
        if (this.streamSinks[data.streamId].desiredSize <= 0 &&
            data.desiredSize > 0) {
          this.streamSinks[data.streamId].sinkCapability.resolve();
        }
        // Reset desiredSize property of sink on every pull.
        this.streamSinks[data.streamId].desiredSize = data.desiredSize;
        resolveCall(this.streamSinks[data.streamId].onPull).then(() => {
          sendStreamResponse({ stream: 'pull_complete', success: true, });
        }, (reason) => {
          sendStreamResponse({ stream: 'pull_complete',
                               success: false, reason, });
        });
        break;
      case 'enqueue':
        assert(this.streamControllers[data.streamId],
               'enqueue should have stream controller');
        if (!this.streamControllers[data.streamId].isClosed) {
          this.streamControllers[data.streamId].controller.enqueue(data.chunk);
        }
        break;
      case 'close':
        assert(this.streamControllers[data.streamId],
               'close should have stream controller');
        if (this.streamControllers[data.streamId].isClosed) {
          break;
        }
        this.streamControllers[data.streamId].isClosed = true;
        this.streamControllers[data.streamId].controller.close();
        deleteStreamController();
        break;
      case 'error':
        assert(this.streamControllers[data.streamId],
               'error should have stream controller');
        this.streamControllers[data.streamId].controller.
          error(wrapReason(data.reason));
        deleteStreamController();
        break;
      case 'cancel_complete':
        resolveOrReject(this.streamControllers[data.streamId].cancelCall,
                        data.success, wrapReason(data.reason));
        deleteStreamController();
        break;
      case 'cancel':
        if (!this.streamSinks[data.streamId]) {
          break;
        }
        resolveCall(this.streamSinks[data.streamId].onCancel,
                    [wrapReason(data.reason)]).then(() => {
          sendStreamResponse({ stream: 'cancel_complete', success: true, });
        }, (reason) => {
          sendStreamResponse({ stream: 'cancel_complete',
                               success: false, reason, });
        });
        this.streamSinks[data.streamId].sinkCapability.
          reject(wrapReason(data.reason));
        this.streamSinks[data.streamId].isCancelled = true;
        delete this.streamSinks[data.streamId];
        break;
      default:
        throw new Error('Unexpected stream case');
    }
  },

  /**
   * Sends raw message to the comObj.
   * @private
   * @param {Object} message - Raw message.
   * @param transfers List of transfers/ArrayBuffers, or undefined.
   */
  postMessage(message, transfers) {
    if (transfers && this.postMessageTransfers) {
      this.comObj.postMessage(message, transfers);
    } else {
      this.comObj.postMessage(message);
    }
  },

  destroy() {
    this.comObj.removeEventListener('message', this._onComObjOnMessage);
  },
};

/* Copyright 2018 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The code for XMLParserBase copied from
// https://github.com/mozilla/shumway/blob/16451d8836fa85f4b16eeda8b4bda2fa9e2b22b0/src/avm2/natives/xml.ts

const XMLParserErrorCode = {
  NoError: 0,
  EndOfDocument: -1,
  UnterminatedCdat: -2,
  UnterminatedXmlDeclaration: -3,
  UnterminatedDoctypeDeclaration: -4,
  UnterminatedComment: -5,
  MalformedElement: -6,
  OutOfMemory: -7,
  UnterminatedAttributeValue: -8,
  UnterminatedElement: -9,
  ElementNeverBegun: -10,
};

function isWhitespace(s, index) {
  const ch = s[index];
  return ch === ' ' || ch === '\n' || ch === '\r' || ch === '\t';
}

function isWhitespaceString(s) {
  for (let i = 0, ii = s.length; i < ii; i++) {
    if (!isWhitespace(s, i)) {
      return false;
    }
  }
  return true;
}

class XMLParserBase {
  _resolveEntities(s) {
    return s.replace(/&([^;]+);/g, function (all, entity) {
      if (entity.substring(0, 2) === '#x') {
        return String.fromCharCode(parseInt(entity.substring(2), 16));
      } else if (entity.substring(0, 1) === '#') {
        return String.fromCharCode(parseInt(entity.substring(1), 10));
      }
      switch (entity) {
        case 'lt':
          return '<';
        case 'gt':
          return '>';
        case 'amp':
          return '&';
        case 'quot':
          return '\"';
      }
      return this.onResolveEntity(entity);
    });
  }

  _parseContent(s, start) {
    let pos = start, name, attributes = [];

    function skipWs() {
      while (pos < s.length && isWhitespace(s, pos)) {
        ++pos;
      }
    }

    while (pos < s.length && !isWhitespace(s, pos) &&
           s[pos] !== '>' && s[pos] !== '/') {
      ++pos;
    }
    name = s.substring(start, pos);
    skipWs();
    while (pos < s.length && s[pos] !== '>' &&
           s[pos] !== '/' && s[pos] !== '?') {
      skipWs();
      let attrName = '', attrValue = '';
      while (pos < s.length && !isWhitespace(s, pos) && s[pos] !== '=') {
        attrName += s[pos];
        ++pos;
      }
      skipWs();
      if (s[pos] !== '=') {
        return null;
      }
      ++pos;
      skipWs();
      const attrEndChar = s[pos];
      if (attrEndChar !== '\"' && attrEndChar !== '\'') {
        return null;
      }
      const attrEndIndex = s.indexOf(attrEndChar, ++pos);
      if (attrEndIndex < 0) {
        return null;
      }
      attrValue = s.substring(pos, attrEndIndex);
      attributes.push({
        name: attrName,
        value: this._resolveEntities(attrValue),
      });
      pos = attrEndIndex + 1;
      skipWs();
    }
    return {
      name,
      attributes,
      parsed: pos - start,
    };
  }

  _parseProcessingInstruction(s, start) {
    let pos = start, name, value;

    function skipWs() {
      while (pos < s.length && isWhitespace(s, pos)) {
        ++pos;
      }
    }

    while (pos < s.length && !isWhitespace(s, pos) &&
           s[pos] !== '>' && s[pos] !== '/') {
      ++pos;
    }
    name = s.substring(start, pos);
    skipWs();
    const attrStart = pos;
    while (pos < s.length && (s[pos] !== '?' || s[pos + 1] !== '>')) {
      ++pos;
    }
    value = s.substring(attrStart, pos);
    return {
      name,
      value,
      parsed: pos - start,
    };
  }

  parseXml(s) {
    let i = 0;
    while (i < s.length) {
      const ch = s[i];
      let j = i;
      if (ch === '<') {
        ++j;
        const ch2 = s[j];
        let q;
        switch (ch2) {
          case '/':
            ++j;
            q = s.indexOf('>', j);
            if (q < 0) {
              this.onError(XMLParserErrorCode.UnterminatedElement);
              return;
            }
            this.onEndElement(s.substring(j, q));
            j = q + 1;
            break;
          case '?':
            ++j;
            const pi = this._parseProcessingInstruction(s, j);
            if (s.substring(j + pi.parsed, j + pi.parsed + 2) !== '?>') {
              this.onError(XMLParserErrorCode.UnterminatedXmlDeclaration);
              return;
            }
            this.onPi(pi.name, pi.value);
            j += pi.parsed + 2;
            break;
          case '!':
            if (s.substring(j + 1, j + 3) === '--') {
              q = s.indexOf('-->', j + 3);
              if (q < 0) {
                this.onError(XMLParserErrorCode.UnterminatedComment);
                return;
              }
              this.onComment(s.substring(j + 3, q));
              j = q + 3;
            } else if (s.substring(j + 1, j + 8) === '[CDATA[') {
              q = s.indexOf(']]>', j + 8);
              if (q < 0) {
                this.onError(XMLParserErrorCode.UnterminatedCdat);
                return;
              }
              this.onCdata(s.substring(j + 8, q));
              j = q + 3;
            } else if (s.substring(j + 1, j + 8) === 'DOCTYPE') {
              const q2 = s.indexOf('[', j + 8);
              let complexDoctype = false;
              q = s.indexOf('>', j + 8);
              if (q < 0) {
                this.onError(XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                return;
              }
              if (q2 > 0 && q > q2) {
                q = s.indexOf(']>', j + 8);
                if (q < 0) {
                  this.onError(
                    XMLParserErrorCode.UnterminatedDoctypeDeclaration);
                  return;
                }
                complexDoctype = true;
              }
              const doctypeContent =
                s.substring(j + 8, q + (complexDoctype ? 1 : 0));
              this.onDoctype(doctypeContent);
              j = q + (complexDoctype ? 2 : 1);
            } else {
              this.onError(XMLParserErrorCode.MalformedElement);
              return;
            }
            break;
          default:
            const content = this._parseContent(s, j);
            if (content === null) {
              this.onError(XMLParserErrorCode.MalformedElement);
              return;
            }
            let isClosed = false;
            if (s.substring(j + content.parsed,
                            j + content.parsed + 2) === '/>') {
              isClosed = true;
            } else if (s.substring(j + content.parsed,
                       j + content.parsed + 1) !== '>') {
              this.onError(XMLParserErrorCode.UnterminatedElement);
              return;
            }
            this.onBeginElement(content.name, content.attributes, isClosed);
            j += content.parsed + (isClosed ? 2 : 1);
            break;
        }
      } else {
        while (j < s.length && s[j] !== '<') {
          j++;
        }
        const text = s.substring(i, j);
        this.onText(this._resolveEntities(text));
      }
      i = j;
    }
  }

  onResolveEntity(name) {
    return `&${name};`;
  }

  onPi(name, value) { }

  onComment(text) { }

  onCdata(text) { }

  onDoctype(doctypeContent) { }

  onText(text) { }

  onBeginElement(name, attributes, isEmpty) { }

  onEndElement(name) { }

  onError(code) { }
}

class SimpleDOMNode {
  constructor(nodeName, nodeValue) {
    this.nodeName = nodeName;
    this.nodeValue = nodeValue;

    Object.defineProperty(this, 'parentNode', { value: null, writable: true, });
  }

  get firstChild() {
    return this.childNodes[0];
  }

  get nextSibling() {
    let index = this.parentNode.childNodes.indexOf(this);
    return this.parentNode.childNodes[index + 1];
  }

  get textContent() {
    if (!this.childNodes) {
      return this.nodeValue || '';
    }
    return this.childNodes.map(function(child) {
      return child.textContent;
    }).join('');
  }

  hasChildNodes() {
    return this.childNodes && this.childNodes.length > 0;
  }
}

class SimpleXMLParser extends XMLParserBase {
  constructor() {
    super();
    this._currentFragment = null;
    this._stack = null;
    this._errorCode = XMLParserErrorCode.NoError;
  }

  parseFromString(data) {
    this._currentFragment = [];
    this._stack = [];
    this._errorCode = XMLParserErrorCode.NoError;

    this.parseXml(data);

    if (this._errorCode !== XMLParserErrorCode.NoError) {
      return undefined; // return undefined on error
    }

    // We should only have one root.
    const [documentElement] = this._currentFragment;
    if (!documentElement) {
      return undefined; // Return undefined if no root was found.
    }
    return { documentElement, };
  }

  onResolveEntity(name) {
    switch (name) {
      case 'apos':
        return '\'';
    }
    return super.onResolveEntity(name);
  }

  onText(text) {
    if (isWhitespaceString(text)) {
      return;
    }
    const node = new SimpleDOMNode('#text', text);
    this._currentFragment.push(node);
  }

  onCdata(text) {
    const node = new SimpleDOMNode('#text', text);
    this._currentFragment.push(node);
  }

  onBeginElement(name, attributes, isEmpty) {
    const node = new SimpleDOMNode(name);
    node.childNodes = [];
    this._currentFragment.push(node);
    if (isEmpty) {
      return;
    }
    this._stack.push(this._currentFragment);
    this._currentFragment = node.childNodes;
  }

  onEndElement(name) {
    this._currentFragment = this._stack.pop();
    const lastElement = this._currentFragment[this._currentFragment.length - 1];
    for (let i = 0, ii = lastElement.childNodes.length; i < ii; i++) {
      lastElement.childNodes[i].parentNode = lastElement;
    }
  }

  onError(code) {
    this._errorCode = code;
  }
}

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class Metadata {
  constructor(data) {
    assert(typeof data === 'string', 'Metadata: input is not a string');

    // Ghostscript may produce invalid metadata, so try to repair that first.
    data = this._repair(data);

    // Convert the string to an XML document.
    let parser = new SimpleXMLParser();
    const xmlDocument = parser.parseFromString(data);

    this._metadata = Object.create(null);

    if (xmlDocument) {
      this._parse(xmlDocument);
    }
  }

  _repair(data) {
    return data.replace(/>\\376\\377([^<]+)/g, function(all, codes) {
      let bytes = codes.replace(/\\([0-3])([0-7])([0-7])/g,
          function(code, d1, d2, d3) {
        return String.fromCharCode(d1 * 64 + d2 * 8 + d3 * 1);
      }).replace(/&(amp|apos|gt|lt|quot);/g, function(str, name) {
        switch (name) {
          case 'amp':
            return '&';
          case 'apos':
            return '\'';
          case 'gt':
            return '>';
          case 'lt':
            return '<';
          case 'quot':
            return '\"';
        }
        throw new Error(`_repair: ${name} isn't defined.`);
      });

      let chars = '';
      for (let i = 0, ii = bytes.length; i < ii; i += 2) {
        let code = bytes.charCodeAt(i) * 256 + bytes.charCodeAt(i + 1);
        if (code >= 32 && code < 127 && code !== 60 && code !== 62 &&
            code !== 38) {
          chars += String.fromCharCode(code);
        } else {
          chars += '&#x' + (0x10000 + code).toString(16).substring(1) + ';';
        }
      }

      return '>' + chars;
    });
  }

  _parse(xmlDocument) {
    let rdf = xmlDocument.documentElement;

    if (rdf.nodeName.toLowerCase() !== 'rdf:rdf') { // Wrapped in <xmpmeta>
      rdf = rdf.firstChild;
      while (rdf && rdf.nodeName.toLowerCase() !== 'rdf:rdf') {
        rdf = rdf.nextSibling;
      }
    }

    let nodeName = rdf ? rdf.nodeName.toLowerCase() : null;
    if (!rdf || nodeName !== 'rdf:rdf' || !rdf.hasChildNodes()) {
      return;
    }

    let children = rdf.childNodes;
    for (let i = 0, ii = children.length; i < ii; i++) {
      let desc = children[i];
      if (desc.nodeName.toLowerCase() !== 'rdf:description') {
        continue;
      }

      for (let j = 0, jj = desc.childNodes.length; j < jj; j++) {
        if (desc.childNodes[j].nodeName.toLowerCase() !== '#text') {
          let entry = desc.childNodes[j];
          let name = entry.nodeName.toLowerCase();

          this._metadata[name] = entry.textContent.trim();
        }
      }
    }
  }

  get(name) {
    return this._metadata[name] || null;
  }

  getAll() {
    return this._metadata;
  }

  has(name) {
    return typeof this._metadata[name] !== 'undefined';
  }
}

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /** @implements {IPDFStream} */
var PDFDataTransportStream = (function PDFDataTransportStreamClosure() {
  function PDFDataTransportStream(params, pdfDataRangeTransport) {
    assert(pdfDataRangeTransport);

    this._queuedChunks = [];
    var initialData = params.initialData;
    if (initialData && initialData.length > 0) {
      let buffer = new Uint8Array(initialData).buffer;
      this._queuedChunks.push(buffer);
    }

    this._pdfDataRangeTransport = pdfDataRangeTransport;
    this._isStreamingSupported = !params.disableStream;
    this._isRangeSupported = !params.disableRange;
    this._contentLength = params.length;

    this._fullRequestReader = null;
    this._rangeReaders = [];

    this._pdfDataRangeTransport.addRangeListener((begin, chunk) => {
      this._onReceiveData({ begin, chunk, });
    });

    this._pdfDataRangeTransport.addProgressListener((loaded) => {
      this._onProgress({ loaded, });
    });

    this._pdfDataRangeTransport.addProgressiveReadListener((chunk) => {
      this._onReceiveData({ chunk, });
    });

    this._pdfDataRangeTransport.transportReady();
  }
  PDFDataTransportStream.prototype = {
    _onReceiveData: function PDFDataTransportStream_onReceiveData(args) {
       let buffer = new Uint8Array(args.chunk).buffer;
       if (args.begin === undefined) {
         if (this._fullRequestReader) {
           this._fullRequestReader._enqueue(buffer);
         } else {
           this._queuedChunks.push(buffer);
         }
       } else {
         var found = this._rangeReaders.some(function (rangeReader) {
           if (rangeReader._begin !== args.begin) {
             return false;
           }
           rangeReader._enqueue(buffer);
           return true;
         });
         assert(found);
       }
    },

    _onProgress: function PDFDataTransportStream_onDataProgress(evt) {
       if (this._rangeReaders.length > 0) {
         // Reporting to first range reader.
         var firstReader = this._rangeReaders[0];
         if (firstReader.onProgress) {
           firstReader.onProgress({ loaded: evt.loaded, });
         }
       }
    },

    _removeRangeReader:
        function PDFDataTransportStream_removeRangeReader(reader) {
      var i = this._rangeReaders.indexOf(reader);
      if (i >= 0) {
        this._rangeReaders.splice(i, 1);
      }
    },

    getFullReader: function PDFDataTransportStream_getFullReader() {
      assert(!this._fullRequestReader);
      var queuedChunks = this._queuedChunks;
      this._queuedChunks = null;
      return new PDFDataTransportStreamReader(this, queuedChunks);
    },

    getRangeReader: function PDFDataTransportStream_getRangeReader(begin, end) {
      var reader = new PDFDataTransportStreamRangeReader(this, begin, end);
      this._pdfDataRangeTransport.requestDataRange(begin, end);
      this._rangeReaders.push(reader);
      return reader;
    },

    cancelAllRequests:
        function PDFDataTransportStream_cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeReaders.slice(0);
      readers.forEach(function (rangeReader) {
        rangeReader.cancel(reason);
      });
      this._pdfDataRangeTransport.abort();
    },
  };

  /** @implements {IPDFStreamReader} */
  function PDFDataTransportStreamReader(stream, queuedChunks) {
    this._stream = stream;
    this._done = false;
    this._filename = null;
    this._queuedChunks = queuedChunks || [];
    this._requests = [];
    this._headersReady = Promise.resolve();
    stream._fullRequestReader = this;

    this.onProgress = null; // not used
  }
  PDFDataTransportStreamReader.prototype = {
    _enqueue: function PDFDataTransportStreamReader_enqueue(chunk) {
      if (this._done) {
        return; // ignore new data
      }
      if (this._requests.length > 0) {
        var requestCapability = this._requests.shift();
        requestCapability.resolve({ value: chunk, done: false, });
        return;
      }
      this._queuedChunks.push(chunk);
    },

    get headersReady() {
      return this._headersReady;
    },

    get filename() {
      return this._filename;
    },

    get isRangeSupported() {
      return this._stream._isRangeSupported;
    },

    get isStreamingSupported() {
      return this._stream._isStreamingSupported;
    },

    get contentLength() {
      return this._stream._contentLength;
    },

    async read() {
      if (this._queuedChunks.length > 0) {
        var chunk = this._queuedChunks.shift();
        return { value: chunk, done: false, };
      }
      if (this._done) {
        return { value: undefined, done: true, };
      }
      var requestCapability = createPromiseCapability();
      this._requests.push(requestCapability);
      return requestCapability.promise;
    },

    cancel: function PDFDataTransportStreamReader_cancel(reason) {
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({ value: undefined, done: true, });
      });
      this._requests = [];
    },
  };

  /** @implements {IPDFStreamRangeReader} */
  function PDFDataTransportStreamRangeReader(stream, begin, end) {
    this._stream = stream;
    this._begin = begin;
    this._end = end;
    this._queuedChunk = null;
    this._requests = [];
    this._done = false;

    this.onProgress = null;
  }
  PDFDataTransportStreamRangeReader.prototype = {
    _enqueue: function PDFDataTransportStreamRangeReader_enqueue(chunk) {
      if (this._done) {
        return; // ignore new data
      }
      if (this._requests.length === 0) {
        this._queuedChunk = chunk;
      } else {
        var requestsCapability = this._requests.shift();
        requestsCapability.resolve({ value: chunk, done: false, });
        this._requests.forEach(function (requestCapability) {
          requestCapability.resolve({ value: undefined, done: true, });
        });
        this._requests = [];
      }
      this._done = true;
      this._stream._removeRangeReader(this);
    },

    get isStreamingSupported() {
      return false;
    },

    async read() {
      if (this._queuedChunk) {
        let chunk = this._queuedChunk;
        this._queuedChunk = null;
        return { value: chunk, done: false, };
      }
      if (this._done) {
        return { value: undefined, done: true, };
      }
      var requestCapability = createPromiseCapability();
      this._requests.push(requestCapability);
      return requestCapability.promise;
    },

    cancel: function PDFDataTransportStreamRangeReader_cancel(reason) {
      this._done = true;
      this._requests.forEach(function (requestCapability) {
        requestCapability.resolve({ value: undefined, done: true, });
      });
      this._requests = [];
      this._stream._removeRangeReader(this);
    },
  };

  return PDFDataTransportStream;
})();

/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class WebGLContext {
  constructor({ enable = false, }) {
    this._enabled = enable === true;
  }

  get isEnabled() {
    let enabled = this._enabled;
    if (enabled) {
      enabled = WebGLUtils.tryInitGL();
    }
    return shadow(this, 'isEnabled', enabled);
  }

  composeSMask({ layer, mask, properties, }) {
    return WebGLUtils.composeSMask(layer, mask, properties);
  }

  drawFigures({ width, height, backgroundColor, figures, context, }) {
    return WebGLUtils.drawFigures(width, height, backgroundColor, figures,
                                  context);
  }

  clear() {
    WebGLUtils.cleanup();
  }
}

var WebGLUtils = (function WebGLUtilsClosure() {
  function loadShader(gl, code, shaderType) {
    var shader = gl.createShader(shaderType);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
      var errorMsg = gl.getShaderInfoLog(shader);
      throw new Error('Error during shader compilation: ' + errorMsg);
    }
    return shader;
  }
  function createVertexShader(gl, code) {
    return loadShader(gl, code, gl.VERTEX_SHADER);
  }
  function createFragmentShader(gl, code) {
    return loadShader(gl, code, gl.FRAGMENT_SHADER);
  }
  function createProgram(gl, shaders) {
    var program = gl.createProgram();
    for (var i = 0, ii = shaders.length; i < ii; ++i) {
      gl.attachShader(program, shaders[i]);
    }
    gl.linkProgram(program);
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
      var errorMsg = gl.getProgramInfoLog(program);
      throw new Error('Error during program linking: ' + errorMsg);
    }
    return program;
  }
  function createTexture(gl, image, textureId) {
    gl.activeTexture(textureId);
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    // Upload the image into the texture.
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    return texture;
  }

  var currentGL, currentCanvas;
  function generateGL() {
    if (currentGL) {
      return;
    }

    // The temporary canvas is used in the WebGL context.
    currentCanvas = document.createElement('canvas');
    currentGL = currentCanvas.getContext('webgl',
      { premultipliedalpha: false, });
  }

  var smaskVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec2 a_texCoord;                                    \
                                                                \
  uniform vec2 u_resolution;                                    \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;   \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_texCoord = a_texCoord;                                    \
  }                                                             ';

  var smaskFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  uniform vec4 u_backdrop;                                      \
  uniform int u_subtype;                                        \
  uniform sampler2D u_image;                                    \
  uniform sampler2D u_mask;                                     \
                                                                \
  varying vec2 v_texCoord;                                      \
                                                                \
  void main() {                                                 \
    vec4 imageColor = texture2D(u_image, v_texCoord);           \
    vec4 maskColor = texture2D(u_mask, v_texCoord);             \
    if (u_backdrop.a > 0.0) {                                   \
      maskColor.rgb = maskColor.rgb * maskColor.a +             \
                      u_backdrop.rgb * (1.0 - maskColor.a);     \
    }                                                           \
    float lum;                                                  \
    if (u_subtype == 0) {                                       \
      lum = maskColor.a;                                        \
    } else {                                                    \
      lum = maskColor.r * 0.3 + maskColor.g * 0.59 +            \
            maskColor.b * 0.11;                                 \
    }                                                           \
    imageColor.a *= lum;                                        \
    imageColor.rgb *= imageColor.a;                             \
    gl_FragColor = imageColor;                                  \
  }                                                             ';

  var smaskCache = null;

  function initSmaskGL() {
    var canvas, gl;

    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;

    // setup a GLSL program
    var vertexShader = createVertexShader(gl, smaskVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, smaskFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);

    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.backdropLocation = gl.getUniformLocation(program, 'u_backdrop');
    cache.subtypeLocation = gl.getUniformLocation(program, 'u_subtype');

    var texCoordLocation = gl.getAttribLocation(program, 'a_texCoord');
    var texLayerLocation = gl.getUniformLocation(program, 'u_image');
    var texMaskLocation = gl.getUniformLocation(program, 'u_mask');

    // provide texture coordinates for the rectangle.
    var texCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0.0, 0.0,
      1.0, 0.0,
      0.0, 1.0,
      0.0, 1.0,
      1.0, 0.0,
      1.0, 1.0]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform1i(texLayerLocation, 0);
    gl.uniform1i(texMaskLocation, 1);

    smaskCache = cache;
  }

  function composeSMask(layer, mask, properties) {
    var width = layer.width, height = layer.height;

    if (!smaskCache) {
      initSmaskGL();
    }
    var cache = smaskCache, canvas = cache.canvas, gl = cache.gl;
    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);

    if (properties.backdrop) {
      gl.uniform4f(cache.resolutionLocation, properties.backdrop[0],
                   properties.backdrop[1], properties.backdrop[2], 1);
    } else {
      gl.uniform4f(cache.resolutionLocation, 0, 0, 0, 0);
    }
    gl.uniform1i(cache.subtypeLocation,
                 properties.subtype === 'Luminosity' ? 1 : 0);

    // Create a textures
    var texture = createTexture(gl, layer, gl.TEXTURE0);
    var maskTexture = createTexture(gl, mask, gl.TEXTURE1);

    // Create a buffer and put a single clipspace rectangle in
    // it (2 triangles)
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      0, 0,
      width, 0,
      0, height,
      0, height,
      width, 0,
      width, height]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);

    // draw
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.flush();

    gl.deleteTexture(texture);
    gl.deleteTexture(maskTexture);
    gl.deleteBuffer(buffer);

    return canvas;
  }

  var figuresVertexShaderCode = '\
  attribute vec2 a_position;                                    \
  attribute vec3 a_color;                                       \
                                                                \
  uniform vec2 u_resolution;                                    \
  uniform vec2 u_scale;                                         \
  uniform vec2 u_offset;                                        \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    vec2 position = (a_position + u_offset) * u_scale;          \
    vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;     \
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);          \
                                                                \
    v_color = vec4(a_color / 255.0, 1.0);                       \
  }                                                             ';

  var figuresFragmentShaderCode = '\
  precision mediump float;                                      \
                                                                \
  varying vec4 v_color;                                         \
                                                                \
  void main() {                                                 \
    gl_FragColor = v_color;                                     \
  }                                                             ';

  var figuresCache = null;

  function initFiguresGL() {
    var canvas, gl;

    generateGL();
    canvas = currentCanvas;
    currentCanvas = null;
    gl = currentGL;
    currentGL = null;

    // setup a GLSL program
    var vertexShader = createVertexShader(gl, figuresVertexShaderCode);
    var fragmentShader = createFragmentShader(gl, figuresFragmentShaderCode);
    var program = createProgram(gl, [vertexShader, fragmentShader]);
    gl.useProgram(program);

    var cache = {};
    cache.gl = gl;
    cache.canvas = canvas;
    cache.resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    cache.scaleLocation = gl.getUniformLocation(program, 'u_scale');
    cache.offsetLocation = gl.getUniformLocation(program, 'u_offset');
    cache.positionLocation = gl.getAttribLocation(program, 'a_position');
    cache.colorLocation = gl.getAttribLocation(program, 'a_color');

    figuresCache = cache;
  }

  function drawFigures(width, height, backgroundColor, figures, context) {
    if (!figuresCache) {
      initFiguresGL();
    }
    var cache = figuresCache, canvas = cache.canvas, gl = cache.gl;

    canvas.width = width;
    canvas.height = height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.uniform2f(cache.resolutionLocation, width, height);

    // count triangle points
    var count = 0;
    var i, ii, rows;
    for (i = 0, ii = figures.length; i < ii; i++) {
      switch (figures[i].type) {
        case 'lattice':
          rows = (figures[i].coords.length / figures[i].verticesPerRow) | 0;
          count += (rows - 1) * (figures[i].verticesPerRow - 1) * 6;
          break;
        case 'triangles':
          count += figures[i].coords.length;
          break;
      }
    }
    // transfer data
    var coords = new Float32Array(count * 2);
    var colors = new Uint8Array(count * 3);
    var coordsMap = context.coords, colorsMap = context.colors;
    var pIndex = 0, cIndex = 0;
    for (i = 0, ii = figures.length; i < ii; i++) {
      var figure = figures[i], ps = figure.coords, cs = figure.colors;
      switch (figure.type) {
        case 'lattice':
          var cols = figure.verticesPerRow;
          rows = (ps.length / cols) | 0;
          for (var row = 1; row < rows; row++) {
            var offset = row * cols + 1;
            for (var col = 1; col < cols; col++, offset++) {
              coords[pIndex] = coordsMap[ps[offset - cols - 1]];
              coords[pIndex + 1] = coordsMap[ps[offset - cols - 1] + 1];
              coords[pIndex + 2] = coordsMap[ps[offset - cols]];
              coords[pIndex + 3] = coordsMap[ps[offset - cols] + 1];
              coords[pIndex + 4] = coordsMap[ps[offset - 1]];
              coords[pIndex + 5] = coordsMap[ps[offset - 1] + 1];
              colors[cIndex] = colorsMap[cs[offset - cols - 1]];
              colors[cIndex + 1] = colorsMap[cs[offset - cols - 1] + 1];
              colors[cIndex + 2] = colorsMap[cs[offset - cols - 1] + 2];
              colors[cIndex + 3] = colorsMap[cs[offset - cols]];
              colors[cIndex + 4] = colorsMap[cs[offset - cols] + 1];
              colors[cIndex + 5] = colorsMap[cs[offset - cols] + 2];
              colors[cIndex + 6] = colorsMap[cs[offset - 1]];
              colors[cIndex + 7] = colorsMap[cs[offset - 1] + 1];
              colors[cIndex + 8] = colorsMap[cs[offset - 1] + 2];

              coords[pIndex + 6] = coords[pIndex + 2];
              coords[pIndex + 7] = coords[pIndex + 3];
              coords[pIndex + 8] = coords[pIndex + 4];
              coords[pIndex + 9] = coords[pIndex + 5];
              coords[pIndex + 10] = coordsMap[ps[offset]];
              coords[pIndex + 11] = coordsMap[ps[offset] + 1];
              colors[cIndex + 9] = colors[cIndex + 3];
              colors[cIndex + 10] = colors[cIndex + 4];
              colors[cIndex + 11] = colors[cIndex + 5];
              colors[cIndex + 12] = colors[cIndex + 6];
              colors[cIndex + 13] = colors[cIndex + 7];
              colors[cIndex + 14] = colors[cIndex + 8];
              colors[cIndex + 15] = colorsMap[cs[offset]];
              colors[cIndex + 16] = colorsMap[cs[offset] + 1];
              colors[cIndex + 17] = colorsMap[cs[offset] + 2];
              pIndex += 12;
              cIndex += 18;
            }
          }
          break;
        case 'triangles':
          for (var j = 0, jj = ps.length; j < jj; j++) {
            coords[pIndex] = coordsMap[ps[j]];
            coords[pIndex + 1] = coordsMap[ps[j] + 1];
            colors[cIndex] = colorsMap[cs[j]];
            colors[cIndex + 1] = colorsMap[cs[j] + 1];
            colors[cIndex + 2] = colorsMap[cs[j] + 2];
            pIndex += 2;
            cIndex += 3;
          }
          break;
      }
    }

    // draw
    if (backgroundColor) {
      gl.clearColor(backgroundColor[0] / 255, backgroundColor[1] / 255,
                    backgroundColor[2] / 255, 1.0);
    } else {
      gl.clearColor(0, 0, 0, 0);
    }
    gl.clear(gl.COLOR_BUFFER_BIT);

    var coordsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, coordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, coords, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.positionLocation);
    gl.vertexAttribPointer(cache.positionLocation, 2, gl.FLOAT, false, 0, 0);

    var colorsBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colors, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(cache.colorLocation);
    gl.vertexAttribPointer(cache.colorLocation, 3, gl.UNSIGNED_BYTE, false,
                           0, 0);

    gl.uniform2f(cache.scaleLocation, context.scaleX, context.scaleY);
    gl.uniform2f(cache.offsetLocation, context.offsetX, context.offsetY);

    gl.drawArrays(gl.TRIANGLES, 0, count);

    gl.flush();

    gl.deleteBuffer(coordsBuffer);
    gl.deleteBuffer(colorsBuffer);

    return canvas;
  }

  return {
    tryInitGL() {
      try {
        generateGL();
        return !!currentGL;
      } catch (ex) { }
      return false;
    },

    composeSMask,

    drawFigures,

    cleanup() {
      if (smaskCache && smaskCache.canvas) {
        smaskCache.canvas.width = 0;
        smaskCache.canvas.height = 0;
      }
      if (figuresCache && figuresCache.canvas) {
        figuresCache.canvas.width = 0;
        figuresCache.canvas.height = 0;
      }
      smaskCache = null;
      figuresCache = null;
    },
  };
})();

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_RANGE_CHUNK_SIZE = 65536; // 2^16 = 65536

let isWorkerDisabled = false;

let fakeWorkerFilesLoader = null;
{
  let useRequireEnsure = false;
  // For GENERIC build we need to add support for different fake file loaders
  // for different frameworks.
  {
    // node.js - disable worker and set require.ensure.
    isWorkerDisabled = true;
    if (typeof require.ensure === 'undefined') {
      require.ensure = require('node-ensure');
    }
    useRequireEnsure = true;
  }
  fakeWorkerFilesLoader = useRequireEnsure ? (function() {
    return new Promise(function(resolve, reject) {
      (function(a,b){b()})([], function() {
        try {
          let worker;
          if (true && false) ; else {
            worker = import('./pdf.worker.js');
          }
          resolve(worker.WorkerMessageHandler);
        } catch (ex) {
          reject(ex);
        }
      }, reject, 'pdfjsWorker');
    });
  }) : null;
}

/**
 * @typedef {function} IPDFStreamFactory
 * @param {DocumentInitParameters} params The document initialization
 * parameters. The "url" key is always present.
 * @return {IPDFStream}
 */

/** @type IPDFStreamFactory */
var createPDFNetworkStream;

/**
 * Sets the function that instantiates a IPDFStream as an alternative PDF data
 * transport.
 * @param {IPDFStreamFactory} pdfNetworkStreamFactory - the factory function
 * that takes document initialization parameters (including a "url") and returns
 * an instance of IPDFStream.
 */
function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
  createPDFNetworkStream = pdfNetworkStreamFactory;
}

/**
 * Document initialization / loading parameters object.
 *
 * @typedef {Object} DocumentInitParameters
 * @property {string}     url   - The URL of the PDF.
 * @property {TypedArray|Array|string} data - Binary PDF data. Use typed arrays
 *   (Uint8Array) to improve the memory usage. If PDF data is BASE64-encoded,
 *   use atob() to convert it to a binary string first.
 * @property {Object}     httpHeaders - Basic authentication headers.
 * @property {boolean}    withCredentials - Indicates whether or not cross-site
 *   Access-Control requests should be made using credentials such as cookies
 *   or authorization headers. The default is false.
 * @property {string}     password - For decrypting password-protected PDFs.
 * @property {TypedArray} initialData - A typed array with the first portion or
 *   all of the pdf data. Used by the extension since some data is already
 *   loaded before the switch to range requests.
 * @property {number}     length - The PDF file length. It's used for progress
 *   reports and range requests operations.
 * @property {PDFDataRangeTransport} range
 * @property {number}     rangeChunkSize - Optional parameter to specify
 *   maximum number of bytes fetched per range request. The default value is
 *   2^16 = 65536.
 * @property {PDFWorker}  worker - (optional) The worker that will be used for
 *   the loading and parsing of the PDF data.
 * @property {boolean} postMessageTransfers - (optional) Enables transfer usage
 *   in postMessage for ArrayBuffers. The default value is `true`.
 * @property {number} verbosity - (optional) Controls the logging level; the
 *   constants from {VerbosityLevel} should be used.
 * @property {string} docBaseUrl - (optional) The base URL of the document,
 *   used when attempting to recover valid absolute URLs for annotations, and
 *   outline items, that (incorrectly) only specify relative URLs.
 * @property {string} nativeImageDecoderSupport - (optional) Strategy for
 *   decoding certain (simple) JPEG images in the browser. This is useful for
 *   environments without DOM image and canvas support, such as e.g. Node.js.
 *   Valid values are 'decode', 'display' or 'none'; where 'decode' is intended
 *   for browsers with full image/canvas support, 'display' for environments
 *   with limited image support through stubs (useful for SVG conversion),
 *   and 'none' where JPEG images will be decoded entirely by PDF.js.
 *   The default value is 'decode'.
 * @property {string} cMapUrl - (optional) The URL where the predefined
 *   Adobe CMaps are located. Include trailing slash.
 * @property {boolean} cMapPacked - (optional) Specifies if the Adobe CMaps are
 *   binary packed.
 * @property {Object} CMapReaderFactory - (optional) The factory that will be
 *   used when reading built-in CMap files. Providing a custom factory is useful
 *   for environments without `XMLHttpRequest` support, such as e.g. Node.js.
 *   The default value is {DOMCMapReaderFactory}.
 * @property {boolean} stopAtErrors - (optional) Reject certain promises, e.g.
 *   `getOperatorList`, `getTextContent`, and `RenderTask`, when the associated
 *   PDF data cannot be successfully parsed, instead of attempting to recover
 *   whatever possible of the data. The default value is `false`.
 * @property {number} maxImageSize - (optional) The maximum allowed image size
 *   in total pixels, i.e. width * height. Images above this value will not be
 *   rendered. Use -1 for no limit, which is also the default value.
 * @property {boolean} isEvalSupported - (optional) Determines if we can eval
 *   strings as JS. Primarily used to improve performance of font rendering,
 *   and when parsing PDF functions. The default value is `true`.
 * @property {boolean} disableFontFace - (optional) By default fonts are
 *   converted to OpenType fonts and loaded via font face rules. If disabled,
 *   fonts will be rendered using a built-in font renderer that constructs the
 *   glyphs with primitive path commands. The default value is `false`.
 * @property {boolean} disableRange - (optional) Disable range request loading
 *   of PDF files. When enabled, and if the server supports partial content
 *   requests, then the PDF will be fetched in chunks.
 *   The default value is `false`.
 * @property {boolean} disableStream - (optional) Disable streaming of PDF file
 *   data. By default PDF.js attempts to load PDFs in chunks.
 *   The default value is `false`.
 * @property {boolean} disableAutoFetch - (optional) Disable pre-fetching of PDF
 *   file data. When range requests are enabled PDF.js will automatically keep
 *   fetching more data even if it isn't needed to display the current page.
 *   The default value is `false`.
 *   NOTE: It is also necessary to disable streaming, see above,
 *         in order for disabling of pre-fetching to work correctly.
 * @property {boolean} disableCreateObjectURL - (optional) Disable the use of
 *   `URL.createObjectURL`, for compatibility with older browsers.
 *   The default value is `false`.
 * @property {boolean} pdfBug - (optional) Enables special hooks for debugging
 *   PDF.js (see `web/debugger.js`). The default value is `false`.
 */

/**
 * @typedef {Object} PDFDocumentStats
 * @property {Array} streamTypes - Used stream types in the document (an item
 *   is set to true if specific stream ID was used in the document).
 * @property {Array} fontTypes - Used font type in the document (an item is set
 *   to true if specific font ID was used in the document).
 */

/**
 * This is the main entry point for loading a PDF and interacting with it.
 * NOTE: If a URL is used to fetch the PDF data a standard XMLHttpRequest(XHR)
 * is used, which means it must follow the same origin rules that any XHR does
 * e.g. No cross domain requests without CORS.
 *
 * @param {string|TypedArray|DocumentInitParameters|PDFDataRangeTransport} src
 * Can be a url to where a PDF is located, a typed array (Uint8Array)
 * already populated with data or parameter object.
 *
 * @return {PDFDocumentLoadingTask}
 */
function getDocument$1(src) {
  var task = new PDFDocumentLoadingTask();

  var source;
  if (typeof src === 'string') {
    source = { url: src, };
  } else if (isArrayBuffer(src)) {
    source = { data: src, };
  } else if (src instanceof PDFDataRangeTransport$1) {
    source = { range: src, };
  } else {
    if (typeof src !== 'object') {
      throw new Error('Invalid parameter in getDocument, ' +
                      'need either Uint8Array, string or a parameter object');
    }
    if (!src.url && !src.data && !src.range) {
      throw new Error(
        'Invalid parameter object: need either .data, .range or .url');
    }

    source = src;
  }

  let params = Object.create(null);
  var rangeTransport = null;
  let worker = null;

  for (var key in source) {
    if (key === 'url' && false) {
      // The full path is required in the 'url' field.
      params[key] = new URL_1(source[key], window.location).href;
      continue;
    } else if (key === 'range') {
      rangeTransport = source[key];
      continue;
    } else if (key === 'worker') {
      worker = source[key];
      continue;
    } else if (key === 'data' && !(source[key] instanceof Uint8Array)) {
      // Converting string or array-like data to Uint8Array.
      var pdfBytes = source[key];
      if (typeof pdfBytes === 'string') {
        params[key] = stringToBytes(pdfBytes);
      } else if (typeof pdfBytes === 'object' && pdfBytes !== null &&
                 !isNaN(pdfBytes.length)) {
        params[key] = new Uint8Array(pdfBytes);
      } else if (isArrayBuffer(pdfBytes)) {
        params[key] = new Uint8Array(pdfBytes);
      } else {
        throw new Error('Invalid PDF binary data: either typed array, ' +
                        'string or array-like object is expected in the ' +
                        'data property.');
      }
      continue;
    }
    params[key] = source[key];
  }

  params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
  params.CMapReaderFactory = params.CMapReaderFactory || DOMCMapReaderFactory;
  params.ignoreErrors = params.stopAtErrors !== true;
  params.pdfBug = params.pdfBug === true;

  const NativeImageDecoderValues = Object.values(NativeImageDecoding);
  if (params.nativeImageDecoderSupport === undefined ||
      !NativeImageDecoderValues.includes(params.nativeImageDecoderSupport)) {
    params.nativeImageDecoderSupport =
      (apiCompatibilityParams.nativeImageDecoderSupport ||
       NativeImageDecoding.DECODE);
  }
  if (!Number.isInteger(params.maxImageSize)) {
    params.maxImageSize = -1;
  }
  if (typeof params.isEvalSupported !== 'boolean') {
    params.isEvalSupported = true;
  }
  if (typeof params.disableFontFace !== 'boolean') {
    params.disableFontFace = apiCompatibilityParams.disableFontFace || false;
  }

  if (typeof params.disableRange !== 'boolean') {
    params.disableRange = false;
  }
  if (typeof params.disableStream !== 'boolean') {
    params.disableStream = false;
  }
  if (typeof params.disableAutoFetch !== 'boolean') {
    params.disableAutoFetch = false;
  }
  if (typeof params.disableCreateObjectURL !== 'boolean') {
    params.disableCreateObjectURL =
      apiCompatibilityParams.disableCreateObjectURL || false;
  }

  // Set the main-thread verbosity level.
  setVerbosityLevel(params.verbosity);

  if (!worker) {
    const workerParams = {
      postMessageTransfers: params.postMessageTransfers,
      verbosity: params.verbosity,
    };
    // Worker was not provided -- creating and owning our own. If message port
    // is specified in global worker options, using it.
    let workerPort = GlobalWorkerOptions.workerPort;
    if (workerPort) {
      workerParams.port = workerPort;
      worker = PDFWorker$1.fromPort(workerParams);
    } else {
      worker = new PDFWorker$1(workerParams);
    }
    task._worker = worker;
  }
  var docId = task.docId;
  worker.promise.then(function () {
    if (task.destroyed) {
      throw new Error('Loading aborted');
    }
    return _fetchDocument(worker, params, rangeTransport, docId).then(
        function (workerId) {
      if (task.destroyed) {
        throw new Error('Loading aborted');
      }

      let networkStream;
      if (rangeTransport) {
        networkStream = new PDFDataTransportStream({
          length: params.length,
          initialData: params.initialData,
          disableRange: params.disableRange,
          disableStream: params.disableStream,
        }, rangeTransport);
      } else if (!params.data) {
        networkStream = createPDFNetworkStream({
          url: params.url,
          length: params.length,
          httpHeaders: params.httpHeaders,
          withCredentials: params.withCredentials,
          rangeChunkSize: params.rangeChunkSize,
          disableRange: params.disableRange,
          disableStream: params.disableStream,
        });
      }

      var messageHandler = new MessageHandler(docId, workerId, worker.port);
      messageHandler.postMessageTransfers = worker.postMessageTransfers;
      var transport = new WorkerTransport(messageHandler, task, networkStream,
                                          params);
      task._transport = transport;
      messageHandler.send('Ready', null);
    });
  }).catch(task._capability.reject);

  return task;
}

/**
 * Starts fetching of specified PDF document/data.
 * @param {PDFWorker} worker
 * @param {Object} source
 * @param {PDFDataRangeTransport} pdfDataRangeTransport
 * @param {string} docId Unique document id, used as MessageHandler id.
 * @returns {Promise} The promise, which is resolved when worker id of
 *                    MessageHandler is known.
 * @private
 */
function _fetchDocument(worker, source, pdfDataRangeTransport, docId) {
  if (worker.destroyed) {
    return Promise.reject(new Error('Worker was destroyed'));
  }

  if (pdfDataRangeTransport) {
    source.length = pdfDataRangeTransport.length;
    source.initialData = pdfDataRangeTransport.initialData;
  }
  return worker.messageHandler.sendWithPromise('GetDocRequest', {
    docId,
    apiVersion: ("1.0.0" ),
    source: { // Only send the required properties, and *not* the entire object.
      data: source.data,
      url: source.url,
      password: source.password,
      disableAutoFetch: source.disableAutoFetch,
      rangeChunkSize: source.rangeChunkSize,
      length: source.length,
    },
    maxImageSize: source.maxImageSize,
    disableFontFace: source.disableFontFace,
    disableCreateObjectURL: source.disableCreateObjectURL,
    postMessageTransfers: worker.postMessageTransfers,
    docBaseUrl: source.docBaseUrl,
    nativeImageDecoderSupport: source.nativeImageDecoderSupport,
    ignoreErrors: source.ignoreErrors,
    isEvalSupported: source.isEvalSupported,
  }).then(function (workerId) {
    if (worker.destroyed) {
      throw new Error('Worker was destroyed');
    }
    return workerId;
  });
}

/**
 * PDF document loading operation.
 * @class
 * @alias PDFDocumentLoadingTask
 */
var PDFDocumentLoadingTask = (function PDFDocumentLoadingTaskClosure() {
  var nextDocumentId = 0;

  /** @constructs PDFDocumentLoadingTask */
  function PDFDocumentLoadingTask() {
    this._capability = createPromiseCapability();
    this._transport = null;
    this._worker = null;

    /**
     * Unique document loading task id -- used in MessageHandlers.
     * @type {string}
     */
    this.docId = 'd' + (nextDocumentId++);

    /**
     * Shows if loading task is destroyed.
     * @type {boolean}
     */
    this.destroyed = false;

    /**
     * Callback to request a password if wrong or no password was provided.
     * The callback receives two parameters: function that needs to be called
     * with new password and reason (see {PasswordResponses}).
     */
    this.onPassword = null;

    /**
     * Callback to be able to monitor the loading progress of the PDF file
     * (necessary to implement e.g. a loading bar). The callback receives
     * an {Object} with the properties: {number} loaded and {number} total.
     */
    this.onProgress = null;

    /**
     * Callback to when unsupported feature is used. The callback receives
     * an {UNSUPPORTED_FEATURES} argument.
     */
    this.onUnsupportedFeature = null;
  }

  PDFDocumentLoadingTask.prototype =
      /** @lends PDFDocumentLoadingTask.prototype */ {
    /**
     * @return {Promise}
     */
    get promise() {
      return this._capability.promise;
    },

    /**
     * Aborts all network requests and destroys worker.
     * @return {Promise} A promise that is resolved after destruction activity
     *                   is completed.
     */
    destroy() {
      this.destroyed = true;

      var transportDestroyed = !this._transport ? Promise.resolve() :
        this._transport.destroy();
      return transportDestroyed.then(() => {
        this._transport = null;
        if (this._worker) {
          this._worker.destroy();
          this._worker = null;
        }
      });
    },

    /**
     * Registers callbacks to indicate the document loading completion.
     *
     * @param {function} onFulfilled The callback for the loading completion.
     * @param {function} onRejected The callback for the loading failure.
     * @return {Promise} A promise that is resolved after the onFulfilled or
     *                   onRejected callback.
     */
    then: function PDFDocumentLoadingTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
    },
  };

  return PDFDocumentLoadingTask;
})();

/**
 * Abstract class to support range requests file loading.
 * @param {number} length
 * @param {Uint8Array} initialData
 */
class PDFDataRangeTransport$1 {
  constructor(length, initialData) {
    this.length = length;
    this.initialData = initialData;

    this._rangeListeners = [];
    this._progressListeners = [];
    this._progressiveReadListeners = [];
    this._readyCapability = createPromiseCapability();
  }

  addRangeListener(listener) {
    this._rangeListeners.push(listener);
  }

  addProgressListener(listener) {
    this._progressListeners.push(listener);
  }

  addProgressiveReadListener(listener) {
    this._progressiveReadListeners.push(listener);
  }

  onDataRange(begin, chunk) {
    for (const listener of this._rangeListeners) {
      listener(begin, chunk);
    }
  }

  onDataProgress(loaded) {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressListeners) {
        listener(loaded);
      }
    });
  }

  onDataProgressiveRead(chunk) {
    this._readyCapability.promise.then(() => {
      for (const listener of this._progressiveReadListeners) {
        listener(chunk);
      }
    });
  }

  transportReady() {
    this._readyCapability.resolve();
  }

  requestDataRange(begin, end) {
    unreachable('Abstract method PDFDataRangeTransport.requestDataRange');
  }

  abort() {}
}

/**
 * Proxy to a PDFDocument in the worker thread. Also, contains commonly used
 * properties that can be read synchronously.
 */
class PDFDocumentProxy {
  constructor(pdfInfo, transport, loadingTask) {
    this.loadingTask = loadingTask;

    this._pdfInfo = pdfInfo;
    this._transport = transport;
  }

  /**
   * @return {number} Total number of pages the PDF contains.
   */
  get numPages() {
    return this._pdfInfo.numPages;
  }

  /**
   * @return {string} A (not guaranteed to be) unique ID to identify a PDF.
   */
  get fingerprint() {
    return this._pdfInfo.fingerprint;
  }

  /**
   * @param {number} pageNumber - The page number to get. The first page is 1.
   * @return {Promise} A promise that is resolved with a {@link PDFPageProxy}
   *   object.
   */
  getPage(pageNumber) {
    return this._transport.getPage(pageNumber);
  }

  /**
   * @param {{num: number, gen: number}} ref - The page reference. Must have
   *   the `num` and `gen` properties.
   * @return {Promise} A promise that is resolved with the page index that is
   *   associated with the reference.
   */
  getPageIndex(ref) {
    return this._transport.getPageIndex(ref);
  }

  /**
   * @return {Promise} A promise that is resolved with a lookup table for
   *   mapping named destinations to reference numbers.
   *
   * This can be slow for large documents. Use `getDestination` instead.
   */
  getDestinations() {
    return this._transport.getDestinations();
  }

  /**
   * @param {string} id - The named destination to get.
   * @return {Promise} A promise that is resolved with all information
   *   of the given named destination.
   */
  getDestination(id) {
    return this._transport.getDestination(id);
  }

  /**
   * @return {Promise} A promise that is resolved with an {Array} containing
   *   the page labels that correspond to the page indexes, or `null` when
   *   no page labels are present in the PDF file.
   */
  getPageLabels() {
    return this._transport.getPageLabels();
  }

  /**
   * @return {Promise} A promise that is resolved with a {string} containing
   *   the page mode name.
   */
  getPageMode() {
    return this._transport.getPageMode();
  }

  /**
   * @return {Promise} A promise that is resolved with a lookup table for
   *   mapping named attachments to their content.
   */
  getAttachments() {
    return this._transport.getAttachments();
  }

  /**
   * @return {Promise} A promise that is resolved with an {Array} of all the
   *   JavaScript strings in the name tree, or `null` if no JavaScript exists.
   */
  getJavaScript() {
    return this._transport.getJavaScript();
  }

  /**
   * @return {Promise} A promise that is resolved with an {Array} that is a
   * tree outline (if it has one) of the PDF. The tree is in the format of:
   * [
   *   {
   *     title: string,
   *     bold: boolean,
   *     italic: boolean,
   *     color: rgb Uint8ClampedArray,
   *     dest: dest obj,
   *     url: string,
   *     items: array of more items like this
   *   },
   *   ...
   * ]
   */
  getOutline() {
    return this._transport.getOutline();
  }

  /**
   * @return {Promise} A promise that is resolved with an {Array} that contains
   *   the permission flags for the PDF document, or `null` when
   *   no permissions are present in the PDF file.
   */
  getPermissions() {
    return this._transport.getPermissions();
  }

  /**
   * @return {Promise} A promise that is resolved with an {Object} that has
   *   `info` and `metadata` properties. `info` is an {Object} filled with
   *   anything available in the information dictionary and similarly
   *   `metadata` is a {Metadata} object with information from the metadata
   *   section of the PDF.
   */
  getMetadata() {
    return this._transport.getMetadata();
  }

  /**
   * @return {Promise} A promise that is resolved with a {TypedArray} that has
   * the raw data from the PDF.
   */
  getData() {
    return this._transport.getData();
  }

  /**
   * @return {Promise} A promise that is resolved when the document's data
   *   is loaded. It is resolved with an {Object} that contains the `length`
   *   property that indicates size of the PDF data in bytes.
   */
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }

  /**
   * @return {Promise} A promise this is resolved with current statistics about
   *   document structures (see {@link PDFDocumentStats}).
   */
  getStats() {
    return this._transport.getStats();
  }

  /**
   * Cleans up resources allocated by the document, e.g. created `@font-face`.
   */
  cleanup() {
    this._transport.startCleanup();
  }

  /**
   * Destroys the current document instance and terminates the worker.
   */
  destroy() {
    return this.loadingTask.destroy();
  }

  /**
   * @return {Object} A subset of the current {DocumentInitParameters},
   *   which are either needed in the viewer and/or whose default values
   *   may be affected by the `apiCompatibilityParams`.
   */
  get loadingParams() {
    return this._transport.loadingParams;
  }
}

/**
 * Page getTextContent parameters.
 *
 * @typedef {Object} getTextContentParameters
 * @property {boolean} normalizeWhitespace - replaces all occurrences of
 *   whitespace with standard spaces (0x20). The default value is `false`.
 * @property {boolean} disableCombineTextItems - do not attempt to combine
 *   same line {@link TextItem}'s. The default value is `false`.
 */

/**
 * Page text content.
 *
 * @typedef {Object} TextContent
 * @property {array} items - array of {@link TextItem}
 * @property {Object} styles - {@link TextStyles} objects, indexed by font name.
 */

/**
 * Page text content part.
 *
 * @typedef {Object} TextItem
 * @property {string} str - text content.
 * @property {string} dir - text direction: 'ttb', 'ltr' or 'rtl'.
 * @property {array} transform - transformation matrix.
 * @property {number} width - width in device space.
 * @property {number} height - height in device space.
 * @property {string} fontName - font name used by pdf.js for converted font.
 */

/**
 * Text style.
 *
 * @typedef {Object} TextStyle
 * @property {number} ascent - font ascent.
 * @property {number} descent - font descent.
 * @property {boolean} vertical - text is in vertical mode.
 * @property {string} fontFamily - possible font family
 */

/**
 * Page annotation parameters.
 *
 * @typedef {Object} GetAnnotationsParameters
 * @property {string} intent - Determines the annotations that will be fetched,
 *                    can be either 'display' (viewable annotations) or 'print'
 *                    (printable annotations).
 *                    If the parameter is omitted, all annotations are fetched.
 */

/**
 * Page render parameters.
 *
 * @typedef {Object} RenderParameters
 * @property {Object} canvasContext - A 2D context of a DOM Canvas object.
 * @property {PageViewport} viewport - Rendering viewport obtained by
 *                                calling of PDFPage.getViewport method.
 * @property {string} intent - Rendering intent, can be 'display' or 'print'
 *                    (default value is 'display').
 * @property {boolean} enableWebGL - (optional) Enables WebGL accelerated
 *   rendering for some operations. The default value is `false`.
 * @property {boolean} renderInteractiveForms - (optional) Whether or not
 *                     interactive form elements are rendered in the display
 *                     layer. If so, we do not render them on canvas as well.
 * @property {Array}  transform - (optional) Additional transform, applied
 *                    just before viewport transform.
 * @property {Object} imageLayer - (optional) An object that has beginLayout,
 *                    endLayout and appendImage functions.
 * @property {Object} canvasFactory - (optional) The factory that will be used
 *                    when creating canvases. The default value is
 *                    {DOMCanvasFactory}.
 * @property {Object} background - (optional) Background to use for the canvas.
 *                    Can use any valid canvas.fillStyle: A DOMString parsed as
 *                    CSS <color> value, a CanvasGradient object (a linear or
 *                    radial gradient) or a CanvasPattern object (a repetitive
 *                    image). The default value is 'rgb(255,255,255)'.
 */

/**
 * PDF page operator list.
 *
 * @typedef {Object} PDFOperatorList
 * @property {Array} fnArray - Array containing the operator functions.
 * @property {Array} argsArray - Array containing the arguments of the
 *                               functions.
 */

/**
 * Proxy to a PDFPage in the worker thread.
 * @class
 * @alias PDFPageProxy
 */
var PDFPageProxy = (function PDFPageProxyClosure() {
  function PDFPageProxy(pageIndex, pageInfo, transport, pdfBug = false) {
    this.pageIndex = pageIndex;
    this._pageInfo = pageInfo;
    this.transport = transport;
    this._stats = (pdfBug ? new StatTimer() : DummyStatTimer);
    this._pdfBug = pdfBug;
    this.commonObjs = transport.commonObjs;
    this.objs = new PDFObjects();
    this.cleanupAfterRender = false;
    this.pendingCleanup = false;
    this.intentStates = Object.create(null);
    this.destroyed = false;
  }
  PDFPageProxy.prototype = /** @lends PDFPageProxy.prototype */ {
    /**
     * @return {number} Page number of the page. First page is 1.
     */
    get pageNumber() {
      return this.pageIndex + 1;
    },
    /**
     * @return {number} The number of degrees the page is rotated clockwise.
     */
    get rotate() {
      return this._pageInfo.rotate;
    },
    /**
     * @return {Object} The reference that points to this page. It has 'num' and
     * 'gen' properties.
     */
    get ref() {
      return this._pageInfo.ref;
    },
    /**
     * @return {number} The default size of units in 1/72nds of an inch.
     */
    get userUnit() {
      return this._pageInfo.userUnit;
    },
    /**
     * @return {Array} An array of the visible portion of the PDF page in the
     * user space units - [x1, y1, x2, y2].
     */
    get view() {
      return this._pageInfo.view;
    },

    /**
     * @param {number} scale The desired scale of the viewport.
     * @param {number} rotate Degrees to rotate the viewport. If omitted this
     * defaults to the page rotation.
     * @param {boolean} dontFlip (optional) If true, axis Y will not be flipped.
     * @return {PageViewport} Contains 'width' and 'height' properties
     * along with transforms required for rendering.
     */
    getViewport(scale, rotate = this.rotate, dontFlip = false) {
      return new PageViewport({
        viewBox: this.view,
        scale,
        rotation: rotate,
        dontFlip,
      });
    },
    /**
     * @param {GetAnnotationsParameters} params - Annotation parameters.
     * @return {Promise} A promise that is resolved with an {Array} of the
     * annotation objects.
     */
    getAnnotations: function PDFPageProxy_getAnnotations(params) {
      var intent = (params && params.intent) || null;

      if (!this.annotationsPromise || this.annotationsIntent !== intent) {
        this.annotationsPromise = this.transport.getAnnotations(this.pageIndex,
                                                                intent);
        this.annotationsIntent = intent;
      }
      return this.annotationsPromise;
    },
    /**
     * Begins the process of rendering a page to the desired context.
     * @param {RenderParameters} params Page render parameters.
     * @return {RenderTask} An object that contains the promise, which
     *                      is resolved when the page finishes rendering.
     */
    render: function PDFPageProxy_render(params) {
      let stats = this._stats;
      stats.time('Overall');

      // If there was a pending destroy cancel it so no cleanup happens during
      // this call to render.
      this.pendingCleanup = false;

      var renderingIntent = (params.intent === 'print' ? 'print' : 'display');
      var canvasFactory = params.canvasFactory || new DOMCanvasFactory();
      let webGLContext = new WebGLContext({
        enable: params.enableWebGL,
      });

      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];

      // If there's no displayReadyCapability yet, then the operatorList
      // was never requested before. Make the request and create the promise.
      if (!intentState.displayReadyCapability) {
        intentState.receivingOperatorList = true;
        intentState.displayReadyCapability = createPromiseCapability();
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false,
        };

        stats.time('Page Request');
        this.transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageNumber - 1,
          intent: renderingIntent,
          renderInteractiveForms: (params.renderInteractiveForms === true),
        });
      }

      var complete = (error) => {
        var i = intentState.renderTasks.indexOf(internalRenderTask);
        if (i >= 0) {
          intentState.renderTasks.splice(i, 1);
        }

        if (this.cleanupAfterRender) {
          this.pendingCleanup = true;
        }
        this._tryCleanup();

        if (error) {
          internalRenderTask.capability.reject(error);
        } else {
          internalRenderTask.capability.resolve();
        }
        stats.timeEnd('Rendering');
        stats.timeEnd('Overall');
      };

      var internalRenderTask = new InternalRenderTask(complete, params,
                                                      this.objs,
                                                      this.commonObjs,
                                                      intentState.operatorList,
                                                      this.pageNumber,
                                                      canvasFactory,
                                                      webGLContext,
                                                      this._pdfBug);
      internalRenderTask.useRequestAnimationFrame = renderingIntent !== 'print';
      if (!intentState.renderTasks) {
        intentState.renderTasks = [];
      }
      intentState.renderTasks.push(internalRenderTask);
      var renderTask = internalRenderTask.task;

      intentState.displayReadyCapability.promise.then((transparency) => {
        if (this.pendingCleanup) {
          complete();
          return;
        }
        stats.time('Rendering');
        internalRenderTask.initializeGraphics(transparency);
        internalRenderTask.operatorListChanged();
      }).catch(complete);

      return renderTask;
    },

    /**
     * @return {Promise} A promise resolved with an {@link PDFOperatorList}
     *   object that represents page's operator list.
     */
    getOperatorList: function PDFPageProxy_getOperatorList() {
      function operatorListChanged() {
        if (intentState.operatorList.lastChunk) {
          intentState.opListReadCapability.resolve(intentState.operatorList);

          var i = intentState.renderTasks.indexOf(opListTask);
          if (i >= 0) {
            intentState.renderTasks.splice(i, 1);
          }
        }
      }

      var renderingIntent = 'oplist';
      if (!this.intentStates[renderingIntent]) {
        this.intentStates[renderingIntent] = Object.create(null);
      }
      var intentState = this.intentStates[renderingIntent];
      var opListTask;

      if (!intentState.opListReadCapability) {
        opListTask = {};
        opListTask.operatorListChanged = operatorListChanged;
        intentState.receivingOperatorList = true;
        intentState.opListReadCapability = createPromiseCapability();
        intentState.renderTasks = [];
        intentState.renderTasks.push(opListTask);
        intentState.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: false,
        };

        this._stats.time('Page Request');
        this.transport.messageHandler.send('RenderPageRequest', {
          pageIndex: this.pageIndex,
          intent: renderingIntent,
        });
      }
      return intentState.opListReadCapability.promise;
    },

    /**
     * @param {getTextContentParameters} params - getTextContent parameters.
     * @return {ReadableStream} ReadableStream to read textContent chunks.
     */
    streamTextContent(params = {}) {
      const TEXT_CONTENT_CHUNK_SIZE = 100;
      return this.transport.messageHandler.sendWithStream('GetTextContent', {
        pageIndex: this.pageNumber - 1,
        normalizeWhitespace: (params.normalizeWhitespace === true),
        combineTextItems: (params.disableCombineTextItems !== true),
      }, {
        highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
        size(textContent) {
          return textContent.items.length;
        },
      });
    },

    /**
     * @param {getTextContentParameters} params - getTextContent parameters.
     * @return {Promise} That is resolved a {@link TextContent}
     * object that represent the page text content.
     */
    getTextContent: function PDFPageProxy_getTextContent(params) {
      params = params || {};
      let readableStream = this.streamTextContent(params);

      return new Promise(function(resolve, reject) {
        function pump() {
          reader.read().then(function({ value, done, }) {
            if (done) {
              resolve(textContent);
              return;
            }
            Object.assign(textContent.styles, value.styles);
            textContent.items.push(...value.items);
            pump();
          }, reject);
        }

        let reader = readableStream.getReader();
        let textContent = {
          items: [],
          styles: Object.create(null),
        };

        pump();
      });
    },

    /**
     * Destroys page object.
     */
    _destroy: function PDFPageProxy_destroy() {
      this.destroyed = true;
      this.transport.pageCache[this.pageIndex] = null;

      var waitOn = [];
      Object.keys(this.intentStates).forEach(function(intent) {
        if (intent === 'oplist') {
          // Avoid errors below, since the renderTasks are just stubs.
          return;
        }
        var intentState = this.intentStates[intent];
        intentState.renderTasks.forEach(function(renderTask) {
          var renderCompleted = renderTask.capability.promise.
            catch(function () {}); // ignoring failures
          waitOn.push(renderCompleted);
          renderTask.cancel();
        });
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      this.pendingCleanup = false;
      return Promise.all(waitOn);
    },

    /**
     * Cleans up resources allocated by the page.
     * @param {boolean} resetStats - (optional) Reset page stats, if enabled.
     *   The default value is `false`.
     */
    cleanup(resetStats = false) {
      this.pendingCleanup = true;
      this._tryCleanup(resetStats);
    },
    /**
     * For internal use only. Attempts to clean up if rendering is in a state
     * where that's possible.
     * @ignore
     */
    _tryCleanup(resetStats = false) {
      if (!this.pendingCleanup ||
          Object.keys(this.intentStates).some(function(intent) {
            var intentState = this.intentStates[intent];
            return (intentState.renderTasks.length !== 0 ||
                    intentState.receivingOperatorList);
          }, this)) {
        return;
      }

      Object.keys(this.intentStates).forEach(function(intent) {
        delete this.intentStates[intent];
      }, this);
      this.objs.clear();
      this.annotationsPromise = null;
      if (resetStats && this._stats instanceof StatTimer) {
        this._stats = new StatTimer();
      }
      this.pendingCleanup = false;
    },
    /**
     * For internal use only.
     * @ignore
     */
    _startRenderPage: function PDFPageProxy_startRenderPage(transparency,
                                                            intent) {
      var intentState = this.intentStates[intent];
      // TODO Refactor RenderPageRequest to separate rendering
      // and operator list logic
      if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.resolve(transparency);
      }
    },
    /**
     * For internal use only.
     * @ignore
     */
    _renderPageChunk: function PDFPageProxy_renderPageChunk(operatorListChunk,
                                                            intent) {
      var intentState = this.intentStates[intent];
      var i, ii;
      // Add the new chunk to the current operator list.
      for (i = 0, ii = operatorListChunk.length; i < ii; i++) {
        intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i]);
        intentState.operatorList.argsArray.push(
          operatorListChunk.argsArray[i]);
      }
      intentState.operatorList.lastChunk = operatorListChunk.lastChunk;

      // Notify all the rendering tasks there are more operators to be consumed.
      for (i = 0; i < intentState.renderTasks.length; i++) {
        intentState.renderTasks[i].operatorListChanged();
      }

      if (operatorListChunk.lastChunk) {
        intentState.receivingOperatorList = false;
        this._tryCleanup();
      }
    },

    /**
     * @return {Object} Returns page stats, if enabled.
     */
    get stats() {
      return (this._stats instanceof StatTimer ? this._stats : null);
    },
  };
  return PDFPageProxy;
})();

class LoopbackPort$1 {
  constructor(defer = true) {
    this._listeners = [];
    this._defer = defer;
    this._deferred = Promise.resolve(undefined);
  }

  postMessage(obj, transfers) {
    function cloneValue(value) {
      // Trying to perform a structured clone close to the spec, including
      // transfers.
      if (typeof value !== 'object' || value === null) {
        return value;
      }
      if (cloned.has(value)) { // already cloned the object
        return cloned.get(value);
      }
      var result;
      var buffer;
      if ((buffer = value.buffer) && isArrayBuffer(buffer)) {
        // We found object with ArrayBuffer (typed array).
        var transferable = transfers && transfers.includes(buffer);
        if (value === buffer) {
          // Special case when we are faking typed arrays in compatibility.js.
          result = value;
        } else if (transferable) {
          result = new value.constructor(buffer, value.byteOffset,
                                         value.byteLength);
        } else {
          result = new value.constructor(value);
        }
        cloned.set(value, result);
        return result;
      }
      result = Array.isArray(value) ? [] : {};
      cloned.set(value, result); // adding to cache now for cyclic references
      // Cloning all value and object properties, however ignoring properties
      // defined via getter.
      for (var i in value) {
        var desc, p = value;
        while (!(desc = Object.getOwnPropertyDescriptor(p, i))) {
          p = Object.getPrototypeOf(p);
        }
        if (typeof desc.value === 'undefined' ||
            typeof desc.value === 'function') {
          continue;
        }
        result[i] = cloneValue(desc.value);
      }
      return result;
    }

    if (!this._defer) {
      this._listeners.forEach(function (listener) {
        listener.call(this, { data: obj, });
      }, this);
      return;
    }

    var cloned = new WeakMap();
    var e = { data: cloneValue(obj), };
    this._deferred.then(() => {
      this._listeners.forEach(function (listener) {
        listener.call(this, e);
      }, this);
    });
  }

  addEventListener(name, listener) {
    this._listeners.push(listener);
  }

  removeEventListener(name, listener) {
    var i = this._listeners.indexOf(listener);
    this._listeners.splice(i, 1);
  }

  terminate() {
    this._listeners = [];
  }
}

/**
 * @typedef {Object} PDFWorkerParameters
 * @property {string} name - (optional) The name of the worker.
 * @property {Object} port - (optional) The `workerPort`.
 * @property {boolean} postMessageTransfers - (optional) Enables transfer usage
 *   in postMessage for ArrayBuffers. The default value is `true`.
 * @property {number} verbosity - (optional) Controls the logging level; the
 *   constants from {VerbosityLevel} should be used.
 */

/**
 * PDF.js web worker abstraction, it controls instantiation of PDF documents and
 * WorkerTransport for them. If creation of a web worker is not possible,
 * a "fake" worker will be used instead.
 * @class
 */
var PDFWorker$1 = (function PDFWorkerClosure() {
  let nextFakeWorkerId = 0;

  function getWorkerSrc() {
    {
      return true;
    }
  }

  function getMainThreadWorkerMessageHandler() {
    try {
      if (false) ;
    } catch (ex) { }
    return null;
  }

  let fakeWorkerFilesLoadedCapability;

  // Loads worker code into main thread.
  function setupFakeWorkerGlobal() {
    if (fakeWorkerFilesLoadedCapability) {
      return fakeWorkerFilesLoadedCapability.promise;
    }
    fakeWorkerFilesLoadedCapability = createPromiseCapability();

    let mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
    if (mainWorkerMessageHandler) {
      // The worker was already loaded using a `<script>` tag.
      fakeWorkerFilesLoadedCapability.resolve(mainWorkerMessageHandler);
      return fakeWorkerFilesLoadedCapability.promise;
    }
    // In the developer build load worker_loader.js which in turn loads all the
    // other files and resolves the promise. In production only the
    // pdf.worker.js file is needed.
    {
      const loader = fakeWorkerFilesLoader || function() {
        return loadScript(getWorkerSrc()).then(function() {
          return window.pdfjsWorker.WorkerMessageHandler;
        });
      };
      loader().then(fakeWorkerFilesLoadedCapability.resolve,
                    fakeWorkerFilesLoadedCapability.reject);
    }
    return fakeWorkerFilesLoadedCapability.promise;
  }

  let pdfWorkerPorts = new WeakMap();

  /**
   * @param {PDFWorkerParameters} params - The worker initialization parameters.
   */
  function PDFWorker({ name = null, port = null,
                       postMessageTransfers = true,
                       verbosity = getVerbosityLevel(), } = {}) {
    if (port && pdfWorkerPorts.has(port)) {
      throw new Error('Cannot use more than one PDFWorker per port');
    }

    this.name = name;
    this.destroyed = false;
    this.postMessageTransfers = postMessageTransfers !== false;
    this.verbosity = verbosity;

    this._readyCapability = createPromiseCapability();
    this._port = null;
    this._webWorker = null;
    this._messageHandler = null;

    if (port) {
      pdfWorkerPorts.set(port, this);
      this._initializeFromPort(port);
      return;
    }

    this._initialize();
  }

  PDFWorker.prototype = /** @lends PDFWorker.prototype */ {
    get promise() {
      return this._readyCapability.promise;
    },

    get port() {
      return this._port;
    },

    get messageHandler() {
      return this._messageHandler;
    },

    _initializeFromPort: function PDFWorker_initializeFromPort(port) {
      this._port = port;
      this._messageHandler = new MessageHandler('main', 'worker', port);
      this._messageHandler.on('ready', function () {
        // Ignoring 'ready' event -- MessageHandler shall be already initialized
        // and ready to accept the messages.
      });
      this._readyCapability.resolve();
    },

    _initialize: function PDFWorker_initialize() {
      // Either workers are disabled, not supported or have thrown an exception.
      // Thus, we fallback to a faked worker.
      this._setupFakeWorker();
    },

    _setupFakeWorker: function PDFWorker_setupFakeWorker() {
      if (!isWorkerDisabled) {
        warn('Setting up fake worker.');
        isWorkerDisabled = true;
      }

      setupFakeWorkerGlobal().then((WorkerMessageHandler) => {
        if (this.destroyed) {
          this._readyCapability.reject(new Error('Worker was destroyed'));
          return;
        }
        let port = new LoopbackPort$1();
        this._port = port;

        // All fake workers use the same port, making id unique.
        var id = 'fake' + (nextFakeWorkerId++);

        // If the main thread is our worker, setup the handling for the
        // messages -- the main thread sends to it self.
        var workerHandler = new MessageHandler(id + '_worker', id, port);
        WorkerMessageHandler.setup(workerHandler, port);

        var messageHandler = new MessageHandler(id, id + '_worker', port);
        this._messageHandler = messageHandler;
        this._readyCapability.resolve();
      }).catch((reason) => {
        this._readyCapability.reject(
          new Error(`Setting up fake worker failed: "${reason.message}".`));
      });
    },

    /**
     * Destroys the worker instance.
     */
    destroy: function PDFWorker_destroy() {
      this.destroyed = true;
      if (this._webWorker) {
        // We need to terminate only web worker created resource.
        this._webWorker.terminate();
        this._webWorker = null;
      }
      pdfWorkerPorts.delete(this._port);
      this._port = null;
      if (this._messageHandler) {
        this._messageHandler.destroy();
        this._messageHandler = null;
      }
    },
  };

  /**
   * @param {PDFWorkerParameters} params - The worker initialization parameters.
   */
  PDFWorker.fromPort = function(params) {
    if (!params || !params.port) {
      throw new Error('PDFWorker.fromPort - invalid method signature.');
    }
    if (pdfWorkerPorts.has(params.port)) {
      return pdfWorkerPorts.get(params.port);
    }
    return new PDFWorker(params);
  };

  PDFWorker.getWorkerSrc = function() {
    return getWorkerSrc();
  };

  return PDFWorker;
})();

/**
 * For internal use only.
 * @ignore
 */
class WorkerTransport {
  constructor(messageHandler, loadingTask, networkStream, params) {
    this.messageHandler = messageHandler;
    this.loadingTask = loadingTask;
    this.commonObjs = new PDFObjects();
    this.fontLoader = new FontLoader(loadingTask.docId);
    this._params = params;
    this.CMapReaderFactory = new params.CMapReaderFactory({
      baseUrl: params.cMapUrl,
      isCompressed: params.cMapPacked,
    });

    this.destroyed = false;
    this.destroyCapability = null;
    this._passwordCapability = null;

    this._networkStream = networkStream;
    this._fullReader = null;
    this._lastProgress = null;

    this.pageCache = [];
    this.pagePromises = [];
    this.downloadInfoCapability = createPromiseCapability();

    this.setupMessageHandler();
  }

  destroy() {
    if (this.destroyCapability) {
      return this.destroyCapability.promise;
    }

    this.destroyed = true;
    this.destroyCapability = createPromiseCapability();

    if (this._passwordCapability) {
      this._passwordCapability.reject(
        new Error('Worker was destroyed during onPassword callback'));
    }

    const waitOn = [];
    // We need to wait for all renderings to be completed, e.g.
    // timeout/rAF can take a long time.
    this.pageCache.forEach(function(page) {
      if (page) {
        waitOn.push(page._destroy());
      }
    });
    this.pageCache = [];
    this.pagePromises = [];
    // We also need to wait for the worker to finish its long running tasks.
    const terminated = this.messageHandler.sendWithPromise('Terminate', null);
    waitOn.push(terminated);
    Promise.all(waitOn).then(() => {
      this.fontLoader.clear();
      if (this._networkStream) {
        this._networkStream.cancelAllRequests();
      }

      if (this.messageHandler) {
        this.messageHandler.destroy();
        this.messageHandler = null;
      }
      this.destroyCapability.resolve();
    }, this.destroyCapability.reject);
    return this.destroyCapability.promise;
  }

  setupMessageHandler() {
    const { messageHandler, loadingTask, } = this;

    messageHandler.on('GetReader', function(data, sink) {
      assert(this._networkStream);
      this._fullReader = this._networkStream.getFullReader();
      this._fullReader.onProgress = (evt) => {
        this._lastProgress = {
          loaded: evt.loaded,
          total: evt.total,
        };
      };
      sink.onPull = () => {
        this._fullReader.read().then(function({ value, done, }) {
          if (done) {
            sink.close();
            return;
          }
          assert(isArrayBuffer(value));
          // Enqueue data chunk into sink, and transfer it
          // to other side as `Transferable` object.
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch((reason) => {
          sink.error(reason);
        });
      };

      sink.onCancel = (reason) => {
        this._fullReader.cancel(reason);
      };
    }, this);

    messageHandler.on('ReaderHeadersReady', function(data) {
      const headersCapability = createPromiseCapability();
      const fullReader = this._fullReader;
      fullReader.headersReady.then(() => {
        // If stream or range are disabled, it's our only way to report
        // loading progress.
        if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
          if (this._lastProgress && loadingTask.onProgress) {
            loadingTask.onProgress(this._lastProgress);
          }
          fullReader.onProgress = (evt) => {
            if (loadingTask.onProgress) {
              loadingTask.onProgress({
                loaded: evt.loaded,
                total: evt.total,
              });
            }
          };
        }

        headersCapability.resolve({
          isStreamingSupported: fullReader.isStreamingSupported,
          isRangeSupported: fullReader.isRangeSupported,
          contentLength: fullReader.contentLength,
        });
      }, headersCapability.reject);

      return headersCapability.promise;
    }, this);

    messageHandler.on('GetRangeReader', function(data, sink) {
      assert(this._networkStream);
      const rangeReader =
        this._networkStream.getRangeReader(data.begin, data.end);

      sink.onPull = () => {
        rangeReader.read().then(function({ value, done, }) {
          if (done) {
            sink.close();
            return;
          }
          assert(isArrayBuffer(value));
          sink.enqueue(new Uint8Array(value), 1, [value]);
        }).catch((reason) => {
          sink.error(reason);
        });
      };

      sink.onCancel = (reason) => {
        rangeReader.cancel(reason);
      };
    }, this);

    messageHandler.on('GetDoc', function({ pdfInfo, }) {
      this.numPages = pdfInfo.numPages;
      this.pdfDocument = new PDFDocumentProxy(pdfInfo, this, loadingTask);
      loadingTask._capability.resolve(this.pdfDocument);
    }, this);

    messageHandler.on('PasswordRequest', function(exception) {
      this._passwordCapability = createPromiseCapability();

      if (loadingTask.onPassword) {
        const updatePassword = (password) => {
          this._passwordCapability.resolve({
            password,
          });
        };
        try {
          loadingTask.onPassword(updatePassword, exception.code);
        } catch (ex) {
          this._passwordCapability.reject(ex);
        }
      } else {
        this._passwordCapability.reject(
          new PasswordException(exception.message, exception.code));
      }
      return this._passwordCapability.promise;
    }, this);

    messageHandler.on('PasswordException', function(exception) {
      loadingTask._capability.reject(
        new PasswordException(exception.message, exception.code));
    }, this);

    messageHandler.on('InvalidPDF', function(exception) {
      loadingTask._capability.reject(
        new InvalidPDFException(exception.message));
    }, this);

    messageHandler.on('MissingPDF', function(exception) {
      loadingTask._capability.reject(
        new MissingPDFException(exception.message));
    }, this);

    messageHandler.on('UnexpectedResponse', function(exception) {
      loadingTask._capability.reject(
        new UnexpectedResponseException(exception.message, exception.status));
    }, this);

    messageHandler.on('UnknownError', function(exception) {
      loadingTask._capability.reject(
        new UnknownErrorException(exception.message, exception.details));
    }, this);

    messageHandler.on('DataLoaded', function(data) {
      // For consistency: Ensure that progress is always reported when the
      // entire PDF file has been loaded, regardless of how it was fetched.
      if (loadingTask.onProgress) {
        loadingTask.onProgress({
          loaded: data.length,
          total: data.length,
        });
      }
      this.downloadInfoCapability.resolve(data);
    }, this);

    messageHandler.on('StartRenderPage', function(data) {
      if (this.destroyed) {
        return; // Ignore any pending requests if the worker was terminated.
      }

      const page = this.pageCache[data.pageIndex];
      page._stats.timeEnd('Page Request');
      page._startRenderPage(data.transparency, data.intent);
    }, this);

    messageHandler.on('RenderPageChunk', function(data) {
      if (this.destroyed) {
        return; // Ignore any pending requests if the worker was terminated.
      }

      const page = this.pageCache[data.pageIndex];
      page._renderPageChunk(data.operatorList, data.intent);
    }, this);

    messageHandler.on('commonobj', function(data) {
      if (this.destroyed) {
        return; // Ignore any pending requests if the worker was terminated.
      }

      const [id, type, exportedData] = data;
      if (this.commonObjs.hasData(id)) {
        return;
      }

      switch (type) {
        case 'Font':
          const params = this._params;

          if ('error' in exportedData) {
            const exportedError = exportedData.error;
            warn(`Error during font loading: ${exportedError}`);
            this.commonObjs.resolve(id, exportedError);
            break;
          }

          let fontRegistry = null;
          if (params.pdfBug && global_scope.FontInspector &&
              global_scope.FontInspector.enabled) {
            fontRegistry = {
              registerFont(font, url) {
                global_scope['FontInspector'].fontAdded(font, url);
              },
            };
          }
          const font = new FontFaceObject(exportedData, {
            isEvalSupported: params.isEvalSupported,
            disableFontFace: params.disableFontFace,
            ignoreErrors: params.ignoreErrors,
            onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
            fontRegistry,
          });
          const fontReady = (fontObjs) => {
            this.commonObjs.resolve(id, font);
          };

          this.fontLoader.bind([font], fontReady);
          break;
        case 'FontPath':
          this.commonObjs.resolve(id, exportedData);
          break;
        default:
          throw new Error(`Got unknown common object type ${type}`);
      }
    }, this);

    messageHandler.on('obj', function(data) {
      if (this.destroyed) {
        return; // Ignore any pending requests if the worker was terminated.
      }

      const [id, pageIndex, type, imageData] = data;
      const pageProxy = this.pageCache[pageIndex];
      if (pageProxy.objs.hasData(id)) {
        return;
      }

      switch (type) {
        case 'JpegStream':
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function() {
              resolve(img);
            };
            img.onerror = function() {
              reject(new Error('Error during JPEG image loading'));
              // Note that when the browser image loading/decoding fails,
              // we'll fallback to the built-in PDF.js JPEG decoder; see
              // `PartialEvaluator.buildPaintImageXObject` in the
              // `src/core/evaluator.js` file.
            };
            img.src = imageData;
          }).then((img) => {
            pageProxy.objs.resolve(id, img);
          });
        case 'Image':
          pageProxy.objs.resolve(id, imageData);

          // Heuristic that will allow us not to store large data.
          const MAX_IMAGE_SIZE_TO_STORE = 8000000;
          if (imageData && 'data' in imageData &&
              imageData.data.length > MAX_IMAGE_SIZE_TO_STORE) {
            pageProxy.cleanupAfterRender = true;
          }
          break;
        default:
          throw new Error(`Got unknown object type ${type}`);
      }
    }, this);

    messageHandler.on('DocProgress', function(data) {
      if (this.destroyed) {
        return; // Ignore any pending requests if the worker was terminated.
      }

      if (loadingTask.onProgress) {
        loadingTask.onProgress({
          loaded: data.loaded,
          total: data.total,
        });
      }
    }, this);

    messageHandler.on('PageError', function(data) {
      if (this.destroyed) {
        return; // Ignore any pending requests if the worker was terminated.
      }

      const page = this.pageCache[data.pageNum - 1];
      const intentState = page.intentStates[data.intent];

      if (intentState.displayReadyCapability) {
        intentState.displayReadyCapability.reject(data.error);
      } else {
        throw new Error(data.error);
      }

      if (intentState.operatorList) {
        // Mark operator list as complete.
        intentState.operatorList.lastChunk = true;
        for (let i = 0; i < intentState.renderTasks.length; i++) {
          intentState.renderTasks[i].operatorListChanged();
        }
      }
    }, this);

    messageHandler.on('UnsupportedFeature', this._onUnsupportedFeature, this);

    messageHandler.on('JpegDecode', function(data) {
      if (this.destroyed) {
        return Promise.reject(new Error('Worker was destroyed'));
      }

      {
        // Make sure that this code is not executing in node.js, as
        // it's using DOM image, and there is no library to support that.
        return Promise.reject(new Error('"document" is not defined.'));
      }
    }, this);

    messageHandler.on('FetchBuiltInCMap', function(data) {
      if (this.destroyed) {
        return Promise.reject(new Error('Worker was destroyed'));
      }
      return this.CMapReaderFactory.fetch({
        name: data.name,
      });
    }, this);
  }

  _onUnsupportedFeature({ featureId, }) {
    if (this.destroyed) {
      return; // Ignore any pending requests if the worker was terminated.
    }
    if (this.loadingTask.onUnsupportedFeature) {
      this.loadingTask.onUnsupportedFeature(featureId);
    }
  }

  getData() {
    return this.messageHandler.sendWithPromise('GetData', null);
  }

  getPage(pageNumber) {
    if (!Number.isInteger(pageNumber) ||
        pageNumber <= 0 || pageNumber > this.numPages) {
      return Promise.reject(new Error('Invalid page request'));
    }

    const pageIndex = pageNumber - 1;
    if (pageIndex in this.pagePromises) {
      return this.pagePromises[pageIndex];
    }
    const promise = this.messageHandler.sendWithPromise('GetPage', {
      pageIndex,
    }).then((pageInfo) => {
      if (this.destroyed) {
        throw new Error('Transport destroyed');
      }
      const page = new PDFPageProxy(pageIndex, pageInfo, this,
                                    this._params.pdfBug);
      this.pageCache[pageIndex] = page;
      return page;
    });
    this.pagePromises[pageIndex] = promise;
    return promise;
  }

  getPageIndex(ref) {
    return this.messageHandler.sendWithPromise('GetPageIndex', {
      ref,
    }).catch(function(reason) {
      return Promise.reject(new Error(reason));
    });
  }

  getAnnotations(pageIndex, intent) {
    return this.messageHandler.sendWithPromise('GetAnnotations', {
      pageIndex,
      intent,
    });
  }

  getDestinations() {
    return this.messageHandler.sendWithPromise('GetDestinations', null);
  }

  getDestination(id) {
    if (typeof id !== 'string') {
      return Promise.reject(new Error('Invalid destination request.'));
    }
    return this.messageHandler.sendWithPromise('GetDestination', {
      id,
    });
  }

  getPageLabels() {
    return this.messageHandler.sendWithPromise('GetPageLabels', null);
  }

  getPageMode() {
    return this.messageHandler.sendWithPromise('GetPageMode', null);
  }

  getAttachments() {
    return this.messageHandler.sendWithPromise('GetAttachments', null);
  }

  getJavaScript() {
    return this.messageHandler.sendWithPromise('GetJavaScript', null);
  }

  getOutline() {
    return this.messageHandler.sendWithPromise('GetOutline', null);
  }

  getPermissions() {
    return this.messageHandler.sendWithPromise('GetPermissions', null);
  }

  getMetadata() {
    return this.messageHandler.sendWithPromise('GetMetadata', null).
        then((results) => {
      return {
        info: results[0],
        metadata: (results[1] ? new Metadata(results[1]) : null),
        contentDispositionFilename: (this._fullReader ?
                                     this._fullReader.filename : null),
      };
    });
  }

  getStats() {
    return this.messageHandler.sendWithPromise('GetStats', null);
  }

  startCleanup() {
    this.messageHandler.sendWithPromise('Cleanup', null).then(() => {
      for (let i = 0, ii = this.pageCache.length; i < ii; i++) {
        const page = this.pageCache[i];
        if (page) {
          page.cleanup();
        }
      }
      this.commonObjs.clear();
      this.fontLoader.clear();
    });
  }

  get loadingParams() {
    const params = this._params;
    return shadow(this, 'loadingParams', {
      disableAutoFetch: params.disableAutoFetch,
      disableCreateObjectURL: params.disableCreateObjectURL,
      disableFontFace: params.disableFontFace,
      nativeImageDecoderSupport: params.nativeImageDecoderSupport,
    });
  }
}

/**
 * A PDF document and page is built of many objects. E.g. there are objects
 * for fonts, images, rendering code and such. These objects might get processed
 * inside of a worker. The `PDFObjects` implements some basic functions to
 * manage these objects.
 * @ignore
 */
var PDFObjects = (function PDFObjectsClosure() {
  function PDFObjects() {
    this.objs = Object.create(null);
  }

  PDFObjects.prototype = {
    /**
     * Internal function.
     * Ensures there is an object defined for `objId`.
     */
    ensureObj: function PDFObjects_ensureObj(objId) {
      if (this.objs[objId]) {
        return this.objs[objId];
      }

      var obj = {
        capability: createPromiseCapability(),
        data: null,
        resolved: false,
      };
      this.objs[objId] = obj;

      return obj;
    },

    /**
     * If called *without* callback, this returns the data of `objId` but the
     * object needs to be resolved. If it isn't, this function throws.
     *
     * If called *with* a callback, the callback is called with the data of the
     * object once the object is resolved. That means, if you call this
     * function and the object is already resolved, the callback gets called
     * right away.
     */
    get: function PDFObjects_get(objId, callback) {
      // If there is a callback, then the get can be async and the object is
      // not required to be resolved right now
      if (callback) {
        this.ensureObj(objId).capability.promise.then(callback);
        return null;
      }

      // If there isn't a callback, the user expects to get the resolved data
      // directly.
      var obj = this.objs[objId];

      // If there isn't an object yet or the object isn't resolved, then the
      // data isn't ready yet!
      if (!obj || !obj.resolved) {
        throw new Error(`Requesting object that isn't resolved yet ${objId}`);
      }

      return obj.data;
    },

    /**
     * Resolves the object `objId` with optional `data`.
     */
    resolve: function PDFObjects_resolve(objId, data) {
      var obj = this.ensureObj(objId);

      obj.resolved = true;
      obj.data = data;
      obj.capability.resolve(data);
    },

    isResolved: function PDFObjects_isResolved(objId) {
      var objs = this.objs;

      if (!objs[objId]) {
        return false;
      }
      return objs[objId].resolved;
    },

    hasData: function PDFObjects_hasData(objId) {
      return this.isResolved(objId);
    },

    /**
     * Returns the data of `objId` if object exists, null otherwise.
     */
    getData: function PDFObjects_getData(objId) {
      var objs = this.objs;
      if (!objs[objId] || !objs[objId].resolved) {
        return null;
      }
      return objs[objId].data;
    },

    clear: function PDFObjects_clear() {
      this.objs = Object.create(null);
    },
  };
  return PDFObjects;
})();

/**
 * Allows controlling of the rendering tasks.
 * @class
 * @alias RenderTask
 */
var RenderTask = (function RenderTaskClosure() {
  function RenderTask(internalRenderTask) {
    this._internalRenderTask = internalRenderTask;

    /**
     * Callback for incremental rendering -- a function that will be called
     * each time the rendering is paused.  To continue rendering call the
     * function that is the first argument to the callback.
     * @type {function}
     */
    this.onContinue = null;
  }

  RenderTask.prototype = /** @lends RenderTask.prototype */ {
    /**
     * Promise for rendering task completion.
     * @return {Promise}
     */
    get promise() {
      return this._internalRenderTask.capability.promise;
    },

    /**
     * Cancels the rendering task. If the task is currently rendering it will
     * not be cancelled until graphics pauses with a timeout. The promise that
     * this object extends will be rejected when cancelled.
     */
    cancel: function RenderTask_cancel() {
      this._internalRenderTask.cancel();
    },

    /**
     * Registers callbacks to indicate the rendering task completion.
     *
     * @param {function} onFulfilled The callback for the rendering completion.
     * @param {function} onRejected The callback for the rendering failure.
     * @return {Promise} A promise that is resolved after the onFulfilled or
     *                   onRejected callback.
     */
    then: function RenderTask_then(onFulfilled, onRejected) {
      return this.promise.then.apply(this.promise, arguments);
    },
  };

  return RenderTask;
})();

/**
 * For internal use only.
 * @ignore
 */
var InternalRenderTask = (function InternalRenderTaskClosure() {
  let canvasInRendering = new WeakMap();

  function InternalRenderTask(callback, params, objs, commonObjs, operatorList,
                              pageNumber, canvasFactory, webGLContext,
                              pdfBug = false) {
    this.callback = callback;
    this.params = params;
    this.objs = objs;
    this.commonObjs = commonObjs;
    this.operatorListIdx = null;
    this.operatorList = operatorList;
    this.pageNumber = pageNumber;
    this.canvasFactory = canvasFactory;
    this.webGLContext = webGLContext;
    this._pdfBug = pdfBug;

    this.running = false;
    this.graphicsReadyCallback = null;
    this.graphicsReady = false;
    this.useRequestAnimationFrame = false;
    this.cancelled = false;
    this.capability = createPromiseCapability();
    this.task = new RenderTask(this);
    // caching this-bound methods
    this._continueBound = this._continue.bind(this);
    this._scheduleNextBound = this._scheduleNext.bind(this);
    this._nextBound = this._next.bind(this);
    this._canvas = params.canvasContext.canvas;
  }

  InternalRenderTask.prototype = {

    initializeGraphics(transparency) {
      if (this.cancelled) {
        return;
      }
      if (this._canvas) {
        if (canvasInRendering.has(this._canvas)) {
          throw new Error(
            'Cannot use the same canvas during multiple render() operations. ' +
            'Use different canvas or ensure previous operations were ' +
            'cancelled or completed.');
        }
        canvasInRendering.set(this._canvas, this);
      }

      if (this._pdfBug && global_scope.StepperManager &&
          global_scope.StepperManager.enabled) {
        this.stepper = global_scope.StepperManager.create(this.pageNumber - 1);
        this.stepper.init(this.operatorList);
        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
      }

      var params = this.params;
      this.gfx = new CanvasGraphics(params.canvasContext, this.commonObjs,
                                    this.objs, this.canvasFactory,
                                    this.webGLContext, params.imageLayer);

      this.gfx.beginDrawing({
        transform: params.transform,
        viewport: params.viewport,
        transparency,
        background: params.background,
      });
      this.operatorListIdx = 0;
      this.graphicsReady = true;
      if (this.graphicsReadyCallback) {
        this.graphicsReadyCallback();
      }
    },

    cancel: function InternalRenderTask_cancel() {
      this.running = false;
      this.cancelled = true;
      if (this._canvas) {
        canvasInRendering.delete(this._canvas);
      }
      this.callback(new RenderingCancelledException(
        'Rendering cancelled, page ' + this.pageNumber, 'canvas'));
    },

    operatorListChanged: function InternalRenderTask_operatorListChanged() {
      if (!this.graphicsReady) {
        if (!this.graphicsReadyCallback) {
          this.graphicsReadyCallback = this._continueBound;
        }
        return;
      }

      if (this.stepper) {
        this.stepper.updateOperatorList(this.operatorList);
      }

      if (this.running) {
        return;
      }
      this._continue();
    },

    _continue: function InternalRenderTask__continue() {
      this.running = true;
      if (this.cancelled) {
        return;
      }
      if (this.task.onContinue) {
        this.task.onContinue(this._scheduleNextBound);
      } else {
        this._scheduleNext();
      }
    },

    _scheduleNext: function InternalRenderTask__scheduleNext() {
      if (this.useRequestAnimationFrame && false) {
        window.requestAnimationFrame(() => {
          this._nextBound().catch(this.callback);
        });
      } else {
        Promise.resolve().then(this._nextBound).catch(this.callback);
      }
    },

    _next: function InternalRenderTask__next() {
      return new Promise(() => {
        if (this.cancelled) {
          return;
        }
        this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList,
                                          this.operatorListIdx,
                                          this._continueBound,
                                          this.stepper);
        if (this.operatorListIdx === this.operatorList.argsArray.length) {
          this.running = false;
          if (this.operatorList.lastChunk) {
            this.gfx.endDrawing();
            if (this._canvas) {
              canvasInRendering.delete(this._canvas);
            }
            this.callback();
          }
        }
      });
    },

  };

  return InternalRenderTask;
})();

var version, build;
{
  version = "1.0.0";
  build = "1";
}

var api = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getDocument: getDocument$1,
	LoopbackPort: LoopbackPort$1,
	PDFDataRangeTransport: PDFDataRangeTransport$1,
	PDFWorker: PDFWorker$1,
	PDFDocumentProxy: PDFDocumentProxy,
	PDFPageProxy: PDFPageProxy,
	setPDFNetworkStreamFactory: setPDFNetworkStreamFactory,
	get version () { return version; },
	get build () { return build; }
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(api);

/* Copyright 2015 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Text layer render parameters.
 *
 * @typedef {Object} TextLayerRenderParameters
 * @property {TextContent} textContent - (optional) Text content to render
 *   (the object is returned by the page's getTextContent() method).
 * @property {ReadableStream} textContentStream - (optional) Text content
 *   stream to render (the stream is returned by the page's
 *   streamTextContent() method).
 * @property {HTMLElement} container - HTML element that will contain text runs.
 * @property {PageViewport} viewport - The target viewport to properly
 *   layout the text runs.
 * @property {Array} textDivs - (optional) HTML elements that are correspond
 *   the text items of the textContent input. This is output and shall be
 *   initially be set to empty array.
 * @property {Array} textContentItemsStr - (optional) Strings that correspond
 *   the `str` property of the text items of textContent input. This is output
 *   and shall be initially be set to empty array.
 * @property {number} timeout - (optional) Delay in milliseconds before
 *   rendering of the text  runs occurs.
 * @property {boolean} enhanceTextSelection - (optional) Whether to turn on the
 *   text selection enhancement.
 */
var renderTextLayer = (function renderTextLayerClosure() {
  var MAX_TEXT_DIVS_TO_RENDER = 100000;

  var NonWhitespaceRegexp = /\S/;

  function isAllWhitespace(str) {
    return !NonWhitespaceRegexp.test(str);
  }

  // Text layers may contain many thousands of divs, and using `styleBuf` avoids
  // creating many intermediate strings when building their 'style' properties.
  var styleBuf = ['left: ', 0, 'px; top: ', 0, 'px; font-size: ', 0,
                  'px; font-family: ', '', ';'];

  function appendText(task, geom, styles) {
    // Initialize all used properties to keep the caches monomorphic.
    var textDiv = document.createElement('div');
    var textDivProperties = {
      style: null,
      angle: 0,
      canvasWidth: 0,
      isWhitespace: false,
      originalTransform: null,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      scale: 1,
    };

    task._textDivs.push(textDiv);
    if (isAllWhitespace(geom.str)) {
      textDivProperties.isWhitespace = true;
      task._textDivProperties.set(textDiv, textDivProperties);
      return;
    }

    var tx = Util.transform(task._viewport.transform, geom.transform);
    var angle = Math.atan2(tx[1], tx[0]);
    var style = styles[geom.fontName];
    if (style.vertical) {
      angle += Math.PI / 2;
    }
    var fontHeight = Math.sqrt((tx[2] * tx[2]) + (tx[3] * tx[3]));
    var fontAscent = fontHeight;
    if (style.ascent) {
      fontAscent = style.ascent * fontAscent;
    } else if (style.descent) {
      fontAscent = (1 + style.descent) * fontAscent;
    }

    var left;
    var top;
    if (angle === 0) {
      left = tx[4];
      top = tx[5] - fontAscent;
    } else {
      left = tx[4] + (fontAscent * Math.sin(angle));
      top = tx[5] - (fontAscent * Math.cos(angle));
    }
    styleBuf[1] = left;
    styleBuf[3] = top;
    styleBuf[5] = fontHeight;
    styleBuf[7] = style.fontFamily;
    textDivProperties.style = styleBuf.join('');
    textDiv.setAttribute('style', textDivProperties.style);

    textDiv.textContent = geom.str;
    // `fontName` is only used by the FontInspector, and we only use `dataset`
    // here to make the font name available in the debugger.
    if (task._fontInspectorEnabled) {
      textDiv.dataset.fontName = geom.fontName;
    }
    if (angle !== 0) {
      textDivProperties.angle = angle * (180 / Math.PI);
    }
    // We don't bother scaling single-char text divs, because it has very
    // little effect on text highlighting. This makes scrolling on docs with
    // lots of such divs a lot faster.
    if (geom.str.length > 1) {
      if (style.vertical) {
        textDivProperties.canvasWidth = geom.height * task._viewport.scale;
      } else {
        textDivProperties.canvasWidth = geom.width * task._viewport.scale;
      }
    }
    task._textDivProperties.set(textDiv, textDivProperties);
    if (task._textContentStream) {
      task._layoutText(textDiv);
    }

    if (task._enhanceTextSelection) {
      var angleCos = 1, angleSin = 0;
      if (angle !== 0) {
        angleCos = Math.cos(angle);
        angleSin = Math.sin(angle);
      }
      var divWidth = (style.vertical ? geom.height : geom.width) *
                     task._viewport.scale;
      var divHeight = fontHeight;

      var m, b;
      if (angle !== 0) {
        m = [angleCos, angleSin, -angleSin, angleCos, left, top];
        b = Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m);
      } else {
        b = [left, top, left + divWidth, top + divHeight];
      }

      task._bounds.push({
        left: b[0],
        top: b[1],
        right: b[2],
        bottom: b[3],
        div: textDiv,
        size: [divWidth, divHeight],
        m,
      });
    }
  }

  function render(task) {
    if (task._canceled) {
      return;
    }
    var textDivs = task._textDivs;
    var capability = task._capability;
    var textDivsLength = textDivs.length;

    // No point in rendering many divs as it would make the browser
    // unusable even after the divs are rendered.
    if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
      task._renderingDone = true;
      capability.resolve();
      return;
    }

    if (!task._textContentStream) {
      for (var i = 0; i < textDivsLength; i++) {
        task._layoutText(textDivs[i]);
      }
    }

    task._renderingDone = true;
    capability.resolve();
  }

  function expand(task) {
    var bounds = task._bounds;
    var viewport = task._viewport;

    var expanded = expandBounds(viewport.width, viewport.height, bounds);
    for (var i = 0; i < expanded.length; i++) {
      var div = bounds[i].div;
      var divProperties = task._textDivProperties.get(div);
      if (divProperties.angle === 0) {
        divProperties.paddingLeft = bounds[i].left - expanded[i].left;
        divProperties.paddingTop = bounds[i].top - expanded[i].top;
        divProperties.paddingRight = expanded[i].right - bounds[i].right;
        divProperties.paddingBottom = expanded[i].bottom - bounds[i].bottom;
        task._textDivProperties.set(div, divProperties);
        continue;
      }
      // Box is rotated -- trying to find padding so rotated div will not
      // exceed its expanded bounds.
      var e = expanded[i], b = bounds[i];
      var m = b.m, c = m[0], s = m[1];
      // Finding intersections with expanded box.
      var points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
      var ts = new Float64Array(64);
      points.forEach(function (p, i) {
        var t = Util.applyTransform(p, m);
        ts[i + 0] = c && (e.left - t[0]) / c;
        ts[i + 4] = s && (e.top - t[1]) / s;
        ts[i + 8] = c && (e.right - t[0]) / c;
        ts[i + 12] = s && (e.bottom - t[1]) / s;

        ts[i + 16] = s && (e.left - t[0]) / -s;
        ts[i + 20] = c && (e.top - t[1]) / c;
        ts[i + 24] = s && (e.right - t[0]) / -s;
        ts[i + 28] = c && (e.bottom - t[1]) / c;

        ts[i + 32] = c && (e.left - t[0]) / -c;
        ts[i + 36] = s && (e.top - t[1]) / -s;
        ts[i + 40] = c && (e.right - t[0]) / -c;
        ts[i + 44] = s && (e.bottom - t[1]) / -s;

        ts[i + 48] = s && (e.left - t[0]) / s;
        ts[i + 52] = c && (e.top - t[1]) / -c;
        ts[i + 56] = s && (e.right - t[0]) / s;
        ts[i + 60] = c && (e.bottom - t[1]) / -c;
      });
      var findPositiveMin = function (ts, offset, count) {
        var result = 0;
        for (var i = 0; i < count; i++) {
          var t = ts[offset++];
          if (t > 0) {
            result = result ? Math.min(t, result) : t;
          }
        }
        return result;
      };
      // Not based on math, but to simplify calculations, using cos and sin
      // absolute values to not exceed the box (it can but insignificantly).
      var boxScale = 1 + Math.min(Math.abs(c), Math.abs(s));
      divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
      divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
      divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
      divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
      task._textDivProperties.set(div, divProperties);
    }
  }

  function expandBounds(width, height, boxes) {
    var bounds = boxes.map(function (box, i) {
      return {
        x1: box.left,
        y1: box.top,
        x2: box.right,
        y2: box.bottom,
        index: i,
        x1New: undefined,
        x2New: undefined,
      };
    });
    expandBoundsLTR(width, bounds);
    var expanded = new Array(boxes.length);
    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i] = {
        left: b.x1New,
        top: 0,
        right: b.x2New,
        bottom: 0,
      };
    });

    // Rotating on 90 degrees and extending extended boxes. Reusing the bounds
    // array and objects.
    boxes.map(function (box, i) {
      var e = expanded[i], b = bounds[i];
      b.x1 = box.top;
      b.y1 = width - e.right;
      b.x2 = box.bottom;
      b.y2 = width - e.left;
      b.index = i;
      b.x1New = undefined;
      b.x2New = undefined;
    });
    expandBoundsLTR(height, bounds);

    bounds.forEach(function (b) {
      var i = b.index;
      expanded[i].top = b.x1New;
      expanded[i].bottom = b.x2New;
    });
    return expanded;
  }

  function expandBoundsLTR(width, bounds) {
    // Sorting by x1 coordinate and walk by the bounds in the same order.
    bounds.sort(function (a, b) {
      return a.x1 - b.x1 || a.index - b.index;
    });

    // First we see on the horizon is a fake boundary.
    var fakeBoundary = {
      x1: -Infinity,
      y1: -Infinity,
      x2: 0,
      y2: Infinity,
      index: -1,
      x1New: 0,
      x2New: 0,
    };
    var horizon = [{
      start: -Infinity,
      end: Infinity,
      boundary: fakeBoundary,
    }];

    bounds.forEach(function (boundary) {
      // Searching for the affected part of horizon.
      // TODO red-black tree or simple binary search
      var i = 0;
      while (i < horizon.length && horizon[i].end <= boundary.y1) {
        i++;
      }
      var j = horizon.length - 1;
      while (j >= 0 && horizon[j].start >= boundary.y2) {
        j--;
      }

      var horizonPart, affectedBoundary;
      var q, k, maxXNew = -Infinity;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        var xNew;
        if (affectedBoundary.x2 > boundary.x1) {
          // In the middle of the previous element, new x shall be at the
          // boundary start. Extending if further if the affected boundary
          // placed on top of the current one.
          xNew = affectedBoundary.index > boundary.index ?
            affectedBoundary.x1New : boundary.x1;
        } else if (affectedBoundary.x2New === undefined) {
          // We have some space in between, new x in middle will be a fair
          // choice.
          xNew = (affectedBoundary.x2 + boundary.x1) / 2;
        } else {
          // Affected boundary has x2new set, using it as new x.
          xNew = affectedBoundary.x2New;
        }
        if (xNew > maxXNew) {
          maxXNew = xNew;
        }
      }

      // Set new x1 for current boundary.
      boundary.x1New = maxXNew;

      // Adjusts new x2 for the affected boundaries.
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        if (affectedBoundary.x2New === undefined) {
          // Was not set yet, choosing new x if possible.
          if (affectedBoundary.x2 > boundary.x1) {
            // Current and affected boundaries intersect. If affected boundary
            // is placed on top of the current, shrinking the affected.
            if (affectedBoundary.index > boundary.index) {
              affectedBoundary.x2New = affectedBoundary.x2;
            }
          } else {
            affectedBoundary.x2New = maxXNew;
          }
        } else if (affectedBoundary.x2New > maxXNew) {
          // Affected boundary is touching new x, pushing it back.
          affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
        }
      }

      // Fixing the horizon.
      var changedHorizon = [], lastBoundary = null;
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        // Checking which boundary will be visible.
        var useBoundary = affectedBoundary.x2 > boundary.x2 ?
          affectedBoundary : boundary;
        if (lastBoundary === useBoundary) {
          // Merging with previous.
          changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
        } else {
          changedHorizon.push({
            start: horizonPart.start,
            end: horizonPart.end,
            boundary: useBoundary,
          });
          lastBoundary = useBoundary;
        }
      }
      if (horizon[i].start < boundary.y1) {
        changedHorizon[0].start = boundary.y1;
        changedHorizon.unshift({
          start: horizon[i].start,
          end: boundary.y1,
          boundary: horizon[i].boundary,
        });
      }
      if (boundary.y2 < horizon[j].end) {
        changedHorizon[changedHorizon.length - 1].end = boundary.y2;
        changedHorizon.push({
          start: boundary.y2,
          end: horizon[j].end,
          boundary: horizon[j].boundary,
        });
      }

      // Set x2 new of boundary that is no longer visible (see overlapping case
      // above).
      // TODO more efficient, e.g. via reference counting.
      for (q = i; q <= j; q++) {
        horizonPart = horizon[q];
        affectedBoundary = horizonPart.boundary;
        if (affectedBoundary.x2New !== undefined) {
          continue;
        }
        var used = false;
        for (k = i - 1; !used && k >= 0 &&
        horizon[k].start >= affectedBoundary.y1; k--) {
          used = horizon[k].boundary === affectedBoundary;
        }
        for (k = j + 1; !used && k < horizon.length &&
        horizon[k].end <= affectedBoundary.y2; k++) {
          used = horizon[k].boundary === affectedBoundary;
        }
        for (k = 0; !used && k < changedHorizon.length; k++) {
          used = changedHorizon[k].boundary === affectedBoundary;
        }
        if (!used) {
          affectedBoundary.x2New = maxXNew;
        }
      }

      Array.prototype.splice.apply(horizon,
        [i, j - i + 1].concat(changedHorizon));
    });

    // Set new x2 for all unset boundaries.
    horizon.forEach(function (horizonPart) {
      var affectedBoundary = horizonPart.boundary;
      if (affectedBoundary.x2New === undefined) {
        affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
      }
    });
  }

  /**
   * Text layer rendering task.
   *
   * @param {TextContent} textContent
   * @param {HTMLElement} container
   * @param {PageViewport} viewport
   * @param {Array} textDivs
   * @param {boolean} enhanceTextSelection
   * @private
   */
  function TextLayerRenderTask({ textContent, textContentStream, container,
                                 viewport, textDivs, textContentItemsStr,
                                 enhanceTextSelection, }) {
    this._textContent = textContent;
    this._textContentStream = textContentStream;
    this._container = container;
    this._viewport = viewport;
    this._textDivs = textDivs || [];
    this._textContentItemsStr = textContentItemsStr || [];
    this._enhanceTextSelection = !!enhanceTextSelection;
    this._fontInspectorEnabled = !!(global_scope.FontInspector &&
                                    global_scope.FontInspector.enabled);

    this._reader = null;
    this._layoutTextLastFontSize = null;
    this._layoutTextLastFontFamily = null;
    this._layoutTextCtx = null;
    this._textDivProperties = new WeakMap();
    this._renderingDone = false;
    this._canceled = false;
    this._capability = createPromiseCapability();
    this._renderTimer = null;
    this._bounds = [];
  }
  TextLayerRenderTask.prototype = {
    get promise() {
      return this._capability.promise;
    },

    cancel: function TextLayer_cancel() {
      if (this._reader) {
        this._reader.cancel(new AbortException('text layer task cancelled'));
        this._reader = null;
      }
      this._canceled = true;
      if (this._renderTimer !== null) {
        clearTimeout(this._renderTimer);
        this._renderTimer = null;
      }
      this._capability.reject('canceled');
    },

    _processItems(items, styleCache) {
      for (let i = 0, len = items.length; i < len; i++) {
        this._textContentItemsStr.push(items[i].str);
        appendText(this, items[i], styleCache);
      }
    },

    _layoutText(textDiv) {
      let textLayerFrag = this._container;

      let textDivProperties = this._textDivProperties.get(textDiv);
      if (textDivProperties.isWhitespace) {
        return;
      }

      let fontSize = textDiv.style.fontSize;
      let fontFamily = textDiv.style.fontFamily;

      // Only build font string and set to context if different from last.
      if (fontSize !== this._layoutTextLastFontSize ||
          fontFamily !== this._layoutTextLastFontFamily) {
        this._layoutTextCtx.font = fontSize + ' ' + fontFamily;
        this._layoutTextLastFontSize = fontSize;
        this._layoutTextLastFontFamily = fontFamily;
      }

      let width = this._layoutTextCtx.measureText(textDiv.textContent).width;

      let transform = '';
      if (textDivProperties.canvasWidth !== 0 && width > 0) {
        textDivProperties.scale = textDivProperties.canvasWidth / width;
        transform = 'scaleX(' + textDivProperties.scale + ')';
      }
      if (textDivProperties.angle !== 0) {
        transform = 'rotate(' + textDivProperties.angle + 'deg) ' + transform;
      }
      if (transform !== '') {
        textDivProperties.originalTransform = transform;
        textDiv.style.transform = transform;
      }
      this._textDivProperties.set(textDiv, textDivProperties);
      textLayerFrag.appendChild(textDiv);
    },

    _render: function TextLayer_render(timeout) {
      let capability = createPromiseCapability();
      let styleCache = Object.create(null);

      // The temporary canvas is used to measure text length in the DOM.
      let canvas = document.createElement('canvas');
      this._layoutTextCtx = canvas.getContext('2d', { alpha: false, });

      if (this._textContent) {
        let textItems = this._textContent.items;
        let textStyles = this._textContent.styles;
        this._processItems(textItems, textStyles);
        capability.resolve();
      } else if (this._textContentStream) {
        let pump = () => {
          this._reader.read().then(({ value, done, }) => {
            if (done) {
              capability.resolve();
              return;
            }

            Object.assign(styleCache, value.styles);
            this._processItems(value.items, styleCache);
            pump();
          }, capability.reject);
        };

        this._reader = this._textContentStream.getReader();
        pump();
      } else {
        throw new Error('Neither "textContent" nor "textContentStream"' +
          ' parameters specified.');
      }

      capability.promise.then(() => {
        styleCache = null;
        if (!timeout) { // Render right away
          render(this);
        } else { // Schedule
          this._renderTimer = setTimeout(() => {
            render(this);
            this._renderTimer = null;
          }, timeout);
        }
      }, this._capability.reject);
    },

    expandTextDivs: function TextLayer_expandTextDivs(expandDivs) {
      if (!this._enhanceTextSelection || !this._renderingDone) {
        return;
      }
      if (this._bounds !== null) {
        expand(this);
        this._bounds = null;
      }

      for (var i = 0, ii = this._textDivs.length; i < ii; i++) {
        var div = this._textDivs[i];
        var divProperties = this._textDivProperties.get(div);

        if (divProperties.isWhitespace) {
          continue;
        }
        if (expandDivs) {
          var transform = '', padding = '';

          if (divProperties.scale !== 1) {
            transform = 'scaleX(' + divProperties.scale + ')';
          }
          if (divProperties.angle !== 0) {
            transform = 'rotate(' + divProperties.angle + 'deg) ' + transform;
          }
          if (divProperties.paddingLeft !== 0) {
            padding += ' padding-left: ' +
              (divProperties.paddingLeft / divProperties.scale) + 'px;';
            transform += ' translateX(' +
              (-divProperties.paddingLeft / divProperties.scale) + 'px)';
          }
          if (divProperties.paddingTop !== 0) {
            padding += ' padding-top: ' + divProperties.paddingTop + 'px;';
            transform += ' translateY(' + (-divProperties.paddingTop) + 'px)';
          }
          if (divProperties.paddingRight !== 0) {
            padding += ' padding-right: ' +
              (divProperties.paddingRight / divProperties.scale) + 'px;';
          }
          if (divProperties.paddingBottom !== 0) {
            padding += ' padding-bottom: ' +
              divProperties.paddingBottom + 'px;';
          }

          if (padding !== '') {
            div.setAttribute('style', divProperties.style + padding);
          }
          if (transform !== '') {
            div.style.transform = transform;
          }
        } else {
          div.style.padding = 0;
          div.style.transform = divProperties.originalTransform || '';
        }
      }
    },
  };

  /**
   * Starts rendering of the text layer.
   *
   * @param {TextLayerRenderParameters} renderParameters
   * @returns {TextLayerRenderTask}
   */
  function renderTextLayer(renderParameters) {
    var task = new TextLayerRenderTask({
      textContent: renderParameters.textContent,
      textContentStream: renderParameters.textContentStream,
      container: renderParameters.container,
      viewport: renderParameters.viewport,
      textDivs: renderParameters.textDivs,
      textContentItemsStr: renderParameters.textContentItemsStr,
      enhanceTextSelection: renderParameters.enhanceTextSelection,
    });
    task._render(renderParameters.timeout);
    return task;
  }

  return renderTextLayer;
})();

var text_layer = /*#__PURE__*/Object.freeze({
	__proto__: null,
	renderTextLayer: renderTextLayer
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(text_layer);

/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @typedef {Object} AnnotationElementParameters
 * @property {Object} data
 * @property {HTMLDivElement} layer
 * @property {PDFPage} page
 * @property {PageViewport} viewport
 * @property {IPDFLinkService} linkService
 * @property {DownloadManager} downloadManager
 * @property {string} imageResourcesPath - (optional) Path for image resources,
 *   mainly for annotation icons. Include trailing slash.
 * @property {boolean} renderInteractiveForms
 * @property {Object} svgFactory
 */

class AnnotationElementFactory {
  /**
   * @param {AnnotationElementParameters} parameters
   * @returns {AnnotationElement}
   */
  static create(parameters) {
    let subtype = parameters.data.annotationType;

    switch (subtype) {
      case AnnotationType.LINK:
        return new LinkAnnotationElement(parameters);

      case AnnotationType.TEXT:
        return new TextAnnotationElement(parameters);

      case AnnotationType.WIDGET:
        let fieldType = parameters.data.fieldType;

        switch (fieldType) {
          case 'Tx':
            return new TextWidgetAnnotationElement(parameters);
          case 'Btn':
            if (parameters.data.radioButton) {
              return new RadioButtonWidgetAnnotationElement(parameters);
            } else if (parameters.data.checkBox) {
              return new CheckboxWidgetAnnotationElement(parameters);
            }
            return new PushButtonWidgetAnnotationElement(parameters);
          case 'Ch':
            return new ChoiceWidgetAnnotationElement(parameters);
        }
        return new WidgetAnnotationElement(parameters);

      case AnnotationType.POPUP:
        return new PopupAnnotationElement(parameters);

      case AnnotationType.LINE:
        return new LineAnnotationElement(parameters);

      case AnnotationType.SQUARE:
        return new SquareAnnotationElement(parameters);

      case AnnotationType.CIRCLE:
        return new CircleAnnotationElement(parameters);

      case AnnotationType.POLYLINE:
        return new PolylineAnnotationElement(parameters);

      case AnnotationType.INK:
        return new InkAnnotationElement(parameters);

      case AnnotationType.POLYGON:
        return new PolygonAnnotationElement(parameters);

      case AnnotationType.HIGHLIGHT:
        return new HighlightAnnotationElement(parameters);

      case AnnotationType.UNDERLINE:
        return new UnderlineAnnotationElement(parameters);

      case AnnotationType.SQUIGGLY:
        return new SquigglyAnnotationElement(parameters);

      case AnnotationType.STRIKEOUT:
        return new StrikeOutAnnotationElement(parameters);

      case AnnotationType.STAMP:
        return new StampAnnotationElement(parameters);

      case AnnotationType.FILEATTACHMENT:
        return new FileAttachmentAnnotationElement(parameters);

      default:
        return new AnnotationElement(parameters);
    }
  }
}

class AnnotationElement {
  constructor(parameters, isRenderable = false, ignoreBorder = false) {
    this.isRenderable = isRenderable;
    this.data = parameters.data;
    this.layer = parameters.layer;
    this.page = parameters.page;
    this.viewport = parameters.viewport;
    this.linkService = parameters.linkService;
    this.downloadManager = parameters.downloadManager;
    this.imageResourcesPath = parameters.imageResourcesPath;
    this.renderInteractiveForms = parameters.renderInteractiveForms;
    this.svgFactory = parameters.svgFactory;

    if (isRenderable) {
      this.container = this._createContainer(ignoreBorder);
    }
  }

  /**
   * Create an empty container for the annotation's HTML element.
   *
   * @private
   * @param {boolean} ignoreBorder
   * @memberof AnnotationElement
   * @returns {HTMLSectionElement}
   */
  _createContainer(ignoreBorder = false) {
    let data = this.data, page = this.page, viewport = this.viewport;
    let container = document.createElement('section');
    let width = data.rect[2] - data.rect[0];
    let height = data.rect[3] - data.rect[1];

    container.setAttribute('data-annotation-id', data.id);

    // Do *not* modify `data.rect`, since that will corrupt the annotation
    // position on subsequent calls to `_createContainer` (see issue 6804).
    let rect = Util.normalizeRect([
      data.rect[0],
      page.view[3] - data.rect[1] + page.view[1],
      data.rect[2],
      page.view[3] - data.rect[3] + page.view[1]
    ]);

    container.style.transform = 'matrix(' + viewport.transform.join(',') + ')';
    container.style.transformOrigin = -rect[0] + 'px ' + -rect[1] + 'px';

    if (!ignoreBorder && data.borderStyle.width > 0) {
      container.style.borderWidth = data.borderStyle.width + 'px';
      if (data.borderStyle.style !== AnnotationBorderStyleType.UNDERLINE) {
        // Underline styles only have a bottom border, so we do not need
        // to adjust for all borders. This yields a similar result as
        // Adobe Acrobat/Reader.
        width = width - 2 * data.borderStyle.width;
        height = height - 2 * data.borderStyle.width;
      }

      let horizontalRadius = data.borderStyle.horizontalCornerRadius;
      let verticalRadius = data.borderStyle.verticalCornerRadius;
      if (horizontalRadius > 0 || verticalRadius > 0) {
        let radius = horizontalRadius + 'px / ' + verticalRadius + 'px';
        container.style.borderRadius = radius;
      }

      switch (data.borderStyle.style) {
        case AnnotationBorderStyleType.SOLID:
          container.style.borderStyle = 'solid';
          break;

        case AnnotationBorderStyleType.DASHED:
          container.style.borderStyle = 'dashed';
          break;

        case AnnotationBorderStyleType.BEVELED:
          warn('Unimplemented border style: beveled');
          break;

        case AnnotationBorderStyleType.INSET:
          warn('Unimplemented border style: inset');
          break;

        case AnnotationBorderStyleType.UNDERLINE:
          container.style.borderBottomStyle = 'solid';
          break;
      }

      if (data.color) {
        container.style.borderColor = Util.makeCssRgb(data.color[0] | 0,
                                                      data.color[1] | 0,
                                                      data.color[2] | 0);
      } else {
        // Transparent (invisible) border, so do not draw it at all.
        container.style.borderWidth = 0;
      }
    }

    container.style.left = rect[0] + 'px';
    container.style.top = rect[1] + 'px';

    container.style.width = width + 'px';
    container.style.height = height + 'px';

    return container;
  }

  /**
   * Create a popup for the annotation's HTML element. This is used for
   * annotations that do not have a Popup entry in the dictionary, but
   * are of a type that works with popups (such as Highlight annotations).
   *
   * @private
   * @param {HTMLSectionElement} container
   * @param {HTMLDivElement|HTMLImageElement|null} trigger
   * @param {Object} data
   * @memberof AnnotationElement
   */
  _createPopup(container, trigger, data) {
    // If no trigger element is specified, create it.
    if (!trigger) {
      trigger = document.createElement('div');
      trigger.style.height = container.style.height;
      trigger.style.width = container.style.width;
      container.appendChild(trigger);
    }

    let popupElement = new PopupElement({
      container,
      trigger,
      color: data.color,
      title: data.title,
      contents: data.contents,
      hideWrapper: true,
    });
    let popup = popupElement.render();

    // Position the popup next to the annotation's container.
    popup.style.left = container.style.width;

    container.appendChild(popup);
  }

  /**
   * Render the annotation's HTML element in the empty container.
   *
   * @public
   * @memberof AnnotationElement
   */
  render() {
    unreachable('Abstract method `AnnotationElement.render` called');
  }
}

class LinkAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.url || parameters.data.dest ||
                          parameters.data.action);
    super(parameters, isRenderable);
  }

  /**
   * Render the link annotation's HTML element in the empty container.
   *
   * @public
   * @memberof LinkAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'linkAnnotation';

    let { data, linkService, } = this;
    let link = document.createElement('a');

    addLinkAttributes(link, {
      url: data.url,
      target: (data.newWindow ?
               LinkTarget.BLANK : linkService.externalLinkTarget),
      rel: linkService.externalLinkRel,
    });

    if (!data.url) {
      if (data.action) {
        this._bindNamedAction(link, data.action);
      } else {
        this._bindLink(link, data.dest);
      }
    }

    this.container.appendChild(link);
    return this.container;
  }

  /**
   * Bind internal links to the link element.
   *
   * @private
   * @param {Object} link
   * @param {Object} destination
   * @memberof LinkAnnotationElement
   */
  _bindLink(link, destination) {
    link.href = this.linkService.getDestinationHash(destination);
    link.onclick = () => {
      if (destination) {
        this.linkService.navigateTo(destination);
      }
      return false;
    };
    if (destination) {
      link.className = 'internalLink';
    }
  }

  /**
   * Bind named actions to the link element.
   *
   * @private
   * @param {Object} link
   * @param {Object} action
   * @memberof LinkAnnotationElement
   */
  _bindNamedAction(link, action) {
    link.href = this.linkService.getAnchorUrl('');
    link.onclick = () => {
      this.linkService.executeNamedAction(action);
      return false;
    };
    link.className = 'internalLink';
  }
}

class TextAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable);
  }

  /**
   * Render the text annotation's HTML element in the empty container.
   *
   * @public
   * @memberof TextAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'textAnnotation';

    let image = document.createElement('img');
    image.style.height = this.container.style.height;
    image.style.width = this.container.style.width;
    image.src = this.imageResourcesPath + 'annotation-' +
      this.data.name.toLowerCase() + '.svg';
    image.alt = '[{{type}} Annotation]';
    image.dataset.l10nId = 'text_annotation_type';
    image.dataset.l10nArgs = JSON.stringify({ type: this.data.name, });

    if (!this.data.hasPopup) {
      this._createPopup(this.container, image, this.data);
    }

    this.container.appendChild(image);
    return this.container;
  }
}

class WidgetAnnotationElement extends AnnotationElement {
  /**
   * Render the widget annotation's HTML element in the empty container.
   *
   * @public
   * @memberof WidgetAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    // Show only the container for unsupported field types.
    return this.container;
  }
}

class TextWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    let isRenderable = parameters.renderInteractiveForms ||
      (!parameters.data.hasAppearance && !!parameters.data.fieldValue);
    super(parameters, isRenderable);
  }

  /**
   * Render the text widget annotation's HTML element in the empty container.
   *
   * @public
   * @memberof TextWidgetAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    const TEXT_ALIGNMENT = ['left', 'center', 'right'];

    this.container.className = 'textWidgetAnnotation';

    let element = null;
    if (this.renderInteractiveForms) {
      // NOTE: We cannot set the values using `element.value` below, since it
      //       prevents the AnnotationLayer rasterizer in `test/driver.js`
      //       from parsing the elements correctly for the reference tests.
      if (this.data.multiLine) {
        element = document.createElement('textarea');
        element.textContent = this.data.fieldValue;
      } else {
        element = document.createElement('input');
        element.type = 'text';
        element.setAttribute('value', this.data.fieldValue);
      }

      element.disabled = this.data.readOnly;

      if (this.data.maxLen !== null) {
        element.maxLength = this.data.maxLen;
      }

      if (this.data.comb) {
        let fieldWidth = this.data.rect[2] - this.data.rect[0];
        let combWidth = fieldWidth / this.data.maxLen;

        element.classList.add('comb');
        element.style.letterSpacing = 'calc(' + combWidth + 'px - 1ch)';
      }
    } else {
      element = document.createElement('div');
      element.textContent = this.data.fieldValue;
      element.style.verticalAlign = 'middle';
      element.style.display = 'table-cell';

      let font = null;
      if (this.data.fontRefName) {
        font = this.page.commonObjs.getData(this.data.fontRefName);
      }
      this._setTextStyle(element, font);
    }

    if (this.data.textAlignment !== null) {
      element.style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
    }

    this.container.appendChild(element);
    return this.container;
  }

  /**
   * Apply text styles to the text in the element.
   *
   * @private
   * @param {HTMLDivElement} element
   * @param {Object} font
   * @memberof TextWidgetAnnotationElement
   */
  _setTextStyle(element, font) {
    // TODO: This duplicates some of the logic in CanvasGraphics.setFont().
    let style = element.style;
    style.fontSize = this.data.fontSize + 'px';
    style.direction = (this.data.fontDirection < 0 ? 'rtl' : 'ltr');

    if (!font) {
      return;
    }

    style.fontWeight = (font.black ?
      (font.bold ? '900' : 'bold') :
      (font.bold ? 'bold' : 'normal'));
    style.fontStyle = (font.italic ? 'italic' : 'normal');

    // Use a reasonable default font if the font doesn't specify a fallback.
    let fontFamily = font.loadedName ? '"' + font.loadedName + '", ' : '';
    let fallbackName = font.fallbackName || 'Helvetica, sans-serif';
    style.fontFamily = fontFamily + fallbackName;
  }
}

class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, parameters.renderInteractiveForms);
  }

  /**
   * Render the checkbox widget annotation's HTML element
   * in the empty container.
   *
   * @public
   * @memberof CheckboxWidgetAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'buttonWidgetAnnotation checkBox';

    let element = document.createElement('input');
    element.disabled = this.data.readOnly;
    element.type = 'checkbox';
    if (this.data.fieldValue && this.data.fieldValue !== 'Off') {
      element.setAttribute('checked', true);
    }

    this.container.appendChild(element);
    return this.container;
  }
}

class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, parameters.renderInteractiveForms);
  }

  /**
   * Render the radio button widget annotation's HTML element
   * in the empty container.
   *
   * @public
   * @memberof RadioButtonWidgetAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'buttonWidgetAnnotation radioButton';

    let element = document.createElement('input');
    element.disabled = this.data.readOnly;
    element.type = 'radio';
    element.name = this.data.fieldName;
    if (this.data.fieldValue === this.data.buttonValue) {
      element.setAttribute('checked', true);
    }

    this.container.appendChild(element);
    return this.container;
  }
}

class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
  /**
   * Render the push button widget annotation's HTML element
   * in the empty container.
   *
   * @public
   * @memberof PushButtonWidgetAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    // The rendering and functionality of a push button widget annotation is
    // equal to that of a link annotation, but may have more functionality, such
    // as performing actions on form fields (resetting, submitting, et cetera).
    let container = super.render();
    container.className = 'buttonWidgetAnnotation pushButton';
    return container;
  }
}

class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
  constructor(parameters) {
    super(parameters, parameters.renderInteractiveForms);
  }

  /**
   * Render the choice widget annotation's HTML element in the empty
   * container.
   *
   * @public
   * @memberof ChoiceWidgetAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'choiceWidgetAnnotation';

    let selectElement = document.createElement('select');
    selectElement.disabled = this.data.readOnly;

    if (!this.data.combo) {
      // List boxes have a size and (optionally) multiple selection.
      selectElement.size = this.data.options.length;

      if (this.data.multiSelect) {
        selectElement.multiple = true;
      }
    }

    // Insert the options into the choice field.
    for (let i = 0, ii = this.data.options.length; i < ii; i++) {
      let option = this.data.options[i];

      let optionElement = document.createElement('option');
      optionElement.textContent = option.displayValue;
      optionElement.value = option.exportValue;

      if (this.data.fieldValue.includes(option.displayValue)) {
        optionElement.setAttribute('selected', true);
      }

      selectElement.appendChild(optionElement);
    }

    this.container.appendChild(selectElement);
    return this.container;
  }
}

class PopupAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable);
  }

  /**
   * Render the popup annotation's HTML element in the empty container.
   *
   * @public
   * @memberof PopupAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    // Do not render popup annotations for parent elements with these types as
    // they create the popups themselves (because of custom trigger divs).
    const IGNORE_TYPES = [
      'Line',
      'Square',
      'Circle',
      'PolyLine',
      'Polygon',
      'Ink',
    ];

    this.container.className = 'popupAnnotation';

    if (IGNORE_TYPES.includes(this.data.parentType)) {
      return this.container;
    }

    let selector = '[data-annotation-id="' + this.data.parentId + '"]';
    let parentElement = this.layer.querySelector(selector);
    if (!parentElement) {
      return this.container;
    }

    let popup = new PopupElement({
      container: this.container,
      trigger: parentElement,
      color: this.data.color,
      title: this.data.title,
      contents: this.data.contents,
    });

    // Position the popup next to the parent annotation's container.
    // PDF viewers ignore a popup annotation's rectangle.
    let parentLeft = parseFloat(parentElement.style.left);
    let parentWidth = parseFloat(parentElement.style.width);
    this.container.style.transformOrigin =
      -(parentLeft + parentWidth) + 'px -' + parentElement.style.top;
    this.container.style.left = (parentLeft + parentWidth) + 'px';

    this.container.appendChild(popup.render());
    return this.container;
  }
}

class PopupElement {
  constructor(parameters) {
    this.container = parameters.container;
    this.trigger = parameters.trigger;
    this.color = parameters.color;
    this.title = parameters.title;
    this.contents = parameters.contents;
    this.hideWrapper = parameters.hideWrapper || false;

    this.pinned = false;
  }

  /**
   * Render the popup's HTML element.
   *
   * @public
   * @memberof PopupElement
   * @returns {HTMLSectionElement}
   */
  render() {
    const BACKGROUND_ENLIGHT = 0.7;

    let wrapper = document.createElement('div');
    wrapper.className = 'popupWrapper';

    // For Popup annotations we hide the entire section because it contains
    // only the popup. However, for Text annotations without a separate Popup
    // annotation, we cannot hide the entire container as the image would
    // disappear too. In that special case, hiding the wrapper suffices.
    this.hideElement = (this.hideWrapper ? wrapper : this.container);
    this.hideElement.setAttribute('hidden', true);

    let popup = document.createElement('div');
    popup.className = 'popup';

    let color = this.color;
    if (color) {
      // Enlighten the color.
      let r = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
      let g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
      let b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
      popup.style.backgroundColor = Util.makeCssRgb(r | 0, g | 0, b | 0);
    }

    let contents = this._formatContents(this.contents);
    let title = document.createElement('h1');
    title.textContent = this.title;

    // Attach the event listeners to the trigger element.
    this.trigger.addEventListener('click', this._toggle.bind(this));
    this.trigger.addEventListener('mouseover', this._show.bind(this, false));
    this.trigger.addEventListener('mouseout', this._hide.bind(this, false));
    popup.addEventListener('click', this._hide.bind(this, true));

    popup.appendChild(title);
    popup.appendChild(contents);
    wrapper.appendChild(popup);
    return wrapper;
  }

  /**
   * Format the contents of the popup by adding newlines where necessary.
   *
   * @private
   * @param {string} contents
   * @memberof PopupElement
   * @returns {HTMLParagraphElement}
   */
  _formatContents(contents) {
    let p = document.createElement('p');
    let lines = contents.split(/(?:\r\n?|\n)/);
    for (let i = 0, ii = lines.length; i < ii; ++i) {
      let line = lines[i];
      p.appendChild(document.createTextNode(line));
      if (i < (ii - 1)) {
        p.appendChild(document.createElement('br'));
      }
    }
    return p;
  }

  /**
   * Toggle the visibility of the popup.
   *
   * @private
   * @memberof PopupElement
   */
  _toggle() {
    if (this.pinned) {
      this._hide(true);
    } else {
      this._show(true);
    }
  }

  /**
   * Show the popup.
   *
   * @private
   * @param {boolean} pin
   * @memberof PopupElement
   */
  _show(pin = false) {
    if (pin) {
      this.pinned = true;
    }
    if (this.hideElement.hasAttribute('hidden')) {
      this.hideElement.removeAttribute('hidden');
      this.container.style.zIndex += 1;
    }
  }

  /**
   * Hide the popup.
   *
   * @private
   * @param {boolean} unpin
   * @memberof PopupElement
   */
  _hide(unpin = true) {
    if (unpin) {
      this.pinned = false;
    }
    if (!this.hideElement.hasAttribute('hidden') && !this.pinned) {
      this.hideElement.setAttribute('hidden', true);
      this.container.style.zIndex -= 1;
    }
  }
}

class LineAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the line annotation's HTML element in the empty container.
   *
   * @public
   * @memberof LineAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'lineAnnotation';

    // Create an invisible line with the same starting and ending coordinates
    // that acts as the trigger for the popup. Only the line itself should
    // trigger the popup, not the entire container.
    let data = this.data;
    let width = data.rect[2] - data.rect[0];
    let height = data.rect[3] - data.rect[1];
    let svg = this.svgFactory.create(width, height);

    // PDF coordinates are calculated from a bottom left origin, so transform
    // the line coordinates to a top left origin for the SVG element.
    let line = this.svgFactory.createElement('svg:line');
    line.setAttribute('x1', data.rect[2] - data.lineCoordinates[0]);
    line.setAttribute('y1', data.rect[3] - data.lineCoordinates[1]);
    line.setAttribute('x2', data.rect[2] - data.lineCoordinates[2]);
    line.setAttribute('y2', data.rect[3] - data.lineCoordinates[3]);
    line.setAttribute('stroke-width', data.borderStyle.width);
    line.setAttribute('stroke', 'transparent');

    svg.appendChild(line);
    this.container.append(svg);

    // Create the popup ourselves so that we can bind it to the line instead
    // of to the entire container (which is the default).
    this._createPopup(this.container, line, data);

    return this.container;
  }
}

class SquareAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the square annotation's HTML element in the empty container.
   *
   * @public
   * @memberof SquareAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'squareAnnotation';

    // Create an invisible square with the same rectangle that acts as the
    // trigger for the popup. Only the square itself should trigger the
    // popup, not the entire container.
    let data = this.data;
    let width = data.rect[2] - data.rect[0];
    let height = data.rect[3] - data.rect[1];
    let svg = this.svgFactory.create(width, height);

    // The browser draws half of the borders inside the square and half of
    // the borders outside the square by default. This behavior cannot be
    // changed programmatically, so correct for that here.
    let borderWidth = data.borderStyle.width;
    let square = this.svgFactory.createElement('svg:rect');
    square.setAttribute('x', borderWidth / 2);
    square.setAttribute('y', borderWidth / 2);
    square.setAttribute('width', width - borderWidth);
    square.setAttribute('height', height - borderWidth);
    square.setAttribute('stroke-width', borderWidth);
    square.setAttribute('stroke', 'transparent');
    square.setAttribute('fill', 'none');

    svg.appendChild(square);
    this.container.append(svg);

    // Create the popup ourselves so that we can bind it to the square instead
    // of to the entire container (which is the default).
    this._createPopup(this.container, square, data);

    return this.container;
  }
}

class CircleAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the circle annotation's HTML element in the empty container.
   *
   * @public
   * @memberof CircleAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'circleAnnotation';

    // Create an invisible circle with the same ellipse that acts as the
    // trigger for the popup. Only the circle itself should trigger the
    // popup, not the entire container.
    let data = this.data;
    let width = data.rect[2] - data.rect[0];
    let height = data.rect[3] - data.rect[1];
    let svg = this.svgFactory.create(width, height);

    // The browser draws half of the borders inside the circle and half of
    // the borders outside the circle by default. This behavior cannot be
    // changed programmatically, so correct for that here.
    let borderWidth = data.borderStyle.width;
    let circle = this.svgFactory.createElement('svg:ellipse');
    circle.setAttribute('cx', width / 2);
    circle.setAttribute('cy', height / 2);
    circle.setAttribute('rx', (width / 2) - (borderWidth / 2));
    circle.setAttribute('ry', (height / 2) - (borderWidth / 2));
    circle.setAttribute('stroke-width', borderWidth);
    circle.setAttribute('stroke', 'transparent');
    circle.setAttribute('fill', 'none');

    svg.appendChild(circle);
    this.container.append(svg);

    // Create the popup ourselves so that we can bind it to the circle instead
    // of to the entire container (which is the default).
    this._createPopup(this.container, circle, data);

    return this.container;
  }
}

class PolylineAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);

    this.containerClassName = 'polylineAnnotation';
    this.svgElementName = 'svg:polyline';
  }

  /**
   * Render the polyline annotation's HTML element in the empty container.
   *
   * @public
   * @memberof PolylineAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = this.containerClassName;

    // Create an invisible polyline with the same points that acts as the
    // trigger for the popup. Only the polyline itself should trigger the
    // popup, not the entire container.
    let data = this.data;
    let width = data.rect[2] - data.rect[0];
    let height = data.rect[3] - data.rect[1];
    let svg = this.svgFactory.create(width, height);

    // Convert the vertices array to a single points string that the SVG
    // polyline element expects ("x1,y1 x2,y2 ..."). PDF coordinates are
    // calculated from a bottom left origin, so transform the polyline
    // coordinates to a top left origin for the SVG element.
    let vertices = data.vertices;
    let points = [];
    for (let i = 0, ii = vertices.length; i < ii; i++) {
      let x = vertices[i].x - data.rect[0];
      let y = data.rect[3] - vertices[i].y;
      points.push(x + ',' + y);
    }
    points = points.join(' ');

    let borderWidth = data.borderStyle.width;
    let polyline = this.svgFactory.createElement(this.svgElementName);
    polyline.setAttribute('points', points);
    polyline.setAttribute('stroke-width', borderWidth);
    polyline.setAttribute('stroke', 'transparent');
    polyline.setAttribute('fill', 'none');

    svg.appendChild(polyline);
    this.container.append(svg);

    // Create the popup ourselves so that we can bind it to the polyline
    // instead of to the entire container (which is the default).
    this._createPopup(this.container, polyline, data);

    return this.container;
  }
}

class PolygonAnnotationElement extends PolylineAnnotationElement {
  constructor(parameters) {
    // Polygons are specific forms of polylines, so reuse their logic.
    super(parameters);

    this.containerClassName = 'polygonAnnotation';
    this.svgElementName = 'svg:polygon';
  }
}

class InkAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);

    this.containerClassName = 'inkAnnotation';

    // Use the polyline SVG element since it allows us to use coordinates
    // directly and to draw both straight lines and curves.
    this.svgElementName = 'svg:polyline';
  }

  /**
   * Render the ink annotation's HTML element in the empty container.
   *
   * @public
   * @memberof InkAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = this.containerClassName;

    // Create an invisible polyline with the same points that acts as the
    // trigger for the popup.
    let data = this.data;
    let width = data.rect[2] - data.rect[0];
    let height = data.rect[3] - data.rect[1];
    let svg = this.svgFactory.create(width, height);

    let inkLists = data.inkLists;
    for (let i = 0, ii = inkLists.length; i < ii; i++) {
      let inkList = inkLists[i];
      let points = [];

      // Convert the ink list to a single points string that the SVG
      // polyline element expects ("x1,y1 x2,y2 ..."). PDF coordinates are
      // calculated from a bottom left origin, so transform the polyline
      // coordinates to a top left origin for the SVG element.
      for (let j = 0, jj = inkList.length; j < jj; j++) {
        let x = inkList[j].x - data.rect[0];
        let y = data.rect[3] - inkList[j].y;
        points.push(x + ',' + y);
      }

      points = points.join(' ');

      let borderWidth = data.borderStyle.width;
      let polyline = this.svgFactory.createElement(this.svgElementName);
      polyline.setAttribute('points', points);
      polyline.setAttribute('stroke-width', borderWidth);
      polyline.setAttribute('stroke', 'transparent');
      polyline.setAttribute('fill', 'none');

      // Create the popup ourselves so that we can bind it to the polyline
      // instead of to the entire container (which is the default).
      this._createPopup(this.container, polyline, data);

      svg.appendChild(polyline);
    }

    this.container.append(svg);

    return this.container;
  }
}

class HighlightAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the highlight annotation's HTML element in the empty container.
   *
   * @public
   * @memberof HighlightAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'highlightAnnotation';

    if (!this.data.hasPopup) {
      this._createPopup(this.container, null, this.data);
    }
    return this.container;
  }
}

class UnderlineAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the underline annotation's HTML element in the empty container.
   *
   * @public
   * @memberof UnderlineAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'underlineAnnotation';

    if (!this.data.hasPopup) {
      this._createPopup(this.container, null, this.data);
    }
    return this.container;
  }
}

class SquigglyAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the squiggly annotation's HTML element in the empty container.
   *
   * @public
   * @memberof SquigglyAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'squigglyAnnotation';

    if (!this.data.hasPopup) {
      this._createPopup(this.container, null, this.data);
    }
    return this.container;
  }
}

class StrikeOutAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the strikeout annotation's HTML element in the empty container.
   *
   * @public
   * @memberof StrikeOutAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'strikeoutAnnotation';

    if (!this.data.hasPopup) {
      this._createPopup(this.container, null, this.data);
    }
    return this.container;
  }
}

class StampAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    let isRenderable = !!(parameters.data.hasPopup ||
                          parameters.data.title || parameters.data.contents);
    super(parameters, isRenderable, /* ignoreBorder = */ true);
  }

  /**
   * Render the stamp annotation's HTML element in the empty container.
   *
   * @public
   * @memberof StampAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'stampAnnotation';

    if (!this.data.hasPopup) {
      this._createPopup(this.container, null, this.data);
    }
    return this.container;
  }
}

class FileAttachmentAnnotationElement extends AnnotationElement {
  constructor(parameters) {
    super(parameters, /* isRenderable = */ true);

    const { filename, content, } = this.data.file;
    this.filename = getFilenameFromUrl(filename);
    this.content = content;

    if (this.linkService.eventBus) {
      this.linkService.eventBus.dispatch('fileattachmentannotation', {
        source: this,
        id: stringToPDFString(filename),
        filename,
        content,
      });
    }
  }

  /**
   * Render the file attachment annotation's HTML element in the empty
   * container.
   *
   * @public
   * @memberof FileAttachmentAnnotationElement
   * @returns {HTMLSectionElement}
   */
  render() {
    this.container.className = 'fileAttachmentAnnotation';

    let trigger = document.createElement('div');
    trigger.style.height = this.container.style.height;
    trigger.style.width = this.container.style.width;
    trigger.addEventListener('dblclick', this._download.bind(this));

    if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
      this._createPopup(this.container, trigger, this.data);
    }

    this.container.appendChild(trigger);
    return this.container;
  }

  /**
   * Download the file attachment associated with this annotation.
   *
   * @private
   * @memberof FileAttachmentAnnotationElement
   */
  _download() {
    if (!this.downloadManager) {
      warn('Download cannot be started due to unavailable download manager');
      return;
    }
    this.downloadManager.downloadData(this.content, this.filename, '');
  }
}

/**
 * @typedef {Object} AnnotationLayerParameters
 * @property {PageViewport} viewport
 * @property {HTMLDivElement} div
 * @property {Array} annotations
 * @property {PDFPage} page
 * @property {IPDFLinkService} linkService
 * @property {DownloadManager} downloadManager
 * @property {string} imageResourcesPath - (optional) Path for image resources,
 *   mainly for annotation icons. Include trailing slash.
 * @property {boolean} renderInteractiveForms
 */

class AnnotationLayer {
  /**
   * Render a new annotation layer with all annotation elements.
   *
   * @public
   * @param {AnnotationLayerParameters} parameters
   * @memberof AnnotationLayer
   */
  static render(parameters) {
    for (let i = 0, ii = parameters.annotations.length; i < ii; i++) {
      let data = parameters.annotations[i];
      if (!data) {
        continue;
      }
      let element = AnnotationElementFactory.create({
        data,
        layer: parameters.div,
        page: parameters.page,
        viewport: parameters.viewport,
        linkService: parameters.linkService,
        downloadManager: parameters.downloadManager,
        imageResourcesPath: parameters.imageResourcesPath || '',
        renderInteractiveForms: parameters.renderInteractiveForms || false,
        svgFactory: new DOMSVGFactory(),
      });
      if (element.isRenderable) {
        parameters.div.appendChild(element.render());
      }
    }
  }

  /**
   * Update the annotation elements on existing annotation layer.
   *
   * @public
   * @param {AnnotationLayerParameters} parameters
   * @memberof AnnotationLayer
   */
  static update(parameters) {
    for (let i = 0, ii = parameters.annotations.length; i < ii; i++) {
      let data = parameters.annotations[i];
      let element = parameters.div.querySelector(
        '[data-annotation-id="' + data.id + '"]');
      if (element) {
        element.style.transform =
          'matrix(' + parameters.viewport.transform.join(',') + ')';
      }
    }
    parameters.div.removeAttribute('hidden');
  }
}

var annotation_layer = /*#__PURE__*/Object.freeze({
	__proto__: null,
	AnnotationLayer: AnnotationLayer
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(annotation_layer);

var require$$4 = /*@__PURE__*/getAugmentedNamespace(dom_utils);

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var SVGGraphics = function() {
  throw new Error('Not implemented: SVGGraphics');
};

{

var SVG_DEFAULTS = {
  fontStyle: 'normal',
  fontWeight: 'normal',
  fillColor: '#000000',
};

var convertImgDataToPng = (function convertImgDataToPngClosure() {
  var PNG_HEADER =
    new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  var CHUNK_WRAPPER_SIZE = 12;

  var crcTable = new Int32Array(256);
  for (var i = 0; i < 256; i++) {
    var c = i;
    for (var h = 0; h < 8; h++) {
      if (c & 1) {
        c = 0xedB88320 ^ ((c >> 1) & 0x7fffffff);
      } else {
        c = (c >> 1) & 0x7fffffff;
      }
    }
    crcTable[i] = c;
  }

  function crc32(data, start, end) {
    var crc = -1;
    for (var i = start; i < end; i++) {
      var a = (crc ^ data[i]) & 0xff;
      var b = crcTable[a];
      crc = (crc >>> 8) ^ b;
    }
    return crc ^ -1;
  }

  function writePngChunk(type, body, data, offset) {
    var p = offset;
    var len = body.length;

    data[p] = len >> 24 & 0xff;
    data[p + 1] = len >> 16 & 0xff;
    data[p + 2] = len >> 8 & 0xff;
    data[p + 3] = len & 0xff;
    p += 4;

    data[p] = type.charCodeAt(0) & 0xff;
    data[p + 1] = type.charCodeAt(1) & 0xff;
    data[p + 2] = type.charCodeAt(2) & 0xff;
    data[p + 3] = type.charCodeAt(3) & 0xff;
    p += 4;

    data.set(body, p);
    p += body.length;

    var crc = crc32(data, offset + 4, p);

    data[p] = crc >> 24 & 0xff;
    data[p + 1] = crc >> 16 & 0xff;
    data[p + 2] = crc >> 8 & 0xff;
    data[p + 3] = crc & 0xff;
  }

  function adler32(data, start, end) {
    var a = 1;
    var b = 0;
    for (var i = start; i < end; ++i) {
      a = (a + (data[i] & 0xff)) % 65521;
      b = (b + a) % 65521;
    }
    return (b << 16) | a;
  }

  /**
   * @param {Uint8Array} literals The input data.
   * @returns {Uint8Array} The DEFLATE-compressed data stream in zlib format.
   *   This is the required format for compressed streams in the PNG format:
   *   http://www.libpng.org/pub/png/spec/1.2/PNG-Compression.html
   */
  function deflateSync(literals) {
    {
      // zlib is certainly not available outside of Node.js. We can either use
      // the pako library for client-side DEFLATE compression, or use the canvas
      // API of the browser to obtain a more optimal PNG file.
      return deflateSyncUncompressed(literals);
    }
  }

  // An implementation of DEFLATE with compression level 0 (Z_NO_COMPRESSION).
  function deflateSyncUncompressed(literals) {
    var len = literals.length;
    var maxBlockLength = 0xFFFF;

    var deflateBlocks = Math.ceil(len / maxBlockLength);
    var idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
    var pi = 0;
    idat[pi++] = 0x78; // compression method and flags
    idat[pi++] = 0x9c; // flags

    var pos = 0;
    while (len > maxBlockLength) {
      // writing non-final DEFLATE blocks type 0 and length of 65535
      idat[pi++] = 0x00;
      idat[pi++] = 0xff;
      idat[pi++] = 0xff;
      idat[pi++] = 0x00;
      idat[pi++] = 0x00;
      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
      pi += maxBlockLength;
      pos += maxBlockLength;
      len -= maxBlockLength;
    }

    // writing non-final DEFLATE blocks type 0
    idat[pi++] = 0x01;
    idat[pi++] = len & 0xff;
    idat[pi++] = len >> 8 & 0xff;
    idat[pi++] = (~len & 0xffff) & 0xff;
    idat[pi++] = (~len & 0xffff) >> 8 & 0xff;
    idat.set(literals.subarray(pos), pi);
    pi += literals.length - pos;

    var adler = adler32(literals, 0, literals.length); // checksum
    idat[pi++] = adler >> 24 & 0xff;
    idat[pi++] = adler >> 16 & 0xff;
    idat[pi++] = adler >> 8 & 0xff;
    idat[pi++] = adler & 0xff;
    return idat;
  }

  function encode(imgData, kind, forceDataSchema, isMask) {
    var width = imgData.width;
    var height = imgData.height;
    var bitDepth, colorType, lineSize;
    var bytes = imgData.data;

    switch (kind) {
      case ImageKind.GRAYSCALE_1BPP:
        colorType = 0;
        bitDepth = 1;
        lineSize = (width + 7) >> 3;
        break;
      case ImageKind.RGB_24BPP:
        colorType = 2;
        bitDepth = 8;
        lineSize = width * 3;
        break;
      case ImageKind.RGBA_32BPP:
        colorType = 6;
        bitDepth = 8;
        lineSize = width * 4;
        break;
      default:
        throw new Error('invalid format');
    }

    // prefix every row with predictor 0
    var literals = new Uint8Array((1 + lineSize) * height);
    var offsetLiterals = 0, offsetBytes = 0;
    var y, i;
    for (y = 0; y < height; ++y) {
      literals[offsetLiterals++] = 0; // no prediction
      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize),
                   offsetLiterals);
      offsetBytes += lineSize;
      offsetLiterals += lineSize;
    }

    if (kind === ImageKind.GRAYSCALE_1BPP && isMask) {
      // inverting for image masks
      offsetLiterals = 0;
      for (y = 0; y < height; y++) {
        offsetLiterals++; // skipping predictor
        for (i = 0; i < lineSize; i++) {
          literals[offsetLiterals++] ^= 0xFF;
        }
      }
    }

    var ihdr = new Uint8Array([
      width >> 24 & 0xff,
      width >> 16 & 0xff,
      width >> 8 & 0xff,
      width & 0xff,
      height >> 24 & 0xff,
      height >> 16 & 0xff,
      height >> 8 & 0xff,
      height & 0xff,
      bitDepth, // bit depth
      colorType, // color type
      0x00, // compression method
      0x00, // filter method
      0x00 // interlace method
    ]);

    var idat = deflateSync(literals);

    // PNG will consists: header, IHDR+data, IDAT+data, and IEND.
    var pngLength = PNG_HEADER.length + (CHUNK_WRAPPER_SIZE * 3) +
                    ihdr.length + idat.length;
    var data = new Uint8Array(pngLength);
    var offset = 0;
    data.set(PNG_HEADER, offset);
    offset += PNG_HEADER.length;
    writePngChunk('IHDR', ihdr, data, offset);
    offset += CHUNK_WRAPPER_SIZE + ihdr.length;
    writePngChunk('IDATA', idat, data, offset);
    offset += CHUNK_WRAPPER_SIZE + idat.length;
    writePngChunk('IEND', new Uint8Array(0), data, offset);

    return createObjectURL(data, 'image/png', forceDataSchema);
  }

  return function convertImgDataToPng(imgData, forceDataSchema, isMask) {
    var kind = (imgData.kind === undefined ?
                ImageKind.GRAYSCALE_1BPP : imgData.kind);
    return encode(imgData, kind, forceDataSchema, isMask);
  };
})();

var SVGExtraState = (function SVGExtraStateClosure() {
  function SVGExtraState() {
    this.fontSizeScale = 1;
    this.fontWeight = SVG_DEFAULTS.fontWeight;
    this.fontSize = 0;

    this.textMatrix = IDENTITY_MATRIX;
    this.fontMatrix = FONT_IDENTITY_MATRIX;
    this.leading = 0;
    this.textRenderingMode = TextRenderingMode.FILL;

    // Current point (in user coordinates)
    this.x = 0;
    this.y = 0;

    // Start of text line (in text coordinates)
    this.lineX = 0;
    this.lineY = 0;

    // Character and word spacing
    this.charSpacing = 0;
    this.wordSpacing = 0;
    this.textHScale = 1;
    this.textRise = 0;

    // Default foreground and background colors
    this.fillColor = SVG_DEFAULTS.fillColor;
    this.strokeColor = '#000000';

    this.fillAlpha = 1;
    this.strokeAlpha = 1;
    this.lineWidth = 1;
    this.lineJoin = '';
    this.lineCap = '';
    this.miterLimit = 0;

    this.dashArray = [];
    this.dashPhase = 0;

    this.dependencies = [];

    // Clipping
    this.activeClipUrl = null;
    this.clipGroup = null;

    this.maskId = '';
  }

  SVGExtraState.prototype = {
    clone: function SVGExtraState_clone() {
      return Object.create(this);
    },
    setCurrentPoint: function SVGExtraState_setCurrentPoint(x, y) {
      this.x = x;
      this.y = y;
    },
  };
  return SVGExtraState;
})();

SVGGraphics = (function SVGGraphicsClosure() {
  function opListToTree(opList) {
    var opTree = [];
    var tmp = [];
    var opListLen = opList.length;

    for (var x = 0; x < opListLen; x++) {
      if (opList[x].fn === 'save') {
        opTree.push({ 'fnId': 92, 'fn': 'group', 'items': [], });
        tmp.push(opTree);
        opTree = opTree[opTree.length - 1].items;
        continue;
      }

      if (opList[x].fn === 'restore') {
        opTree = tmp.pop();
      } else {
        opTree.push(opList[x]);
      }
    }
    return opTree;
  }

  /**
   * Formats float number.
   * @param value {number} number to format.
   * @returns {string}
   */
  function pf(value) {
    if (Number.isInteger(value)) {
      return value.toString();
    }
    var s = value.toFixed(10);
    var i = s.length - 1;
    if (s[i] !== '0') {
      return s;
    }
    // removing trailing zeros
    do {
      i--;
    } while (s[i] === '0');
    return s.substring(0, s[i] === '.' ? i : i + 1);
  }

  /**
   * Formats transform matrix. The standard rotation, scale and translate
   * matrices are replaced by their shorter forms, and for identity matrix
   * returns empty string to save the memory.
   * @param m {Array} matrix to format.
   * @returns {string}
   */
  function pm(m) {
    if (m[4] === 0 && m[5] === 0) {
      if (m[1] === 0 && m[2] === 0) {
        if (m[0] === 1 && m[3] === 1) {
          return '';
        }
        return 'scale(' + pf(m[0]) + ' ' + pf(m[3]) + ')';
      }
      if (m[0] === m[3] && m[1] === -m[2]) {
        var a = Math.acos(m[0]) * 180 / Math.PI;
        return 'rotate(' + pf(a) + ')';
      }
    } else {
      if (m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1) {
        return 'translate(' + pf(m[4]) + ' ' + pf(m[5]) + ')';
      }
    }
    return 'matrix(' + pf(m[0]) + ' ' + pf(m[1]) + ' ' + pf(m[2]) + ' ' +
      pf(m[3]) + ' ' + pf(m[4]) + ' ' + pf(m[5]) + ')';
  }

  function SVGGraphics(commonObjs, objs, forceDataSchema) {
    this.svgFactory = new DOMSVGFactory();

    this.current = new SVGExtraState();
    this.transformMatrix = IDENTITY_MATRIX; // Graphics state matrix
    this.transformStack = [];
    this.extraStack = [];
    this.commonObjs = commonObjs;
    this.objs = objs;
    this.pendingClip = null;
    this.pendingEOFill = false;

    this.embedFonts = false;
    this.embeddedFonts = Object.create(null);
    this.cssStyle = null;
    this.forceDataSchema = !!forceDataSchema;
  }

  var XML_NS = 'http://www.w3.org/XML/1998/namespace';
  var XLINK_NS = 'http://www.w3.org/1999/xlink';
  var LINE_CAP_STYLES = ['butt', 'round', 'square'];
  var LINE_JOIN_STYLES = ['miter', 'round', 'bevel'];
  var clipCount = 0;
  var maskCount = 0;

  SVGGraphics.prototype = {
    save: function SVGGraphics_save() {
      this.transformStack.push(this.transformMatrix);
      var old = this.current;
      this.extraStack.push(old);
      this.current = old.clone();
    },

    restore: function SVGGraphics_restore() {
      this.transformMatrix = this.transformStack.pop();
      this.current = this.extraStack.pop();

      this.pendingClip = null;
      this.tgrp = null;
    },

    group: function SVGGraphics_group(items) {
      this.save();
      this.executeOpTree(items);
      this.restore();
    },

    loadDependencies: function SVGGraphics_loadDependencies(operatorList) {
      var fnArray = operatorList.fnArray;
      var fnArrayLen = fnArray.length;
      var argsArray = operatorList.argsArray;

      for (var i = 0; i < fnArrayLen; i++) {
        if (OPS.dependency === fnArray[i]) {
          var deps = argsArray[i];
          for (var n = 0, nn = deps.length; n < nn; n++) {
            var obj = deps[n];
            var common = obj.substring(0, 2) === 'g_';
            var promise;
            if (common) {
              promise = new Promise((resolve) => {
                this.commonObjs.get(obj, resolve);
              });
            } else {
              promise = new Promise((resolve) => {
                this.objs.get(obj, resolve);
              });
            }
            this.current.dependencies.push(promise);
          }
        }
      }
      return Promise.all(this.current.dependencies);
    },

    transform: function SVGGraphics_transform(a, b, c, d, e, f) {
      var transformMatrix = [a, b, c, d, e, f];
      this.transformMatrix = Util.transform(this.transformMatrix,
                                            transformMatrix);
      this.tgrp = null;
    },

    getSVG: function SVGGraphics_getSVG(operatorList, viewport) {
      this.viewport = viewport;

      var svgElement = this._initialize(viewport);
      return this.loadDependencies(operatorList).then(() => {
        this.transformMatrix = IDENTITY_MATRIX;
        var opTree = this.convertOpList(operatorList);
        this.executeOpTree(opTree);
        return svgElement;
      });
    },

    convertOpList: function SVGGraphics_convertOpList(operatorList) {
      var argsArray = operatorList.argsArray;
      var fnArray = operatorList.fnArray;
      var fnArrayLen = fnArray.length;
      var REVOPS = [];
      var opList = [];

      for (var op in OPS) {
        REVOPS[OPS[op]] = op;
      }

      for (var x = 0; x < fnArrayLen; x++) {
        var fnId = fnArray[x];
        opList.push({
          'fnId': fnId,
          'fn': REVOPS[fnId],
          'args': argsArray[x],
        });
      }
      return opListToTree(opList);
    },

    executeOpTree: function SVGGraphics_executeOpTree(opTree) {
      var opTreeLen = opTree.length;
      for (var x = 0; x < opTreeLen; x++) {
        var fn = opTree[x].fn;
        var fnId = opTree[x].fnId;
        var args = opTree[x].args;

        switch (fnId | 0) {
          case OPS.beginText:
            this.beginText();
            break;
          case OPS.dependency:
            // Handled in loadDependencies, warning should not be thrown
            break;
          case OPS.setLeading:
            this.setLeading(args);
            break;
          case OPS.setLeadingMoveText:
            this.setLeadingMoveText(args[0], args[1]);
            break;
          case OPS.setFont:
            this.setFont(args);
            break;
          case OPS.showText:
            this.showText(args[0]);
            break;
          case OPS.showSpacedText:
            this.showText(args[0]);
            break;
          case OPS.endText:
            this.endText();
            break;
          case OPS.moveText:
            this.moveText(args[0], args[1]);
            break;
          case OPS.setCharSpacing:
            this.setCharSpacing(args[0]);
            break;
          case OPS.setWordSpacing:
            this.setWordSpacing(args[0]);
            break;
          case OPS.setHScale:
            this.setHScale(args[0]);
            break;
          case OPS.setTextMatrix:
            this.setTextMatrix(args[0], args[1], args[2],
                               args[3], args[4], args[5]);
            break;
          case OPS.setTextRise:
            this.setTextRise(args[0]);
            break;
          case OPS.setTextRenderingMode:
            this.setTextRenderingMode(args[0]);
            break;
          case OPS.setLineWidth:
            this.setLineWidth(args[0]);
            break;
          case OPS.setLineJoin:
            this.setLineJoin(args[0]);
            break;
          case OPS.setLineCap:
            this.setLineCap(args[0]);
            break;
          case OPS.setMiterLimit:
            this.setMiterLimit(args[0]);
            break;
          case OPS.setFillRGBColor:
            this.setFillRGBColor(args[0], args[1], args[2]);
            break;
          case OPS.setStrokeRGBColor:
            this.setStrokeRGBColor(args[0], args[1], args[2]);
            break;
          case OPS.setDash:
            this.setDash(args[0], args[1]);
            break;
          case OPS.setGState:
            this.setGState(args[0]);
            break;
          case OPS.fill:
            this.fill();
            break;
          case OPS.eoFill:
            this.eoFill();
            break;
          case OPS.stroke:
            this.stroke();
            break;
          case OPS.fillStroke:
            this.fillStroke();
            break;
          case OPS.eoFillStroke:
            this.eoFillStroke();
            break;
          case OPS.clip:
            this.clip('nonzero');
            break;
          case OPS.eoClip:
            this.clip('evenodd');
            break;
          case OPS.paintSolidColorImageMask:
            this.paintSolidColorImageMask();
            break;
          case OPS.paintJpegXObject:
            this.paintJpegXObject(args[0], args[1], args[2]);
            break;
          case OPS.paintImageXObject:
            this.paintImageXObject(args[0]);
            break;
          case OPS.paintInlineImageXObject:
            this.paintInlineImageXObject(args[0]);
            break;
          case OPS.paintImageMaskXObject:
            this.paintImageMaskXObject(args[0]);
            break;
          case OPS.paintFormXObjectBegin:
            this.paintFormXObjectBegin(args[0], args[1]);
            break;
          case OPS.paintFormXObjectEnd:
            this.paintFormXObjectEnd();
            break;
          case OPS.closePath:
            this.closePath();
            break;
          case OPS.closeStroke:
            this.closeStroke();
            break;
          case OPS.closeFillStroke:
            this.closeFillStroke();
            break;
          case OPS.closeEOFillStroke:
            this.closeEOFillStroke();
            break;
          case OPS.nextLine:
            this.nextLine();
            break;
          case OPS.transform:
            this.transform(args[0], args[1], args[2], args[3],
                           args[4], args[5]);
            break;
          case OPS.constructPath:
            this.constructPath(args[0], args[1]);
            break;
          case OPS.endPath:
            this.endPath();
            break;
          case 92:
            this.group(opTree[x].items);
            break;
          default:
            warn('Unimplemented operator ' + fn);
            break;
        }
      }
    },

    setWordSpacing: function SVGGraphics_setWordSpacing(wordSpacing) {
      this.current.wordSpacing = wordSpacing;
    },

    setCharSpacing: function SVGGraphics_setCharSpacing(charSpacing) {
      this.current.charSpacing = charSpacing;
    },

    nextLine: function SVGGraphics_nextLine() {
      this.moveText(0, this.current.leading);
    },

    setTextMatrix: function SVGGraphics_setTextMatrix(a, b, c, d, e, f) {
      var current = this.current;
      this.current.textMatrix = this.current.lineMatrix = [a, b, c, d, e, f];

      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;

      current.xcoords = [];
      current.tspan = this.svgFactory.createElement('svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size',
                                   pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));

      current.txtElement = this.svgFactory.createElement('svg:text');
      current.txtElement.appendChild(current.tspan);
    },

    beginText: function SVGGraphics_beginText() {
      this.current.x = this.current.lineX = 0;
      this.current.y = this.current.lineY = 0;
      this.current.textMatrix = IDENTITY_MATRIX;
      this.current.lineMatrix = IDENTITY_MATRIX;
      this.current.tspan = this.svgFactory.createElement('svg:tspan');
      this.current.txtElement = this.svgFactory.createElement('svg:text');
      this.current.txtgrp = this.svgFactory.createElement('svg:g');
      this.current.xcoords = [];
    },

    moveText: function SVGGraphics_moveText(x, y) {
      var current = this.current;
      this.current.x = this.current.lineX += x;
      this.current.y = this.current.lineY += y;

      current.xcoords = [];
      current.tspan = this.svgFactory.createElement('svg:tspan');
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size',
                                   pf(current.fontSize) + 'px');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
    },

    showText: function SVGGraphics_showText(glyphs) {
      var current = this.current;
      var font = current.font;
      var fontSize = current.fontSize;

      if (fontSize === 0) {
        return;
      }

      var charSpacing = current.charSpacing;
      var wordSpacing = current.wordSpacing;
      var fontDirection = current.fontDirection;
      var textHScale = current.textHScale * fontDirection;
      var glyphsLength = glyphs.length;
      var vertical = font.vertical;
      var widthAdvanceScale = fontSize * current.fontMatrix[0];

      var x = 0, i;
      for (i = 0; i < glyphsLength; ++i) {
        var glyph = glyphs[i];
        if (glyph === null) {
          // word break
          x += fontDirection * wordSpacing;
          continue;
        } else if (isNum(glyph)) {
          x += -glyph * fontSize * 0.001;
          continue;
        }

        var width = glyph.width;
        var character = glyph.fontChar;
        var spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
        var charWidth = width * widthAdvanceScale + spacing * fontDirection;

        if (!glyph.isInFont && !font.missingFile) {
          x += charWidth;
          // TODO: To assist with text selection, we should replace the missing
          // character with a space character if charWidth is not zero.
          // But we cannot just do "character = ' '", because the ' ' character
          // might actually map to a different glyph.
          continue;
        }
        current.xcoords.push(current.x + x * textHScale);
        current.tspan.textContent += character;
        x += charWidth;
      }
      if (vertical) {
        current.y -= x * textHScale;
      } else {
        current.x += x * textHScale;
      }

      current.tspan.setAttributeNS(null, 'x',
                                   current.xcoords.map(pf).join(' '));
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.tspan.setAttributeNS(null, 'font-family', current.fontFamily);
      current.tspan.setAttributeNS(null, 'font-size',
                                   pf(current.fontSize) + 'px');
      if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
        current.tspan.setAttributeNS(null, 'font-style', current.fontStyle);
      }
      if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
        current.tspan.setAttributeNS(null, 'font-weight', current.fontWeight);
      }

      const fillStrokeMode = current.textRenderingMode &
        TextRenderingMode.FILL_STROKE_MASK;

      if (fillStrokeMode === TextRenderingMode.FILL ||
          fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        if (current.fillColor !== SVG_DEFAULTS.fillColor) {
          current.tspan.setAttributeNS(null, 'fill', current.fillColor);
        }
        if (current.fillAlpha < 1) {
          current.tspan.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
        }
      } else if (current.textRenderingMode === TextRenderingMode.ADD_TO_PATH) {
        // Workaround for Firefox: We must set fill="transparent" because
        // fill="none" would generate an empty clipping path.
        current.tspan.setAttributeNS(null, 'fill', 'transparent');
      } else {
        current.tspan.setAttributeNS(null, 'fill', 'none');
      }

      if (fillStrokeMode === TextRenderingMode.STROKE ||
          fillStrokeMode === TextRenderingMode.FILL_STROKE) {
        this._setStrokeAttributes(current.tspan);
      }

      // Include the text rise in the text matrix since the `pm` function
      // creates the SVG element's `translate` entry (work on a copy to avoid
      // altering the original text matrix).
      let textMatrix = current.textMatrix;
      if (current.textRise !== 0) {
        textMatrix = textMatrix.slice();
        textMatrix[5] += current.textRise;
      }

      current.txtElement.setAttributeNS(null, 'transform',
                                        pm(textMatrix) + ' scale(1, -1)');
      current.txtElement.setAttributeNS(XML_NS, 'xml:space', 'preserve');
      current.txtElement.appendChild(current.tspan);
      current.txtgrp.appendChild(current.txtElement);

      this._ensureTransformGroup().appendChild(current.txtElement);
    },

    setLeadingMoveText: function SVGGraphics_setLeadingMoveText(x, y) {
      this.setLeading(-y);
      this.moveText(x, y);
    },

    addFontStyle: function SVGGraphics_addFontStyle(fontObj) {
      if (!this.cssStyle) {
        this.cssStyle = this.svgFactory.createElement('svg:style');
        this.cssStyle.setAttributeNS(null, 'type', 'text/css');
        this.defs.appendChild(this.cssStyle);
      }

      var url = createObjectURL(fontObj.data, fontObj.mimetype,
                                this.forceDataSchema);
      this.cssStyle.textContent +=
        '@font-face { font-family: "' + fontObj.loadedName + '";' +
        ' src: url(' + url + '); }\n';
    },

    setFont: function SVGGraphics_setFont(details) {
      var current = this.current;
      var fontObj = this.commonObjs.get(details[0]);
      var size = details[1];
      this.current.font = fontObj;

      if (this.embedFonts && fontObj.data &&
          !this.embeddedFonts[fontObj.loadedName]) {
        this.addFontStyle(fontObj);
        this.embeddedFonts[fontObj.loadedName] = fontObj;
      }

      current.fontMatrix = (fontObj.fontMatrix ?
                            fontObj.fontMatrix : FONT_IDENTITY_MATRIX);

      var bold = fontObj.black ? (fontObj.bold ? 'bolder' : 'bold') :
                                 (fontObj.bold ? 'bold' : 'normal');
      var italic = fontObj.italic ? 'italic' : 'normal';

      if (size < 0) {
        size = -size;
        current.fontDirection = -1;
      } else {
        current.fontDirection = 1;
      }
      current.fontSize = size;
      current.fontFamily = fontObj.loadedName;
      current.fontWeight = bold;
      current.fontStyle = italic;

      current.tspan = this.svgFactory.createElement('svg:tspan');
      current.tspan.setAttributeNS(null, 'y', pf(-current.y));
      current.xcoords = [];
    },

    endText() {
      const current = this.current;
      if ((current.textRenderingMode & TextRenderingMode.ADD_TO_PATH_FLAG) &&
          current.txtElement && current.txtElement.hasChildNodes()) {
        // If no glyphs are shown (i.e. no child nodes), no clipping occurs.
        current.element = current.txtElement;
        this.clip('nonzero');
        this.endPath();
      }
    },

    // Path properties
    setLineWidth: function SVGGraphics_setLineWidth(width) {
      this.current.lineWidth = width;
    },
    setLineCap: function SVGGraphics_setLineCap(style) {
      this.current.lineCap = LINE_CAP_STYLES[style];
    },
    setLineJoin: function SVGGraphics_setLineJoin(style) {
      this.current.lineJoin = LINE_JOIN_STYLES[style];
    },
    setMiterLimit: function SVGGraphics_setMiterLimit(limit) {
      this.current.miterLimit = limit;
    },
    setStrokeAlpha: function SVGGraphics_setStrokeAlpha(strokeAlpha) {
      this.current.strokeAlpha = strokeAlpha;
    },
    setStrokeRGBColor: function SVGGraphics_setStrokeRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.strokeColor = color;
    },
    setFillAlpha: function SVGGraphics_setFillAlpha(fillAlpha) {
      this.current.fillAlpha = fillAlpha;
    },
    setFillRGBColor: function SVGGraphics_setFillRGBColor(r, g, b) {
      var color = Util.makeCssRgb(r, g, b);
      this.current.fillColor = color;
      this.current.tspan = this.svgFactory.createElement('svg:tspan');
      this.current.xcoords = [];
    },
    setDash: function SVGGraphics_setDash(dashArray, dashPhase) {
      this.current.dashArray = dashArray;
      this.current.dashPhase = dashPhase;
    },

    constructPath: function SVGGraphics_constructPath(ops, args) {
      var current = this.current;
      var x = current.x, y = current.y;
      current.path = this.svgFactory.createElement('svg:path');
      var d = [];
      var opLength = ops.length;

      for (var i = 0, j = 0; i < opLength; i++) {
        switch (ops[i] | 0) {
          case OPS.rectangle:
            x = args[j++];
            y = args[j++];
            var width = args[j++];
            var height = args[j++];
            var xw = x + width;
            var yh = y + height;
            d.push('M', pf(x), pf(y), 'L', pf(xw), pf(y), 'L', pf(xw), pf(yh),
                   'L', pf(x), pf(yh), 'Z');
            break;
          case OPS.moveTo:
            x = args[j++];
            y = args[j++];
            d.push('M', pf(x), pf(y));
            break;
          case OPS.lineTo:
            x = args[j++];
            y = args[j++];
            d.push('L', pf(x), pf(y));
            break;
          case OPS.curveTo:
            x = args[j + 4];
            y = args[j + 5];
            d.push('C', pf(args[j]), pf(args[j + 1]), pf(args[j + 2]),
                   pf(args[j + 3]), pf(x), pf(y));
            j += 6;
            break;
          case OPS.curveTo2:
            x = args[j + 2];
            y = args[j + 3];
            d.push('C', pf(x), pf(y), pf(args[j]), pf(args[j + 1]),
                   pf(args[j + 2]), pf(args[j + 3]));
            j += 4;
            break;
          case OPS.curveTo3:
            x = args[j + 2];
            y = args[j + 3];
            d.push('C', pf(args[j]), pf(args[j + 1]), pf(x), pf(y),
                   pf(x), pf(y));
            j += 4;
            break;
          case OPS.closePath:
            d.push('Z');
            break;
        }
      }
      current.path.setAttributeNS(null, 'd', d.join(' '));
      current.path.setAttributeNS(null, 'fill', 'none');

      this._ensureTransformGroup().appendChild(current.path);

      // Saving a reference in current.element so that it can be addressed
      // in 'fill' and 'stroke'
      current.element = current.path;
      current.setCurrentPoint(x, y);
    },

    endPath: function SVGGraphics_endPath() {
      if (!this.pendingClip) {
        return;
      }
      var current = this.current;
      // Add current path to clipping path
      var clipId = 'clippath' + clipCount;
      clipCount++;
      var clipPath = this.svgFactory.createElement('svg:clipPath');
      clipPath.setAttributeNS(null, 'id', clipId);
      clipPath.setAttributeNS(null, 'transform', pm(this.transformMatrix));
      // A deep clone is needed when text is used as a clipping path.
      const clipElement = current.element.cloneNode(true);
      if (this.pendingClip === 'evenodd') {
        clipElement.setAttributeNS(null, 'clip-rule', 'evenodd');
      } else {
        clipElement.setAttributeNS(null, 'clip-rule', 'nonzero');
      }
      this.pendingClip = null;
      clipPath.appendChild(clipElement);
      this.defs.appendChild(clipPath);

      if (current.activeClipUrl) {
        // The previous clipping group content can go out of order -- resetting
        // cached clipGroups.
        current.clipGroup = null;
        this.extraStack.forEach(function (prev) {
          prev.clipGroup = null;
        });
        // Intersect with the previous clipping path.
        clipPath.setAttributeNS(null, 'clip-path', current.activeClipUrl);
      }
      current.activeClipUrl = 'url(#' + clipId + ')';

      this.tgrp = null;
    },

    clip: function SVGGraphics_clip(type) {
      this.pendingClip = type;
    },

    closePath: function SVGGraphics_closePath() {
      var current = this.current;
      if (current.path) {
        var d = current.path.getAttributeNS(null, 'd');
        d += 'Z';
        current.path.setAttributeNS(null, 'd', d);
      }
    },

    setLeading: function SVGGraphics_setLeading(leading) {
      this.current.leading = -leading;
    },

    setTextRise: function SVGGraphics_setTextRise(textRise) {
      this.current.textRise = textRise;
    },

    setTextRenderingMode(textRenderingMode) {
      this.current.textRenderingMode = textRenderingMode;
    },

    setHScale: function SVGGraphics_setHScale(scale) {
      this.current.textHScale = scale / 100;
    },

    setGState: function SVGGraphics_setGState(states) {
      for (var i = 0, ii = states.length; i < ii; i++) {
        var state = states[i];
        var key = state[0];
        var value = state[1];

        switch (key) {
          case 'LW':
            this.setLineWidth(value);
            break;
          case 'LC':
            this.setLineCap(value);
            break;
          case 'LJ':
            this.setLineJoin(value);
            break;
          case 'ML':
            this.setMiterLimit(value);
            break;
          case 'D':
            this.setDash(value[0], value[1]);
            break;
          case 'Font':
            this.setFont(value);
            break;
          case 'CA':
            this.setStrokeAlpha(value);
            break;
          case 'ca':
            this.setFillAlpha(value);
            break;
          default:
            warn('Unimplemented graphic state ' + key);
            break;
        }
      }
    },

    fill: function SVGGraphics_fill() {
      var current = this.current;
      if (current.element) {
        current.element.setAttributeNS(null, 'fill', current.fillColor);
        current.element.setAttributeNS(null, 'fill-opacity', current.fillAlpha);
        this.endPath();
      }
    },

    stroke: function SVGGraphics_stroke() {
      var current = this.current;

      if (current.element) {
        this._setStrokeAttributes(current.element);

        current.element.setAttributeNS(null, 'fill', 'none');

        this.endPath();
      }
    },

    /**
     * @private
     */
    _setStrokeAttributes(element) {
      const current = this.current;
      element.setAttributeNS(null, 'stroke', current.strokeColor);
      element.setAttributeNS(null, 'stroke-opacity', current.strokeAlpha);
      element.setAttributeNS(null, 'stroke-miterlimit',
                             pf(current.miterLimit));
      element.setAttributeNS(null, 'stroke-linecap', current.lineCap);
      element.setAttributeNS(null, 'stroke-linejoin', current.lineJoin);
      element.setAttributeNS(null, 'stroke-width',
                             pf(current.lineWidth) + 'px');
      element.setAttributeNS(null, 'stroke-dasharray',
                             current.dashArray.map(pf).join(' '));
      element.setAttributeNS(null, 'stroke-dashoffset',
                             pf(current.dashPhase) + 'px');
    },

    eoFill: function SVGGraphics_eoFill() {
      if (this.current.element) {
        this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
      }
      this.fill();
    },

    fillStroke: function SVGGraphics_fillStroke() {
      // Order is important since stroke wants fill to be none.
      // First stroke, then if fill needed, it will be overwritten.
      this.stroke();
      this.fill();
    },

    eoFillStroke: function SVGGraphics_eoFillStroke() {
      if (this.current.element) {
        this.current.element.setAttributeNS(null, 'fill-rule', 'evenodd');
      }
      this.fillStroke();
    },

    closeStroke: function SVGGraphics_closeStroke() {
      this.closePath();
      this.stroke();
    },

    closeFillStroke: function SVGGraphics_closeFillStroke() {
      this.closePath();
      this.fillStroke();
    },

    closeEOFillStroke() {
      this.closePath();
      this.eoFillStroke();
    },

    paintSolidColorImageMask:
        function SVGGraphics_paintSolidColorImageMask() {
      var current = this.current;
      var rect = this.svgFactory.createElement('svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', '1px');
      rect.setAttributeNS(null, 'height', '1px');
      rect.setAttributeNS(null, 'fill', current.fillColor);

      this._ensureTransformGroup().appendChild(rect);
    },

    paintJpegXObject: function SVGGraphics_paintJpegXObject(objId, w, h) {
      var imgObj = this.objs.get(objId);
      var imgEl = this.svgFactory.createElement('svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgObj.src);
      imgEl.setAttributeNS(null, 'width', pf(w));
      imgEl.setAttributeNS(null, 'height', pf(h));
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-h));
      imgEl.setAttributeNS(null, 'transform',
                           'scale(' + pf(1 / w) + ' ' + pf(-1 / h) + ')');

      this._ensureTransformGroup().appendChild(imgEl);
    },

    paintImageXObject: function SVGGraphics_paintImageXObject(objId) {
      var imgData = this.objs.get(objId);
      if (!imgData) {
        warn('Dependent image isn\'t ready yet');
        return;
      }
      this.paintInlineImageXObject(imgData);
    },

    paintInlineImageXObject:
        function SVGGraphics_paintInlineImageXObject(imgData, mask) {
      var width = imgData.width;
      var height = imgData.height;

      var imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
      var cliprect = this.svgFactory.createElement('svg:rect');
      cliprect.setAttributeNS(null, 'x', '0');
      cliprect.setAttributeNS(null, 'y', '0');
      cliprect.setAttributeNS(null, 'width', pf(width));
      cliprect.setAttributeNS(null, 'height', pf(height));
      this.current.element = cliprect;
      this.clip('nonzero');
      var imgEl = this.svgFactory.createElement('svg:image');
      imgEl.setAttributeNS(XLINK_NS, 'xlink:href', imgSrc);
      imgEl.setAttributeNS(null, 'x', '0');
      imgEl.setAttributeNS(null, 'y', pf(-height));
      imgEl.setAttributeNS(null, 'width', pf(width) + 'px');
      imgEl.setAttributeNS(null, 'height', pf(height) + 'px');
      imgEl.setAttributeNS(null, 'transform',
                           'scale(' + pf(1 / width) + ' ' +
                           pf(-1 / height) + ')');
      if (mask) {
        mask.appendChild(imgEl);
      } else {
        this._ensureTransformGroup().appendChild(imgEl);
      }
    },

    paintImageMaskXObject:
        function SVGGraphics_paintImageMaskXObject(imgData) {
      var current = this.current;
      var width = imgData.width;
      var height = imgData.height;
      var fillColor = current.fillColor;

      current.maskId = 'mask' + maskCount++;
      var mask = this.svgFactory.createElement('svg:mask');
      mask.setAttributeNS(null, 'id', current.maskId);

      var rect = this.svgFactory.createElement('svg:rect');
      rect.setAttributeNS(null, 'x', '0');
      rect.setAttributeNS(null, 'y', '0');
      rect.setAttributeNS(null, 'width', pf(width));
      rect.setAttributeNS(null, 'height', pf(height));
      rect.setAttributeNS(null, 'fill', fillColor);
      rect.setAttributeNS(null, 'mask', 'url(#' + current.maskId + ')');
      this.defs.appendChild(mask);

      this._ensureTransformGroup().appendChild(rect);

      this.paintInlineImageXObject(imgData, mask);
    },

    paintFormXObjectBegin:
        function SVGGraphics_paintFormXObjectBegin(matrix, bbox) {
      if (Array.isArray(matrix) && matrix.length === 6) {
        this.transform(matrix[0], matrix[1], matrix[2],
                       matrix[3], matrix[4], matrix[5]);
      }

      if (Array.isArray(bbox) && bbox.length === 4) {
        var width = bbox[2] - bbox[0];
        var height = bbox[3] - bbox[1];

        var cliprect = this.svgFactory.createElement('svg:rect');
        cliprect.setAttributeNS(null, 'x', bbox[0]);
        cliprect.setAttributeNS(null, 'y', bbox[1]);
        cliprect.setAttributeNS(null, 'width', pf(width));
        cliprect.setAttributeNS(null, 'height', pf(height));
        this.current.element = cliprect;
        this.clip('nonzero');
        this.endPath();
      }
    },

    paintFormXObjectEnd:
        function SVGGraphics_paintFormXObjectEnd() {},

    /**
     * @private
     */
    _initialize(viewport) {
      let svg = this.svgFactory.create(viewport.width, viewport.height);

      // Create the definitions element.
      let definitions = this.svgFactory.createElement('svg:defs');
      svg.appendChild(definitions);
      this.defs = definitions;

      // Create the root group element, which acts a container for all other
      // groups and applies the viewport transform.
      let rootGroup = this.svgFactory.createElement('svg:g');
      rootGroup.setAttributeNS(null, 'transform', pm(viewport.transform));
      svg.appendChild(rootGroup);

      // For the construction of the SVG image we are only interested in the
      // root group, so we expose it as the entry point of the SVG image for
      // the other code in this class.
      this.svg = rootGroup;

      return svg;
    },

    /**
     * @private
     */
    _ensureClipGroup: function SVGGraphics_ensureClipGroup() {
      if (!this.current.clipGroup) {
        var clipGroup = this.svgFactory.createElement('svg:g');
        clipGroup.setAttributeNS(null, 'clip-path',
                                 this.current.activeClipUrl);
        this.svg.appendChild(clipGroup);
        this.current.clipGroup = clipGroup;
      }
      return this.current.clipGroup;
    },

    /**
     * @private
     */
    _ensureTransformGroup: function SVGGraphics_ensureTransformGroup() {
      if (!this.tgrp) {
        this.tgrp = this.svgFactory.createElement('svg:g');
        this.tgrp.setAttributeNS(null, 'transform', pm(this.transformMatrix));
        if (this.current.activeClipUrl) {
          this._ensureClipGroup().appendChild(this.tgrp);
        } else {
          this.svg.appendChild(this.tgrp);
        }
      }
      return this.tgrp;
    },
  };
  return SVGGraphics;
})();

}

var svg = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get SVGGraphics () { return SVGGraphics; }
});

var require$$5 = /*@__PURE__*/getAugmentedNamespace(svg);

var require$$6 = /*@__PURE__*/getAugmentedNamespace(worker_options);

/* Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This getFilenameFromContentDispositionHeader function is adapted from
// https://github.com/Rob--W/open-in-browser/blob/7e2e35a38b8b4e981b11da7b2f01df0149049e92/extension/content-disposition.js
// with the following changes:
// - Modified to conform to PDF.js's coding style.
// - Support UTF-8 decoding when TextDecoder is unsupported.
// - Replace Array.from with Array + loop for compat with old browsers.
// - Replace "startsWith" with other string method for compat with old browsers.
// - Move return to the end of the function to prevent Babel from dropping the
//   function declarations.

/**
 * Extract file name from the Content-Disposition HTTP response header.
 *
 * @param {string} contentDisposition
 * @return {string} Filename, if found in the Content-Disposition header.
 */
function getFilenameFromContentDispositionHeader(contentDisposition) {
  let needsEncodingFixup = true;

  // filename*=ext-value ("ext-value" from RFC 5987, referenced by RFC 6266).
  let tmp = toParamRegExp('filename\\*', 'i').exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = unescape(filename);
    filename = rfc5987decode(filename);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }

  // Continuations (RFC 2231 section 3, referenced by RFC 5987 section 3.1).
  // filename*n*=part
  // filename*n=part
  tmp = rfc2231getparam(contentDisposition);
  if (tmp) {
    // RFC 2047, section
    let filename = rfc2047decode(tmp);
    return fixupEncoding(filename);
  }

  // filename=value (RFC 5987, section 4.1).
  tmp = toParamRegExp('filename', 'i').exec(contentDisposition);
  if (tmp) {
    tmp = tmp[1];
    let filename = rfc2616unquote(tmp);
    filename = rfc2047decode(filename);
    return fixupEncoding(filename);
  }

  // After this line there are only function declarations. We cannot put
  // "return" here for readability because babel would then drop the function
  // declarations...
  function toParamRegExp(attributePattern, flags) {
    return new RegExp(
      '(?:^|;)\\s*' + attributePattern + '\\s*=\\s*' +
      // Captures: value = token | quoted-string
      // (RFC 2616, section 3.6 and referenced by RFC 6266 4.1)
      '(' +
        '[^";\\s][^;\\s]*' +
      '|' +
        '"(?:[^"\\\\]|\\\\"?)+"?' +
      ')', flags);
  }
  function textdecode(encoding, value) {
    if (encoding) {
      if (!/^[\x00-\xFF]+$/.test(value)) {
        return value;
      }
      try {
        let decoder = new TextDecoder(encoding, { fatal: true, });
        let bytes = new Array(value.length);
        for (let i = 0; i < value.length; ++i) {
          bytes[i] = value.charCodeAt(i);
        }
        value = decoder.decode(new Uint8Array(bytes));
        needsEncodingFixup = false;
      } catch (e) {
        // TextDecoder constructor threw - unrecognized encoding.
        // Or TextDecoder API is not available (in IE / Edge).
        if (/^utf-?8$/i.test(encoding)) {
          // UTF-8 is commonly used, try to support it in another way:
          try {
            value = decodeURIComponent(escape(value));
            needsEncodingFixup = false;
          } catch (err) {
          }
        }
      }
    }
    return value;
  }
  function fixupEncoding(value) {
    if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
      // Maybe multi-byte UTF-8.
      value = textdecode('utf-8', value);
      if (needsEncodingFixup) {
        // Try iso-8859-1 encoding.
        value = textdecode('iso-8859-1', value);
      }
    }
    return value;
  }
  function rfc2231getparam(contentDisposition) {
    let matches = [], match;
    // Iterate over all filename*n= and filename*n*= with n being an integer
    // of at least zero. Any non-zero number must not start with '0'.
    let iter = toParamRegExp('filename\\*((?!0\\d)\\d+)(\\*?)', 'ig');
    while ((match = iter.exec(contentDisposition)) !== null) {
      let [, n, quot, part] = match;
      n = parseInt(n, 10);
      if (n in matches) {
        // Ignore anything after the invalid second filename*0.
        if (n === 0) {
          break;
        }
        continue;
      }
      matches[n] = [quot, part];
    }
    let parts = [];
    for (let n = 0; n < matches.length; ++n) {
      if (!(n in matches)) {
        // Numbers must be consecutive. Truncate when there is a hole.
        break;
      }
      let [quot, part] = matches[n];
      part = rfc2616unquote(part);
      if (quot) {
        part = unescape(part);
        if (n === 0) {
          part = rfc5987decode(part);
        }
      }
      parts.push(part);
    }
    return parts.join('');
  }
  function rfc2616unquote(value) {
    if (value.charAt(0) === '"') {
      let parts = value.slice(1).split('\\"');
      // Find the first unescaped " and terminate there.
      for (let i = 0; i < parts.length; ++i) {
        let quotindex = parts[i].indexOf('"');
        if (quotindex !== -1) {
          parts[i] = parts[i].slice(0, quotindex);
          parts.length = i + 1; // Truncates and stop the iteration.
        }
        parts[i] = parts[i].replace(/\\(.)/g, '$1');
      }
      value = parts.join('"');
    }
    return value;
  }
  function rfc5987decode(extvalue) {
    // Decodes "ext-value" from RFC 5987.
    let encodingend = extvalue.indexOf('\'');
    if (encodingend === -1) {
      // Some servers send "filename*=" without encoding 'language' prefix,
      // e.g. in https://github.com/Rob--W/open-in-browser/issues/26
      // Let's accept the value like Firefox (57) (Chrome 62 rejects it).
      return extvalue;
    }
    let encoding = extvalue.slice(0, encodingend);
    let langvalue = extvalue.slice(encodingend + 1);
    // Ignore language (RFC 5987 section 3.2.1, and RFC 6266 section 4.1 ).
    let value = langvalue.replace(/^[^']*'/, '');
    return textdecode(encoding, value);
  }
  function rfc2047decode(value) {
    // RFC 2047-decode the result. Firefox tried to drop support for it, but
    // backed out because some servers use it - https://bugzil.la/875615
    // Firefox's condition for decoding is here: https://searchfox.org/mozilla-central/rev/4a590a5a15e35d88a3b23dd6ac3c471cf85b04a8/netwerk/mime/nsMIMEHeaderParamImpl.cpp#742-748

    // We are more strict and only recognize RFC 2047-encoding if the value
    // starts with "=?", since then it is likely that the full value is
    // RFC 2047-encoded.

    // Firefox also decodes words even where RFC 2047 section 5 states:
    // "An 'encoded-word' MUST NOT appear within a 'quoted-string'."
    if (value.slice(0, 2) !== '=?' || /[\x00-\x19\x80-\xff]/.test(value)) {
      return value;
    }
    // RFC 2047, section 2.4
    // encoded-word = "=?" charset "?" encoding "?" encoded-text "?="
    // charset = token (but let's restrict to characters that denote a
    //       possibly valid encoding).
    // encoding = q or b
    // encoded-text = any printable ASCII character other than ? or space.
    //        ... but Firefox permits ? and space.
    return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
      function(_, charset, encoding, text) {
        if (encoding === 'q' || encoding === 'Q') {
          // RFC 2047 section 4.2.
          text = text.replace(/_/g, ' ');
          text = text.replace(/=([0-9a-fA-F]{2})/g, function(_, hex) {
            return String.fromCharCode(parseInt(hex, 16));
          });
          return textdecode(charset, text);
        } // else encoding is b or B - base64 (RFC 2047 section 4.1)
        try {
          text = atob(text);
        } catch (e) {
        }
        return textdecode(charset, text);
      });
  }

  return '';
}

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function validateRangeRequestCapabilities({ getResponseHeader, isHttp,
                                            rangeChunkSize, disableRange, }) {
  assert(rangeChunkSize > 0, 'Range chunk size must be larger than zero');
  let returnValues = {
    allowRangeRequests: false,
    suggestedLength: undefined,
  };

  let length = parseInt(getResponseHeader('Content-Length'), 10);
  if (!Number.isInteger(length)) {
    return returnValues;
  }

  returnValues.suggestedLength = length;

  if (length <= 2 * rangeChunkSize) {
    // The file size is smaller than the size of two chunks, so it does not
    // make any sense to abort the request and retry with a range request.
    return returnValues;
  }

  if (disableRange || !isHttp) {
    return returnValues;
  }
  if (getResponseHeader('Accept-Ranges') !== 'bytes') {
    return returnValues;
  }

  let contentEncoding = getResponseHeader('Content-Encoding') || 'identity';
  if (contentEncoding !== 'identity') {
    return returnValues;
  }

  returnValues.allowRangeRequests = true;
  return returnValues;
}

function extractFilenameFromHeader(getResponseHeader) {
  const contentDisposition = getResponseHeader('Content-Disposition');
  if (contentDisposition) {
    let filename = getFilenameFromContentDispositionHeader(contentDisposition);
    if (/\.pdf$/i.test(filename)) {
      return filename;
    }
  }
  return null;
}

function createResponseStatusError(status, url) {
  if (status === 404 || status === 0 && /^file:/.test(url)) {
    return new MissingPDFException('Missing PDF "' + url + '".');
  }
  return new UnexpectedResponseException(
    'Unexpected server response (' + status +
    ') while retrieving PDF "' + url + '".', status);
}

function validateResponseStatus(status) {
  return status === 200 || status === 206;
}

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function createFetchOptions(headers, withCredentials, abortController) {
  return {
    method: 'GET',
    headers,
    signal: abortController && abortController.signal,
    mode: 'cors',
    credentials: withCredentials ? 'include' : 'same-origin',
    redirect: 'follow',
  };
}

class PDFFetchStream {
  constructor(source) {
    this.source = source;
    this.isHttp = /^https?:/i.test(source.url);
    this.httpHeaders = (this.isHttp && source.httpHeaders) || {};

    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }

  getFullReader() {
    assert(!this._fullRequestReader);
    this._fullRequestReader = new PDFFetchStreamReader(this);
    return this._fullRequestReader;
  }

  getRangeReader(begin, end) {
    let reader = new PDFFetchStreamRangeReader(this, begin, end);
    this._rangeRequestReaders.push(reader);
    return reader;
  }

  cancelAllRequests(reason) {
    if (this._fullRequestReader) {
      this._fullRequestReader.cancel(reason);
    }
    let readers = this._rangeRequestReaders.slice(0);
    readers.forEach(function(reader) {
      reader.cancel(reason);
    });
  }
}

class PDFFetchStreamReader {
  constructor(stream) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    this._filename = null;
    let source = stream.source;
    this._withCredentials = source.withCredentials;
    this._contentLength = source.length;
    this._headersCapability = createPromiseCapability();
    this._disableRange = source.disableRange || false;
    this._rangeChunkSize = source.rangeChunkSize;
    if (!this._rangeChunkSize && !this._disableRange) {
      this._disableRange = true;
    }

    {
      this._abortController = new AbortController();
    }
    this._isStreamingSupported = !source.disableStream;
    this._isRangeSupported = !source.disableRange;

    this._headers = new Headers();
    for (let property in this._stream.httpHeaders) {
      let value = this._stream.httpHeaders[property];
      if (typeof value === 'undefined') {
        continue;
      }
      this._headers.append(property, value);
    }

    let url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials,
        this._abortController)).then((response) => {
      if (!validateResponseStatus(response.status)) {
        throw createResponseStatusError(response.status, url);
      }
      this._reader = response.body.getReader();
      this._headersCapability.resolve();

      const getResponseHeader = (name) => {
        return response.headers.get(name);
      };
      let { allowRangeRequests, suggestedLength, } =
        validateRangeRequestCapabilities({
          getResponseHeader,
          isHttp: this._stream.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });

      this._isRangeSupported = allowRangeRequests;
      // Setting right content length.
      this._contentLength = suggestedLength || this._contentLength;

      this._filename = extractFilenameFromHeader(getResponseHeader);

      // We need to stop reading when range is supported and streaming is
      // disabled.
      if (!this._isStreamingSupported && this._isRangeSupported) {
        this.cancel(new AbortException('streaming is disabled'));
      }
    }).catch(this._headersCapability.reject);

    this.onProgress = null;
  }

  get headersReady() {
    return this._headersCapability.promise;
  }

  get filename() {
    return this._filename;
  }

  get contentLength() {
    return this._contentLength;
  }

  get isRangeSupported() {
    return this._isRangeSupported;
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    await this._headersCapability.promise;
    const { value, done, } = await this._reader.read();
    if (done) {
      return { value, done, };
    }
    this._loaded += value.byteLength;
    if (this.onProgress) {
      this.onProgress({
        loaded: this._loaded,
        total: this._contentLength,
      });
    }
    let buffer = new Uint8Array(value).buffer;
    return { value: buffer, done: false, };
  }

  cancel(reason) {
    if (this._reader) {
      this._reader.cancel(reason);
    }
    if (this._abortController) {
      this._abortController.abort();
    }
  }
}

class PDFFetchStreamRangeReader {
  constructor(stream, begin, end) {
    this._stream = stream;
    this._reader = null;
    this._loaded = 0;
    let source = stream.source;
    this._withCredentials = source.withCredentials;
    this._readCapability = createPromiseCapability();
    this._isStreamingSupported = !source.disableStream;

    {
      this._abortController = new AbortController();
    }

    this._headers = new Headers();
    for (let property in this._stream.httpHeaders) {
      let value = this._stream.httpHeaders[property];
      if (typeof value === 'undefined') {
        continue;
      }
      this._headers.append(property, value);
    }

    let rangeStr = begin + '-' + (end - 1);
    this._headers.append('Range', 'bytes=' + rangeStr);
    let url = source.url;
    fetch(url, createFetchOptions(this._headers, this._withCredentials,
        this._abortController)).then((response) => {
      if (!validateResponseStatus(response.status)) {
        throw createResponseStatusError(response.status, url);
      }
      this._readCapability.resolve();
      this._reader = response.body.getReader();
    });

    this.onProgress = null;
  }

  get isStreamingSupported() {
    return this._isStreamingSupported;
  }

  async read() {
    await this._readCapability.promise;
    const { value, done, } = await this._reader.read();
    if (done) {
      return { value, done, };
    }
    this._loaded += value.byteLength;
    if (this.onProgress) {
      this.onProgress({ loaded: this._loaded, });
    }
    let buffer = new Uint8Array(value).buffer;
    return { value: buffer, done: false, };
  }

  cancel(reason) {
    if (this._reader) {
      this._reader.cancel(reason);
    }
    if (this._abortController) {
      this._abortController.abort();
    }
  }
}

var fetch_stream = /*#__PURE__*/Object.freeze({
	__proto__: null,
	PDFFetchStream: PDFFetchStream
});

var require$$9 = /*@__PURE__*/getAugmentedNamespace(fetch_stream);

/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var pdfjsSharedUtil = require$$0;
var pdfjsDisplayAPI = require$$1;
var pdfjsDisplayTextLayer = require$$2;
var pdfjsDisplayAnnotationLayer = require$$3;
var pdfjsDisplayDOMUtils = require$$4;
var pdfjsDisplaySVG = require$$5;
let pdfjsDisplayWorkerOptions = require$$6;

{
  {
    let PDFFetchStream = require$$9.PDFFetchStream;
    pdfjsDisplayAPI.setPDFNetworkStreamFactory((params) => {
      return new PDFFetchStream(params);
    });
  }
}

pdfjsDisplayAPI.build;
pdfjsDisplayAPI.version;
var getDocument = pdfjsDisplayAPI.getDocument;
var LoopbackPort = pdfjsDisplayAPI.LoopbackPort;
var PDFDataRangeTransport = pdfjsDisplayAPI.PDFDataRangeTransport;
var PDFWorker = pdfjsDisplayAPI.PDFWorker;
pdfjsDisplayTextLayer.renderTextLayer;
pdfjsDisplayAnnotationLayer.AnnotationLayer;
pdfjsSharedUtil.createPromiseCapability;
pdfjsSharedUtil.PasswordResponses;
pdfjsSharedUtil.InvalidPDFException;
pdfjsSharedUtil.MissingPDFException;
pdfjsDisplaySVG.SVGGraphics;
pdfjsSharedUtil.NativeImageDecoding;
pdfjsSharedUtil.CMapCompressionType;
pdfjsSharedUtil.PermissionFlag;
pdfjsSharedUtil.UnexpectedResponseException;
pdfjsSharedUtil.OPS;
pdfjsSharedUtil.VerbosityLevel;
pdfjsSharedUtil.UNSUPPORTED_FEATURES;
pdfjsSharedUtil.createValidAbsoluteUrl;
pdfjsSharedUtil.createObjectURL;
pdfjsSharedUtil.removeNullCharacters;
pdfjsSharedUtil.shadow;
pdfjsSharedUtil.Util;
pdfjsSharedUtil.ReadableStream;
pdfjsSharedUtil.URL;
pdfjsDisplayDOMUtils.RenderingCancelledException;
pdfjsDisplayDOMUtils.getFilenameFromUrl;
pdfjsDisplayDOMUtils.LinkTarget;
pdfjsDisplayDOMUtils.addLinkAttributes;
pdfjsDisplayDOMUtils.loadScript;
pdfjsDisplayWorkerOptions.GlobalWorkerOptions;

export { LoopbackPort, PDFDataRangeTransport, PDFWorker, getDocument };
//# sourceMappingURL=index.mjs.map
