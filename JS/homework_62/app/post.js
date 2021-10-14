import { imp } from "./get";

export function postPost() {
    imp.then(res => {
        let div = document.querySelector('.post');
        let ul = document.createElement('ul');

        for (let i = 0; i < res.data.length; i++) {
            
            ul.innerHTML += `<li>
                                <a href="#">
                                    <span>${res.data[i].title}</span>
                                    <span>${res.data[i].author}</span>
                                </a>
                            </li>`
        }

        div.innerHTML = ul.outerHTML;
    });
}