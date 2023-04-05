import G6, {UpdateType} from "@antv/g6";
import {Item, ModelConfig} from "@antv/gi-assets-advance/es/elements/ReasonNode/reason_analysis_node";

const colorMap = {
    "cloudService": '#F69F7F',
    "company": '#795AE1',
    "foundation": '#622CD8',
    "dependency": '#82E6C7',
    "person": '#F6D87B',
    "production": '#F69F7F',
    "protocol": '#0186f8'
}

G6.registerNode("basicNode", {
    // @ts-ignore
    draw: (cfg, group) => {
        const type:string | undefined = cfg?.type;
        let color: String;
        if(type === "executive" || type === "developer"){
            color = colorMap["person"]
        }
        else{
            // @ts-ignore
            color = colorMap[type];
        }
        const keyShape = group?.addShape('circle', {
            attrs:{
                color,
            }
        });
        group?.addShape('text', {
            attrs:{
                text: cfg?.name,
                fill: '#fff',
                textBaseline: 'top'
            },
            name: 'node-label'
        })
        return keyShape;
    }
});
