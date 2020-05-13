function copyClick(event) {
    console.log(event.target);
    event = event.target;
    var value = event.innerText;
    var key = event.id;
    if (key.length < 1) {
        key = event.parentElement.id;
    }
    if (!isNaN(value)) {
        value = parseInt(value)
    }
    if (value === "true") {
        value = true;
    }
    if (value === "false") {
        value = false;
    }
    var str = 'user_pref(\"' + key + '\", ' + value + ');';
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}
var USERJS = {
    pyllyukko: "https://raw.githubusercontent.com/pyllyukko/user.js/master/user.js",
    ghacks: "https://raw.githubusercontent.com/ghacksuserjs/ghacks-user.js/master/user.js",
    OrangeManBad: "https://git.nixnet.xyz/OrangeManBad/user.js/raw/branch/master/user.js",
    quindecim: "https://git.nixnet.xyz/quindecim/mobile_user.js/raw/branch/master/user.js",
    v1nc: "https://raw.githubusercontent.com/v1nc/user.js/master/user.js"
}
main();

function createTH(str, url) {
    var th = document.createElement("TH");
    var a = document.createElement("A");
    a.href = url;
    a.innerHTML = str;
    th.appendChild(a);
    document.getElementById("table_head").appendChild(th);
}
//following methods are based on https://github.com/jm42/compare-user.js and were modified for client-side js
function main() {
    var n, r, k, c = 1,
        t = {}
    for (n in USERJS)
        if (USERJS.hasOwnProperty(n)) {
            parse_userjs(n, USERJS[n], function(n) {
                return function(r) {
                    for (k in r)
                        if (r.hasOwnProperty(k)) {
                            if (typeof t[k] == "undefined")
                                t[k] = {}
                            t[k][n] = r[k]
                        }
                    if (c++ >= Object.keys(USERJS).length) {
                        t = Object.keys(t)
                            .map(function(k) {
                                return {
                                    id: k,
                                    value: t[k]
                                }
                            })
                            .sort(function(a, b) {
                                return +(a.id > b.id) || -(a.id < b.id)
                            })

                        render_table(t)
                    }
                }
            }(n))
        }
}



function render_table(t) {
    var h = '',
        b = '',
        i = 0,
        n
    createTH("", "")
    for (n in USERJS)
        if (USERJS.hasOwnProperty(n) && n != "custom")
            createTH(n, USERJS[n]);
    for (; i < t.length; i++) {
        var tr = document.createElement("TR");
        var td = document.createElement("TD");
        td.innerHTML = t[i].id;
        tr.appendChild(td);
        for (n in USERJS)
            if (USERJS.hasOwnProperty(n) && n != "custom") {
                var td2 = document.createElement("TD");
                td2.onclick = copyClick;
                td2.id = t[i].id;
                td2.innerHTML = render_value(typeof t[i].value[n] == "undefined" ? null : t[i].value[n]);
                tr.appendChild(td2);
            }
        document.getElementById("table_body").appendChild(tr);
    }
}

function parse_userjs(n, u, cb) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var c1 = 0;
            var c2 = 0;
            var c3 = 0;
            var c4 = 0;
            c1 = this.responseText.split("\n").length;
            var lines = this.responseText;
            c4 = lines.length;
            lines = lines.split(/\r|\n/);
            c2 = lines.length;
            var all = {}
            var prefs_count = 0;
            for (var l of lines) {
                if (l.trim().startsWith("user_pref(")) {
                    c3 += 1;
                    var splited = l.split("(")[1].split(")")[0];
                    var k = splited.substring(splited.indexOf(',') + 1).trim();
                    var l = splited.substring(0, splited.indexOf(',')).trim().split('"')[1];
                    prefs_count += 1;
                    switch (true) {
                        case k == "true":
                            all[l] = true;
                            break
                        case k == "false":
                            all[l] = false;
                            break
                        case k == '""""':
                            all[l] = "";
                            break
                        case !isNaN(k):
                            all[l] = parseInt(k);
                            break
                        case k.split('"').length > 1:
                            all[l] = k.split('"')[1];
                            break;
                        default:
                            all[l] = k;

                    }


                } else {

                }

            }
            console.log(prefs_count, Object.keys(all).length, c1, c2, c3, c4, n);
            cb(all);

        } else {
            if (this.readyState == 4 && this.status == 0) {
                console.log("NULLL");
                cb(all);
            }
        }
    };
    xhttp.open("GET", u, true);
    xhttp.send();


}

function render_value(v) {
    if (typeof v == "string") return '"' + v + '"'
    if (v === true) return '<span style="color:#33a92e">' + v + '</span>'
    if (v === false) return '<span style="color:#FF0000">' + v + '</span>'
    if (v === null) return ''
    return v
}
