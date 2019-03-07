'use strict';

const Storage = {
    db: openDatabase('PersonInfoDatabase', '1.0', 'Test DB', 2 * 1024 * 1024),
    db_promise: null,
    init_db: function () {
        this.db_promise = websql(this.db);
        this.db.transaction(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS Person (' + 'id TEXT PRIMARY KEY NOT NULL,' + 'firstname TEXT NOT NULL,' + 'lastname TEXT NOT NULL,' + 'gender TEXT NOT NULL,' + 'birthday TEXT NOT NULL,' + 'email TEXT NOT NULL,' + 'tel TEXT NOT NULL,' + 'homepage TEXT NOT NULL)');
        });
    },
    saveOne: function (md5_id, table) {
        return this.db_promise.transaction(function (tx) {
            tx.executeSql(`INSERT INTO Person VALUES ('${md5_id}','${table.firstname}','${table.lastname}','${table.gender}','${table.birthday}','${table.email}','${table.tel}','${table.homepage}');`);
        });
    },
    loadAll: function () {
        return this.db_promise.transaction(function (tx) {
            tx.executeSql(`SELECT * FROM Person`);
        });
    }
};

function isNull(exp) {
    return !exp && typeof exp != "undefined" && exp != 0;
}

let formRender = {
    last_md5: null,
    target_form: document.getElementById("test_form"),
    bindEvent: function () {
        this.target_form.onsubmit = this.onSubmit;
        this.target_form.onreset = this.onReset;
        console.log("bind form");
    },
    onSubmit: function () {
        let table = {
            gender: formRender.target_form.gender.value,
            firstname: formRender.target_form.firstname.value,
            lastname: formRender.target_form.lastname.value,
            birthday: formRender.target_form.birthday.value,
            email: formRender.target_form.email.value,
            tel: formRender.target_form.tel.value,
            homepage: formRender.target_form.homepage.value
        };
        let this_md5 = md5(JSON.stringify(table));
        if (isNull(formRender.last_md5)) {
            formRender.last_md5 = this_md5;
            console.log("first table");
            let save_one_promise = Storage.saveOne(this_md5, table);
            save_one_promise.catch(e => {
                alert(e.stack || e);
            });
        } else {
            if (this_md5 !== formRender.last_md5) {
                console.log("new table");
                table;
                formRender.last_md5 = this_md5;
            } else {
                console.log("same input");
            }
        }
        return false;
    },
    onReset: function () {
        formRender.last_md5 = null;
        formRender.target_form.reset();
    }
};

let showRender = {
    show_button: document.getElementById("show"),
    table_body: document.getElementById("rows"),
    template: document.querySelector('#table_template'),
    bindEvent: function () {
        this.show_button.onclick = this.onClick;
        console.log("bind show");
    },
    renderRow: function (table) {
        let id = showRender.template.content.querySelector(".id");
        id.innerText = table.id;
        let gender = showRender.template.content.querySelector(".gender");
        gender.innerText = table.gender;
        let firstname = showRender.template.content.querySelector(".firstname");
        firstname.innerText = table.firstname;
        let lastname = showRender.template.content.querySelector(".lastname");
        lastname.innerText = table.lastname;
        let birthday = showRender.template.content.querySelector(".birthday");
        birthday.innerText = table.birthday;
        let email = showRender.template.content.querySelector(".email");
        email.innerText = table.email;
        let tel = showRender.template.content.querySelector(".tel");
        tel.innerText = table.tel;
        let homepage = showRender.template.content.querySelector(".homepage");
        homepage.innerText = table.homepage;
        let rendered_content = document.importNode(showRender.template.content, true);
        return rendered_content;
    },
    onClick: function () {
        let tables_promise = Storage.loadAll();
        tables_promise.then(result => {
            console.log(result[0].rows);
            if (result[0].rows.length > 0) {
                if (showRender.table_body.childNodes.length > 0) {
                    showRender.table_body.innerHTML = "";
                }
                for (let table of result[0].rows) {
                    let row = showRender.renderRow(table);
                    showRender.table_body.appendChild(row);
                }
            } else {
                alert("no storage at all");
            }
        }).catch(e => {
            alert(e.stack || e);
        });
    }
};
let main = () => {
    console.log("main");
    Storage.init_db();
    formRender.bindEvent();
    showRender.bindEvent();
};
main();