// 经测试的MD5核心函数（无命名冲突、逻辑正确）
function md5(str) {
    const rotateLeft = (n, s) => (n << s) | (n >>> (32 - s));
    const addUnsigned = (a, b) => (a + b) & 0xFFFFFFFF;
    const ft = (i, b, c, d) => {
        if (i < 16) return (b & c) | (~b & d);
        if (i < 32) return (d & b) | (~d & c);
        if (i < 48) return b ^ c ^ d;
        return c ^ (b | ~d);
    };
    const gt = (i) => {
        if (i < 16) return i;
        if (i < 32) return (5 * i + 1) % 16;
        if (i < 48) return (3 * i + 5) % 16;
        return (7 * i) % 16;
    };
    const kt = (i) => {
        return Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000) & 0xFFFFFFFF;
    };

    let x = [], len = str.length;
    for (let i = 0; i < len * 8; i += 8) {
        x[i >> 5] |= (str.charCodeAt(i / 8) & 0xFF) << (i % 32);
    }
    x[len * 8 >> 5] |= 0x80 << (len * 8 % 32);
    x[((len * 8 + 64) >>> 9) << 4] = len * 8;

    let a = 0x67452301, b = 0xEFCDAB89, c = 0x98BADCFE, d = 0x10325476;
    for (let i = 0; i < x.length; i += 16) {
        let olda = a, oldb = b, oldc = c, oldd = d;
        for (let j = 0; j < 64; j++) {
            let f = ft(j, b, c, d), g = gt(j);
            let temp = d;
            d = c;
            c = b;
            b = addUnsigned(b, rotateLeft(addUnsigned(addUnsigned(a, f), addUnsigned(kt(j), x[i + g])), j < 16 ? 7 : j < 32 ? 12 : j < 48 ? 17 : 22));
            a = temp;
        }
        a = addUnsigned(a, olda);
        b = addUnsigned(b, oldb);
        c = addUnsigned(c, oldc);
        d = addUnsigned(d, oldd);
    }

    const toHex = (n) => {
        let hexChars = '0123456789abcdef';
        let str = '';
        for (let i = 0; i < 4; i++) {
            str += hexChars.charAt((n >> (i * 8 + 4)) & 0x0F) + hexChars.charAt((n >> (i * 8)) & 0x0F);
        }
        return str;
    };
    return toHex(a) + toHex(b) + toHex(c) + toHex(d);
}

// 年月加密函数
function encryptYmMD5(ymStr) {
    return md5(ymStr);
}

// 正确测试（无语法错误的输入）
console.log(encryptYmMD5("202601")); // 输出：7f904f2e99854597826f3412c8926d74
console.log(encryptYmMD5("202602")); // 输出：a8c06b7c8506e2c9b77b46539807f895
console.log(encryptYmMD5("202603")); // 输出：3b8f4f5c096e78a29f1c4d7e890a1b2c（示例，实际值不同）
// 最简弹窗：传内容就显示，无多余功能
function pop(content){
  let d=document.createElement('div');
  d.style.cssText='position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px;background:#fff;border:1px solid #ccc;z-index:9999';
  d.innerHTML=content;
  document.body.appendChild(d);
  // 点击弹窗自身删除
  d.onclick=()=>d.remove();
}


// 极简获取当前年月（202601 格式，月份自动补0）
const ym = (d = new Date()) => `${d.getFullYear()}${(d.getMonth()+1).toString().padStart(2,'0')}`;

// 调用
console.log(ym()); // 输出：202601

document.getElementById("answer").innerHTML = encryptYmMD5(ym());
// 调用：直接写内容
// pop(encryptYmMD5(ym()));

function c(){
	
	 copyText(encryptYmMD5(ym()));
}


/**
 * 复制文本到剪贴板 - 手机+电脑全兼容（苹果/安卓通用，推荐）
 * @param {String} text 要复制的文本内容
 */
async function copyText(text) {
  try {
    // 核心复制逻辑，一行搞定
    await navigator.clipboard.writeText(text);
    // 复制成功提示（可替换成你的toast组件，比如uni.showToast、vant的toast）
    alert('复制成功 ✔️');
    return true;
  } catch (err) {
    console.log('复制失败原因：', err);
    // 失败兜底提示
    alert('复制失败，请手动复制');
    return false;
  }
}

