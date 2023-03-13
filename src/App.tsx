import GISDK,{utils} from '@antv/gi-sdk';
import localforage from 'localforage';

import * as GI_ASSETS_BASIC from '@antv/gi-assets-basic';
import * as GI_ASSETS_SCENE from '@antv/gi-assets-scene';
import * as GI_ASSETS_ADVANCE from '@antv/gi-assets-advance';
import * as GI_ASSETS_ALGORITHM from '@antv/gi-assets-algorithm';
import {services as GI_ASSETS_TUGRAPH_SERVER} from '@antv/gi-assets-tugraph';
import {services as GI_ASSETS_NEO4J_SERVER} from '@antv/gi-assets-neo4j';
import {services as GI_ASSETS_GRAPHSCOPE_SERVER} from '@antv/gi-assets-graphscope';
import {services as GI_ASSETS_ADVANCE_SERVER} from '@antv/gi-assets-advance';
import {services as GI_ASSETS_BASIC_SERVER} from '@antv/gi-assets-basic';
import {  GI_PROJECT_CONFIG, SERVER_ENGINE_CONTEXT,THEME_VALUE,GI_LOCAL_DATA,GI_SCHEMA_DATA } from "./GI_EXPORT_FILES";
import ThemeSwitch from '@antv/gi-theme-antd';
/** 资产可按需引入 **/
const { ZoomIn,ZoomOut,FitView,FitCenter,LassoSelect,PropertiesPanel,ActivateRelations,CanvasSetting,NodeLegend,Placeholder,FilterPanel,ContextMenu,ToggleClusterWithMenu,NeighborsQuery,Copyright,Loading,PinNodeWithMenu,ForceSimulation,Initializer,LayoutSwitch,SideTabs,PathAnalysis,Toolbar,Export } = GI_ASSETS_BASIC.components;
const { LargeGraph,MapMode } = GI_ASSETS_SCENE.components;
const { SnapshotGallery,SubGraphLayout } = GI_ASSETS_ADVANCE.components;
const { NodeImportance } = GI_ASSETS_ALGORITHM.components;
const { SimpleNode,SimpleEdge } = GI_ASSETS_BASIC.elements;
const { GraphinForce,Concentric,Dagre,FundForce } = GI_ASSETS_BASIC.layouts;

const ASSETS = {
  components:{ZoomIn,ZoomOut,FitView,FitCenter,LassoSelect,PropertiesPanel,ActivateRelations,CanvasSetting,NodeLegend,Placeholder,FilterPanel,LargeGraph,MapMode,SnapshotGallery,ContextMenu,ToggleClusterWithMenu,NeighborsQuery,Copyright,Loading,PinNodeWithMenu,ForceSimulation,Initializer,LayoutSwitch,SideTabs,SubGraphLayout,PathAnalysis,NodeImportance,Toolbar,Export},
  elements:{SimpleNode,SimpleEdge},
  layouts:{GraphinForce,Concentric,Dagre,FundForce}
}


const SERVER = [
  GI_ASSETS_TUGRAPH_SERVER,GI_ASSETS_NEO4J_SERVER,GI_ASSETS_GRAPHSCOPE_SERVER,GI_ASSETS_ADVANCE_SERVER,GI_ASSETS_BASIC_SERVER
]




const {  getCombineServices } = utils;
//@ts-ignores
const services = getCombineServices(SERVER);
/** 设置服务引擎 Context **/
window.localStorage.setItem( 'SERVER_ENGINE_CONTEXT', JSON.stringify(SERVER_ENGINE_CONTEXT));
/** 设置主题 **/
window.localStorage.setItem("@theme", THEME_VALUE);
/** 如果是本地上传的数据，需要将数据存储在IndexedDB中，避免数据量大导致的内存报错 **/
const { GI_SITE_PROJECT_ID } = SERVER_ENGINE_CONTEXT;
//@ts-ignore
window.localforage = localforage; // 如果是GI引擎，在初始化的时候，查询的是window.localforage.getItem('GI_SITE_PROJECT_ID')，因此需要将localforage设置为全局变量
localforage.setItem(GI_SITE_PROJECT_ID,{
  data:{ transData:GI_LOCAL_DATA },
  schemaData:GI_SCHEMA_DATA
});


const App= () => {

    return (
      <div>
        <div style={{ height: "100vh" }}>
          <ThemeSwitch style={{ visibility: "hidden" }} />
          <GISDK
              id={"12346789"}
              // @ts-ignore
              config={GI_PROJECT_CONFIG}
              // @ts-ignore
              assets={ASSETS}
              services={services}
          />
        </div>
      </div>
  );
};


export default App;
