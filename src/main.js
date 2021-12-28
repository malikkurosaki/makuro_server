const {App, AppBar, Text, Drawer, Column} = require('makuro_js');
const Scaffold = require('makuro_js/src/scaffold');
// require('bootstrap/dist/js/bootstrap.bundle.min')
// require('../node_modules/tabulator-tables/src/scss/tabulator.scss');
// require('../node_modules/bootstrap/scss/bootstrap.scss');
// require('bootstrap/js/dist/popover')

App({
    home: Scaffold({
        appBar: AppBar({
            title: Text("Ini Adalah Judulnya")
        }),
        drawer: Drawer(),
        body: Column({
            children: [
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana"),
                Text("ini ada dimana")

            ]
        })
    })
});
