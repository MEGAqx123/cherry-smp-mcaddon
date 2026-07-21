
import { world } from "@minecraft/server";

function buy(player, detectItem, detectData, item, price) {
    try {
        const result = player.runCommand(
            `scoreboard players remove @s[scores={Coins=${price}..},hasitem={item=${detectItem},data=${detectData}}] Coins ${price}`
        );

        if (result.successCount > 0) {
            player.runCommand(`give @s ${item}`);
            player.runCommand(`clear @s ${detectItem} 1 ${detectData}`);
        } else {
            player.sendMessage("§cNot enough Coins!");
        }
    } catch (e) {
        console.warn(e);
    }
}

system.runInterval(() => {

    for (const player of world.getPlayers()) {
        buy(player, "spyglass", 10, "totem_of_undying", 600);
    }

}, 1);