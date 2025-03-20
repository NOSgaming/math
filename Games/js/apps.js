var baseurl = "https://" + ("%40".repeat(150)) + "@"

//Note from jobi, this most likely won't ever be used :\ was mean't for uni tabs but until I have enought revenue to host a server & a domain (for the proxy) I'm not capable of doing this.

// Ultraviolet 2.0 by Titanium Network (This is their "encryption" alg and its how I can use other sites hosted proxies :3 [If you're a site owner and are seeing this please let me know, I'll happily remove your site!])
const xorEncode = {
    encode(str) {
        if (!str) return str;
        return encodeURIComponent(
            str
                .toString()
                .split('')
                .map((char, ind) =>
                    ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char
                )
                .join('')
        );
    }
};
// Ultraviolet 2.0 by Titanium Network

function openapp(app){
    const base = [
        "https://xn--zkr.xn--72cg7bdd3bro6b3ab9c8btw4x.com/",
        "https://artclass.site/service/"
    ]
    let url
    console.log(baseurl)
    if (app == "google"){
        url = base[1] + xorEncode.encode("https://google.com")
    }
    if (app == "twitter"){
        url = base[1] + xorEncode.encode("https://x.com")
    }
    win = window.open();
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
}