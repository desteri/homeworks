$('.list').html(`<a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.apple.com/">Apple</a>
                <a href="https://www.amazon.com/">Amazon</a>
                <a href="https://www.netflix.com/">Netflix</a>
                <a href="https://www.google.com/">Google</a>`);
$('.list a').wrap('<li></li>');
$('.list li').wrapAll('<ul></ul>');