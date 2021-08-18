import { SQLite } from '@ionic-native/sqlite';
import { SqliteDbCopy } from '@ionic-native/sqlite-db-copy';

let db = {
  dbIns: {},
  dbInit() {
    document.addEventListener('deviceready', () => {
      SqliteDbCopy.remove('default777.db', 0)
        .then(() => {
          // alert('remove successed' + res)
        })
        .catch((error) => {
          alert(error.message)
        });

      SqliteDbCopy.copy('default777.db', 0)
        .then(() => {
          // alert('复制成功：' + res);
          // this.dbIns = res;
        })
        .catch((error) => {
          alert('复制失败：' + error.message)
        });

      SQLite.create({
        name: 'default777.db', location: 'default', createFromLocation: 1
      }).then((database) => {
        try {
          this.dbIns = database;

          // database.transaction((tx) => {
          //   tx.executeSql(
          //     'SELECT name FROM sqlite_master where type="table" order by name',
          //     [],
          //     (tx, rs) => {
          //       alert('表总数：' + rs.rows.length);
          //       for (let i = 0; i < rs.rows.length; i++) {
          //         alert(rs.rows.item(i).name);
          //       }
          //     },
          //     (tx, error) => {
          //       alert("error!" + error.message);
          //     }
          //   );
          // });


        } catch (e) {
          console.log('SQL error: ', e);
        }
      })
    })
  }
}

export default db