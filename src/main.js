const {App, AppBar, Text, Drawer, Column} = require('makuro_js');
const Scaffold = require('makuro_js/src/scaffold');
const Table = require('makuro_js/src/table');


App({
    home: Scaffold({
        appBar: AppBar({
            title: Text("Ini Adalah Judulnya")
        }),
        drawer: Drawer(),
        body: Column({
            children: [
                Table({
                    ajaxURL: '/api/user',
                    autoColumns: true
                }),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana")

            ]
        })
    })
});
