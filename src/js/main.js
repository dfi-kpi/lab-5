window.addEventListener("load", () => {
    const width = document.getElementById("width");
    const length = document.getElementById("length");
    const clear = document.getElementById("clear");
    const result = document.getElementById("result");

    const doMath = () => {
        let w = parseFloat(width.value);
        let l = parseFloat(length.value);

        if (w == 0 || l == 0) {
            alert("0? Так бути не може!");
        } else if (w < 0 || l < 0) {
            alert("Число з мінусом? Як банально...");
        } else {
            let p = w * 2 + l * 2;
            let s = w * l;
            let d = Math.sqrt(l*l + w*w, 2);
    
            result.innerHTML = `
            <table class="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Властивість</th>
                        <th>Значення</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Периметр</td>
                        <td>${p}</td>
                    </tr>
                    <tr>
                        <td>Площа</td>
                        <td>${s}</td>
                    </tr>
                    <tr>
                        <td>Довжина діагоналі</td>
                        <td>${d}</td>
                    </tr>
                </tbody>
            </table>`;
        }
    };

    width.addEventListener("change", () => {
        doMath();        
    });

    length.addEventListener("change", () => {
        doMath();        
    });

    clear.addEventListener("click", (event) => {
        event.preventDefault();
        result.innerHTML = '';
        width.value = 0;
        length.value = 0;
    });





    const send1 = document.getElementById("send1");
    const send2 = document.getElementById("send2");
    const chat = document.getElementById("chat");
    const txt1 = document.getElementById("txt1");
    const txt2 = document.getElementById("txt2");

    const addMessage = (user, message, type) => {
        if (message.length > 1) {
            chat.innerHTML += `
                <div class="message" type="${type}">
                    <p class="user">
                        ${user}
                    </p>
                    <p class="content">
                        ${message}
                    </p>
                </div>
            `;
        } else {
            alert("Введіть текст!");
        }
        
    };

    send1.addEventListener("click", (event) => {
        event.preventDefault();
        addMessage("User-1", txt1.value, "left");
        txt1.value = "";
    });

    send2.addEventListener("click", (event) => {
        event.preventDefault();
        addMessage("User-2", txt2.value, "right");
        txt2.value = "";
    });





    const raw = document.getElementById("raw");
    const trans = document.getElementById("trans");

    const toTrans = (text) => {
        const map = {
            'а': 'a',
            'б': 'b',
            'в': 'v',
            'г': 'h',
            'ґ': 'g',
            'д': 'd',
            'е': 'e',
            'є': 'ye',
            'ж': 'zh',
            'з': 'z',
            'и': 'y',
            'і': 'i',
            'ї': 'yi',
            'й': 'y',
            'к': 'k',
            'л': 'l',
            'м': 'm',
            'н': 'n',
            'о': 'o',
            'п': 'p',
            'р': 'r',
            'с': 's',
            'т': 't',
            'у': 'u',
            'ф': 'f',
            'х': 'kh',
            'ц': 'ts',
            'ч': 'ch',
            'ш': 'sh',
            'щ': 'shch',
            'ь': '\'',
            'ю': 'yu',
            'я': 'ya',
            'А': 'A',
            'Б': 'B',
            'В': 'V',
            'Г': 'H',
            'Ґ': 'G',
            'Д': 'D',
            'Е': 'E',
            'Є': 'Ye',
            'Ж': 'Zh',
            'З': 'Z',
            'И': 'Y',
            'І': 'I',
            'Ї': 'Yi',
            'Й': 'Y',
            'К': 'K',
            'Л': 'L',
            'М': 'M',
            'Н': 'N',
            'О': 'O',
            'П': 'P',
            'Р': 'R',
            'С': 'S',
            'Т': 'T',
            'У': 'U',
            'Ф': 'F',
            'Х': 'Kh',
            'Ц': 'Ts',
            'Ч': 'Ch',
            'Ш': 'Sh',
            'Щ': 'Shch',
            'Ь': '\'',
            'Ю': 'Yu',
            'Я': 'Ya'
        };
    
        const translate = text.split('').map(char => {
            if (map[char]) {
                return map[char];
            }
            return char;
        }).join('');
    
        return translate;
    }

    raw.addEventListener("change", () => {
        let translate = toTrans(raw.value);
        trans.value = translate;
    });





    const date = document.getElementById("date");
    const calc2 = document.getElementById("calc2");
    const result2 = document.getElementById("result2");

    const calcDay = (fulldate) => {
        let year = fulldate.getFullYear();
        let month = fulldate.getMonth() + 1;
        let day = fulldate.getDate();
    
        if (month < 3) {
            month += 12;
            year -= 1;
        }
    
        const k = year % 100;
        const j = Math.floor(year / 100);
    
        const index = (day + Math.floor(13 * (month + 1) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - 2 * j) % 7;
    
        const days = ['Субота', 'Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця'];
    
        return days[(index + 7) % 7] + 1;
    };

    const getAge = (startDate, endDate) => {
        const ms = 1000 * 60 * 60 * 24 * 365.25;
        const dms = endDate - startDate;
        return Math.floor(dms / ms);
    }

    calc2.addEventListener("click", (event) => {
        event.preventDefault();
        let fulldate = new Date(date.value);
        let day = calcDay(fulldate);
        let age = getAge(fulldate, Date.now());

        result2.innerHTML = `<p>Ви народилися в ${day}, вам аж ${age} років... Вау!</p>`;
    });
});