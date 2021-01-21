
let comandos = require("./commands")
process.stdout.write('prompt > ');


process.stdin.on('data', function (data) {
            let cmd = data.toString().trim();
            cmd = cmd.split(" ")



            if (cmd[0] == "echo") {
                let param = cmd.slice(1).join(" ")
                comandos.echo(param)
            } else if (cmd[0] == "cat") {
                let filename = cmd[1];
                comandos.cat(filename);
            } else if (cmd[0] == "head") {
                let param = cmd[1];
                comandos.head(param);

            } else if (cmd[0] == "tail") {
                    let param = cmd[1];
                    comandos.tail(param);
            } else if(cmd[0] == "curl"){
                    let param = cmd[1];
                    comandos.curl(param)
                }else {
                    comandos[cmd[0]]()
                }

                process.stdout.write("\n" + "prompt > ");
            });