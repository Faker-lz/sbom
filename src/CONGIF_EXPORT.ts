
/** G6VP 站点自动生成的配置 **/
export const GI_PROJECT_CONFIG = {
    "nodes": [{
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "rgba(4,4,4,1)",
            "label": ["cloudService^^name"],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "center"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "默认样式",
        "expressions": [],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#3056E3",
            "label": ["cloudService^^name"],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "CLOUDSERVICE TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "cloudService"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#faad14",
            "label": ["production^^name"],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "PRODUCTION TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "production"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#a0d911",
            "label": ["dependence^^name"],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "DEPENDENCE TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "dependence"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#f5222d",
            "label": ["protocol^^name"],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "PROTOCOL TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "protocol"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#722ed1",
            "label": [],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "DEVELOPER TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "developer"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#eb2f96",
            "label": ["company^^name"],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "COMPANY TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "company"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#2f54eb",
            "label": ["executive^^name"],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "EXECUTIVE TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "executive"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#13c2c2",
            "label": [],
            "advanced": {
                "label": {
                    "fill": "#000",
                    "visible": true,
                    "fontSize": 12,
                    "position": "bottom"
                },
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "FOUNDATION TYPE",
        "expressions": [{
            "name": "type",
            "operator": "eql",
            "value": "foundation"
        }],
        "logic": true
    }],
    "edges": [{
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#ddd",
            "label": []
        },
        "groupName": "默认样式",
        "expressions": [],
        "logic": true
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#faad14",
            "label": []
        },
        "name": "官方边",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "production_to_service"
        }],
        "order": 0,
        "logic": true,
        "groupName": "PRODUCTION_TO_SERVICE TYPE"
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#a0d911",
            "label": []
        },
        "name": "官方边",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "dependency_to_production"
        }],
        "order": 1,
        "logic": true,
        "groupName": "DEPENDENCY_TO_PRODUCTION TYPE"
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#f5222d",
            "label": []
        },
        "name": "官方边",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "protocol_to_dependency"
        }],
        "order": 2,
        "logic": true,
        "groupName": "PROTOCOL_TO_DEPENDENCY TYPE"
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#722ed1",
            "label": []
        },
        "name": "官方边",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "developer_to_dependency"
        }],
        "order": 3,
        "logic": true,
        "groupName": "DEVELOPER_TO_DEPENDENCY TYPE"
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#3056E3",
            "label": []
        },
        "name": "官方边",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "service_to_company"
        }],
        "order": 4,
        "logic": true,
        "groupName": "SERVICE_TO_COMPANY TYPE"
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#2f54eb",
            "label": []
        },
        "name": "官方边",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "executive_to_company"
        }],
        "order": 5,
        "logic": true,
        "groupName": "EXECUTIVE_TO_COMPANY TYPE"
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#13c2c2",
            "label": []
        },
        "name": "官方边",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "foundation_to_dependency"
        }],
        "order": 6,
        "logic": true,
        "groupName": "FOUNDATION_TO_DEPENDENCY TYPE"
    }],
    "layout": {
        "id": "GraphinForce",
        "props": {
            "type": "graphin-force",
            "animation": true,
            "preset": {
                "type": "concentric"
            },
            "stiffness": 200,
            "repulsion": 1000,
            "damping": 0.9,
            "defSpringLenCfg": {
                "minLimitDegree": 5,
                "maxLimitLength": 500,
                "defaultSpring": 100
            },
            "centripetalOptions": {
                "leaf": 2,
                "single": 2,
                "others": 1
            }
        }
    },
    "components": [{
        "id": "ZoomIn",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "放大",
                "isShowIcon": true,
                "icon": "icon-zoomin",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "ZoomOut",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "缩小",
                "isShowIcon": true,
                "icon": "icon-zoomout",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "FitView",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "自适应",
                "isShowIcon": true,
                "icon": "icon-fit-view",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "FitCenter",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "视图居中",
                "isShowIcon": true,
                "icon": "icon-fit-center",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "LassoSelect",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "自由圈选",
                "isShowIcon": true,
                "icon": "icon-lasso",
                "isShowTooltip": true,
                "tooltip": "按住Shift，点击画布即可自由圈选",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "PropertiesPanel",
        "props": {
            "serviceId": "GI/PropertiesPanel",
            "title": "属性面板",
            "placement": "RT",
            "width": "356px",
            "height": "calc(100% - 0px)",
            "offset": [10, 10],
            "animate": false,
            "defaultiStatistic": false
        }
    }, {
        "id": "ActivateRelations",
        "props": {
            "enableNodeHover": true,
            "enableEdgeHover": true,
            "enable": true,
            "trigger": "click",
            "upstreamDegree": 1,
            "downstreamDegree": 1
        }
    }, {
        "id": "CanvasSetting",
        "props": {
            "styleCanvas": {
                "background": "#fff",
                "backgroundImage": "https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*k9t4QamMuQ4AAAAAAAAAAAAAARQnAQ",
                "backgroundColor": "#fff"
            },
            "dragCanvas": {
                "disabled": false,
                "direction": "both",
                "enableOptimize": false
            },
            "zoomCanvas": {
                "disabled": false,
                "enableOptimize": true
            },
            "clearStatus": true,
            "doubleClick": true
        }
    }, {
        "id": "NodeLegend",
        "props": {
            "sortKey": "type",
            "textColor": "#ddd",
            "placement": "LT",
            "offset": [20, 10]
        }
    }, {
        "id": "Placeholder",
        "name": "画布占位符",
        "props": {
            "img": "https://gw.alipayobjects.com/zos/bmw-prod/db278704-6158-432e-99d2-cc5db457585d.svg",
            "text": "当前画布为空，请先试试「数据/图数据源/导入/示例数据」",
            "width": 380
        }
    }, {
        "id": "FilterPanel",
        "name": "筛选面板",
        "props": {
            "filterKeys": ["node-legendType", "edge-edgeType"],
            "isFilterIsolatedNodes": true,
            "highlightMode": true,
            "filterLogic": "and",
            "GI_CONTAINER_INDEX": 2,
            "GIAC_CONTENT": {
                "visible": false,
                "disabled": false,
                "isShowTitle": true,
                "title": "筛选",
                "isShowIcon": true,
                "icon": "icon-filter",
                "isShowTooltip": true,
                "tooltip": "通过属性筛选画布信息，可自定义",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "top",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true,
                "containerType": "div",
                "containerAnimate": false,
                "containerPlacement": "RT",
                "offset": [0, 0],
                "containerWidth": "400px",
                "containerHeight": "calc(100% - 100px)",
                "contaienrMask": false
            },
            "histogramColor": "#3056E3",
            "histogramOptions": {
                "isCustom": false,
                "min": null,
                "max": null,
                "binWidth": null
            }
        }
    }, {
        "id": "LargeGraph",
        "name": "3D大图",
        "props": {
            "visible": false,
            "minSize": "50%",
            "maxSize": "100%",
            "placement": "RB",
            "offset": [0, 0],
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "3D大图",
                "isShowIcon": true,
                "icon": "icon-3d",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            },
            "backgroundColor": "#fff",
            "highlightColor": "red"
        }
    }, {
        "id": "MapMode",
        "name": "地图模式",
        "props": {
            "visible": false,
            "type": "mapbox",
            "theme": "light",
            "minSize": "50%",
            "maxSize": "100%",
            "placement": "RB",
            "offset": [0, 0],
            "longitudeKey": "longitude",
            "latitudeKey": "latitude",
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "地图模式",
                "isShowIcon": true,
                "icon": "icon-global",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "SnapshotGallery",
        "name": "快照画廊",
        "props": {
            "background": "#fff",
            "direction": "horizontal",
            "placement": "LT",
            "offset": [20, 20],
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "快照画廊",
                "isShowIcon": true,
                "icon": "icon-camera",
                "isShowTooltip": true,
                "tooltip": "快照画廊(快捷键ctrl+x)",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "ContextMenu",
        "name": "右键菜单",
        "props": {
            "GI_CONTAINER": ["NeighborsQuery", "ToggleClusterWithMenu", "PinNodeWithMenu"],
            "bindTypes": ["node"],
            "nodeMenuComponents": ["NeighborsQuery", "ToggleClusterWithMenu", "PinNodeWithMenu"],
            "edgeMenuComponents": [],
            "canvasMenuComponents": [],
            "comboMenuComponents": []
        }
    }, {
        "id": "ToggleClusterWithMenu",
        "name": "展开/收起",
        "props": {
            "isReLayout": false,
            "degree": 1
        }
    }, {
        "id": "NeighborsQuery",
        "name": "邻居查询",
        "props": {
            "serviceId": "GI/NeighborsQuery",
            "degree": "1",
            "isFocus": true
        }
    }, {
        "id": "Copyright",
        "name": "版权",
        "props": {
            "imageUrl": "https://gw.alipayobjects.com/zos/bmw-prod/c2d4b2f5-2a34-4ae5-86c4-df97f7136105.svg",
            "width": 200,
            "height": 30,
            "placement": "RB",
            "offset": [10, 10]
        }
    }, {
        "id": "Loading",
        "name": "加载动画",
        "props": {}
    }, {
        "id": "PinNodeWithMenu",
        "name": "固定节点(MENU)",
        "props": {
            "color": "#fff",
            "fill": "#262626"
        }
    }, {
        "id": "ForceSimulation",
        "name": "力导布局控制器",
        "props": {
            "autoPin": true,
            "dragNodeMass": 10000000,
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "力导布局控制器",
                "isShowIcon": true,
                "icon": "icon-layout-force",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "Initializer",
        "name": "初始化器",
        "props": {
            "serviceId": "GI/GI_SERVICE_INTIAL_GRAPH",
            "schemaServiceId": "GI/GI_SERVICE_SCHEMA",
            "GI_INITIALIZER": true,
            "aggregate": false
        }
    }, {
        "id": "LayoutSwitch",
        "name": "布局切换",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "布局切换",
                "isShowIcon": true,
                "icon": "icon-layout",
                "isShowTooltip": false,
                "tooltip": "一键切换画布布局",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }, {
        "id": "SideTabs",
        "name": "侧边栏",
        "props": {
            "GI_CONTAINER": ["FilterPanel", "PathAnalysis", "SubGraphLayout", "NodeImportance"],
            "outSideFromCanvas": true,
            "tabPosition": "left",
            "placement": "LB",
            "offset": [0, 0],
            "height": "calc(100vh - 120px)",
            "width": "450px"
        }
    }, {
        "id": "SubGraphLayout",
        "name": "子图布局",
        "props": {
            "isDefaultSubGraph": true,
            "sortKey": "legendType",
            "gap": 200,
            "direction": "horizontal",
            "GI_CONTAINER_INDEX": 2,
            "GIAC_CONTENT": {
                "visible": false,
                "disabled": false,
                "isShowTitle": true,
                "title": "子图",
                "isShowIcon": true,
                "icon": "icon-branches",
                "isShowTooltip": true,
                "tooltip": "子图布局面板",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true,
                "containerType": "div",
                "containerAnimate": false,
                "containerPlacement": "RT",
                "offset": [0, 0],
                "containerWidth": "400px",
                "containerHeight": "calc(100% - 100px)",
                "contaienrMask": false
            }
        }
    }, {
        "id": "PathAnalysis",
        "name": "路径分析",
        "props": {
            "pathNodeLabel": "id",
            "GI_CONTAINER_INDEX": 2,
            "GIAC_CONTENT": {
                "visible": false,
                "disabled": false,
                "isShowTitle": true,
                "title": "路径",
                "isShowIcon": true,
                "icon": "icon-path-analysis",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true,
                "containerType": "div",
                "containerAnimate": false,
                "containerPlacement": "RT",
                "offset": [0, 0],
                "containerWidth": "400px",
                "containerHeight": "calc(100% - 100px)",
                "contaienrMask": false
            }
        }
    }, {
        "id": "NodeImportance",
        "name": "节点重要性",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC_CONTENT": {
                "visible": false,
                "disabled": false,
                "isShowTitle": true,
                "title": "重要性",
                "isShowIcon": true,
                "icon": "icon-rules",
                "isShowTooltip": true,
                "tooltip": "",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true,
                "containerType": "div",
                "containerAnimate": false,
                "containerPlacement": "RT",
                "offset": [0, 0],
                "containerWidth": "350px",
                "containerHeight": "calc(100% - 100px)",
                "contaienrMask": false
            }
        }
    }, {
        "id": "Toolbar",
        "name": "工具栏",
        "props": {
            "GI_CONTAINER": ["ZoomIn", "ZoomOut", "FitView", "FitCenter", "LassoSelect", "LargeGraph", "LayoutSwitch",
                "Export", "ForceSimulation"
            ],
            "direction": "vertical",
            "placement": "LT",
            "offset": [24, 64]
        }
    }, {
        "id": "Export",
        "name": "导出",
        "props": {
            "GI_CONTAINER_INDEX": 2,
            "GIAC": {
                "visible": false,
                "disabled": false,
                "isShowTitle": false,
                "title": "导出",
                "isShowIcon": true,
                "icon": "icon-export",
                "isShowTooltip": true,
                "tooltip": "导出CSV,PNG,JSON数据",
                "tooltipColor": "#3056e3",
                "tooltipPlacement": "right",
                "hasDivider": false,
                "height": "60px",
                "isVertical": true
            }
        }
    }]
};

/** G6VP 站点选择服务引擎的上下文配置信息 **/
export const SERVER_ENGINE_CONTEXT = {
    "GI_SITE_PROJECT_ID": "6b966b29-3a04-4624-b497-0e5e11865a30",
    "engineId": "GI",
    "data": {
        "nodes": [{
            "id": "0",
            "nodeType": "cloudService",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "0",
                "name": "腾讯云",
                "type": "cloudService"
            },
            "key": 0
        }, {
            "id": "1",
            "nodeType": "production",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "1",
                "name": "云服务器 CVM",
                "type": "production"
            },
            "key": 1
        }, {
            "id": "2",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "2",
                "name": "TencentOS Server 3.1 (TK4)",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 2
        }, {
            "id": "3",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "3",
                "name": "GPLv2(GNU General Public License version 2)",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 3
        }, {
            "id": "4",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "4",
                "name": "张明",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "首席架构师"
            },
            "key": 4
        }, {
            "id": "5",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "5",
                "name": "樊孝文",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 5
        }, {
            "id": "6",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "6",
                "name": "谢阳",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 6
        }, {
            "id": "7",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "7",
                "name": "胡伟",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 7
        }, {
            "id": "8",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "8",
                "name": "杨峰",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 8
        }, {
            "id": "9",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "9",
                "name": "陈龙",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 9
        }, {
            "id": "10",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "10",
                "name": "邓明",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 10
        }, {
            "id": "11",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "11",
                "name": "王鹏",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 11
        }, {
            "id": "12",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "12",
                "name": "张弛",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 12
        }, {
            "id": "13",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "13",
                "name": "李瑞",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 13
        }, {
            "id": "14",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "14",
                "name": "刘英",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 14
        }, {
            "id": "15",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "15",
                "name": "腾讯",
                "type": "company",
                "country": null,
                "url": "https://www.tencent.com/",
                "businessStatus": null
            },
            "key": 15
        }, {
            "id": "16",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "16",
                "name": "马化腾",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "董事会主席、首席执行官"
            },
            "key": 16
        }, {
            "id": "17",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "17",
                "name": "刘炽平",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "高级副总裁"
            },
            "key": 17
        }, {
            "id": "18",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "18",
                "name": "张志东",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "高级副总裁"
            },
            "key": 18
        }, {
            "id": "19",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "19",
                "name": "彭蕾",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "首席人力资源官"
            },
            "key": 19
        }, {
            "id": "20",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "20",
                "name": "陈元丰",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "首席战略官"
            },
            "key": 20
        }, {
            "id": "21",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "21",
                "name": "TencentOS Server 2.4 (TK4)",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 21
        }, {
            "id": "22",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "22",
                "name": "GPLv2(GNU General Public License version 2)",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 22
        }, {
            "id": "23",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "23",
                "name": "张明",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "首席架构师"
            },
            "key": 23
        }, {
            "id": "24",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "24",
                "name": "樊孝文",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 24
        }, {
            "id": "25",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "25",
                "name": "谢阳",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 25
        }, {
            "id": "26",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "26",
                "name": "胡伟",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 26
        }, {
            "id": "27",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "27",
                "name": "杨峰",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 27
        }, {
            "id": "28",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "28",
                "name": "陈龙",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 28
        }, {
            "id": "29",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "29",
                "name": "邓明",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 29
        }, {
            "id": "30",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "30",
                "name": "王鹏",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 30
        }, {
            "id": "31",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "31",
                "name": "张弛",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 31
        }, {
            "id": "32",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "32",
                "name": "李瑞",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 32
        }, {
            "id": "33",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "33",
                "name": "刘英",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 33
        }, {
            "id": "34",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "34",
                "name": "腾讯",
                "type": "company",
                "country": null,
                "url": "https://www.tencent.com/",
                "businessStatus": null
            },
            "key": 34
        }, {
            "id": "35",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "35",
                "name": "马化腾",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "董事会主席、首席执行官"
            },
            "key": 35
        }, {
            "id": "36",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "36",
                "name": "刘炽平",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "高级副总裁"
            },
            "key": 36
        }, {
            "id": "37",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "37",
                "name": "张志东",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "高级副总裁"
            },
            "key": 37
        }, {
            "id": "38",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "38",
                "name": "彭蕾",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "首席人力资源官"
            },
            "key": 38
        }, {
            "id": "39",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "39",
                "name": "陈元丰",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "首席战略官"
            },
            "key": 39
        }, {
            "id": "40",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "40",
                "name": "TencentOS Server 2.4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 40
        }, {
            "id": "41",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "41",
                "name": "GPLv2(GNU General Public License version 2)",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 41
        }, {
            "id": "42",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "42",
                "name": "张明",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "首席架构师"
            },
            "key": 42
        }, {
            "id": "43",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "43",
                "name": "樊孝文",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 43
        }, {
            "id": "44",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "44",
                "name": "谢阳",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 44
        }, {
            "id": "45",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "45",
                "name": "胡伟",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "技术专家"
            },
            "key": 45
        }, {
            "id": "46",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "46",
                "name": "杨峰",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 46
        }, {
            "id": "47",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "47",
                "name": "陈龙",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 47
        }, {
            "id": "48",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "48",
                "name": "邓明",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 48
        }, {
            "id": "49",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "49",
                "name": "王鹏",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 49
        }, {
            "id": "50",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "50",
                "name": "张弛",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 50
        }, {
            "id": "51",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "51",
                "name": "李瑞",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 51
        }, {
            "id": "52",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "52",
                "name": "刘英",
                "type": "developer",
                "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
                "country": "中国",
                "position": "开发工程师"
            },
            "key": 52
        }, {
            "id": "53",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "53",
                "name": "腾讯",
                "type": "company",
                "country": null,
                "url": "https://www.tencent.com/",
                "businessStatus": null
            },
            "key": 53
        }, {
            "id": "54",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "54",
                "name": "马化腾",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "董事会主席、首席执行官"
            },
            "key": 54
        }, {
            "id": "55",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "55",
                "name": "刘炽平",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "高级副总裁"
            },
            "key": 55
        }, {
            "id": "56",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "56",
                "name": "张志东",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "高级副总裁"
            },
            "key": 56
        }, {
            "id": "57",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "57",
                "name": "彭蕾",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "首席人力资源官"
            },
            "key": 57
        }, {
            "id": "58",
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "58",
                "name": "陈元丰",
                "type": "executive",
                "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
                "country": "中国",
                "position": "首席战略官"
            },
            "key": 58
        }, {
            "id": "59",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "59",
                "name": "OpenCloudOS Server 8",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 59
        }, {
            "id": "60",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "60",
                "name": "Apache License 2.0",
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 60
        }, {
            "id": "61",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "61",
                "name": "Selva Kumar",
                "type": "developer",
                "url": "https://www.linkedin.com/in/selvakumar/",
                "country": "印度",
                "position": "创始人"
            },
            "key": 61
        }, {
            "id": "62",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "62",
                "name": "Hani Morsi",
                "type": "developer",
                "url": "https://www.linkedin.com/in/hanimorsi/",
                "country": "埃及",
                "position": "架构师"
            },
            "key": 62
        }, {
            "id": "63",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "63",
                "name": "Shanti Subramanyam",
                "type": "developer",
                "url": "https://www.linkedin.com/in/shantisubramanyam/",
                "country": "印度",
                "position": "开发人员"
            },
            "key": 63
        }, {
            "id": "64",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "64",
                "name": "Mohammad Nour El-Din",
                "type": "developer",
                "url": "https://www.linkedin.com/in/mohammad-nour-el-din-466b054/",
                "country": "埃及",
                "position": "开发人员"
            },
            "key": 64
        }, {
            "id": "65",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "65",
                "name": "Jianfeng Ding",
                "type": "developer",
                "url": "https://www.linkedin.com/in/jianfeng-ding-54bba8149/",
                "country": "中国",
                "position": "开发人员"
            },
            "key": 65
        }, {
            "id": "66",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "66",
                "name": "Peng Zhao",
                "type": "developer",
                "url": "https://www.linkedin.com/in/peng-zhao-98204825/",
                "country": "中国",
                "position": "开发人员"
            },
            "key": 66
        }, {
            "id": "67",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "67",
                "name": "CentOS Stream 9",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 67
        }, {
            "id": "68",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "68",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 68
        }, {
            "id": "69",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "69",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://www.linkedin.com/in/kbsingh/",
                "country": "英国",
                "position": "CentOS 项目领导"
            },
            "key": 69
        }, {
            "id": "70",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "70",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://www.linkedin.com/in/brian-stinson-285681b4/",
                "country": "美国",
                "position": "CentOS Stream 产品经理"
            },
            "key": 70
        }, {
            "id": "71",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "71",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://www.linkedin.com/in/johnny-hughes-aa29954/",
                "country": "美国",
                "position": "CentOS 开发者"
            },
            "key": 71
        }, {
            "id": "72",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "72",
                "name": "Fabian Arrotin",
                "type": "developer",
                "url": "https://www.linkedin.com/in/fabianarrotin/",
                "country": "比利时",
                "position": "CentOS 开发者"
            },
            "key": 72
        }, {
            "id": "73",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "73",
                "name": "Haïkel Guémar",
                "type": "developer",
                "url": "https://www.linkedin.com/in/ha%C3%AFkel-gu%C3%A9mar-21711120/",
                "country": "法国",
                "position": "CentOS Stream 开发者"
            },
            "key": 73
        }, {
            "id": "74",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "74",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 74
        }, {
            "id": "75",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "75",
                "name": "CentOS Stream 8",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 75
        }, {
            "id": "76",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "76",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 76
        }, {
            "id": "77",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "77",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://www.linkedin.com/in/kbsingh/",
                "country": "英国",
                "position": "CentOS 项目领导"
            },
            "key": 77
        }, {
            "id": "78",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "78",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://www.linkedin.com/in/brian-stinson-285681b4/",
                "country": "美国",
                "position": "CentOS Stream 产品经理"
            },
            "key": 78
        }, {
            "id": "79",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "79",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://www.linkedin.com/in/johnny-hughes-aa29954/",
                "country": "美国",
                "position": "CentOS 开发者"
            },
            "key": 79
        }, {
            "id": "80",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "80",
                "name": "Fabian Arrotin",
                "type": "developer",
                "url": "https://www.linkedin.com/in/fabianarrotin/",
                "country": "比利时",
                "position": "CentOS 开发者"
            },
            "key": 80
        }, {
            "id": "81",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "81",
                "name": "Haïkel Guémar",
                "type": "developer",
                "url": "https://www.linkedin.com/in/ha%C3%AFkel-gu%C3%A9mar-21711120/",
                "country": "法国",
                "position": "CentOS Stream 开发者"
            },
            "key": 81
        }, {
            "id": "82",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "82",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 82
        }, {
            "id": "83",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "83",
                "name": "CentOS 8.5",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 83
        }, {
            "id": "84",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "84",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 84
        }, {
            "id": "85",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "85",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 85
        }, {
            "id": "86",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "86",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 86
        }, {
            "id": "87",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "87",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 87
        }, {
            "id": "88",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "88",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 88
        }, {
            "id": "89",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "89",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 89
        }, {
            "id": "90",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "90",
                "name": "CentOS 8.4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 90
        }, {
            "id": "91",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "91",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 91
        }, {
            "id": "92",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "92",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 92
        }, {
            "id": "93",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "93",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 93
        }, {
            "id": "94",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "94",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 94
        }, {
            "id": "95",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "95",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 95
        }, {
            "id": "96",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "96",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 96
        }, {
            "id": "97",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "97",
                "name": "CentOS 8.3",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 97
        }, {
            "id": "98",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "98",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 98
        }, {
            "id": "99",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "99",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 99
        }, {
            "id": "100",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "100",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 100
        }, {
            "id": "101",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "101",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 101
        }, {
            "id": "102",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "102",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 102
        }, {
            "id": "103",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "103",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 103
        }, {
            "id": "104",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "104",
                "name": "CentOS 8.2",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 104
        }, {
            "id": "105",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "105",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 105
        }, {
            "id": "106",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "106",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 106
        }, {
            "id": "107",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "107",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 107
        }, {
            "id": "108",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "108",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 108
        }, {
            "id": "109",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "109",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 109
        }, {
            "id": "110",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "110",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 110
        }, {
            "id": "111",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "111",
                "name": "CentOS 8.0",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 111
        }, {
            "id": "112",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "112",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 112
        }, {
            "id": "113",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "113",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 113
        }, {
            "id": "114",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "114",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 114
        }, {
            "id": "115",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "115",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 115
        }, {
            "id": "116",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "116",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 116
        }, {
            "id": "117",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "117",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 117
        }, {
            "id": "118",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "118",
                "name": "CentOS 7.9",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 118
        }, {
            "id": "119",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "119",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 119
        }, {
            "id": "120",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "120",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 120
        }, {
            "id": "121",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "121",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 121
        }, {
            "id": "122",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "122",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 122
        }, {
            "id": "123",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "123",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 123
        }, {
            "id": "124",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "124",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 124
        }, {
            "id": "125",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "125",
                "name": "CentOS 7.8",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 125
        }, {
            "id": "126",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "126",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 126
        }, {
            "id": "127",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "127",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 127
        }, {
            "id": "128",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "128",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 128
        }, {
            "id": "129",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "129",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 129
        }, {
            "id": "130",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "130",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 130
        }, {
            "id": "131",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "131",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 131
        }, {
            "id": "132",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "132",
                "name": "CentOS 7.7",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 132
        }, {
            "id": "133",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "133",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 133
        }, {
            "id": "134",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "134",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 134
        }, {
            "id": "135",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "135",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 135
        }, {
            "id": "136",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "136",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 136
        }, {
            "id": "137",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "137",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 137
        }, {
            "id": "138",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "138",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 138
        }, {
            "id": "139",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "139",
                "name": "CentOS 7.7",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 139
        }, {
            "id": "140",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "140",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 140
        }, {
            "id": "141",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "141",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 141
        }, {
            "id": "142",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "142",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 142
        }, {
            "id": "143",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "143",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 143
        }, {
            "id": "144",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "144",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 144
        }, {
            "id": "145",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "145",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 145
        }, {
            "id": "146",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "146",
                "name": "CentOS 7.6",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 146
        }, {
            "id": "147",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "147",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 147
        }, {
            "id": "148",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "148",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 148
        }, {
            "id": "149",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "149",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 149
        }, {
            "id": "150",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "150",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 150
        }, {
            "id": "151",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "151",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 151
        }, {
            "id": "152",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "152",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 152
        }, {
            "id": "153",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "153",
                "name": "CentOS 7.5",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 153
        }, {
            "id": "154",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "154",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 154
        }, {
            "id": "155",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "155",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 155
        }, {
            "id": "156",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "156",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 156
        }, {
            "id": "157",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "157",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 157
        }, {
            "id": "158",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "158",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 158
        }, {
            "id": "159",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "159",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 159
        }, {
            "id": "160",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "160",
                "name": "CentOS 7.4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 160
        }, {
            "id": "161",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "161",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 161
        }, {
            "id": "162",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "162",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 162
        }, {
            "id": "163",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "163",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 163
        }, {
            "id": "164",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "164",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 164
        }, {
            "id": "165",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "165",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 165
        }, {
            "id": "166",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "166",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 166
        }, {
            "id": "167",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "167",
                "name": "CentOS 7.3",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 167
        }, {
            "id": "168",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "168",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 168
        }, {
            "id": "169",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "169",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 169
        }, {
            "id": "170",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "170",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 170
        }, {
            "id": "171",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "171",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 171
        }, {
            "id": "172",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "172",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 172
        }, {
            "id": "173",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "173",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 173
        }, {
            "id": "174",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "174",
                "name": "CentOS 7.2",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 174
        }, {
            "id": "175",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "175",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 175
        }, {
            "id": "176",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "176",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 176
        }, {
            "id": "177",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "177",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 177
        }, {
            "id": "178",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "178",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 178
        }, {
            "id": "179",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "179",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 179
        }, {
            "id": "180",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "180",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 180
        }, {
            "id": "181",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "181",
                "name": "CentOS 6.10",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 181
        }, {
            "id": "182",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "182",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 182
        }, {
            "id": "183",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "183",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 183
        }, {
            "id": "184",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "184",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 184
        }, {
            "id": "185",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "185",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 185
        }, {
            "id": "186",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "186",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 186
        }, {
            "id": "187",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "187",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 187
        }, {
            "id": "188",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "188",
                "name": "CentOS 6.9",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 188
        }, {
            "id": "189",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "189",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 189
        }, {
            "id": "190",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "190",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 190
        }, {
            "id": "191",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "191",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 191
        }, {
            "id": "192",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "192",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 192
        }, {
            "id": "193",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "193",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 193
        }, {
            "id": "194",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "194",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 194
        }, {
            "id": "195",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "195",
                "name": "CentOS 6.8",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 195
        }, {
            "id": "196",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "196",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 196
        }, {
            "id": "197",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "197",
                "name": "Johnny Hughes",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "项目负责人"
            },
            "key": 197
        }, {
            "id": "198",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "198",
                "name": "Jim Perrin",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "副负责人"
            },
            "key": 198
        }, {
            "id": "199",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "199",
                "name": "Karanbir Singh",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "英国",
                "position": "开发人员"
            },
            "key": 199
        }, {
            "id": "200",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "200",
                "name": "Brian Stinson",
                "type": "developer",
                "url": "https://wiki.centos.org/About/Team",
                "country": "美国",
                "position": "开发人员"
            },
            "key": 200
        }, {
            "id": "201",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "201",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 201
        }, {
            "id": "202",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "202",
                "name": "Windows Server 2016",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 202
        }, {
            "id": "203",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "203",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 203
        }, {
            "id": "204",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "204",
                "name": "Jeffrey Snover",
                "type": "developer",
                "url": null,
                "country": "美国",
                "position": "Microsoft技术院士、Windows Server技术总监"
            },
            "key": 204
        }, {
            "id": "205",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "205",
                "name": "Kamala Subramaniam",
                "type": "developer",
                "url": null,
                "country": "美国",
                "position": "Windows Server高级产品经理"
            },
            "key": 205
        }, {
            "id": "206",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "206",
                "name": "Arpan Shah",
                "type": "developer",
                "url": null,
                "country": "印度",
                "position": "Microsoft Azure和Windows Server高级产品经理"
            },
            "key": 206
        }, {
            "id": "207",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "207",
                "name": "Yi Liao",
                "type": "developer",
                "url": null,
                "country": "中国",
                "position": "Windows Server高级软件工程师"
            },
            "key": 207
        }, {
            "id": "208",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "208",
                "name": "微软",
                "type": "company",
                "country": null,
                "url": "https://www.microsoft.com/zh-cn/",
                "businessStatus": null
            },
            "key": 208
        }, {
            "id": "209",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "209",
                "name": "Windows Server 2012 R2",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 209
        }, {
            "id": "210",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "210",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 210
        }, {
            "id": "211",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "211",
                "name": "微软",
                "type": "company",
                "country": null,
                "url": "https://www.microsoft.com/zh-cn/",
                "businessStatus": null
            },
            "key": 211
        }, {
            "id": "212",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "212",
                "name": "Windows Server 2019",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 212
        }, {
            "id": "213",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "213",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 213
        }, {
            "id": "214",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "214",
                "name": "唐娜·萨卡尔(Donna Sarkar)",
                "type": "developer",
                "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
                "country": "美国",
                "position": "高级技术专家"
            },
            "key": 214
        }, {
            "id": "215",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "215",
                "name": "杰夫·伍尔西(Jeff Woolsey)",
                "type": "developer",
                "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
                "country": "美国",
                "position": "Windows Server 2019负责人"
            },
            "key": 215
        }, {
            "id": "216",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "216",
                "name": "爱德华多·劳伦诺(Eduardo Laureano)",
                "type": "developer",
                "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
                "country": "巴西",
                "position": "Windows Server 2019产品经理"
            },
            "key": 216
        }, {
            "id": "217",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "217",
                "name": "杨安妮(Anne Yang)",
                "type": "developer",
                "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
                "country": "中国",
                "position": "Windows Server 2019开发经理"
            },
            "key": 217
        }, {
            "id": "218",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "218",
                "name": "微软",
                "type": "company",
                "country": null,
                "url": "https://www.microsoft.com/zh-cn/",
                "businessStatus": null
            },
            "key": 218
        }, {
            "id": "219",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "219",
                "name": "Windows Server 2022",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 219
        }, {
            "id": "220",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "220",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 220
        }, {
            "id": "221",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "221",
                "name": "微软",
                "type": "company",
                "country": null,
                "url": "https://www.microsoft.com/zh-cn/",
                "businessStatus": null
            },
            "key": 221
        }, {
            "id": "222",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "222",
                "name": "Ubuntu Server 22.04 LTS",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 222
        }, {
            "id": "223",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "223",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 223
        }, {
            "id": "224",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "224",
                "name": "Ubuntu Foundation",
                "type": "foundation",
                "url": "https://ubuntu.com/foundation"
            },
            "key": 224
        }, {
            "id": "225",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "225",
                "name": "Ubuntu Server 18.04 LTS",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 225
        }, {
            "id": "226",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "226",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 226
        }, {
            "id": "227",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "227",
                "name": "Ubuntu Foundation",
                "type": "foundation",
                "url": "https://ubuntu.com/foundation"
            },
            "key": 227
        }, {
            "id": "228",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "228",
                "name": "Ubuntu Server 16.04 LTS",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 228
        }, {
            "id": "229",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "229",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 229
        }, {
            "id": "230",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "230",
                "name": "Ubuntu Foundation",
                "type": "foundation",
                "url": "https://ubuntu.com/foundation"
            },
            "key": 230
        }, {
            "id": "231",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "231",
                "name": "Ubuntu Server 14.04 LTS",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 231
        }, {
            "id": "232",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "232",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 232
        }, {
            "id": "233",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "233",
                "name": "Ubuntu Foundation",
                "type": "foundation",
                "url": "https://ubuntu.com/foundation"
            },
            "key": 233
        }, {
            "id": "234",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "234",
                "name": "Debian 11.1",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 234
        }, {
            "id": "235",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "235",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 235
        }, {
            "id": "236",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "236",
                "name": "Debian 10.2",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 236
        }, {
            "id": "237",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "237",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 237
        }, {
            "id": "238",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "238",
                "name": "Debian 9.0",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 238
        }, {
            "id": "239",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "239",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 239
        }, {
            "id": "240",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "240",
                "name": "Debian 8.2",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 240
        }, {
            "id": "241",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "241",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 241
        }, {
            "id": "242",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "242",
                "name": "Debian 11.4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 242
        }, {
            "id": "243",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "243",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 243
        }, {
            "id": "244",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "244",
                "name": "Debian 10.12",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 244
        }, {
            "id": "245",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "245",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 245
        }, {
            "id": "246",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "246",
                "name": "Debian 9.13",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 246
        }, {
            "id": "247",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "247",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 247
        }, {
            "id": "248",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "248",
                "name": "Debian 10.11",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 248
        }, {
            "id": "249",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "249",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 249
        }, {
            "id": "250",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "250",
                "name": "Debian 8.11",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 250
        }, {
            "id": "251",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "251",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 251
        }, {
            "id": "252",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "252",
                "name": "Debian 7.4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 252
        }, {
            "id": "253",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "253",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 253
        }, {
            "id": "254",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "254",
                "name": "AlmaLinux 8.5",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 254
        }, {
            "id": "255",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "255",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 255
        }, {
            "id": "256",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "256",
                "name": "CloudLinux",
                "type": "company",
                "country": null,
                "url": "https://www.cloudlinux.com/",
                "businessStatus": null
            },
            "key": 256
        }, {
            "id": "257",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "257",
                "name": "AlmaLinux 8.6",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 257
        }, {
            "id": "258",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "258",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 258
        }, {
            "id": "259",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "259",
                "name": "CloudLinux",
                "type": "company",
                "country": null,
                "url": "https://www.cloudlinux.com/",
                "businessStatus": null
            },
            "key": 259
        }, {
            "id": "260",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "260",
                "name": "AlmaLinux 9.0",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 260
        }, {
            "id": "261",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "261",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-2.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 261
        }, {
            "id": "262",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "262",
                "name": "CloudLinux",
                "type": "company",
                "country": null,
                "url": "https://www.cloudlinux.com/",
                "businessStatus": null
            },
            "key": 262
        }, {
            "id": "263",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "263",
                "name": "CoreOS 1745.5.0",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 263
        }, {
            "id": "264",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "264",
                "name": "GNU General Public License,GPL",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 264
        }, {
            "id": "265",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "265",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 265
        }, {
            "id": "266",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "266",
                "name": "Fedora36",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 266
        }, {
            "id": "267",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "267",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 267
        }, {
            "id": "268",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "268",
                "name": "Michal Cyprian",
                "type": "developer",
                "url": "https://developer.fedoraproject.org/tools/devassistant/about.html",
                "country": "捷克",
                "position": "DevAssistant Maintainer"
            },
            "key": 268
        }, {
            "id": "269",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "269",
                "name": "Tomas Tomecek",
                "type": "developer",
                "url": "https://developer.fedoraproject.org/tools/docker/about.html",
                "country": "捷克",
                "position": "Docker Maintainer"
            },
            "key": 269
        }, {
            "id": "270",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "270",
                "name": "Richard W.M. Jones",
                "type": "developer",
                "url": "https://developer.fedoraproject.org/tools/virt-builder/about.html",
                "country": "英国",
                "position": "Virt-builder Maintainer"
            },
            "key": 270
        }, {
            "id": "271",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "271",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 271
        }, {
            "id": "272",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "272",
                "name": "Fedora37",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 272
        }, {
            "id": "273",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "273",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 273
        }, {
            "id": "274",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "274",
                "name": "Michal Cyprian",
                "type": "developer",
                "url": "https://developer.fedoraproject.org/tools/devassistant/about.html",
                "country": "捷克",
                "position": "DevAssistant Maintainer"
            },
            "key": 274
        }, {
            "id": "275",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "275",
                "name": "Tomas Tomecek",
                "type": "developer",
                "url": "https://developer.fedoraproject.org/tools/docker/about.html",
                "country": "捷克",
                "position": "Docker Maintainer"
            },
            "key": 275
        }, {
            "id": "276",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "276",
                "name": "Richard W.M. Jones",
                "type": "developer",
                "url": "https://developer.fedoraproject.org/tools/virt-builder/about.html",
                "country": "英国",
                "position": "Virt-builder Maintainer"
            },
            "key": 276
        }, {
            "id": "277",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "277",
                "name": "Red Hat",
                "type": "company",
                "country": null,
                "url": "https://www.redhat.com/zh",
                "businessStatus": null
            },
            "key": 277
        }, {
            "id": "278",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "278",
                "name": "FreeBSD 12.3",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 278
        }, {
            "id": "279",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "279",
                "name": "BSD-2-Clause",
                "type": "protocol",
                "url": "https://www.freebsd.org/internal/software-license/",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 279
        }, {
            "id": "280",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "280",
                "name": "FreeBSD基金会",
                "type": "foundation",
                "url": "https://freebsdfoundation.org/"
            },
            "key": 280
        }, {
            "id": "281",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "281",
                "name": "Abdul Kadhir",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
                "country": "India",
                "position": "ports committer"
            },
            "key": 281
        }, {
            "id": "282",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "282",
                "name": "Adam Weinberger",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
                "country": "Canada",
                "position": "ports committer"
            },
            "key": 282
        }, {
            "id": "283",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "283",
                "name": "Adrian Chadd",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
                "country": "Australia",
                "position": "src committer"
            },
            "key": 283
        }, {
            "id": "284",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "284",
                "name": "FreeBSD 12.2",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 284
        }, {
            "id": "285",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "285",
                "name": "BSD-2-Clause",
                "type": "protocol",
                "url": "https://www.freebsd.org/internal/software-license/",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 285
        }, {
            "id": "286",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "286",
                "name": "FreeBSD基金会",
                "type": "foundation",
                "url": "https://freebsdfoundation.org/"
            },
            "key": 286
        }, {
            "id": "287",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "287",
                "name": "Abdul Kadhir",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
                "country": "India",
                "position": "ports committer"
            },
            "key": 287
        }, {
            "id": "288",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "288",
                "name": "Adam Weinberger",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
                "country": "Canada",
                "position": "ports committer"
            },
            "key": 288
        }, {
            "id": "289",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "289",
                "name": "Adrian Chadd",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
                "country": "Australia",
                "position": "src committer"
            },
            "key": 289
        }, {
            "id": "290",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "290",
                "name": "FreeBSD 11.1",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 290
        }, {
            "id": "291",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "291",
                "name": "BSD-2-Clause",
                "type": "protocol",
                "url": "https://www.freebsd.org/internal/software-license/",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 291
        }, {
            "id": "292",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "292",
                "name": "FreeBSD基金会",
                "type": "foundation",
                "url": "https://freebsdfoundation.org/"
            },
            "key": 292
        }, {
            "id": "293",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "293",
                "name": "Abdul Kadhir",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
                "country": "India",
                "position": "ports committer"
            },
            "key": 293
        }, {
            "id": "294",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "294",
                "name": "Adam Weinberger",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
                "country": "Canada",
                "position": "ports committer"
            },
            "key": 294
        }, {
            "id": "295",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "295",
                "name": "Adrian Chadd",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
                "country": "Australia",
                "position": "src committer"
            },
            "key": 295
        }, {
            "id": "296",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "296",
                "name": "FreeBSD 13.0",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 296
        }, {
            "id": "297",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "297",
                "name": "BSD-2-Clause",
                "type": "protocol",
                "url": "https://www.freebsd.org/internal/software-license/",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 297
        }, {
            "id": "298",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "298",
                "name": "FreeBSD基金会",
                "type": "foundation",
                "url": "https://freebsdfoundation.org/"
            },
            "key": 298
        }, {
            "id": "299",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "299",
                "name": "Abdul Kadhir",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
                "country": "India",
                "position": "ports committer"
            },
            "key": 299
        }, {
            "id": "300",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "300",
                "name": "Adam Weinberger",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
                "country": "Canada",
                "position": "ports committer"
            },
            "key": 300
        }, {
            "id": "301",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "301",
                "name": "Adrian Chadd",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
                "country": "Australia",
                "position": "src committer"
            },
            "key": 301
        }, {
            "id": "302",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "302",
                "name": "FreeBSD 13.1",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 302
        }, {
            "id": "303",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "303",
                "name": "BSD-2-Clause",
                "type": "protocol",
                "url": "https://www.freebsd.org/internal/software-license/",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 303
        }, {
            "id": "304",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "304",
                "name": "FreeBSD基金会",
                "type": "foundation",
                "url": "https://freebsdfoundation.org/"
            },
            "key": 304
        }, {
            "id": "305",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "305",
                "name": "Abdul Kadhir",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
                "country": "India",
                "position": "ports committer"
            },
            "key": 305
        }, {
            "id": "306",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "306",
                "name": "Adam Weinberger",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
                "country": "Canada",
                "position": "ports committer"
            },
            "key": 306
        }, {
            "id": "307",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "307",
                "name": "Adrian Chadd",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
                "country": "Australia",
                "position": "src committer"
            },
            "key": 307
        }, {
            "id": "308",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "308",
                "name": "FreeBSD 11.4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 308
        }, {
            "id": "309",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "309",
                "name": "BSD-2-Clause",
                "type": "protocol",
                "url": "https://www.freebsd.org/internal/software-license/",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 309
        }, {
            "id": "310",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "310",
                "name": "FreeBSD基金会",
                "type": "foundation",
                "url": "https://freebsdfoundation.org/"
            },
            "key": 310
        }, {
            "id": "311",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "311",
                "name": "Abdul Kadhir",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
                "country": "India",
                "position": "ports committer"
            },
            "key": 311
        }, {
            "id": "312",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "312",
                "name": "Adam Weinberger",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
                "country": "Canada",
                "position": "ports committer"
            },
            "key": 312
        }, {
            "id": "313",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "313",
                "name": "Adrian Chadd",
                "type": "developer",
                "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
                "country": "Australia",
                "position": "src committer"
            },
            "key": 313
        }, {
            "id": "314",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "314",
                "name": "Rocky Linux8.5",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 314
        }, {
            "id": "315",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "315",
                "name": "3-Clause BSD License",
                "type": "protocol",
                "url": "https://opensource.org/licenses/BSD-3-Clause",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 315
        }, {
            "id": "316",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "316",
                "name": "Rocky Enterprise Software Foundation",
                "type": "foundation",
                "url": "https://www.resf.org/"
            },
            "key": 316
        }, {
            "id": "317",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "317",
                "name": "Gregory Kurtzer",
                "type": "developer",
                "url": "https://rockylinux.org/about/",
                "country": "美国",
                "position": "Rocky Enterprise Software Foundation创始人兼首席执行官"
            },
            "key": 317
        }, {
            "id": "318",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "318",
                "name": "Jordan Pisaniello",
                "type": "developer",
                "url": "https://github.com/rocky-linux/rockylinux.org",
                "country": "加拿大",
                "position": "Rocky Linux网站主要开发者和维护者"
            },
            "key": 318
        }, {
            "id": "319",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "319",
                "name": "Rocky Enterprise Software Foundation",
                "type": "company",
                "country": null,
                "url": "https://rockylinux.org/",
                "businessStatus": null
            },
            "key": 319
        }, {
            "id": "320",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "320",
                "name": "Rocky Linux8.6",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 320
        }, {
            "id": "321",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "321",
                "name": "3-Clause BSD License",
                "type": "protocol",
                "url": "https://opensource.org/licenses/BSD-3-Clause",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 321
        }, {
            "id": "322",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "322",
                "name": "Rocky Enterprise Software Foundation",
                "type": "foundation",
                "url": "https://www.resf.org/"
            },
            "key": 322
        }, {
            "id": "323",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "323",
                "name": "Gregory Kurtzer",
                "type": "developer",
                "url": "https://rockylinux.org/about/",
                "country": "美国",
                "position": "Rocky Enterprise Software Foundation创始人兼首席执行官"
            },
            "key": 323
        }, {
            "id": "324",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "324",
                "name": "Jordan Pisaniello",
                "type": "developer",
                "url": "https://github.com/rocky-linux/rockylinux.org",
                "country": "加拿大",
                "position": "Rocky Linux网站主要开发者和维护者"
            },
            "key": 324
        }, {
            "id": "325",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "325",
                "name": "Rocky Enterprise Software Foundation",
                "type": "company",
                "country": null,
                "url": "https://rockylinux.org/",
                "businessStatus": null
            },
            "key": 325
        }, {
            "id": "326",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "326",
                "name": "Rocky Linux9.0",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 326
        }, {
            "id": "327",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "327",
                "name": "3-Clause BSD License",
                "type": "protocol",
                "url": "https://opensource.org/licenses/BSD-3-Clause",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 327
        }, {
            "id": "328",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "328",
                "name": "Rocky Enterprise Software Foundation",
                "type": "foundation",
                "url": "https://www.resf.org/"
            },
            "key": 328
        }, {
            "id": "329",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "329",
                "name": "Gregory Kurtzer",
                "type": "developer",
                "url": "https://rockylinux.org/about/",
                "country": "美国",
                "position": "Rocky Enterprise Software Foundation创始人兼首席执行官"
            },
            "key": 329
        }, {
            "id": "330",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "330",
                "name": "Jordan Pisaniello",
                "type": "developer",
                "url": "https://github.com/rocky-linux/rockylinux.org",
                "country": "加拿大",
                "position": "Rocky Linux网站主要开发者和维护者"
            },
            "key": 330
        }, {
            "id": "331",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "331",
                "name": "Rocky Enterprise Software Foundation",
                "type": "company",
                "country": null,
                "url": "https://rockylinux.org/",
                "businessStatus": null
            },
            "key": 331
        }, {
            "id": "332",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "332",
                "name": "openSUSE Leap 15.3",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 332
        }, {
            "id": "333",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "333",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 333
        }, {
            "id": "334",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "334",
                "name": "openSUSE",
                "type": "foundation",
                "url": "https://www.opensuse.org/"
            },
            "key": 334
        }, {
            "id": "335",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "335",
                "name": "SUSE",
                "type": "company",
                "country": null,
                "url": "https://www.suse.com/",
                "businessStatus": null
            },
            "key": 335
        }, {
            "id": "336",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "336",
                "name": "openSUSE Leap 15.4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 336
        }, {
            "id": "337",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "337",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 337
        }, {
            "id": "338",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "338",
                "name": "openSUSE",
                "type": "foundation",
                "url": "https://www.opensuse.org/"
            },
            "key": 338
        }, {
            "id": "339",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "339",
                "name": "SUSE",
                "type": "company",
                "country": null,
                "url": "https://www.suse.com/",
                "businessStatus": null
            },
            "key": 339
        }, {
            "id": "340",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "340",
                "name": "openSUSE Leap 15.2",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 340
        }, {
            "id": "341",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "341",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 341
        }, {
            "id": "342",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "342",
                "name": "openSUSE",
                "type": "foundation",
                "url": "https://www.opensuse.org/"
            },
            "key": 342
        }, {
            "id": "343",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "343",
                "name": "SUSE",
                "type": "company",
                "country": null,
                "url": "https://www.suse.com/",
                "businessStatus": null
            },
            "key": 343
        }, {
            "id": "344",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "344",
                "name": "openSUSE Leap 15.1",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 344
        }, {
            "id": "345",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "345",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 345
        }, {
            "id": "346",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "346",
                "name": "openSUSE",
                "type": "foundation",
                "url": "https://www.opensuse.org/"
            },
            "key": 346
        }, {
            "id": "347",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "347",
                "name": "SUSE",
                "type": "company",
                "country": null,
                "url": "https://www.suse.com/",
                "businessStatus": null
            },
            "key": 347
        }, {
            "id": "348",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "348",
                "name": "openSUSE 42.3",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 348
        }, {
            "id": "349",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "349",
                "name": "GNU General Public License v2.0",
                "type": "protocol",
                "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 349
        }, {
            "id": "350",
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "350",
                "name": "openSUSE",
                "type": "foundation",
                "url": "https://www.opensuse.org/"
            },
            "key": 350
        }, {
            "id": "351",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "351",
                "name": "Richard Brown",
                "type": "developer",
                "url": "https://en.opensuse.org/User:RBrown",
                "country": "英国",
                "position": "openSUSE项目主席"
            },
            "key": 351
        }, {
            "id": "352",
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "352",
                "name": "Ludwig Nussel",
                "type": "developer",
                "url": "https://en.opensuse.org/User:Lnussel",
                "country": "德国",
                "position": "openSUSE Leap发行经理"
            },
            "key": 352
        }, {
            "id": "353",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "353",
                "name": "SUSE",
                "type": "company",
                "country": null,
                "url": "https://www.suse.com/",
                "businessStatus": null
            },
            "key": 353
        }, {
            "id": "354",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "354",
                "name": "Intel Ice Lake(2.7GHz/3.3GHz)",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 354
        }, {
            "id": "355",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "355",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 355
        }, {
            "id": "356",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "356",
                "name": "Intel",
                "type": "company",
                "country": null,
                "url": "https://www.intel.cn/",
                "businessStatus": null
            },
            "key": 356
        }, {
            "id": "357",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "357",
                "name": "Intel Xeon Cascade Lake 8255C(2.5GHz/3.1GHz)",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 357
        }, {
            "id": "358",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "358",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 358
        }, {
            "id": "359",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "359",
                "name": "Intel",
                "type": "company",
                "country": null,
                "url": "https://www.intel.cn/",
                "businessStatus": null
            },
            "key": 359
        }, {
            "id": "360",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "360",
                "name": "Intel Xeon Skylake 6148(2.4GHz)",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 360
        }, {
            "id": "361",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "361",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 361
        }, {
            "id": "362",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "362",
                "name": "Intel",
                "type": "company",
                "country": null,
                "url": "https://www.intel.cn/",
                "businessStatus": null
            },
            "key": 362
        }, {
            "id": "363",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "363",
                "name": "AMD EPYC Milan(2.55GHz/3.5GHz)",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 363
        }, {
            "id": "364",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "364",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 364
        }, {
            "id": "365",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "365",
                "name": "AMD",
                "type": "company",
                "country": null,
                "url": "https://www.amd.com/zh-hans/home3",
                "businessStatus": null
            },
            "key": 365
        }, {
            "id": "366",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "366",
                "name": "NVIDIA T4",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 366
        }, {
            "id": "367",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "367",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 367
        }, {
            "id": "368",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "368",
                "name": "NVIDIA",
                "type": "company",
                "country": null,
                "url": "https://www.nvidia.cn/",
                "businessStatus": null
            },
            "key": 368
        }, {
            "id": "369",
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "369",
                "name": "NVIDIA V100",
                "type": "dependence",
                "version": null,
                "url": "https://cloud.tencent.com/product/cvm",
                "desc": null
            },
            "key": 369
        }, {
            "id": "370",
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "370",
                "name": null,
                "type": "protocol",
                "url": null,
                "modify": null,
                "charge": null,
                "spread": null,
                "copy": null
            },
            "key": 370
        }, {
            "id": "371",
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "data": {
                "id": "371",
                "name": "NVIDIA",
                "type": "company",
                "country": null,
                "url": "https://www.nvidia.cn/",
                "businessStatus": null
            },
            "key": 371
        }],
        "edges": [{
            "source": "1",
            "target": "0",
            "edgeType": "production_to_service",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "1",
                "target": "0",
                "edgeType": "production_to_service"
            },
            "key": 0
        }, {
            "source": "2",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "2",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 1
        }, {
            "source": "3",
            "target": "2",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "3",
                "target": "2",
                "edgeType": "protocol_to_dependency"
            },
            "key": 2
        }, {
            "source": "4",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "4",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 3
        }, {
            "source": "5",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "5",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 4
        }, {
            "source": "6",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "6",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 5
        }, {
            "source": "7",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "7",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 6
        }, {
            "source": "8",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "8",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 7
        }, {
            "source": "9",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "9",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 8
        }, {
            "source": "10",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "10",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 9
        }, {
            "source": "11",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "11",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 10
        }, {
            "source": "12",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "12",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 11
        }, {
            "source": "13",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "13",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 12
        }, {
            "source": "14",
            "target": "2",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "14",
                "target": "2",
                "edgeType": "developer_to_dependency"
            },
            "key": 13
        }, {
            "source": "0",
            "target": "15",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "15",
                "edgeType": "service_to_company"
            },
            "key": 14
        }, {
            "source": "16",
            "target": "15",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "16",
                "target": "15",
                "edgeType": "executive_to_company"
            },
            "key": 15
        }, {
            "source": "17",
            "target": "15",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "17",
                "target": "15",
                "edgeType": "executive_to_company"
            },
            "key": 16
        }, {
            "source": "18",
            "target": "15",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "18",
                "target": "15",
                "edgeType": "executive_to_company"
            },
            "key": 17
        }, {
            "source": "19",
            "target": "15",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "19",
                "target": "15",
                "edgeType": "executive_to_company"
            },
            "key": 18
        }, {
            "source": "20",
            "target": "15",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "20",
                "target": "15",
                "edgeType": "executive_to_company"
            },
            "key": 19
        }, {
            "source": "21",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "21",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 20
        }, {
            "source": "22",
            "target": "21",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "22",
                "target": "21",
                "edgeType": "protocol_to_dependency"
            },
            "key": 21
        }, {
            "source": "23",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "23",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 22
        }, {
            "source": "24",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "24",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 23
        }, {
            "source": "25",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "25",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 24
        }, {
            "source": "26",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "26",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 25
        }, {
            "source": "27",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "27",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 26
        }, {
            "source": "28",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "28",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 27
        }, {
            "source": "29",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "29",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 28
        }, {
            "source": "30",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "30",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 29
        }, {
            "source": "31",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "31",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 30
        }, {
            "source": "32",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "32",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 31
        }, {
            "source": "33",
            "target": "21",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "33",
                "target": "21",
                "edgeType": "developer_to_dependency"
            },
            "key": 32
        }, {
            "source": "0",
            "target": "34",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "34",
                "edgeType": "service_to_company"
            },
            "key": 33
        }, {
            "source": "35",
            "target": "34",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "35",
                "target": "34",
                "edgeType": "executive_to_company"
            },
            "key": 34
        }, {
            "source": "36",
            "target": "34",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "36",
                "target": "34",
                "edgeType": "executive_to_company"
            },
            "key": 35
        }, {
            "source": "37",
            "target": "34",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "37",
                "target": "34",
                "edgeType": "executive_to_company"
            },
            "key": 36
        }, {
            "source": "38",
            "target": "34",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "38",
                "target": "34",
                "edgeType": "executive_to_company"
            },
            "key": 37
        }, {
            "source": "39",
            "target": "34",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "39",
                "target": "34",
                "edgeType": "executive_to_company"
            },
            "key": 38
        }, {
            "source": "40",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "40",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 39
        }, {
            "source": "41",
            "target": "40",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "41",
                "target": "40",
                "edgeType": "protocol_to_dependency"
            },
            "key": 40
        }, {
            "source": "42",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "42",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 41
        }, {
            "source": "43",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "43",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 42
        }, {
            "source": "44",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "44",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 43
        }, {
            "source": "45",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "45",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 44
        }, {
            "source": "46",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "46",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 45
        }, {
            "source": "47",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "47",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 46
        }, {
            "source": "48",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "48",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 47
        }, {
            "source": "49",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "49",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 48
        }, {
            "source": "50",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "50",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 49
        }, {
            "source": "51",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "51",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 50
        }, {
            "source": "52",
            "target": "40",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "52",
                "target": "40",
                "edgeType": "developer_to_dependency"
            },
            "key": 51
        }, {
            "source": "0",
            "target": "53",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "53",
                "edgeType": "service_to_company"
            },
            "key": 52
        }, {
            "source": "54",
            "target": "53",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "54",
                "target": "53",
                "edgeType": "executive_to_company"
            },
            "key": 53
        }, {
            "source": "55",
            "target": "53",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "55",
                "target": "53",
                "edgeType": "executive_to_company"
            },
            "key": 54
        }, {
            "source": "56",
            "target": "53",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "56",
                "target": "53",
                "edgeType": "executive_to_company"
            },
            "key": 55
        }, {
            "source": "57",
            "target": "53",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "57",
                "target": "53",
                "edgeType": "executive_to_company"
            },
            "key": 56
        }, {
            "source": "58",
            "target": "53",
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "58",
                "target": "53",
                "edgeType": "executive_to_company"
            },
            "key": 57
        }, {
            "source": "59",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "59",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 58
        }, {
            "source": "60",
            "target": "59",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "60",
                "target": "59",
                "edgeType": "protocol_to_dependency"
            },
            "key": 59
        }, {
            "source": "61",
            "target": "59",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "61",
                "target": "59",
                "edgeType": "developer_to_dependency"
            },
            "key": 60
        }, {
            "source": "62",
            "target": "59",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "62",
                "target": "59",
                "edgeType": "developer_to_dependency"
            },
            "key": 61
        }, {
            "source": "63",
            "target": "59",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "63",
                "target": "59",
                "edgeType": "developer_to_dependency"
            },
            "key": 62
        }, {
            "source": "64",
            "target": "59",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "64",
                "target": "59",
                "edgeType": "developer_to_dependency"
            },
            "key": 63
        }, {
            "source": "65",
            "target": "59",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "65",
                "target": "59",
                "edgeType": "developer_to_dependency"
            },
            "key": 64
        }, {
            "source": "66",
            "target": "59",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "66",
                "target": "59",
                "edgeType": "developer_to_dependency"
            },
            "key": 65
        }, {
            "source": "67",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "67",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 66
        }, {
            "source": "68",
            "target": "67",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "68",
                "target": "67",
                "edgeType": "protocol_to_dependency"
            },
            "key": 67
        }, {
            "source": "69",
            "target": "67",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "69",
                "target": "67",
                "edgeType": "developer_to_dependency"
            },
            "key": 68
        }, {
            "source": "70",
            "target": "67",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "70",
                "target": "67",
                "edgeType": "developer_to_dependency"
            },
            "key": 69
        }, {
            "source": "71",
            "target": "67",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "71",
                "target": "67",
                "edgeType": "developer_to_dependency"
            },
            "key": 70
        }, {
            "source": "72",
            "target": "67",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "72",
                "target": "67",
                "edgeType": "developer_to_dependency"
            },
            "key": 71
        }, {
            "source": "73",
            "target": "67",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "73",
                "target": "67",
                "edgeType": "developer_to_dependency"
            },
            "key": 72
        }, {
            "source": "0",
            "target": "74",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "74",
                "edgeType": "service_to_company"
            },
            "key": 73
        }, {
            "source": "75",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "75",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 74
        }, {
            "source": "76",
            "target": "75",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "76",
                "target": "75",
                "edgeType": "protocol_to_dependency"
            },
            "key": 75
        }, {
            "source": "77",
            "target": "75",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "77",
                "target": "75",
                "edgeType": "developer_to_dependency"
            },
            "key": 76
        }, {
            "source": "78",
            "target": "75",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "78",
                "target": "75",
                "edgeType": "developer_to_dependency"
            },
            "key": 77
        }, {
            "source": "79",
            "target": "75",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "79",
                "target": "75",
                "edgeType": "developer_to_dependency"
            },
            "key": 78
        }, {
            "source": "80",
            "target": "75",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "80",
                "target": "75",
                "edgeType": "developer_to_dependency"
            },
            "key": 79
        }, {
            "source": "81",
            "target": "75",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "81",
                "target": "75",
                "edgeType": "developer_to_dependency"
            },
            "key": 80
        }, {
            "source": "0",
            "target": "82",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "82",
                "edgeType": "service_to_company"
            },
            "key": 81
        }, {
            "source": "83",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "83",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 82
        }, {
            "source": "84",
            "target": "83",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "84",
                "target": "83",
                "edgeType": "protocol_to_dependency"
            },
            "key": 83
        }, {
            "source": "85",
            "target": "83",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "85",
                "target": "83",
                "edgeType": "developer_to_dependency"
            },
            "key": 84
        }, {
            "source": "86",
            "target": "83",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "86",
                "target": "83",
                "edgeType": "developer_to_dependency"
            },
            "key": 85
        }, {
            "source": "87",
            "target": "83",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "87",
                "target": "83",
                "edgeType": "developer_to_dependency"
            },
            "key": 86
        }, {
            "source": "88",
            "target": "83",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "88",
                "target": "83",
                "edgeType": "developer_to_dependency"
            },
            "key": 87
        }, {
            "source": "0",
            "target": "89",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "89",
                "edgeType": "service_to_company"
            },
            "key": 88
        }, {
            "source": "90",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "90",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 89
        }, {
            "source": "91",
            "target": "90",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "91",
                "target": "90",
                "edgeType": "protocol_to_dependency"
            },
            "key": 90
        }, {
            "source": "92",
            "target": "90",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "92",
                "target": "90",
                "edgeType": "developer_to_dependency"
            },
            "key": 91
        }, {
            "source": "93",
            "target": "90",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "93",
                "target": "90",
                "edgeType": "developer_to_dependency"
            },
            "key": 92
        }, {
            "source": "94",
            "target": "90",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "94",
                "target": "90",
                "edgeType": "developer_to_dependency"
            },
            "key": 93
        }, {
            "source": "95",
            "target": "90",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "95",
                "target": "90",
                "edgeType": "developer_to_dependency"
            },
            "key": 94
        }, {
            "source": "0",
            "target": "96",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "96",
                "edgeType": "service_to_company"
            },
            "key": 95
        }, {
            "source": "97",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "97",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 96
        }, {
            "source": "98",
            "target": "97",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "98",
                "target": "97",
                "edgeType": "protocol_to_dependency"
            },
            "key": 97
        }, {
            "source": "99",
            "target": "97",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "99",
                "target": "97",
                "edgeType": "developer_to_dependency"
            },
            "key": 98
        }, {
            "source": "100",
            "target": "97",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "100",
                "target": "97",
                "edgeType": "developer_to_dependency"
            },
            "key": 99
        }, {
            "source": "101",
            "target": "97",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "101",
                "target": "97",
                "edgeType": "developer_to_dependency"
            },
            "key": 100
        }, {
            "source": "102",
            "target": "97",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "102",
                "target": "97",
                "edgeType": "developer_to_dependency"
            },
            "key": 101
        }, {
            "source": "0",
            "target": "103",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "103",
                "edgeType": "service_to_company"
            },
            "key": 102
        }, {
            "source": "104",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "104",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 103
        }, {
            "source": "105",
            "target": "104",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "105",
                "target": "104",
                "edgeType": "protocol_to_dependency"
            },
            "key": 104
        }, {
            "source": "106",
            "target": "104",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "106",
                "target": "104",
                "edgeType": "developer_to_dependency"
            },
            "key": 105
        }, {
            "source": "107",
            "target": "104",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "107",
                "target": "104",
                "edgeType": "developer_to_dependency"
            },
            "key": 106
        }, {
            "source": "108",
            "target": "104",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "108",
                "target": "104",
                "edgeType": "developer_to_dependency"
            },
            "key": 107
        }, {
            "source": "109",
            "target": "104",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "109",
                "target": "104",
                "edgeType": "developer_to_dependency"
            },
            "key": 108
        }, {
            "source": "0",
            "target": "110",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "110",
                "edgeType": "service_to_company"
            },
            "key": 109
        }, {
            "source": "111",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "111",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 110
        }, {
            "source": "112",
            "target": "111",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "112",
                "target": "111",
                "edgeType": "protocol_to_dependency"
            },
            "key": 111
        }, {
            "source": "113",
            "target": "111",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "113",
                "target": "111",
                "edgeType": "developer_to_dependency"
            },
            "key": 112
        }, {
            "source": "114",
            "target": "111",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "114",
                "target": "111",
                "edgeType": "developer_to_dependency"
            },
            "key": 113
        }, {
            "source": "115",
            "target": "111",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "115",
                "target": "111",
                "edgeType": "developer_to_dependency"
            },
            "key": 114
        }, {
            "source": "116",
            "target": "111",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "116",
                "target": "111",
                "edgeType": "developer_to_dependency"
            },
            "key": 115
        }, {
            "source": "0",
            "target": "117",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "117",
                "edgeType": "service_to_company"
            },
            "key": 116
        }, {
            "source": "118",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "118",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 117
        }, {
            "source": "119",
            "target": "118",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "119",
                "target": "118",
                "edgeType": "protocol_to_dependency"
            },
            "key": 118
        }, {
            "source": "120",
            "target": "118",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "120",
                "target": "118",
                "edgeType": "developer_to_dependency"
            },
            "key": 119
        }, {
            "source": "121",
            "target": "118",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "121",
                "target": "118",
                "edgeType": "developer_to_dependency"
            },
            "key": 120
        }, {
            "source": "122",
            "target": "118",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "122",
                "target": "118",
                "edgeType": "developer_to_dependency"
            },
            "key": 121
        }, {
            "source": "123",
            "target": "118",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "123",
                "target": "118",
                "edgeType": "developer_to_dependency"
            },
            "key": 122
        }, {
            "source": "0",
            "target": "124",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "124",
                "edgeType": "service_to_company"
            },
            "key": 123
        }, {
            "source": "125",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "125",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 124
        }, {
            "source": "126",
            "target": "125",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "126",
                "target": "125",
                "edgeType": "protocol_to_dependency"
            },
            "key": 125
        }, {
            "source": "127",
            "target": "125",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "127",
                "target": "125",
                "edgeType": "developer_to_dependency"
            },
            "key": 126
        }, {
            "source": "128",
            "target": "125",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "128",
                "target": "125",
                "edgeType": "developer_to_dependency"
            },
            "key": 127
        }, {
            "source": "129",
            "target": "125",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "129",
                "target": "125",
                "edgeType": "developer_to_dependency"
            },
            "key": 128
        }, {
            "source": "130",
            "target": "125",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "130",
                "target": "125",
                "edgeType": "developer_to_dependency"
            },
            "key": 129
        }, {
            "source": "0",
            "target": "131",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "131",
                "edgeType": "service_to_company"
            },
            "key": 130
        }, {
            "source": "132",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "132",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 131
        }, {
            "source": "133",
            "target": "132",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "133",
                "target": "132",
                "edgeType": "protocol_to_dependency"
            },
            "key": 132
        }, {
            "source": "134",
            "target": "132",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "134",
                "target": "132",
                "edgeType": "developer_to_dependency"
            },
            "key": 133
        }, {
            "source": "135",
            "target": "132",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "135",
                "target": "132",
                "edgeType": "developer_to_dependency"
            },
            "key": 134
        }, {
            "source": "136",
            "target": "132",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "136",
                "target": "132",
                "edgeType": "developer_to_dependency"
            },
            "key": 135
        }, {
            "source": "137",
            "target": "132",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "137",
                "target": "132",
                "edgeType": "developer_to_dependency"
            },
            "key": 136
        }, {
            "source": "0",
            "target": "138",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "138",
                "edgeType": "service_to_company"
            },
            "key": 137
        }, {
            "source": "139",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "139",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 138
        }, {
            "source": "140",
            "target": "139",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "140",
                "target": "139",
                "edgeType": "protocol_to_dependency"
            },
            "key": 139
        }, {
            "source": "141",
            "target": "139",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "141",
                "target": "139",
                "edgeType": "developer_to_dependency"
            },
            "key": 140
        }, {
            "source": "142",
            "target": "139",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "142",
                "target": "139",
                "edgeType": "developer_to_dependency"
            },
            "key": 141
        }, {
            "source": "143",
            "target": "139",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "143",
                "target": "139",
                "edgeType": "developer_to_dependency"
            },
            "key": 142
        }, {
            "source": "144",
            "target": "139",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "144",
                "target": "139",
                "edgeType": "developer_to_dependency"
            },
            "key": 143
        }, {
            "source": "0",
            "target": "145",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "145",
                "edgeType": "service_to_company"
            },
            "key": 144
        }, {
            "source": "146",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "146",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 145
        }, {
            "source": "147",
            "target": "146",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "147",
                "target": "146",
                "edgeType": "protocol_to_dependency"
            },
            "key": 146
        }, {
            "source": "148",
            "target": "146",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "148",
                "target": "146",
                "edgeType": "developer_to_dependency"
            },
            "key": 147
        }, {
            "source": "149",
            "target": "146",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "149",
                "target": "146",
                "edgeType": "developer_to_dependency"
            },
            "key": 148
        }, {
            "source": "150",
            "target": "146",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "150",
                "target": "146",
                "edgeType": "developer_to_dependency"
            },
            "key": 149
        }, {
            "source": "151",
            "target": "146",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "151",
                "target": "146",
                "edgeType": "developer_to_dependency"
            },
            "key": 150
        }, {
            "source": "0",
            "target": "152",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "152",
                "edgeType": "service_to_company"
            },
            "key": 151
        }, {
            "source": "153",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "153",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 152
        }, {
            "source": "154",
            "target": "153",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "154",
                "target": "153",
                "edgeType": "protocol_to_dependency"
            },
            "key": 153
        }, {
            "source": "155",
            "target": "153",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "155",
                "target": "153",
                "edgeType": "developer_to_dependency"
            },
            "key": 154
        }, {
            "source": "156",
            "target": "153",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "156",
                "target": "153",
                "edgeType": "developer_to_dependency"
            },
            "key": 155
        }, {
            "source": "157",
            "target": "153",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "157",
                "target": "153",
                "edgeType": "developer_to_dependency"
            },
            "key": 156
        }, {
            "source": "158",
            "target": "153",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "158",
                "target": "153",
                "edgeType": "developer_to_dependency"
            },
            "key": 157
        }, {
            "source": "0",
            "target": "159",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "159",
                "edgeType": "service_to_company"
            },
            "key": 158
        }, {
            "source": "160",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "160",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 159
        }, {
            "source": "161",
            "target": "160",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "161",
                "target": "160",
                "edgeType": "protocol_to_dependency"
            },
            "key": 160
        }, {
            "source": "162",
            "target": "160",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "162",
                "target": "160",
                "edgeType": "developer_to_dependency"
            },
            "key": 161
        }, {
            "source": "163",
            "target": "160",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "163",
                "target": "160",
                "edgeType": "developer_to_dependency"
            },
            "key": 162
        }, {
            "source": "164",
            "target": "160",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "164",
                "target": "160",
                "edgeType": "developer_to_dependency"
            },
            "key": 163
        }, {
            "source": "165",
            "target": "160",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "165",
                "target": "160",
                "edgeType": "developer_to_dependency"
            },
            "key": 164
        }, {
            "source": "0",
            "target": "166",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "166",
                "edgeType": "service_to_company"
            },
            "key": 165
        }, {
            "source": "167",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "167",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 166
        }, {
            "source": "168",
            "target": "167",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "168",
                "target": "167",
                "edgeType": "protocol_to_dependency"
            },
            "key": 167
        }, {
            "source": "169",
            "target": "167",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "169",
                "target": "167",
                "edgeType": "developer_to_dependency"
            },
            "key": 168
        }, {
            "source": "170",
            "target": "167",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "170",
                "target": "167",
                "edgeType": "developer_to_dependency"
            },
            "key": 169
        }, {
            "source": "171",
            "target": "167",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "171",
                "target": "167",
                "edgeType": "developer_to_dependency"
            },
            "key": 170
        }, {
            "source": "172",
            "target": "167",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "172",
                "target": "167",
                "edgeType": "developer_to_dependency"
            },
            "key": 171
        }, {
            "source": "0",
            "target": "173",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "173",
                "edgeType": "service_to_company"
            },
            "key": 172
        }, {
            "source": "174",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "174",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 173
        }, {
            "source": "175",
            "target": "174",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "175",
                "target": "174",
                "edgeType": "protocol_to_dependency"
            },
            "key": 174
        }, {
            "source": "176",
            "target": "174",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "176",
                "target": "174",
                "edgeType": "developer_to_dependency"
            },
            "key": 175
        }, {
            "source": "177",
            "target": "174",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "177",
                "target": "174",
                "edgeType": "developer_to_dependency"
            },
            "key": 176
        }, {
            "source": "178",
            "target": "174",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "178",
                "target": "174",
                "edgeType": "developer_to_dependency"
            },
            "key": 177
        }, {
            "source": "179",
            "target": "174",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "179",
                "target": "174",
                "edgeType": "developer_to_dependency"
            },
            "key": 178
        }, {
            "source": "0",
            "target": "180",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "180",
                "edgeType": "service_to_company"
            },
            "key": 179
        }, {
            "source": "181",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "181",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 180
        }, {
            "source": "182",
            "target": "181",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "182",
                "target": "181",
                "edgeType": "protocol_to_dependency"
            },
            "key": 181
        }, {
            "source": "183",
            "target": "181",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "183",
                "target": "181",
                "edgeType": "developer_to_dependency"
            },
            "key": 182
        }, {
            "source": "184",
            "target": "181",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "184",
                "target": "181",
                "edgeType": "developer_to_dependency"
            },
            "key": 183
        }, {
            "source": "185",
            "target": "181",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "185",
                "target": "181",
                "edgeType": "developer_to_dependency"
            },
            "key": 184
        }, {
            "source": "186",
            "target": "181",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "186",
                "target": "181",
                "edgeType": "developer_to_dependency"
            },
            "key": 185
        }, {
            "source": "0",
            "target": "187",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "187",
                "edgeType": "service_to_company"
            },
            "key": 186
        }, {
            "source": "188",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "188",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 187
        }, {
            "source": "189",
            "target": "188",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "189",
                "target": "188",
                "edgeType": "protocol_to_dependency"
            },
            "key": 188
        }, {
            "source": "190",
            "target": "188",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "190",
                "target": "188",
                "edgeType": "developer_to_dependency"
            },
            "key": 189
        }, {
            "source": "191",
            "target": "188",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "191",
                "target": "188",
                "edgeType": "developer_to_dependency"
            },
            "key": 190
        }, {
            "source": "192",
            "target": "188",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "192",
                "target": "188",
                "edgeType": "developer_to_dependency"
            },
            "key": 191
        }, {
            "source": "193",
            "target": "188",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "193",
                "target": "188",
                "edgeType": "developer_to_dependency"
            },
            "key": 192
        }, {
            "source": "0",
            "target": "194",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "194",
                "edgeType": "service_to_company"
            },
            "key": 193
        }, {
            "source": "195",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "195",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 194
        }, {
            "source": "196",
            "target": "195",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "196",
                "target": "195",
                "edgeType": "protocol_to_dependency"
            },
            "key": 195
        }, {
            "source": "197",
            "target": "195",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "197",
                "target": "195",
                "edgeType": "developer_to_dependency"
            },
            "key": 196
        }, {
            "source": "198",
            "target": "195",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "198",
                "target": "195",
                "edgeType": "developer_to_dependency"
            },
            "key": 197
        }, {
            "source": "199",
            "target": "195",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "199",
                "target": "195",
                "edgeType": "developer_to_dependency"
            },
            "key": 198
        }, {
            "source": "200",
            "target": "195",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "200",
                "target": "195",
                "edgeType": "developer_to_dependency"
            },
            "key": 199
        }, {
            "source": "0",
            "target": "201",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "201",
                "edgeType": "service_to_company"
            },
            "key": 200
        }, {
            "source": "202",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "202",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 201
        }, {
            "source": "203",
            "target": "202",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "203",
                "target": "202",
                "edgeType": "protocol_to_dependency"
            },
            "key": 202
        }, {
            "source": "204",
            "target": "202",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "204",
                "target": "202",
                "edgeType": "developer_to_dependency"
            },
            "key": 203
        }, {
            "source": "205",
            "target": "202",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "205",
                "target": "202",
                "edgeType": "developer_to_dependency"
            },
            "key": 204
        }, {
            "source": "206",
            "target": "202",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "206",
                "target": "202",
                "edgeType": "developer_to_dependency"
            },
            "key": 205
        }, {
            "source": "207",
            "target": "202",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "207",
                "target": "202",
                "edgeType": "developer_to_dependency"
            },
            "key": 206
        }, {
            "source": "0",
            "target": "208",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "208",
                "edgeType": "service_to_company"
            },
            "key": 207
        }, {
            "source": "209",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "209",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 208
        }, {
            "source": "210",
            "target": "209",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "210",
                "target": "209",
                "edgeType": "protocol_to_dependency"
            },
            "key": 209
        }, {
            "source": "0",
            "target": "211",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "211",
                "edgeType": "service_to_company"
            },
            "key": 210
        }, {
            "source": "212",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "212",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 211
        }, {
            "source": "213",
            "target": "212",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "213",
                "target": "212",
                "edgeType": "protocol_to_dependency"
            },
            "key": 212
        }, {
            "source": "214",
            "target": "212",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "214",
                "target": "212",
                "edgeType": "developer_to_dependency"
            },
            "key": 213
        }, {
            "source": "215",
            "target": "212",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "215",
                "target": "212",
                "edgeType": "developer_to_dependency"
            },
            "key": 214
        }, {
            "source": "216",
            "target": "212",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "216",
                "target": "212",
                "edgeType": "developer_to_dependency"
            },
            "key": 215
        }, {
            "source": "217",
            "target": "212",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "217",
                "target": "212",
                "edgeType": "developer_to_dependency"
            },
            "key": 216
        }, {
            "source": "0",
            "target": "218",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "218",
                "edgeType": "service_to_company"
            },
            "key": 217
        }, {
            "source": "219",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "219",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 218
        }, {
            "source": "220",
            "target": "219",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "220",
                "target": "219",
                "edgeType": "protocol_to_dependency"
            },
            "key": 219
        }, {
            "source": "0",
            "target": "221",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "221",
                "edgeType": "service_to_company"
            },
            "key": 220
        }, {
            "source": "222",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "222",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 221
        }, {
            "source": "223",
            "target": "222",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "223",
                "target": "222",
                "edgeType": "protocol_to_dependency"
            },
            "key": 222
        }, {
            "source": "224",
            "target": "222",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "224",
                "target": "222",
                "edgeType": "foundation_to_dependency"
            },
            "key": 223
        }, {
            "source": "225",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "225",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 224
        }, {
            "source": "226",
            "target": "225",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "226",
                "target": "225",
                "edgeType": "protocol_to_dependency"
            },
            "key": 225
        }, {
            "source": "227",
            "target": "225",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "227",
                "target": "225",
                "edgeType": "foundation_to_dependency"
            },
            "key": 226
        }, {
            "source": "228",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "228",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 227
        }, {
            "source": "229",
            "target": "228",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "229",
                "target": "228",
                "edgeType": "protocol_to_dependency"
            },
            "key": 228
        }, {
            "source": "230",
            "target": "228",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "230",
                "target": "228",
                "edgeType": "foundation_to_dependency"
            },
            "key": 229
        }, {
            "source": "231",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "231",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 230
        }, {
            "source": "232",
            "target": "231",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "232",
                "target": "231",
                "edgeType": "protocol_to_dependency"
            },
            "key": 231
        }, {
            "source": "233",
            "target": "231",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "233",
                "target": "231",
                "edgeType": "foundation_to_dependency"
            },
            "key": 232
        }, {
            "source": "234",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "234",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 233
        }, {
            "source": "235",
            "target": "234",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "235",
                "target": "234",
                "edgeType": "protocol_to_dependency"
            },
            "key": 234
        }, {
            "source": "236",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "236",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 235
        }, {
            "source": "237",
            "target": "236",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "237",
                "target": "236",
                "edgeType": "protocol_to_dependency"
            },
            "key": 236
        }, {
            "source": "238",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "238",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 237
        }, {
            "source": "239",
            "target": "238",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "239",
                "target": "238",
                "edgeType": "protocol_to_dependency"
            },
            "key": 238
        }, {
            "source": "240",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "240",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 239
        }, {
            "source": "241",
            "target": "240",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "241",
                "target": "240",
                "edgeType": "protocol_to_dependency"
            },
            "key": 240
        }, {
            "source": "242",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "242",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 241
        }, {
            "source": "243",
            "target": "242",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "243",
                "target": "242",
                "edgeType": "protocol_to_dependency"
            },
            "key": 242
        }, {
            "source": "244",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "244",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 243
        }, {
            "source": "245",
            "target": "244",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "245",
                "target": "244",
                "edgeType": "protocol_to_dependency"
            },
            "key": 244
        }, {
            "source": "246",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "246",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 245
        }, {
            "source": "247",
            "target": "246",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "247",
                "target": "246",
                "edgeType": "protocol_to_dependency"
            },
            "key": 246
        }, {
            "source": "248",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "248",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 247
        }, {
            "source": "249",
            "target": "248",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "249",
                "target": "248",
                "edgeType": "protocol_to_dependency"
            },
            "key": 248
        }, {
            "source": "250",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "250",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 249
        }, {
            "source": "251",
            "target": "250",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "251",
                "target": "250",
                "edgeType": "protocol_to_dependency"
            },
            "key": 250
        }, {
            "source": "252",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "252",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 251
        }, {
            "source": "253",
            "target": "252",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "253",
                "target": "252",
                "edgeType": "protocol_to_dependency"
            },
            "key": 252
        }, {
            "source": "254",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "254",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 253
        }, {
            "source": "255",
            "target": "254",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "255",
                "target": "254",
                "edgeType": "protocol_to_dependency"
            },
            "key": 254
        }, {
            "source": "0",
            "target": "256",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "256",
                "edgeType": "service_to_company"
            },
            "key": 255
        }, {
            "source": "257",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "257",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 256
        }, {
            "source": "258",
            "target": "257",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "258",
                "target": "257",
                "edgeType": "protocol_to_dependency"
            },
            "key": 257
        }, {
            "source": "0",
            "target": "259",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "259",
                "edgeType": "service_to_company"
            },
            "key": 258
        }, {
            "source": "260",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "260",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 259
        }, {
            "source": "261",
            "target": "260",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "261",
                "target": "260",
                "edgeType": "protocol_to_dependency"
            },
            "key": 260
        }, {
            "source": "0",
            "target": "262",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "262",
                "edgeType": "service_to_company"
            },
            "key": 261
        }, {
            "source": "263",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "263",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 262
        }, {
            "source": "264",
            "target": "263",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "264",
                "target": "263",
                "edgeType": "protocol_to_dependency"
            },
            "key": 263
        }, {
            "source": "0",
            "target": "265",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "265",
                "edgeType": "service_to_company"
            },
            "key": 264
        }, {
            "source": "266",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "266",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 265
        }, {
            "source": "267",
            "target": "266",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "267",
                "target": "266",
                "edgeType": "protocol_to_dependency"
            },
            "key": 266
        }, {
            "source": "268",
            "target": "266",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "268",
                "target": "266",
                "edgeType": "developer_to_dependency"
            },
            "key": 267
        }, {
            "source": "269",
            "target": "266",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "269",
                "target": "266",
                "edgeType": "developer_to_dependency"
            },
            "key": 268
        }, {
            "source": "270",
            "target": "266",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "270",
                "target": "266",
                "edgeType": "developer_to_dependency"
            },
            "key": 269
        }, {
            "source": "0",
            "target": "271",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "271",
                "edgeType": "service_to_company"
            },
            "key": 270
        }, {
            "source": "272",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "272",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 271
        }, {
            "source": "273",
            "target": "272",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "273",
                "target": "272",
                "edgeType": "protocol_to_dependency"
            },
            "key": 272
        }, {
            "source": "274",
            "target": "272",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "274",
                "target": "272",
                "edgeType": "developer_to_dependency"
            },
            "key": 273
        }, {
            "source": "275",
            "target": "272",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "275",
                "target": "272",
                "edgeType": "developer_to_dependency"
            },
            "key": 274
        }, {
            "source": "276",
            "target": "272",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "276",
                "target": "272",
                "edgeType": "developer_to_dependency"
            },
            "key": 275
        }, {
            "source": "0",
            "target": "277",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "277",
                "edgeType": "service_to_company"
            },
            "key": 276
        }, {
            "source": "278",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "278",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 277
        }, {
            "source": "279",
            "target": "278",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "279",
                "target": "278",
                "edgeType": "protocol_to_dependency"
            },
            "key": 278
        }, {
            "source": "280",
            "target": "278",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "280",
                "target": "278",
                "edgeType": "foundation_to_dependency"
            },
            "key": 279
        }, {
            "source": "281",
            "target": "278",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "281",
                "target": "278",
                "edgeType": "developer_to_dependency"
            },
            "key": 280
        }, {
            "source": "282",
            "target": "278",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "282",
                "target": "278",
                "edgeType": "developer_to_dependency"
            },
            "key": 281
        }, {
            "source": "283",
            "target": "278",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "283",
                "target": "278",
                "edgeType": "developer_to_dependency"
            },
            "key": 282
        }, {
            "source": "284",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "284",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 283
        }, {
            "source": "285",
            "target": "284",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "285",
                "target": "284",
                "edgeType": "protocol_to_dependency"
            },
            "key": 284
        }, {
            "source": "286",
            "target": "284",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "286",
                "target": "284",
                "edgeType": "foundation_to_dependency"
            },
            "key": 285
        }, {
            "source": "287",
            "target": "284",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "287",
                "target": "284",
                "edgeType": "developer_to_dependency"
            },
            "key": 286
        }, {
            "source": "288",
            "target": "284",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "288",
                "target": "284",
                "edgeType": "developer_to_dependency"
            },
            "key": 287
        }, {
            "source": "289",
            "target": "284",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "289",
                "target": "284",
                "edgeType": "developer_to_dependency"
            },
            "key": 288
        }, {
            "source": "290",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "290",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 289
        }, {
            "source": "291",
            "target": "290",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "291",
                "target": "290",
                "edgeType": "protocol_to_dependency"
            },
            "key": 290
        }, {
            "source": "292",
            "target": "290",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "292",
                "target": "290",
                "edgeType": "foundation_to_dependency"
            },
            "key": 291
        }, {
            "source": "293",
            "target": "290",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "293",
                "target": "290",
                "edgeType": "developer_to_dependency"
            },
            "key": 292
        }, {
            "source": "294",
            "target": "290",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "294",
                "target": "290",
                "edgeType": "developer_to_dependency"
            },
            "key": 293
        }, {
            "source": "295",
            "target": "290",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "295",
                "target": "290",
                "edgeType": "developer_to_dependency"
            },
            "key": 294
        }, {
            "source": "296",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "296",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 295
        }, {
            "source": "297",
            "target": "296",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "297",
                "target": "296",
                "edgeType": "protocol_to_dependency"
            },
            "key": 296
        }, {
            "source": "298",
            "target": "296",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "298",
                "target": "296",
                "edgeType": "foundation_to_dependency"
            },
            "key": 297
        }, {
            "source": "299",
            "target": "296",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "299",
                "target": "296",
                "edgeType": "developer_to_dependency"
            },
            "key": 298
        }, {
            "source": "300",
            "target": "296",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "300",
                "target": "296",
                "edgeType": "developer_to_dependency"
            },
            "key": 299
        }, {
            "source": "301",
            "target": "296",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "301",
                "target": "296",
                "edgeType": "developer_to_dependency"
            },
            "key": 300
        }, {
            "source": "302",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "302",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 301
        }, {
            "source": "303",
            "target": "302",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "303",
                "target": "302",
                "edgeType": "protocol_to_dependency"
            },
            "key": 302
        }, {
            "source": "304",
            "target": "302",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "304",
                "target": "302",
                "edgeType": "foundation_to_dependency"
            },
            "key": 303
        }, {
            "source": "305",
            "target": "302",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "305",
                "target": "302",
                "edgeType": "developer_to_dependency"
            },
            "key": 304
        }, {
            "source": "306",
            "target": "302",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "306",
                "target": "302",
                "edgeType": "developer_to_dependency"
            },
            "key": 305
        }, {
            "source": "307",
            "target": "302",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "307",
                "target": "302",
                "edgeType": "developer_to_dependency"
            },
            "key": 306
        }, {
            "source": "308",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "308",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 307
        }, {
            "source": "309",
            "target": "308",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "309",
                "target": "308",
                "edgeType": "protocol_to_dependency"
            },
            "key": 308
        }, {
            "source": "310",
            "target": "308",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "310",
                "target": "308",
                "edgeType": "foundation_to_dependency"
            },
            "key": 309
        }, {
            "source": "311",
            "target": "308",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "311",
                "target": "308",
                "edgeType": "developer_to_dependency"
            },
            "key": 310
        }, {
            "source": "312",
            "target": "308",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "312",
                "target": "308",
                "edgeType": "developer_to_dependency"
            },
            "key": 311
        }, {
            "source": "313",
            "target": "308",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "313",
                "target": "308",
                "edgeType": "developer_to_dependency"
            },
            "key": 312
        }, {
            "source": "314",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "314",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 313
        }, {
            "source": "315",
            "target": "314",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "315",
                "target": "314",
                "edgeType": "protocol_to_dependency"
            },
            "key": 314
        }, {
            "source": "316",
            "target": "314",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "316",
                "target": "314",
                "edgeType": "foundation_to_dependency"
            },
            "key": 315
        }, {
            "source": "317",
            "target": "314",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "317",
                "target": "314",
                "edgeType": "developer_to_dependency"
            },
            "key": 316
        }, {
            "source": "318",
            "target": "314",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "318",
                "target": "314",
                "edgeType": "developer_to_dependency"
            },
            "key": 317
        }, {
            "source": "0",
            "target": "319",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "319",
                "edgeType": "service_to_company"
            },
            "key": 318
        }, {
            "source": "320",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "320",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 319
        }, {
            "source": "321",
            "target": "320",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "321",
                "target": "320",
                "edgeType": "protocol_to_dependency"
            },
            "key": 320
        }, {
            "source": "322",
            "target": "320",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "322",
                "target": "320",
                "edgeType": "foundation_to_dependency"
            },
            "key": 321
        }, {
            "source": "323",
            "target": "320",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "323",
                "target": "320",
                "edgeType": "developer_to_dependency"
            },
            "key": 322
        }, {
            "source": "324",
            "target": "320",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "324",
                "target": "320",
                "edgeType": "developer_to_dependency"
            },
            "key": 323
        }, {
            "source": "0",
            "target": "325",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "325",
                "edgeType": "service_to_company"
            },
            "key": 324
        }, {
            "source": "326",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "326",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 325
        }, {
            "source": "327",
            "target": "326",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "327",
                "target": "326",
                "edgeType": "protocol_to_dependency"
            },
            "key": 326
        }, {
            "source": "328",
            "target": "326",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "328",
                "target": "326",
                "edgeType": "foundation_to_dependency"
            },
            "key": 327
        }, {
            "source": "329",
            "target": "326",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "329",
                "target": "326",
                "edgeType": "developer_to_dependency"
            },
            "key": 328
        }, {
            "source": "330",
            "target": "326",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "330",
                "target": "326",
                "edgeType": "developer_to_dependency"
            },
            "key": 329
        }, {
            "source": "0",
            "target": "331",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "331",
                "edgeType": "service_to_company"
            },
            "key": 330
        }, {
            "source": "332",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "332",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 331
        }, {
            "source": "333",
            "target": "332",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "333",
                "target": "332",
                "edgeType": "protocol_to_dependency"
            },
            "key": 332
        }, {
            "source": "334",
            "target": "332",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "334",
                "target": "332",
                "edgeType": "foundation_to_dependency"
            },
            "key": 333
        }, {
            "source": "0",
            "target": "335",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "335",
                "edgeType": "service_to_company"
            },
            "key": 334
        }, {
            "source": "336",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "336",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 335
        }, {
            "source": "337",
            "target": "336",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "337",
                "target": "336",
                "edgeType": "protocol_to_dependency"
            },
            "key": 336
        }, {
            "source": "338",
            "target": "336",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "338",
                "target": "336",
                "edgeType": "foundation_to_dependency"
            },
            "key": 337
        }, {
            "source": "0",
            "target": "339",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "339",
                "edgeType": "service_to_company"
            },
            "key": 338
        }, {
            "source": "340",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "340",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 339
        }, {
            "source": "341",
            "target": "340",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "341",
                "target": "340",
                "edgeType": "protocol_to_dependency"
            },
            "key": 340
        }, {
            "source": "342",
            "target": "340",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "342",
                "target": "340",
                "edgeType": "foundation_to_dependency"
            },
            "key": 341
        }, {
            "source": "0",
            "target": "343",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "343",
                "edgeType": "service_to_company"
            },
            "key": 342
        }, {
            "source": "344",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "344",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 343
        }, {
            "source": "345",
            "target": "344",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "345",
                "target": "344",
                "edgeType": "protocol_to_dependency"
            },
            "key": 344
        }, {
            "source": "346",
            "target": "344",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "346",
                "target": "344",
                "edgeType": "foundation_to_dependency"
            },
            "key": 345
        }, {
            "source": "0",
            "target": "347",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "347",
                "edgeType": "service_to_company"
            },
            "key": 346
        }, {
            "source": "348",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "348",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 347
        }, {
            "source": "349",
            "target": "348",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "349",
                "target": "348",
                "edgeType": "protocol_to_dependency"
            },
            "key": 348
        }, {
            "source": "350",
            "target": "348",
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "350",
                "target": "348",
                "edgeType": "foundation_to_dependency"
            },
            "key": 349
        }, {
            "source": "351",
            "target": "348",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "351",
                "target": "348",
                "edgeType": "developer_to_dependency"
            },
            "key": 350
        }, {
            "source": "352",
            "target": "348",
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "352",
                "target": "348",
                "edgeType": "developer_to_dependency"
            },
            "key": 351
        }, {
            "source": "0",
            "target": "353",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "353",
                "edgeType": "service_to_company"
            },
            "key": 352
        }, {
            "source": "354",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "354",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 353
        }, {
            "source": "355",
            "target": "354",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "355",
                "target": "354",
                "edgeType": "protocol_to_dependency"
            },
            "key": 354
        }, {
            "source": "0",
            "target": "356",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "356",
                "edgeType": "service_to_company"
            },
            "key": 355
        }, {
            "source": "357",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "357",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 356
        }, {
            "source": "358",
            "target": "357",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "358",
                "target": "357",
                "edgeType": "protocol_to_dependency"
            },
            "key": 357
        }, {
            "source": "0",
            "target": "359",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "359",
                "edgeType": "service_to_company"
            },
            "key": 358
        }, {
            "source": "360",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "360",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 359
        }, {
            "source": "361",
            "target": "360",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "361",
                "target": "360",
                "edgeType": "protocol_to_dependency"
            },
            "key": 360
        }, {
            "source": "0",
            "target": "362",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "362",
                "edgeType": "service_to_company"
            },
            "key": 361
        }, {
            "source": "363",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "363",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 362
        }, {
            "source": "364",
            "target": "363",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "364",
                "target": "363",
                "edgeType": "protocol_to_dependency"
            },
            "key": 363
        }, {
            "source": "0",
            "target": "365",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "365",
                "edgeType": "service_to_company"
            },
            "key": 364
        }, {
            "source": "366",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "366",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 365
        }, {
            "source": "367",
            "target": "366",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "367",
                "target": "366",
                "edgeType": "protocol_to_dependency"
            },
            "key": 366
        }, {
            "source": "0",
            "target": "368",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "368",
                "edgeType": "service_to_company"
            },
            "key": 367
        }, {
            "source": "369",
            "target": "1",
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "369",
                "target": "1",
                "edgeType": "dependency_to_production"
            },
            "key": 368
        }, {
            "source": "370",
            "target": "369",
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "370",
                "target": "369",
                "edgeType": "protocol_to_dependency"
            },
            "key": 369
        }, {
            "source": "0",
            "target": "371",
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "data": {
                "source": "0",
                "target": "371",
                "edgeType": "service_to_company"
            },
            "key": 370
        }],
        "combos": []
    },
    "schemaData": {
        "nodes": [{
            "nodeType": "cloudService",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string"
            }
        }, {
            "nodeType": "production",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string"
            }
        }, {
            "nodeType": "dependence",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string",
                "url": "string"
            }
        }, {
            "nodeType": "protocol",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string",
                "url": "string"
            }
        }, {
            "nodeType": "developer",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string",
                "url": "string",
                "country": "string",
                "position": "string"
            }
        }, {
            "nodeType": "company",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string",
                "url": "string"
            }
        }, {
            "nodeType": "executive",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string",
                "url": "string",
                "country": "string",
                "position": "string"
            }
        }, {
            "nodeType": "foundation",
            "nodeTypeKeyFromProperties": "type",
            "properties": {
                "id": "string",
                "name": "string",
                "type": "string",
                "url": "string"
            }
        }],
        "edges": [{
            "edgeType": "production_to_service",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "production",
            "targetNodeType": "cloudService",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "dependency_to_production",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "dependence",
            "targetNodeType": "production",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "protocol_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "protocol",
            "targetNodeType": "dependence",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "developer_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "developer",
            "targetNodeType": "dependence",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "service_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "cloudService",
            "targetNodeType": "company",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "executive_to_company",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "executive",
            "targetNodeType": "company",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "foundation_to_dependency",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "foundation",
            "targetNodeType": "dependence",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }]
    }
};


/** G6VP 站点 本地上传的数据 **/
export const GI_LOCAL_DATA = {
    "nodes": [{
        "id": "0",
        "nodeType": "cloudService",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "0",
            "name": "腾讯云",
            "type": "cloudService"
        },
        "key": 0
    }, {
        "id": "1",
        "nodeType": "production",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "1",
            "name": "云服务器 CVM",
            "type": "production"
        },
        "key": 1
    }, {
        "id": "2",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "2",
            "name": "TencentOS Server 3.1 (TK4)",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 2
    }, {
        "id": "3",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "3",
            "name": "GPLv2(GNU General Public License version 2)",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 3
    }, {
        "id": "4",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "4",
            "name": "张明",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "首席架构师"
        },
        "key": 4
    }, {
        "id": "5",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "5",
            "name": "樊孝文",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 5
    }, {
        "id": "6",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "6",
            "name": "谢阳",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 6
    }, {
        "id": "7",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "7",
            "name": "胡伟",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 7
    }, {
        "id": "8",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "8",
            "name": "杨峰",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 8
    }, {
        "id": "9",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "9",
            "name": "陈龙",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 9
    }, {
        "id": "10",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "10",
            "name": "邓明",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 10
    }, {
        "id": "11",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "11",
            "name": "王鹏",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 11
    }, {
        "id": "12",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "12",
            "name": "张弛",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 12
    }, {
        "id": "13",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "13",
            "name": "李瑞",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 13
    }, {
        "id": "14",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "14",
            "name": "刘英",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 14
    }, {
        "id": "15",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "15",
            "name": "腾讯",
            "type": "company",
            "country": null,
            "url": "https://www.tencent.com/",
            "businessStatus": null
        },
        "key": 15
    }, {
        "id": "16",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "16",
            "name": "马化腾",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "董事会主席、首席执行官"
        },
        "key": 16
    }, {
        "id": "17",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "17",
            "name": "刘炽平",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "高级副总裁"
        },
        "key": 17
    }, {
        "id": "18",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "18",
            "name": "张志东",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "高级副总裁"
        },
        "key": 18
    }, {
        "id": "19",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "19",
            "name": "彭蕾",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "首席人力资源官"
        },
        "key": 19
    }, {
        "id": "20",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "20",
            "name": "陈元丰",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "首席战略官"
        },
        "key": 20
    }, {
        "id": "21",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "21",
            "name": "TencentOS Server 2.4 (TK4)",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 21
    }, {
        "id": "22",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "22",
            "name": "GPLv2(GNU General Public License version 2)",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 22
    }, {
        "id": "23",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "23",
            "name": "张明",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "首席架构师"
        },
        "key": 23
    }, {
        "id": "24",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "24",
            "name": "樊孝文",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 24
    }, {
        "id": "25",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "25",
            "name": "谢阳",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 25
    }, {
        "id": "26",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "26",
            "name": "胡伟",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 26
    }, {
        "id": "27",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "27",
            "name": "杨峰",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 27
    }, {
        "id": "28",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "28",
            "name": "陈龙",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 28
    }, {
        "id": "29",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "29",
            "name": "邓明",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 29
    }, {
        "id": "30",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "30",
            "name": "王鹏",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 30
    }, {
        "id": "31",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "31",
            "name": "张弛",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 31
    }, {
        "id": "32",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "32",
            "name": "李瑞",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 32
    }, {
        "id": "33",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "33",
            "name": "刘英",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 33
    }, {
        "id": "34",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "34",
            "name": "腾讯",
            "type": "company",
            "country": null,
            "url": "https://www.tencent.com/",
            "businessStatus": null
        },
        "key": 34
    }, {
        "id": "35",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "35",
            "name": "马化腾",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "董事会主席、首席执行官"
        },
        "key": 35
    }, {
        "id": "36",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "36",
            "name": "刘炽平",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "高级副总裁"
        },
        "key": 36
    }, {
        "id": "37",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "37",
            "name": "张志东",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "高级副总裁"
        },
        "key": 37
    }, {
        "id": "38",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "38",
            "name": "彭蕾",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "首席人力资源官"
        },
        "key": 38
    }, {
        "id": "39",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "39",
            "name": "陈元丰",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "首席战略官"
        },
        "key": 39
    }, {
        "id": "40",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "40",
            "name": "TencentOS Server 2.4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 40
    }, {
        "id": "41",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "41",
            "name": "GPLv2(GNU General Public License version 2)",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 41
    }, {
        "id": "42",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "42",
            "name": "张明",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "首席架构师"
        },
        "key": 42
    }, {
        "id": "43",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "43",
            "name": "樊孝文",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 43
    }, {
        "id": "44",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "44",
            "name": "谢阳",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 44
    }, {
        "id": "45",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "45",
            "name": "胡伟",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "技术专家"
        },
        "key": 45
    }, {
        "id": "46",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "46",
            "name": "杨峰",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 46
    }, {
        "id": "47",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "47",
            "name": "陈龙",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 47
    }, {
        "id": "48",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "48",
            "name": "邓明",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 48
    }, {
        "id": "49",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "49",
            "name": "王鹏",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 49
    }, {
        "id": "50",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "50",
            "name": "张弛",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 50
    }, {
        "id": "51",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "51",
            "name": "李瑞",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 51
    }, {
        "id": "52",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "52",
            "name": "刘英",
            "type": "developer",
            "url": "https://github.com/Tencent/TencentOS-kernel/blob/master/MAINTAINERS",
            "country": "中国",
            "position": "开发工程师"
        },
        "key": 52
    }, {
        "id": "53",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "53",
            "name": "腾讯",
            "type": "company",
            "country": null,
            "url": "https://www.tencent.com/",
            "businessStatus": null
        },
        "key": 53
    }, {
        "id": "54",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "54",
            "name": "马化腾",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "董事会主席、首席执行官"
        },
        "key": 54
    }, {
        "id": "55",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "55",
            "name": "刘炽平",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "高级副总裁"
        },
        "key": 55
    }, {
        "id": "56",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "56",
            "name": "张志东",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "高级副总裁"
        },
        "key": 56
    }, {
        "id": "57",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "57",
            "name": "彭蕾",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "首席人力资源官"
        },
        "key": 57
    }, {
        "id": "58",
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "58",
            "name": "陈元丰",
            "type": "executive",
            "url": "https://www.tencent.com/zh-cn/about.html#section4-4",
            "country": "中国",
            "position": "首席战略官"
        },
        "key": 58
    }, {
        "id": "59",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "59",
            "name": "OpenCloudOS Server 8",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 59
    }, {
        "id": "60",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "60",
            "name": "Apache License 2.0",
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 60
    }, {
        "id": "61",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "61",
            "name": "Selva Kumar",
            "type": "developer",
            "url": "https://www.linkedin.com/in/selvakumar/",
            "country": "印度",
            "position": "创始人"
        },
        "key": 61
    }, {
        "id": "62",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "62",
            "name": "Hani Morsi",
            "type": "developer",
            "url": "https://www.linkedin.com/in/hanimorsi/",
            "country": "埃及",
            "position": "架构师"
        },
        "key": 62
    }, {
        "id": "63",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "63",
            "name": "Shanti Subramanyam",
            "type": "developer",
            "url": "https://www.linkedin.com/in/shantisubramanyam/",
            "country": "印度",
            "position": "开发人员"
        },
        "key": 63
    }, {
        "id": "64",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "64",
            "name": "Mohammad Nour El-Din",
            "type": "developer",
            "url": "https://www.linkedin.com/in/mohammad-nour-el-din-466b054/",
            "country": "埃及",
            "position": "开发人员"
        },
        "key": 64
    }, {
        "id": "65",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "65",
            "name": "Jianfeng Ding",
            "type": "developer",
            "url": "https://www.linkedin.com/in/jianfeng-ding-54bba8149/",
            "country": "中国",
            "position": "开发人员"
        },
        "key": 65
    }, {
        "id": "66",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "66",
            "name": "Peng Zhao",
            "type": "developer",
            "url": "https://www.linkedin.com/in/peng-zhao-98204825/",
            "country": "中国",
            "position": "开发人员"
        },
        "key": 66
    }, {
        "id": "67",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "67",
            "name": "CentOS Stream 9",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 67
    }, {
        "id": "68",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "68",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 68
    }, {
        "id": "69",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "69",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://www.linkedin.com/in/kbsingh/",
            "country": "英国",
            "position": "CentOS 项目领导"
        },
        "key": 69
    }, {
        "id": "70",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "70",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://www.linkedin.com/in/brian-stinson-285681b4/",
            "country": "美国",
            "position": "CentOS Stream 产品经理"
        },
        "key": 70
    }, {
        "id": "71",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "71",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://www.linkedin.com/in/johnny-hughes-aa29954/",
            "country": "美国",
            "position": "CentOS 开发者"
        },
        "key": 71
    }, {
        "id": "72",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "72",
            "name": "Fabian Arrotin",
            "type": "developer",
            "url": "https://www.linkedin.com/in/fabianarrotin/",
            "country": "比利时",
            "position": "CentOS 开发者"
        },
        "key": 72
    }, {
        "id": "73",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "73",
            "name": "Haïkel Guémar",
            "type": "developer",
            "url": "https://www.linkedin.com/in/ha%C3%AFkel-gu%C3%A9mar-21711120/",
            "country": "法国",
            "position": "CentOS Stream 开发者"
        },
        "key": 73
    }, {
        "id": "74",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "74",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 74
    }, {
        "id": "75",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "75",
            "name": "CentOS Stream 8",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 75
    }, {
        "id": "76",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "76",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 76
    }, {
        "id": "77",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "77",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://www.linkedin.com/in/kbsingh/",
            "country": "英国",
            "position": "CentOS 项目领导"
        },
        "key": 77
    }, {
        "id": "78",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "78",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://www.linkedin.com/in/brian-stinson-285681b4/",
            "country": "美国",
            "position": "CentOS Stream 产品经理"
        },
        "key": 78
    }, {
        "id": "79",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "79",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://www.linkedin.com/in/johnny-hughes-aa29954/",
            "country": "美国",
            "position": "CentOS 开发者"
        },
        "key": 79
    }, {
        "id": "80",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "80",
            "name": "Fabian Arrotin",
            "type": "developer",
            "url": "https://www.linkedin.com/in/fabianarrotin/",
            "country": "比利时",
            "position": "CentOS 开发者"
        },
        "key": 80
    }, {
        "id": "81",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "81",
            "name": "Haïkel Guémar",
            "type": "developer",
            "url": "https://www.linkedin.com/in/ha%C3%AFkel-gu%C3%A9mar-21711120/",
            "country": "法国",
            "position": "CentOS Stream 开发者"
        },
        "key": 81
    }, {
        "id": "82",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "82",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 82
    }, {
        "id": "83",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "83",
            "name": "CentOS 8.5",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 83
    }, {
        "id": "84",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "84",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 84
    }, {
        "id": "85",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "85",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 85
    }, {
        "id": "86",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "86",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 86
    }, {
        "id": "87",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "87",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 87
    }, {
        "id": "88",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "88",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 88
    }, {
        "id": "89",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "89",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 89
    }, {
        "id": "90",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "90",
            "name": "CentOS 8.4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 90
    }, {
        "id": "91",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "91",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 91
    }, {
        "id": "92",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "92",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 92
    }, {
        "id": "93",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "93",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 93
    }, {
        "id": "94",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "94",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 94
    }, {
        "id": "95",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "95",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 95
    }, {
        "id": "96",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "96",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 96
    }, {
        "id": "97",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "97",
            "name": "CentOS 8.3",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 97
    }, {
        "id": "98",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "98",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 98
    }, {
        "id": "99",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "99",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 99
    }, {
        "id": "100",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "100",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 100
    }, {
        "id": "101",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "101",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 101
    }, {
        "id": "102",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "102",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 102
    }, {
        "id": "103",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "103",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 103
    }, {
        "id": "104",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "104",
            "name": "CentOS 8.2",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 104
    }, {
        "id": "105",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "105",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 105
    }, {
        "id": "106",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "106",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 106
    }, {
        "id": "107",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "107",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 107
    }, {
        "id": "108",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "108",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 108
    }, {
        "id": "109",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "109",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 109
    }, {
        "id": "110",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "110",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 110
    }, {
        "id": "111",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "111",
            "name": "CentOS 8.0",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 111
    }, {
        "id": "112",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "112",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 112
    }, {
        "id": "113",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "113",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 113
    }, {
        "id": "114",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "114",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 114
    }, {
        "id": "115",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "115",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 115
    }, {
        "id": "116",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "116",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 116
    }, {
        "id": "117",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "117",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 117
    }, {
        "id": "118",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "118",
            "name": "CentOS 7.9",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 118
    }, {
        "id": "119",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "119",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 119
    }, {
        "id": "120",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "120",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 120
    }, {
        "id": "121",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "121",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 121
    }, {
        "id": "122",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "122",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 122
    }, {
        "id": "123",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "123",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 123
    }, {
        "id": "124",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "124",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 124
    }, {
        "id": "125",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "125",
            "name": "CentOS 7.8",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 125
    }, {
        "id": "126",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "126",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 126
    }, {
        "id": "127",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "127",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 127
    }, {
        "id": "128",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "128",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 128
    }, {
        "id": "129",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "129",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 129
    }, {
        "id": "130",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "130",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 130
    }, {
        "id": "131",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "131",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 131
    }, {
        "id": "132",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "132",
            "name": "CentOS 7.7",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 132
    }, {
        "id": "133",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "133",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 133
    }, {
        "id": "134",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "134",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 134
    }, {
        "id": "135",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "135",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 135
    }, {
        "id": "136",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "136",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 136
    }, {
        "id": "137",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "137",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 137
    }, {
        "id": "138",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "138",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 138
    }, {
        "id": "139",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "139",
            "name": "CentOS 7.7",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 139
    }, {
        "id": "140",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "140",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 140
    }, {
        "id": "141",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "141",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 141
    }, {
        "id": "142",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "142",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 142
    }, {
        "id": "143",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "143",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 143
    }, {
        "id": "144",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "144",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 144
    }, {
        "id": "145",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "145",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 145
    }, {
        "id": "146",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "146",
            "name": "CentOS 7.6",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 146
    }, {
        "id": "147",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "147",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 147
    }, {
        "id": "148",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "148",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 148
    }, {
        "id": "149",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "149",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 149
    }, {
        "id": "150",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "150",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 150
    }, {
        "id": "151",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "151",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 151
    }, {
        "id": "152",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "152",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 152
    }, {
        "id": "153",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "153",
            "name": "CentOS 7.5",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 153
    }, {
        "id": "154",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "154",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 154
    }, {
        "id": "155",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "155",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 155
    }, {
        "id": "156",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "156",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 156
    }, {
        "id": "157",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "157",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 157
    }, {
        "id": "158",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "158",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 158
    }, {
        "id": "159",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "159",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 159
    }, {
        "id": "160",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "160",
            "name": "CentOS 7.4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 160
    }, {
        "id": "161",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "161",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 161
    }, {
        "id": "162",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "162",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 162
    }, {
        "id": "163",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "163",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 163
    }, {
        "id": "164",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "164",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 164
    }, {
        "id": "165",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "165",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 165
    }, {
        "id": "166",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "166",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 166
    }, {
        "id": "167",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "167",
            "name": "CentOS 7.3",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 167
    }, {
        "id": "168",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "168",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 168
    }, {
        "id": "169",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "169",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 169
    }, {
        "id": "170",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "170",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 170
    }, {
        "id": "171",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "171",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 171
    }, {
        "id": "172",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "172",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 172
    }, {
        "id": "173",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "173",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 173
    }, {
        "id": "174",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "174",
            "name": "CentOS 7.2",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 174
    }, {
        "id": "175",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "175",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 175
    }, {
        "id": "176",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "176",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 176
    }, {
        "id": "177",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "177",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 177
    }, {
        "id": "178",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "178",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 178
    }, {
        "id": "179",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "179",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 179
    }, {
        "id": "180",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "180",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 180
    }, {
        "id": "181",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "181",
            "name": "CentOS 6.10",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 181
    }, {
        "id": "182",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "182",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 182
    }, {
        "id": "183",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "183",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 183
    }, {
        "id": "184",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "184",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 184
    }, {
        "id": "185",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "185",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 185
    }, {
        "id": "186",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "186",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 186
    }, {
        "id": "187",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "187",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 187
    }, {
        "id": "188",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "188",
            "name": "CentOS 6.9",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 188
    }, {
        "id": "189",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "189",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 189
    }, {
        "id": "190",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "190",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 190
    }, {
        "id": "191",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "191",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 191
    }, {
        "id": "192",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "192",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 192
    }, {
        "id": "193",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "193",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 193
    }, {
        "id": "194",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "194",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 194
    }, {
        "id": "195",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "195",
            "name": "CentOS 6.8",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 195
    }, {
        "id": "196",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "196",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 196
    }, {
        "id": "197",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "197",
            "name": "Johnny Hughes",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "项目负责人"
        },
        "key": 197
    }, {
        "id": "198",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "198",
            "name": "Jim Perrin",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "副负责人"
        },
        "key": 198
    }, {
        "id": "199",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "199",
            "name": "Karanbir Singh",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "英国",
            "position": "开发人员"
        },
        "key": 199
    }, {
        "id": "200",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "200",
            "name": "Brian Stinson",
            "type": "developer",
            "url": "https://wiki.centos.org/About/Team",
            "country": "美国",
            "position": "开发人员"
        },
        "key": 200
    }, {
        "id": "201",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "201",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 201
    }, {
        "id": "202",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "202",
            "name": "Windows Server 2016",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 202
    }, {
        "id": "203",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "203",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 203
    }, {
        "id": "204",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "204",
            "name": "Jeffrey Snover",
            "type": "developer",
            "url": null,
            "country": "美国",
            "position": "Microsoft技术院士、Windows Server技术总监"
        },
        "key": 204
    }, {
        "id": "205",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "205",
            "name": "Kamala Subramaniam",
            "type": "developer",
            "url": null,
            "country": "美国",
            "position": "Windows Server高级产品经理"
        },
        "key": 205
    }, {
        "id": "206",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "206",
            "name": "Arpan Shah",
            "type": "developer",
            "url": null,
            "country": "印度",
            "position": "Microsoft Azure和Windows Server高级产品经理"
        },
        "key": 206
    }, {
        "id": "207",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "207",
            "name": "Yi Liao",
            "type": "developer",
            "url": null,
            "country": "中国",
            "position": "Windows Server高级软件工程师"
        },
        "key": 207
    }, {
        "id": "208",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "208",
            "name": "微软",
            "type": "company",
            "country": null,
            "url": "https://www.microsoft.com/zh-cn/",
            "businessStatus": null
        },
        "key": 208
    }, {
        "id": "209",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "209",
            "name": "Windows Server 2012 R2",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 209
    }, {
        "id": "210",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "210",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 210
    }, {
        "id": "211",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "211",
            "name": "微软",
            "type": "company",
            "country": null,
            "url": "https://www.microsoft.com/zh-cn/",
            "businessStatus": null
        },
        "key": 211
    }, {
        "id": "212",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "212",
            "name": "Windows Server 2019",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 212
    }, {
        "id": "213",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "213",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 213
    }, {
        "id": "214",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "214",
            "name": "唐娜·萨卡尔(Donna Sarkar)",
            "type": "developer",
            "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
            "country": "美国",
            "position": "高级技术专家"
        },
        "key": 214
    }, {
        "id": "215",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "215",
            "name": "杰夫·伍尔西(Jeff Woolsey)",
            "type": "developer",
            "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
            "country": "美国",
            "position": "Windows Server 2019负责人"
        },
        "key": 215
    }, {
        "id": "216",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "216",
            "name": "爱德华多·劳伦诺(Eduardo Laureano)",
            "type": "developer",
            "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
            "country": "巴西",
            "position": "Windows Server 2019产品经理"
        },
        "key": 216
    }, {
        "id": "217",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "217",
            "name": "杨安妮(Anne Yang)",
            "type": "developer",
            "url": "https://docs.microsoft.com/en-us/windows-server/get-started-19/whats-new-19",
            "country": "中国",
            "position": "Windows Server 2019开发经理"
        },
        "key": 217
    }, {
        "id": "218",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "218",
            "name": "微软",
            "type": "company",
            "country": null,
            "url": "https://www.microsoft.com/zh-cn/",
            "businessStatus": null
        },
        "key": 218
    }, {
        "id": "219",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "219",
            "name": "Windows Server 2022",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 219
    }, {
        "id": "220",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "220",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 220
    }, {
        "id": "221",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "221",
            "name": "微软",
            "type": "company",
            "country": null,
            "url": "https://www.microsoft.com/zh-cn/",
            "businessStatus": null
        },
        "key": 221
    }, {
        "id": "222",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "222",
            "name": "Ubuntu Server 22.04 LTS",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 222
    }, {
        "id": "223",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "223",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 223
    }, {
        "id": "224",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "224",
            "name": "Ubuntu Foundation",
            "type": "foundation",
            "url": "https://ubuntu.com/foundation"
        },
        "key": 224
    }, {
        "id": "225",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "225",
            "name": "Ubuntu Server 18.04 LTS",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 225
    }, {
        "id": "226",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "226",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 226
    }, {
        "id": "227",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "227",
            "name": "Ubuntu Foundation",
            "type": "foundation",
            "url": "https://ubuntu.com/foundation"
        },
        "key": 227
    }, {
        "id": "228",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "228",
            "name": "Ubuntu Server 16.04 LTS",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 228
    }, {
        "id": "229",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "229",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 229
    }, {
        "id": "230",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "230",
            "name": "Ubuntu Foundation",
            "type": "foundation",
            "url": "https://ubuntu.com/foundation"
        },
        "key": 230
    }, {
        "id": "231",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "231",
            "name": "Ubuntu Server 14.04 LTS",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 231
    }, {
        "id": "232",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "232",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 232
    }, {
        "id": "233",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "233",
            "name": "Ubuntu Foundation",
            "type": "foundation",
            "url": "https://ubuntu.com/foundation"
        },
        "key": 233
    }, {
        "id": "234",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "234",
            "name": "Debian 11.1",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 234
    }, {
        "id": "235",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "235",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 235
    }, {
        "id": "236",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "236",
            "name": "Debian 10.2",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 236
    }, {
        "id": "237",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "237",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 237
    }, {
        "id": "238",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "238",
            "name": "Debian 9.0",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 238
    }, {
        "id": "239",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "239",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 239
    }, {
        "id": "240",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "240",
            "name": "Debian 8.2",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 240
    }, {
        "id": "241",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "241",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 241
    }, {
        "id": "242",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "242",
            "name": "Debian 11.4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 242
    }, {
        "id": "243",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "243",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 243
    }, {
        "id": "244",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "244",
            "name": "Debian 10.12",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 244
    }, {
        "id": "245",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "245",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 245
    }, {
        "id": "246",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "246",
            "name": "Debian 9.13",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 246
    }, {
        "id": "247",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "247",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 247
    }, {
        "id": "248",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "248",
            "name": "Debian 10.11",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 248
    }, {
        "id": "249",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "249",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 249
    }, {
        "id": "250",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "250",
            "name": "Debian 8.11",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 250
    }, {
        "id": "251",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "251",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 251
    }, {
        "id": "252",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "252",
            "name": "Debian 7.4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 252
    }, {
        "id": "253",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "253",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 253
    }, {
        "id": "254",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "254",
            "name": "AlmaLinux 8.5",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 254
    }, {
        "id": "255",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "255",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 255
    }, {
        "id": "256",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "256",
            "name": "CloudLinux",
            "type": "company",
            "country": null,
            "url": "https://www.cloudlinux.com/",
            "businessStatus": null
        },
        "key": 256
    }, {
        "id": "257",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "257",
            "name": "AlmaLinux 8.6",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 257
    }, {
        "id": "258",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "258",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 258
    }, {
        "id": "259",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "259",
            "name": "CloudLinux",
            "type": "company",
            "country": null,
            "url": "https://www.cloudlinux.com/",
            "businessStatus": null
        },
        "key": 259
    }, {
        "id": "260",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "260",
            "name": "AlmaLinux 9.0",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 260
    }, {
        "id": "261",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "261",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-2.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 261
    }, {
        "id": "262",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "262",
            "name": "CloudLinux",
            "type": "company",
            "country": null,
            "url": "https://www.cloudlinux.com/",
            "businessStatus": null
        },
        "key": 262
    }, {
        "id": "263",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "263",
            "name": "CoreOS 1745.5.0",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 263
    }, {
        "id": "264",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "264",
            "name": "GNU General Public License,GPL",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/gpl-3.0.en.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 264
    }, {
        "id": "265",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "265",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 265
    }, {
        "id": "266",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "266",
            "name": "Fedora36",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 266
    }, {
        "id": "267",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "267",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 267
    }, {
        "id": "268",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "268",
            "name": "Michal Cyprian",
            "type": "developer",
            "url": "https://developer.fedoraproject.org/tools/devassistant/about.html",
            "country": "捷克",
            "position": "DevAssistant Maintainer"
        },
        "key": 268
    }, {
        "id": "269",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "269",
            "name": "Tomas Tomecek",
            "type": "developer",
            "url": "https://developer.fedoraproject.org/tools/docker/about.html",
            "country": "捷克",
            "position": "Docker Maintainer"
        },
        "key": 269
    }, {
        "id": "270",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "270",
            "name": "Richard W.M. Jones",
            "type": "developer",
            "url": "https://developer.fedoraproject.org/tools/virt-builder/about.html",
            "country": "英国",
            "position": "Virt-builder Maintainer"
        },
        "key": 270
    }, {
        "id": "271",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "271",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 271
    }, {
        "id": "272",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "272",
            "name": "Fedora37",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 272
    }, {
        "id": "273",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "273",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 273
    }, {
        "id": "274",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "274",
            "name": "Michal Cyprian",
            "type": "developer",
            "url": "https://developer.fedoraproject.org/tools/devassistant/about.html",
            "country": "捷克",
            "position": "DevAssistant Maintainer"
        },
        "key": 274
    }, {
        "id": "275",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "275",
            "name": "Tomas Tomecek",
            "type": "developer",
            "url": "https://developer.fedoraproject.org/tools/docker/about.html",
            "country": "捷克",
            "position": "Docker Maintainer"
        },
        "key": 275
    }, {
        "id": "276",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "276",
            "name": "Richard W.M. Jones",
            "type": "developer",
            "url": "https://developer.fedoraproject.org/tools/virt-builder/about.html",
            "country": "英国",
            "position": "Virt-builder Maintainer"
        },
        "key": 276
    }, {
        "id": "277",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "277",
            "name": "Red Hat",
            "type": "company",
            "country": null,
            "url": "https://www.redhat.com/zh",
            "businessStatus": null
        },
        "key": 277
    }, {
        "id": "278",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "278",
            "name": "FreeBSD 12.3",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 278
    }, {
        "id": "279",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "279",
            "name": "BSD-2-Clause",
            "type": "protocol",
            "url": "https://www.freebsd.org/internal/software-license/",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 279
    }, {
        "id": "280",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "280",
            "name": "FreeBSD基金会",
            "type": "foundation",
            "url": "https://freebsdfoundation.org/"
        },
        "key": 280
    }, {
        "id": "281",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "281",
            "name": "Abdul Kadhir",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
            "country": "India",
            "position": "ports committer"
        },
        "key": 281
    }, {
        "id": "282",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "282",
            "name": "Adam Weinberger",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
            "country": "Canada",
            "position": "ports committer"
        },
        "key": 282
    }, {
        "id": "283",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "283",
            "name": "Adrian Chadd",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
            "country": "Australia",
            "position": "src committer"
        },
        "key": 283
    }, {
        "id": "284",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "284",
            "name": "FreeBSD 12.2",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 284
    }, {
        "id": "285",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "285",
            "name": "BSD-2-Clause",
            "type": "protocol",
            "url": "https://www.freebsd.org/internal/software-license/",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 285
    }, {
        "id": "286",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "286",
            "name": "FreeBSD基金会",
            "type": "foundation",
            "url": "https://freebsdfoundation.org/"
        },
        "key": 286
    }, {
        "id": "287",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "287",
            "name": "Abdul Kadhir",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
            "country": "India",
            "position": "ports committer"
        },
        "key": 287
    }, {
        "id": "288",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "288",
            "name": "Adam Weinberger",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
            "country": "Canada",
            "position": "ports committer"
        },
        "key": 288
    }, {
        "id": "289",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "289",
            "name": "Adrian Chadd",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
            "country": "Australia",
            "position": "src committer"
        },
        "key": 289
    }, {
        "id": "290",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "290",
            "name": "FreeBSD 11.1",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 290
    }, {
        "id": "291",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "291",
            "name": "BSD-2-Clause",
            "type": "protocol",
            "url": "https://www.freebsd.org/internal/software-license/",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 291
    }, {
        "id": "292",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "292",
            "name": "FreeBSD基金会",
            "type": "foundation",
            "url": "https://freebsdfoundation.org/"
        },
        "key": 292
    }, {
        "id": "293",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "293",
            "name": "Abdul Kadhir",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
            "country": "India",
            "position": "ports committer"
        },
        "key": 293
    }, {
        "id": "294",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "294",
            "name": "Adam Weinberger",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
            "country": "Canada",
            "position": "ports committer"
        },
        "key": 294
    }, {
        "id": "295",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "295",
            "name": "Adrian Chadd",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
            "country": "Australia",
            "position": "src committer"
        },
        "key": 295
    }, {
        "id": "296",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "296",
            "name": "FreeBSD 13.0",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 296
    }, {
        "id": "297",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "297",
            "name": "BSD-2-Clause",
            "type": "protocol",
            "url": "https://www.freebsd.org/internal/software-license/",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 297
    }, {
        "id": "298",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "298",
            "name": "FreeBSD基金会",
            "type": "foundation",
            "url": "https://freebsdfoundation.org/"
        },
        "key": 298
    }, {
        "id": "299",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "299",
            "name": "Abdul Kadhir",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
            "country": "India",
            "position": "ports committer"
        },
        "key": 299
    }, {
        "id": "300",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "300",
            "name": "Adam Weinberger",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
            "country": "Canada",
            "position": "ports committer"
        },
        "key": 300
    }, {
        "id": "301",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "301",
            "name": "Adrian Chadd",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
            "country": "Australia",
            "position": "src committer"
        },
        "key": 301
    }, {
        "id": "302",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "302",
            "name": "FreeBSD 13.1",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 302
    }, {
        "id": "303",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "303",
            "name": "BSD-2-Clause",
            "type": "protocol",
            "url": "https://www.freebsd.org/internal/software-license/",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 303
    }, {
        "id": "304",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "304",
            "name": "FreeBSD基金会",
            "type": "foundation",
            "url": "https://freebsdfoundation.org/"
        },
        "key": 304
    }, {
        "id": "305",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "305",
            "name": "Abdul Kadhir",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
            "country": "India",
            "position": "ports committer"
        },
        "key": 305
    }, {
        "id": "306",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "306",
            "name": "Adam Weinberger",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
            "country": "Canada",
            "position": "ports committer"
        },
        "key": 306
    }, {
        "id": "307",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "307",
            "name": "Adrian Chadd",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
            "country": "Australia",
            "position": "src committer"
        },
        "key": 307
    }, {
        "id": "308",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "308",
            "name": "FreeBSD 11.4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 308
    }, {
        "id": "309",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "309",
            "name": "BSD-2-Clause",
            "type": "protocol",
            "url": "https://www.freebsd.org/internal/software-license/",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 309
    }, {
        "id": "310",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "310",
            "name": "FreeBSD基金会",
            "type": "foundation",
            "url": "https://freebsdfoundation.org/"
        },
        "key": 310
    }, {
        "id": "311",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "311",
            "name": "Abdul Kadhir",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#kadhir",
            "country": "India",
            "position": "ports committer"
        },
        "key": 311
    }, {
        "id": "312",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "312",
            "name": "Adam Weinberger",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adamw",
            "country": "Canada",
            "position": "ports committer"
        },
        "key": 312
    }, {
        "id": "313",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "313",
            "name": "Adrian Chadd",
            "type": "developer",
            "url": "https://docs.freebsd.org/en/articles/contributors/#adrian",
            "country": "Australia",
            "position": "src committer"
        },
        "key": 313
    }, {
        "id": "314",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "314",
            "name": "Rocky Linux8.5",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 314
    }, {
        "id": "315",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "315",
            "name": "3-Clause BSD License",
            "type": "protocol",
            "url": "https://opensource.org/licenses/BSD-3-Clause",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 315
    }, {
        "id": "316",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "316",
            "name": "Rocky Enterprise Software Foundation",
            "type": "foundation",
            "url": "https://www.resf.org/"
        },
        "key": 316
    }, {
        "id": "317",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "317",
            "name": "Gregory Kurtzer",
            "type": "developer",
            "url": "https://rockylinux.org/about/",
            "country": "美国",
            "position": "Rocky Enterprise Software Foundation创始人兼首席执行官"
        },
        "key": 317
    }, {
        "id": "318",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "318",
            "name": "Jordan Pisaniello",
            "type": "developer",
            "url": "https://github.com/rocky-linux/rockylinux.org",
            "country": "加拿大",
            "position": "Rocky Linux网站主要开发者和维护者"
        },
        "key": 318
    }, {
        "id": "319",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "319",
            "name": "Rocky Enterprise Software Foundation",
            "type": "company",
            "country": null,
            "url": "https://rockylinux.org/",
            "businessStatus": null
        },
        "key": 319
    }, {
        "id": "320",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "320",
            "name": "Rocky Linux8.6",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 320
    }, {
        "id": "321",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "321",
            "name": "3-Clause BSD License",
            "type": "protocol",
            "url": "https://opensource.org/licenses/BSD-3-Clause",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 321
    }, {
        "id": "322",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "322",
            "name": "Rocky Enterprise Software Foundation",
            "type": "foundation",
            "url": "https://www.resf.org/"
        },
        "key": 322
    }, {
        "id": "323",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "323",
            "name": "Gregory Kurtzer",
            "type": "developer",
            "url": "https://rockylinux.org/about/",
            "country": "美国",
            "position": "Rocky Enterprise Software Foundation创始人兼首席执行官"
        },
        "key": 323
    }, {
        "id": "324",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "324",
            "name": "Jordan Pisaniello",
            "type": "developer",
            "url": "https://github.com/rocky-linux/rockylinux.org",
            "country": "加拿大",
            "position": "Rocky Linux网站主要开发者和维护者"
        },
        "key": 324
    }, {
        "id": "325",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "325",
            "name": "Rocky Enterprise Software Foundation",
            "type": "company",
            "country": null,
            "url": "https://rockylinux.org/",
            "businessStatus": null
        },
        "key": 325
    }, {
        "id": "326",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "326",
            "name": "Rocky Linux9.0",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 326
    }, {
        "id": "327",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "327",
            "name": "3-Clause BSD License",
            "type": "protocol",
            "url": "https://opensource.org/licenses/BSD-3-Clause",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 327
    }, {
        "id": "328",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "328",
            "name": "Rocky Enterprise Software Foundation",
            "type": "foundation",
            "url": "https://www.resf.org/"
        },
        "key": 328
    }, {
        "id": "329",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "329",
            "name": "Gregory Kurtzer",
            "type": "developer",
            "url": "https://rockylinux.org/about/",
            "country": "美国",
            "position": "Rocky Enterprise Software Foundation创始人兼首席执行官"
        },
        "key": 329
    }, {
        "id": "330",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "330",
            "name": "Jordan Pisaniello",
            "type": "developer",
            "url": "https://github.com/rocky-linux/rockylinux.org",
            "country": "加拿大",
            "position": "Rocky Linux网站主要开发者和维护者"
        },
        "key": 330
    }, {
        "id": "331",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "331",
            "name": "Rocky Enterprise Software Foundation",
            "type": "company",
            "country": null,
            "url": "https://rockylinux.org/",
            "businessStatus": null
        },
        "key": 331
    }, {
        "id": "332",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "332",
            "name": "openSUSE Leap 15.3",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 332
    }, {
        "id": "333",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "333",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 333
    }, {
        "id": "334",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "334",
            "name": "openSUSE",
            "type": "foundation",
            "url": "https://www.opensuse.org/"
        },
        "key": 334
    }, {
        "id": "335",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "335",
            "name": "SUSE",
            "type": "company",
            "country": null,
            "url": "https://www.suse.com/",
            "businessStatus": null
        },
        "key": 335
    }, {
        "id": "336",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "336",
            "name": "openSUSE Leap 15.4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 336
    }, {
        "id": "337",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "337",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 337
    }, {
        "id": "338",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "338",
            "name": "openSUSE",
            "type": "foundation",
            "url": "https://www.opensuse.org/"
        },
        "key": 338
    }, {
        "id": "339",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "339",
            "name": "SUSE",
            "type": "company",
            "country": null,
            "url": "https://www.suse.com/",
            "businessStatus": null
        },
        "key": 339
    }, {
        "id": "340",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "340",
            "name": "openSUSE Leap 15.2",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 340
    }, {
        "id": "341",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "341",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 341
    }, {
        "id": "342",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "342",
            "name": "openSUSE",
            "type": "foundation",
            "url": "https://www.opensuse.org/"
        },
        "key": 342
    }, {
        "id": "343",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "343",
            "name": "SUSE",
            "type": "company",
            "country": null,
            "url": "https://www.suse.com/",
            "businessStatus": null
        },
        "key": 343
    }, {
        "id": "344",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "344",
            "name": "openSUSE Leap 15.1",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 344
    }, {
        "id": "345",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "345",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 345
    }, {
        "id": "346",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "346",
            "name": "openSUSE",
            "type": "foundation",
            "url": "https://www.opensuse.org/"
        },
        "key": 346
    }, {
        "id": "347",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "347",
            "name": "SUSE",
            "type": "company",
            "country": null,
            "url": "https://www.suse.com/",
            "businessStatus": null
        },
        "key": 347
    }, {
        "id": "348",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "348",
            "name": "openSUSE 42.3",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 348
    }, {
        "id": "349",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "349",
            "name": "GNU General Public License v2.0",
            "type": "protocol",
            "url": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 349
    }, {
        "id": "350",
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "350",
            "name": "openSUSE",
            "type": "foundation",
            "url": "https://www.opensuse.org/"
        },
        "key": 350
    }, {
        "id": "351",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "351",
            "name": "Richard Brown",
            "type": "developer",
            "url": "https://en.opensuse.org/User:RBrown",
            "country": "英国",
            "position": "openSUSE项目主席"
        },
        "key": 351
    }, {
        "id": "352",
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "352",
            "name": "Ludwig Nussel",
            "type": "developer",
            "url": "https://en.opensuse.org/User:Lnussel",
            "country": "德国",
            "position": "openSUSE Leap发行经理"
        },
        "key": 352
    }, {
        "id": "353",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "353",
            "name": "SUSE",
            "type": "company",
            "country": null,
            "url": "https://www.suse.com/",
            "businessStatus": null
        },
        "key": 353
    }, {
        "id": "354",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "354",
            "name": "Intel Ice Lake(2.7GHz/3.3GHz)",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 354
    }, {
        "id": "355",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "355",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 355
    }, {
        "id": "356",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "356",
            "name": "Intel",
            "type": "company",
            "country": null,
            "url": "https://www.intel.cn/",
            "businessStatus": null
        },
        "key": 356
    }, {
        "id": "357",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "357",
            "name": "Intel Xeon Cascade Lake 8255C(2.5GHz/3.1GHz)",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 357
    }, {
        "id": "358",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "358",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 358
    }, {
        "id": "359",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "359",
            "name": "Intel",
            "type": "company",
            "country": null,
            "url": "https://www.intel.cn/",
            "businessStatus": null
        },
        "key": 359
    }, {
        "id": "360",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "360",
            "name": "Intel Xeon Skylake 6148(2.4GHz)",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 360
    }, {
        "id": "361",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "361",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 361
    }, {
        "id": "362",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "362",
            "name": "Intel",
            "type": "company",
            "country": null,
            "url": "https://www.intel.cn/",
            "businessStatus": null
        },
        "key": 362
    }, {
        "id": "363",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "363",
            "name": "AMD EPYC Milan(2.55GHz/3.5GHz)",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 363
    }, {
        "id": "364",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "364",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 364
    }, {
        "id": "365",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "365",
            "name": "AMD",
            "type": "company",
            "country": null,
            "url": "https://www.amd.com/zh-hans/home3",
            "businessStatus": null
        },
        "key": 365
    }, {
        "id": "366",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "366",
            "name": "NVIDIA T4",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 366
    }, {
        "id": "367",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "367",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 367
    }, {
        "id": "368",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "368",
            "name": "NVIDIA",
            "type": "company",
            "country": null,
            "url": "https://www.nvidia.cn/",
            "businessStatus": null
        },
        "key": 368
    }, {
        "id": "369",
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "369",
            "name": "NVIDIA V100",
            "type": "dependence",
            "version": null,
            "url": "https://cloud.tencent.com/product/cvm",
            "desc": null
        },
        "key": 369
    }, {
        "id": "370",
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "370",
            "name": null,
            "type": "protocol",
            "url": null,
            "modify": null,
            "charge": null,
            "spread": null,
            "copy": null
        },
        "key": 370
    }, {
        "id": "371",
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "data": {
            "id": "371",
            "name": "NVIDIA",
            "type": "company",
            "country": null,
            "url": "https://www.nvidia.cn/",
            "businessStatus": null
        },
        "key": 371
    }],
    "edges": [{
        "source": "1",
        "target": "0",
        "edgeType": "production_to_service",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "1",
            "target": "0",
            "edgeType": "production_to_service"
        },
        "key": 0
    }, {
        "source": "2",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "2",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 1
    }, {
        "source": "3",
        "target": "2",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "3",
            "target": "2",
            "edgeType": "protocol_to_dependency"
        },
        "key": 2
    }, {
        "source": "4",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "4",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 3
    }, {
        "source": "5",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "5",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 4
    }, {
        "source": "6",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "6",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 5
    }, {
        "source": "7",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "7",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 6
    }, {
        "source": "8",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "8",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 7
    }, {
        "source": "9",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "9",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 8
    }, {
        "source": "10",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "10",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 9
    }, {
        "source": "11",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "11",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 10
    }, {
        "source": "12",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "12",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 11
    }, {
        "source": "13",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "13",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 12
    }, {
        "source": "14",
        "target": "2",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "14",
            "target": "2",
            "edgeType": "developer_to_dependency"
        },
        "key": 13
    }, {
        "source": "0",
        "target": "15",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "15",
            "edgeType": "service_to_company"
        },
        "key": 14
    }, {
        "source": "16",
        "target": "15",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "16",
            "target": "15",
            "edgeType": "executive_to_company"
        },
        "key": 15
    }, {
        "source": "17",
        "target": "15",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "17",
            "target": "15",
            "edgeType": "executive_to_company"
        },
        "key": 16
    }, {
        "source": "18",
        "target": "15",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "18",
            "target": "15",
            "edgeType": "executive_to_company"
        },
        "key": 17
    }, {
        "source": "19",
        "target": "15",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "19",
            "target": "15",
            "edgeType": "executive_to_company"
        },
        "key": 18
    }, {
        "source": "20",
        "target": "15",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "20",
            "target": "15",
            "edgeType": "executive_to_company"
        },
        "key": 19
    }, {
        "source": "21",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "21",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 20
    }, {
        "source": "22",
        "target": "21",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "22",
            "target": "21",
            "edgeType": "protocol_to_dependency"
        },
        "key": 21
    }, {
        "source": "23",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "23",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 22
    }, {
        "source": "24",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "24",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 23
    }, {
        "source": "25",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "25",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 24
    }, {
        "source": "26",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "26",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 25
    }, {
        "source": "27",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "27",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 26
    }, {
        "source": "28",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "28",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 27
    }, {
        "source": "29",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "29",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 28
    }, {
        "source": "30",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "30",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 29
    }, {
        "source": "31",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "31",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 30
    }, {
        "source": "32",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "32",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 31
    }, {
        "source": "33",
        "target": "21",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "33",
            "target": "21",
            "edgeType": "developer_to_dependency"
        },
        "key": 32
    }, {
        "source": "0",
        "target": "34",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "34",
            "edgeType": "service_to_company"
        },
        "key": 33
    }, {
        "source": "35",
        "target": "34",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "35",
            "target": "34",
            "edgeType": "executive_to_company"
        },
        "key": 34
    }, {
        "source": "36",
        "target": "34",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "36",
            "target": "34",
            "edgeType": "executive_to_company"
        },
        "key": 35
    }, {
        "source": "37",
        "target": "34",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "37",
            "target": "34",
            "edgeType": "executive_to_company"
        },
        "key": 36
    }, {
        "source": "38",
        "target": "34",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "38",
            "target": "34",
            "edgeType": "executive_to_company"
        },
        "key": 37
    }, {
        "source": "39",
        "target": "34",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "39",
            "target": "34",
            "edgeType": "executive_to_company"
        },
        "key": 38
    }, {
        "source": "40",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "40",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 39
    }, {
        "source": "41",
        "target": "40",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "41",
            "target": "40",
            "edgeType": "protocol_to_dependency"
        },
        "key": 40
    }, {
        "source": "42",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "42",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 41
    }, {
        "source": "43",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "43",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 42
    }, {
        "source": "44",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "44",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 43
    }, {
        "source": "45",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "45",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 44
    }, {
        "source": "46",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "46",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 45
    }, {
        "source": "47",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "47",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 46
    }, {
        "source": "48",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "48",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 47
    }, {
        "source": "49",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "49",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 48
    }, {
        "source": "50",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "50",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 49
    }, {
        "source": "51",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "51",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 50
    }, {
        "source": "52",
        "target": "40",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "52",
            "target": "40",
            "edgeType": "developer_to_dependency"
        },
        "key": 51
    }, {
        "source": "0",
        "target": "53",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "53",
            "edgeType": "service_to_company"
        },
        "key": 52
    }, {
        "source": "54",
        "target": "53",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "54",
            "target": "53",
            "edgeType": "executive_to_company"
        },
        "key": 53
    }, {
        "source": "55",
        "target": "53",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "55",
            "target": "53",
            "edgeType": "executive_to_company"
        },
        "key": 54
    }, {
        "source": "56",
        "target": "53",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "56",
            "target": "53",
            "edgeType": "executive_to_company"
        },
        "key": 55
    }, {
        "source": "57",
        "target": "53",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "57",
            "target": "53",
            "edgeType": "executive_to_company"
        },
        "key": 56
    }, {
        "source": "58",
        "target": "53",
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "58",
            "target": "53",
            "edgeType": "executive_to_company"
        },
        "key": 57
    }, {
        "source": "59",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "59",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 58
    }, {
        "source": "60",
        "target": "59",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "60",
            "target": "59",
            "edgeType": "protocol_to_dependency"
        },
        "key": 59
    }, {
        "source": "61",
        "target": "59",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "61",
            "target": "59",
            "edgeType": "developer_to_dependency"
        },
        "key": 60
    }, {
        "source": "62",
        "target": "59",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "62",
            "target": "59",
            "edgeType": "developer_to_dependency"
        },
        "key": 61
    }, {
        "source": "63",
        "target": "59",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "63",
            "target": "59",
            "edgeType": "developer_to_dependency"
        },
        "key": 62
    }, {
        "source": "64",
        "target": "59",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "64",
            "target": "59",
            "edgeType": "developer_to_dependency"
        },
        "key": 63
    }, {
        "source": "65",
        "target": "59",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "65",
            "target": "59",
            "edgeType": "developer_to_dependency"
        },
        "key": 64
    }, {
        "source": "66",
        "target": "59",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "66",
            "target": "59",
            "edgeType": "developer_to_dependency"
        },
        "key": 65
    }, {
        "source": "67",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "67",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 66
    }, {
        "source": "68",
        "target": "67",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "68",
            "target": "67",
            "edgeType": "protocol_to_dependency"
        },
        "key": 67
    }, {
        "source": "69",
        "target": "67",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "69",
            "target": "67",
            "edgeType": "developer_to_dependency"
        },
        "key": 68
    }, {
        "source": "70",
        "target": "67",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "70",
            "target": "67",
            "edgeType": "developer_to_dependency"
        },
        "key": 69
    }, {
        "source": "71",
        "target": "67",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "71",
            "target": "67",
            "edgeType": "developer_to_dependency"
        },
        "key": 70
    }, {
        "source": "72",
        "target": "67",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "72",
            "target": "67",
            "edgeType": "developer_to_dependency"
        },
        "key": 71
    }, {
        "source": "73",
        "target": "67",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "73",
            "target": "67",
            "edgeType": "developer_to_dependency"
        },
        "key": 72
    }, {
        "source": "0",
        "target": "74",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "74",
            "edgeType": "service_to_company"
        },
        "key": 73
    }, {
        "source": "75",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "75",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 74
    }, {
        "source": "76",
        "target": "75",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "76",
            "target": "75",
            "edgeType": "protocol_to_dependency"
        },
        "key": 75
    }, {
        "source": "77",
        "target": "75",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "77",
            "target": "75",
            "edgeType": "developer_to_dependency"
        },
        "key": 76
    }, {
        "source": "78",
        "target": "75",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "78",
            "target": "75",
            "edgeType": "developer_to_dependency"
        },
        "key": 77
    }, {
        "source": "79",
        "target": "75",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "79",
            "target": "75",
            "edgeType": "developer_to_dependency"
        },
        "key": 78
    }, {
        "source": "80",
        "target": "75",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "80",
            "target": "75",
            "edgeType": "developer_to_dependency"
        },
        "key": 79
    }, {
        "source": "81",
        "target": "75",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "81",
            "target": "75",
            "edgeType": "developer_to_dependency"
        },
        "key": 80
    }, {
        "source": "0",
        "target": "82",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "82",
            "edgeType": "service_to_company"
        },
        "key": 81
    }, {
        "source": "83",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "83",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 82
    }, {
        "source": "84",
        "target": "83",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "84",
            "target": "83",
            "edgeType": "protocol_to_dependency"
        },
        "key": 83
    }, {
        "source": "85",
        "target": "83",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "85",
            "target": "83",
            "edgeType": "developer_to_dependency"
        },
        "key": 84
    }, {
        "source": "86",
        "target": "83",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "86",
            "target": "83",
            "edgeType": "developer_to_dependency"
        },
        "key": 85
    }, {
        "source": "87",
        "target": "83",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "87",
            "target": "83",
            "edgeType": "developer_to_dependency"
        },
        "key": 86
    }, {
        "source": "88",
        "target": "83",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "88",
            "target": "83",
            "edgeType": "developer_to_dependency"
        },
        "key": 87
    }, {
        "source": "0",
        "target": "89",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "89",
            "edgeType": "service_to_company"
        },
        "key": 88
    }, {
        "source": "90",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "90",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 89
    }, {
        "source": "91",
        "target": "90",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "91",
            "target": "90",
            "edgeType": "protocol_to_dependency"
        },
        "key": 90
    }, {
        "source": "92",
        "target": "90",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "92",
            "target": "90",
            "edgeType": "developer_to_dependency"
        },
        "key": 91
    }, {
        "source": "93",
        "target": "90",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "93",
            "target": "90",
            "edgeType": "developer_to_dependency"
        },
        "key": 92
    }, {
        "source": "94",
        "target": "90",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "94",
            "target": "90",
            "edgeType": "developer_to_dependency"
        },
        "key": 93
    }, {
        "source": "95",
        "target": "90",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "95",
            "target": "90",
            "edgeType": "developer_to_dependency"
        },
        "key": 94
    }, {
        "source": "0",
        "target": "96",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "96",
            "edgeType": "service_to_company"
        },
        "key": 95
    }, {
        "source": "97",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "97",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 96
    }, {
        "source": "98",
        "target": "97",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "98",
            "target": "97",
            "edgeType": "protocol_to_dependency"
        },
        "key": 97
    }, {
        "source": "99",
        "target": "97",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "99",
            "target": "97",
            "edgeType": "developer_to_dependency"
        },
        "key": 98
    }, {
        "source": "100",
        "target": "97",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "100",
            "target": "97",
            "edgeType": "developer_to_dependency"
        },
        "key": 99
    }, {
        "source": "101",
        "target": "97",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "101",
            "target": "97",
            "edgeType": "developer_to_dependency"
        },
        "key": 100
    }, {
        "source": "102",
        "target": "97",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "102",
            "target": "97",
            "edgeType": "developer_to_dependency"
        },
        "key": 101
    }, {
        "source": "0",
        "target": "103",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "103",
            "edgeType": "service_to_company"
        },
        "key": 102
    }, {
        "source": "104",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "104",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 103
    }, {
        "source": "105",
        "target": "104",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "105",
            "target": "104",
            "edgeType": "protocol_to_dependency"
        },
        "key": 104
    }, {
        "source": "106",
        "target": "104",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "106",
            "target": "104",
            "edgeType": "developer_to_dependency"
        },
        "key": 105
    }, {
        "source": "107",
        "target": "104",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "107",
            "target": "104",
            "edgeType": "developer_to_dependency"
        },
        "key": 106
    }, {
        "source": "108",
        "target": "104",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "108",
            "target": "104",
            "edgeType": "developer_to_dependency"
        },
        "key": 107
    }, {
        "source": "109",
        "target": "104",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "109",
            "target": "104",
            "edgeType": "developer_to_dependency"
        },
        "key": 108
    }, {
        "source": "0",
        "target": "110",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "110",
            "edgeType": "service_to_company"
        },
        "key": 109
    }, {
        "source": "111",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "111",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 110
    }, {
        "source": "112",
        "target": "111",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "112",
            "target": "111",
            "edgeType": "protocol_to_dependency"
        },
        "key": 111
    }, {
        "source": "113",
        "target": "111",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "113",
            "target": "111",
            "edgeType": "developer_to_dependency"
        },
        "key": 112
    }, {
        "source": "114",
        "target": "111",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "114",
            "target": "111",
            "edgeType": "developer_to_dependency"
        },
        "key": 113
    }, {
        "source": "115",
        "target": "111",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "115",
            "target": "111",
            "edgeType": "developer_to_dependency"
        },
        "key": 114
    }, {
        "source": "116",
        "target": "111",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "116",
            "target": "111",
            "edgeType": "developer_to_dependency"
        },
        "key": 115
    }, {
        "source": "0",
        "target": "117",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "117",
            "edgeType": "service_to_company"
        },
        "key": 116
    }, {
        "source": "118",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "118",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 117
    }, {
        "source": "119",
        "target": "118",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "119",
            "target": "118",
            "edgeType": "protocol_to_dependency"
        },
        "key": 118
    }, {
        "source": "120",
        "target": "118",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "120",
            "target": "118",
            "edgeType": "developer_to_dependency"
        },
        "key": 119
    }, {
        "source": "121",
        "target": "118",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "121",
            "target": "118",
            "edgeType": "developer_to_dependency"
        },
        "key": 120
    }, {
        "source": "122",
        "target": "118",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "122",
            "target": "118",
            "edgeType": "developer_to_dependency"
        },
        "key": 121
    }, {
        "source": "123",
        "target": "118",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "123",
            "target": "118",
            "edgeType": "developer_to_dependency"
        },
        "key": 122
    }, {
        "source": "0",
        "target": "124",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "124",
            "edgeType": "service_to_company"
        },
        "key": 123
    }, {
        "source": "125",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "125",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 124
    }, {
        "source": "126",
        "target": "125",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "126",
            "target": "125",
            "edgeType": "protocol_to_dependency"
        },
        "key": 125
    }, {
        "source": "127",
        "target": "125",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "127",
            "target": "125",
            "edgeType": "developer_to_dependency"
        },
        "key": 126
    }, {
        "source": "128",
        "target": "125",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "128",
            "target": "125",
            "edgeType": "developer_to_dependency"
        },
        "key": 127
    }, {
        "source": "129",
        "target": "125",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "129",
            "target": "125",
            "edgeType": "developer_to_dependency"
        },
        "key": 128
    }, {
        "source": "130",
        "target": "125",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "130",
            "target": "125",
            "edgeType": "developer_to_dependency"
        },
        "key": 129
    }, {
        "source": "0",
        "target": "131",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "131",
            "edgeType": "service_to_company"
        },
        "key": 130
    }, {
        "source": "132",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "132",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 131
    }, {
        "source": "133",
        "target": "132",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "133",
            "target": "132",
            "edgeType": "protocol_to_dependency"
        },
        "key": 132
    }, {
        "source": "134",
        "target": "132",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "134",
            "target": "132",
            "edgeType": "developer_to_dependency"
        },
        "key": 133
    }, {
        "source": "135",
        "target": "132",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "135",
            "target": "132",
            "edgeType": "developer_to_dependency"
        },
        "key": 134
    }, {
        "source": "136",
        "target": "132",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "136",
            "target": "132",
            "edgeType": "developer_to_dependency"
        },
        "key": 135
    }, {
        "source": "137",
        "target": "132",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "137",
            "target": "132",
            "edgeType": "developer_to_dependency"
        },
        "key": 136
    }, {
        "source": "0",
        "target": "138",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "138",
            "edgeType": "service_to_company"
        },
        "key": 137
    }, {
        "source": "139",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "139",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 138
    }, {
        "source": "140",
        "target": "139",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "140",
            "target": "139",
            "edgeType": "protocol_to_dependency"
        },
        "key": 139
    }, {
        "source": "141",
        "target": "139",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "141",
            "target": "139",
            "edgeType": "developer_to_dependency"
        },
        "key": 140
    }, {
        "source": "142",
        "target": "139",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "142",
            "target": "139",
            "edgeType": "developer_to_dependency"
        },
        "key": 141
    }, {
        "source": "143",
        "target": "139",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "143",
            "target": "139",
            "edgeType": "developer_to_dependency"
        },
        "key": 142
    }, {
        "source": "144",
        "target": "139",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "144",
            "target": "139",
            "edgeType": "developer_to_dependency"
        },
        "key": 143
    }, {
        "source": "0",
        "target": "145",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "145",
            "edgeType": "service_to_company"
        },
        "key": 144
    }, {
        "source": "146",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "146",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 145
    }, {
        "source": "147",
        "target": "146",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "147",
            "target": "146",
            "edgeType": "protocol_to_dependency"
        },
        "key": 146
    }, {
        "source": "148",
        "target": "146",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "148",
            "target": "146",
            "edgeType": "developer_to_dependency"
        },
        "key": 147
    }, {
        "source": "149",
        "target": "146",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "149",
            "target": "146",
            "edgeType": "developer_to_dependency"
        },
        "key": 148
    }, {
        "source": "150",
        "target": "146",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "150",
            "target": "146",
            "edgeType": "developer_to_dependency"
        },
        "key": 149
    }, {
        "source": "151",
        "target": "146",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "151",
            "target": "146",
            "edgeType": "developer_to_dependency"
        },
        "key": 150
    }, {
        "source": "0",
        "target": "152",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "152",
            "edgeType": "service_to_company"
        },
        "key": 151
    }, {
        "source": "153",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "153",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 152
    }, {
        "source": "154",
        "target": "153",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "154",
            "target": "153",
            "edgeType": "protocol_to_dependency"
        },
        "key": 153
    }, {
        "source": "155",
        "target": "153",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "155",
            "target": "153",
            "edgeType": "developer_to_dependency"
        },
        "key": 154
    }, {
        "source": "156",
        "target": "153",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "156",
            "target": "153",
            "edgeType": "developer_to_dependency"
        },
        "key": 155
    }, {
        "source": "157",
        "target": "153",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "157",
            "target": "153",
            "edgeType": "developer_to_dependency"
        },
        "key": 156
    }, {
        "source": "158",
        "target": "153",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "158",
            "target": "153",
            "edgeType": "developer_to_dependency"
        },
        "key": 157
    }, {
        "source": "0",
        "target": "159",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "159",
            "edgeType": "service_to_company"
        },
        "key": 158
    }, {
        "source": "160",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "160",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 159
    }, {
        "source": "161",
        "target": "160",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "161",
            "target": "160",
            "edgeType": "protocol_to_dependency"
        },
        "key": 160
    }, {
        "source": "162",
        "target": "160",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "162",
            "target": "160",
            "edgeType": "developer_to_dependency"
        },
        "key": 161
    }, {
        "source": "163",
        "target": "160",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "163",
            "target": "160",
            "edgeType": "developer_to_dependency"
        },
        "key": 162
    }, {
        "source": "164",
        "target": "160",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "164",
            "target": "160",
            "edgeType": "developer_to_dependency"
        },
        "key": 163
    }, {
        "source": "165",
        "target": "160",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "165",
            "target": "160",
            "edgeType": "developer_to_dependency"
        },
        "key": 164
    }, {
        "source": "0",
        "target": "166",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "166",
            "edgeType": "service_to_company"
        },
        "key": 165
    }, {
        "source": "167",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "167",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 166
    }, {
        "source": "168",
        "target": "167",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "168",
            "target": "167",
            "edgeType": "protocol_to_dependency"
        },
        "key": 167
    }, {
        "source": "169",
        "target": "167",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "169",
            "target": "167",
            "edgeType": "developer_to_dependency"
        },
        "key": 168
    }, {
        "source": "170",
        "target": "167",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "170",
            "target": "167",
            "edgeType": "developer_to_dependency"
        },
        "key": 169
    }, {
        "source": "171",
        "target": "167",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "171",
            "target": "167",
            "edgeType": "developer_to_dependency"
        },
        "key": 170
    }, {
        "source": "172",
        "target": "167",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "172",
            "target": "167",
            "edgeType": "developer_to_dependency"
        },
        "key": 171
    }, {
        "source": "0",
        "target": "173",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "173",
            "edgeType": "service_to_company"
        },
        "key": 172
    }, {
        "source": "174",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "174",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 173
    }, {
        "source": "175",
        "target": "174",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "175",
            "target": "174",
            "edgeType": "protocol_to_dependency"
        },
        "key": 174
    }, {
        "source": "176",
        "target": "174",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "176",
            "target": "174",
            "edgeType": "developer_to_dependency"
        },
        "key": 175
    }, {
        "source": "177",
        "target": "174",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "177",
            "target": "174",
            "edgeType": "developer_to_dependency"
        },
        "key": 176
    }, {
        "source": "178",
        "target": "174",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "178",
            "target": "174",
            "edgeType": "developer_to_dependency"
        },
        "key": 177
    }, {
        "source": "179",
        "target": "174",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "179",
            "target": "174",
            "edgeType": "developer_to_dependency"
        },
        "key": 178
    }, {
        "source": "0",
        "target": "180",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "180",
            "edgeType": "service_to_company"
        },
        "key": 179
    }, {
        "source": "181",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "181",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 180
    }, {
        "source": "182",
        "target": "181",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "182",
            "target": "181",
            "edgeType": "protocol_to_dependency"
        },
        "key": 181
    }, {
        "source": "183",
        "target": "181",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "183",
            "target": "181",
            "edgeType": "developer_to_dependency"
        },
        "key": 182
    }, {
        "source": "184",
        "target": "181",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "184",
            "target": "181",
            "edgeType": "developer_to_dependency"
        },
        "key": 183
    }, {
        "source": "185",
        "target": "181",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "185",
            "target": "181",
            "edgeType": "developer_to_dependency"
        },
        "key": 184
    }, {
        "source": "186",
        "target": "181",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "186",
            "target": "181",
            "edgeType": "developer_to_dependency"
        },
        "key": 185
    }, {
        "source": "0",
        "target": "187",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "187",
            "edgeType": "service_to_company"
        },
        "key": 186
    }, {
        "source": "188",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "188",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 187
    }, {
        "source": "189",
        "target": "188",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "189",
            "target": "188",
            "edgeType": "protocol_to_dependency"
        },
        "key": 188
    }, {
        "source": "190",
        "target": "188",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "190",
            "target": "188",
            "edgeType": "developer_to_dependency"
        },
        "key": 189
    }, {
        "source": "191",
        "target": "188",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "191",
            "target": "188",
            "edgeType": "developer_to_dependency"
        },
        "key": 190
    }, {
        "source": "192",
        "target": "188",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "192",
            "target": "188",
            "edgeType": "developer_to_dependency"
        },
        "key": 191
    }, {
        "source": "193",
        "target": "188",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "193",
            "target": "188",
            "edgeType": "developer_to_dependency"
        },
        "key": 192
    }, {
        "source": "0",
        "target": "194",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "194",
            "edgeType": "service_to_company"
        },
        "key": 193
    }, {
        "source": "195",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "195",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 194
    }, {
        "source": "196",
        "target": "195",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "196",
            "target": "195",
            "edgeType": "protocol_to_dependency"
        },
        "key": 195
    }, {
        "source": "197",
        "target": "195",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "197",
            "target": "195",
            "edgeType": "developer_to_dependency"
        },
        "key": 196
    }, {
        "source": "198",
        "target": "195",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "198",
            "target": "195",
            "edgeType": "developer_to_dependency"
        },
        "key": 197
    }, {
        "source": "199",
        "target": "195",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "199",
            "target": "195",
            "edgeType": "developer_to_dependency"
        },
        "key": 198
    }, {
        "source": "200",
        "target": "195",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "200",
            "target": "195",
            "edgeType": "developer_to_dependency"
        },
        "key": 199
    }, {
        "source": "0",
        "target": "201",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "201",
            "edgeType": "service_to_company"
        },
        "key": 200
    }, {
        "source": "202",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "202",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 201
    }, {
        "source": "203",
        "target": "202",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "203",
            "target": "202",
            "edgeType": "protocol_to_dependency"
        },
        "key": 202
    }, {
        "source": "204",
        "target": "202",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "204",
            "target": "202",
            "edgeType": "developer_to_dependency"
        },
        "key": 203
    }, {
        "source": "205",
        "target": "202",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "205",
            "target": "202",
            "edgeType": "developer_to_dependency"
        },
        "key": 204
    }, {
        "source": "206",
        "target": "202",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "206",
            "target": "202",
            "edgeType": "developer_to_dependency"
        },
        "key": 205
    }, {
        "source": "207",
        "target": "202",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "207",
            "target": "202",
            "edgeType": "developer_to_dependency"
        },
        "key": 206
    }, {
        "source": "0",
        "target": "208",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "208",
            "edgeType": "service_to_company"
        },
        "key": 207
    }, {
        "source": "209",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "209",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 208
    }, {
        "source": "210",
        "target": "209",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "210",
            "target": "209",
            "edgeType": "protocol_to_dependency"
        },
        "key": 209
    }, {
        "source": "0",
        "target": "211",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "211",
            "edgeType": "service_to_company"
        },
        "key": 210
    }, {
        "source": "212",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "212",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 211
    }, {
        "source": "213",
        "target": "212",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "213",
            "target": "212",
            "edgeType": "protocol_to_dependency"
        },
        "key": 212
    }, {
        "source": "214",
        "target": "212",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "214",
            "target": "212",
            "edgeType": "developer_to_dependency"
        },
        "key": 213
    }, {
        "source": "215",
        "target": "212",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "215",
            "target": "212",
            "edgeType": "developer_to_dependency"
        },
        "key": 214
    }, {
        "source": "216",
        "target": "212",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "216",
            "target": "212",
            "edgeType": "developer_to_dependency"
        },
        "key": 215
    }, {
        "source": "217",
        "target": "212",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "217",
            "target": "212",
            "edgeType": "developer_to_dependency"
        },
        "key": 216
    }, {
        "source": "0",
        "target": "218",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "218",
            "edgeType": "service_to_company"
        },
        "key": 217
    }, {
        "source": "219",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "219",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 218
    }, {
        "source": "220",
        "target": "219",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "220",
            "target": "219",
            "edgeType": "protocol_to_dependency"
        },
        "key": 219
    }, {
        "source": "0",
        "target": "221",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "221",
            "edgeType": "service_to_company"
        },
        "key": 220
    }, {
        "source": "222",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "222",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 221
    }, {
        "source": "223",
        "target": "222",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "223",
            "target": "222",
            "edgeType": "protocol_to_dependency"
        },
        "key": 222
    }, {
        "source": "224",
        "target": "222",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "224",
            "target": "222",
            "edgeType": "foundation_to_dependency"
        },
        "key": 223
    }, {
        "source": "225",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "225",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 224
    }, {
        "source": "226",
        "target": "225",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "226",
            "target": "225",
            "edgeType": "protocol_to_dependency"
        },
        "key": 225
    }, {
        "source": "227",
        "target": "225",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "227",
            "target": "225",
            "edgeType": "foundation_to_dependency"
        },
        "key": 226
    }, {
        "source": "228",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "228",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 227
    }, {
        "source": "229",
        "target": "228",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "229",
            "target": "228",
            "edgeType": "protocol_to_dependency"
        },
        "key": 228
    }, {
        "source": "230",
        "target": "228",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "230",
            "target": "228",
            "edgeType": "foundation_to_dependency"
        },
        "key": 229
    }, {
        "source": "231",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "231",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 230
    }, {
        "source": "232",
        "target": "231",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "232",
            "target": "231",
            "edgeType": "protocol_to_dependency"
        },
        "key": 231
    }, {
        "source": "233",
        "target": "231",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "233",
            "target": "231",
            "edgeType": "foundation_to_dependency"
        },
        "key": 232
    }, {
        "source": "234",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "234",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 233
    }, {
        "source": "235",
        "target": "234",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "235",
            "target": "234",
            "edgeType": "protocol_to_dependency"
        },
        "key": 234
    }, {
        "source": "236",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "236",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 235
    }, {
        "source": "237",
        "target": "236",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "237",
            "target": "236",
            "edgeType": "protocol_to_dependency"
        },
        "key": 236
    }, {
        "source": "238",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "238",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 237
    }, {
        "source": "239",
        "target": "238",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "239",
            "target": "238",
            "edgeType": "protocol_to_dependency"
        },
        "key": 238
    }, {
        "source": "240",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "240",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 239
    }, {
        "source": "241",
        "target": "240",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "241",
            "target": "240",
            "edgeType": "protocol_to_dependency"
        },
        "key": 240
    }, {
        "source": "242",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "242",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 241
    }, {
        "source": "243",
        "target": "242",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "243",
            "target": "242",
            "edgeType": "protocol_to_dependency"
        },
        "key": 242
    }, {
        "source": "244",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "244",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 243
    }, {
        "source": "245",
        "target": "244",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "245",
            "target": "244",
            "edgeType": "protocol_to_dependency"
        },
        "key": 244
    }, {
        "source": "246",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "246",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 245
    }, {
        "source": "247",
        "target": "246",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "247",
            "target": "246",
            "edgeType": "protocol_to_dependency"
        },
        "key": 246
    }, {
        "source": "248",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "248",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 247
    }, {
        "source": "249",
        "target": "248",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "249",
            "target": "248",
            "edgeType": "protocol_to_dependency"
        },
        "key": 248
    }, {
        "source": "250",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "250",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 249
    }, {
        "source": "251",
        "target": "250",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "251",
            "target": "250",
            "edgeType": "protocol_to_dependency"
        },
        "key": 250
    }, {
        "source": "252",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "252",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 251
    }, {
        "source": "253",
        "target": "252",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "253",
            "target": "252",
            "edgeType": "protocol_to_dependency"
        },
        "key": 252
    }, {
        "source": "254",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "254",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 253
    }, {
        "source": "255",
        "target": "254",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "255",
            "target": "254",
            "edgeType": "protocol_to_dependency"
        },
        "key": 254
    }, {
        "source": "0",
        "target": "256",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "256",
            "edgeType": "service_to_company"
        },
        "key": 255
    }, {
        "source": "257",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "257",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 256
    }, {
        "source": "258",
        "target": "257",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "258",
            "target": "257",
            "edgeType": "protocol_to_dependency"
        },
        "key": 257
    }, {
        "source": "0",
        "target": "259",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "259",
            "edgeType": "service_to_company"
        },
        "key": 258
    }, {
        "source": "260",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "260",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 259
    }, {
        "source": "261",
        "target": "260",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "261",
            "target": "260",
            "edgeType": "protocol_to_dependency"
        },
        "key": 260
    }, {
        "source": "0",
        "target": "262",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "262",
            "edgeType": "service_to_company"
        },
        "key": 261
    }, {
        "source": "263",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "263",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 262
    }, {
        "source": "264",
        "target": "263",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "264",
            "target": "263",
            "edgeType": "protocol_to_dependency"
        },
        "key": 263
    }, {
        "source": "0",
        "target": "265",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "265",
            "edgeType": "service_to_company"
        },
        "key": 264
    }, {
        "source": "266",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "266",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 265
    }, {
        "source": "267",
        "target": "266",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "267",
            "target": "266",
            "edgeType": "protocol_to_dependency"
        },
        "key": 266
    }, {
        "source": "268",
        "target": "266",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "268",
            "target": "266",
            "edgeType": "developer_to_dependency"
        },
        "key": 267
    }, {
        "source": "269",
        "target": "266",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "269",
            "target": "266",
            "edgeType": "developer_to_dependency"
        },
        "key": 268
    }, {
        "source": "270",
        "target": "266",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "270",
            "target": "266",
            "edgeType": "developer_to_dependency"
        },
        "key": 269
    }, {
        "source": "0",
        "target": "271",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "271",
            "edgeType": "service_to_company"
        },
        "key": 270
    }, {
        "source": "272",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "272",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 271
    }, {
        "source": "273",
        "target": "272",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "273",
            "target": "272",
            "edgeType": "protocol_to_dependency"
        },
        "key": 272
    }, {
        "source": "274",
        "target": "272",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "274",
            "target": "272",
            "edgeType": "developer_to_dependency"
        },
        "key": 273
    }, {
        "source": "275",
        "target": "272",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "275",
            "target": "272",
            "edgeType": "developer_to_dependency"
        },
        "key": 274
    }, {
        "source": "276",
        "target": "272",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "276",
            "target": "272",
            "edgeType": "developer_to_dependency"
        },
        "key": 275
    }, {
        "source": "0",
        "target": "277",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "277",
            "edgeType": "service_to_company"
        },
        "key": 276
    }, {
        "source": "278",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "278",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 277
    }, {
        "source": "279",
        "target": "278",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "279",
            "target": "278",
            "edgeType": "protocol_to_dependency"
        },
        "key": 278
    }, {
        "source": "280",
        "target": "278",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "280",
            "target": "278",
            "edgeType": "foundation_to_dependency"
        },
        "key": 279
    }, {
        "source": "281",
        "target": "278",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "281",
            "target": "278",
            "edgeType": "developer_to_dependency"
        },
        "key": 280
    }, {
        "source": "282",
        "target": "278",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "282",
            "target": "278",
            "edgeType": "developer_to_dependency"
        },
        "key": 281
    }, {
        "source": "283",
        "target": "278",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "283",
            "target": "278",
            "edgeType": "developer_to_dependency"
        },
        "key": 282
    }, {
        "source": "284",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "284",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 283
    }, {
        "source": "285",
        "target": "284",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "285",
            "target": "284",
            "edgeType": "protocol_to_dependency"
        },
        "key": 284
    }, {
        "source": "286",
        "target": "284",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "286",
            "target": "284",
            "edgeType": "foundation_to_dependency"
        },
        "key": 285
    }, {
        "source": "287",
        "target": "284",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "287",
            "target": "284",
            "edgeType": "developer_to_dependency"
        },
        "key": 286
    }, {
        "source": "288",
        "target": "284",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "288",
            "target": "284",
            "edgeType": "developer_to_dependency"
        },
        "key": 287
    }, {
        "source": "289",
        "target": "284",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "289",
            "target": "284",
            "edgeType": "developer_to_dependency"
        },
        "key": 288
    }, {
        "source": "290",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "290",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 289
    }, {
        "source": "291",
        "target": "290",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "291",
            "target": "290",
            "edgeType": "protocol_to_dependency"
        },
        "key": 290
    }, {
        "source": "292",
        "target": "290",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "292",
            "target": "290",
            "edgeType": "foundation_to_dependency"
        },
        "key": 291
    }, {
        "source": "293",
        "target": "290",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "293",
            "target": "290",
            "edgeType": "developer_to_dependency"
        },
        "key": 292
    }, {
        "source": "294",
        "target": "290",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "294",
            "target": "290",
            "edgeType": "developer_to_dependency"
        },
        "key": 293
    }, {
        "source": "295",
        "target": "290",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "295",
            "target": "290",
            "edgeType": "developer_to_dependency"
        },
        "key": 294
    }, {
        "source": "296",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "296",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 295
    }, {
        "source": "297",
        "target": "296",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "297",
            "target": "296",
            "edgeType": "protocol_to_dependency"
        },
        "key": 296
    }, {
        "source": "298",
        "target": "296",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "298",
            "target": "296",
            "edgeType": "foundation_to_dependency"
        },
        "key": 297
    }, {
        "source": "299",
        "target": "296",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "299",
            "target": "296",
            "edgeType": "developer_to_dependency"
        },
        "key": 298
    }, {
        "source": "300",
        "target": "296",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "300",
            "target": "296",
            "edgeType": "developer_to_dependency"
        },
        "key": 299
    }, {
        "source": "301",
        "target": "296",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "301",
            "target": "296",
            "edgeType": "developer_to_dependency"
        },
        "key": 300
    }, {
        "source": "302",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "302",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 301
    }, {
        "source": "303",
        "target": "302",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "303",
            "target": "302",
            "edgeType": "protocol_to_dependency"
        },
        "key": 302
    }, {
        "source": "304",
        "target": "302",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "304",
            "target": "302",
            "edgeType": "foundation_to_dependency"
        },
        "key": 303
    }, {
        "source": "305",
        "target": "302",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "305",
            "target": "302",
            "edgeType": "developer_to_dependency"
        },
        "key": 304
    }, {
        "source": "306",
        "target": "302",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "306",
            "target": "302",
            "edgeType": "developer_to_dependency"
        },
        "key": 305
    }, {
        "source": "307",
        "target": "302",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "307",
            "target": "302",
            "edgeType": "developer_to_dependency"
        },
        "key": 306
    }, {
        "source": "308",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "308",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 307
    }, {
        "source": "309",
        "target": "308",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "309",
            "target": "308",
            "edgeType": "protocol_to_dependency"
        },
        "key": 308
    }, {
        "source": "310",
        "target": "308",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "310",
            "target": "308",
            "edgeType": "foundation_to_dependency"
        },
        "key": 309
    }, {
        "source": "311",
        "target": "308",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "311",
            "target": "308",
            "edgeType": "developer_to_dependency"
        },
        "key": 310
    }, {
        "source": "312",
        "target": "308",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "312",
            "target": "308",
            "edgeType": "developer_to_dependency"
        },
        "key": 311
    }, {
        "source": "313",
        "target": "308",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "313",
            "target": "308",
            "edgeType": "developer_to_dependency"
        },
        "key": 312
    }, {
        "source": "314",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "314",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 313
    }, {
        "source": "315",
        "target": "314",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "315",
            "target": "314",
            "edgeType": "protocol_to_dependency"
        },
        "key": 314
    }, {
        "source": "316",
        "target": "314",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "316",
            "target": "314",
            "edgeType": "foundation_to_dependency"
        },
        "key": 315
    }, {
        "source": "317",
        "target": "314",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "317",
            "target": "314",
            "edgeType": "developer_to_dependency"
        },
        "key": 316
    }, {
        "source": "318",
        "target": "314",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "318",
            "target": "314",
            "edgeType": "developer_to_dependency"
        },
        "key": 317
    }, {
        "source": "0",
        "target": "319",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "319",
            "edgeType": "service_to_company"
        },
        "key": 318
    }, {
        "source": "320",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "320",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 319
    }, {
        "source": "321",
        "target": "320",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "321",
            "target": "320",
            "edgeType": "protocol_to_dependency"
        },
        "key": 320
    }, {
        "source": "322",
        "target": "320",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "322",
            "target": "320",
            "edgeType": "foundation_to_dependency"
        },
        "key": 321
    }, {
        "source": "323",
        "target": "320",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "323",
            "target": "320",
            "edgeType": "developer_to_dependency"
        },
        "key": 322
    }, {
        "source": "324",
        "target": "320",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "324",
            "target": "320",
            "edgeType": "developer_to_dependency"
        },
        "key": 323
    }, {
        "source": "0",
        "target": "325",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "325",
            "edgeType": "service_to_company"
        },
        "key": 324
    }, {
        "source": "326",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "326",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 325
    }, {
        "source": "327",
        "target": "326",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "327",
            "target": "326",
            "edgeType": "protocol_to_dependency"
        },
        "key": 326
    }, {
        "source": "328",
        "target": "326",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "328",
            "target": "326",
            "edgeType": "foundation_to_dependency"
        },
        "key": 327
    }, {
        "source": "329",
        "target": "326",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "329",
            "target": "326",
            "edgeType": "developer_to_dependency"
        },
        "key": 328
    }, {
        "source": "330",
        "target": "326",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "330",
            "target": "326",
            "edgeType": "developer_to_dependency"
        },
        "key": 329
    }, {
        "source": "0",
        "target": "331",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "331",
            "edgeType": "service_to_company"
        },
        "key": 330
    }, {
        "source": "332",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "332",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 331
    }, {
        "source": "333",
        "target": "332",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "333",
            "target": "332",
            "edgeType": "protocol_to_dependency"
        },
        "key": 332
    }, {
        "source": "334",
        "target": "332",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "334",
            "target": "332",
            "edgeType": "foundation_to_dependency"
        },
        "key": 333
    }, {
        "source": "0",
        "target": "335",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "335",
            "edgeType": "service_to_company"
        },
        "key": 334
    }, {
        "source": "336",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "336",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 335
    }, {
        "source": "337",
        "target": "336",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "337",
            "target": "336",
            "edgeType": "protocol_to_dependency"
        },
        "key": 336
    }, {
        "source": "338",
        "target": "336",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "338",
            "target": "336",
            "edgeType": "foundation_to_dependency"
        },
        "key": 337
    }, {
        "source": "0",
        "target": "339",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "339",
            "edgeType": "service_to_company"
        },
        "key": 338
    }, {
        "source": "340",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "340",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 339
    }, {
        "source": "341",
        "target": "340",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "341",
            "target": "340",
            "edgeType": "protocol_to_dependency"
        },
        "key": 340
    }, {
        "source": "342",
        "target": "340",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "342",
            "target": "340",
            "edgeType": "foundation_to_dependency"
        },
        "key": 341
    }, {
        "source": "0",
        "target": "343",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "343",
            "edgeType": "service_to_company"
        },
        "key": 342
    }, {
        "source": "344",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "344",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 343
    }, {
        "source": "345",
        "target": "344",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "345",
            "target": "344",
            "edgeType": "protocol_to_dependency"
        },
        "key": 344
    }, {
        "source": "346",
        "target": "344",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "346",
            "target": "344",
            "edgeType": "foundation_to_dependency"
        },
        "key": 345
    }, {
        "source": "0",
        "target": "347",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "347",
            "edgeType": "service_to_company"
        },
        "key": 346
    }, {
        "source": "348",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "348",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 347
    }, {
        "source": "349",
        "target": "348",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "349",
            "target": "348",
            "edgeType": "protocol_to_dependency"
        },
        "key": 348
    }, {
        "source": "350",
        "target": "348",
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "350",
            "target": "348",
            "edgeType": "foundation_to_dependency"
        },
        "key": 349
    }, {
        "source": "351",
        "target": "348",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "351",
            "target": "348",
            "edgeType": "developer_to_dependency"
        },
        "key": 350
    }, {
        "source": "352",
        "target": "348",
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "352",
            "target": "348",
            "edgeType": "developer_to_dependency"
        },
        "key": 351
    }, {
        "source": "0",
        "target": "353",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "353",
            "edgeType": "service_to_company"
        },
        "key": 352
    }, {
        "source": "354",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "354",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 353
    }, {
        "source": "355",
        "target": "354",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "355",
            "target": "354",
            "edgeType": "protocol_to_dependency"
        },
        "key": 354
    }, {
        "source": "0",
        "target": "356",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "356",
            "edgeType": "service_to_company"
        },
        "key": 355
    }, {
        "source": "357",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "357",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 356
    }, {
        "source": "358",
        "target": "357",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "358",
            "target": "357",
            "edgeType": "protocol_to_dependency"
        },
        "key": 357
    }, {
        "source": "0",
        "target": "359",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "359",
            "edgeType": "service_to_company"
        },
        "key": 358
    }, {
        "source": "360",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "360",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 359
    }, {
        "source": "361",
        "target": "360",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "361",
            "target": "360",
            "edgeType": "protocol_to_dependency"
        },
        "key": 360
    }, {
        "source": "0",
        "target": "362",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "362",
            "edgeType": "service_to_company"
        },
        "key": 361
    }, {
        "source": "363",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "363",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 362
    }, {
        "source": "364",
        "target": "363",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "364",
            "target": "363",
            "edgeType": "protocol_to_dependency"
        },
        "key": 363
    }, {
        "source": "0",
        "target": "365",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "365",
            "edgeType": "service_to_company"
        },
        "key": 364
    }, {
        "source": "366",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "366",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 365
    }, {
        "source": "367",
        "target": "366",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "367",
            "target": "366",
            "edgeType": "protocol_to_dependency"
        },
        "key": 366
    }, {
        "source": "0",
        "target": "368",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "368",
            "edgeType": "service_to_company"
        },
        "key": 367
    }, {
        "source": "369",
        "target": "1",
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "369",
            "target": "1",
            "edgeType": "dependency_to_production"
        },
        "key": 368
    }, {
        "source": "370",
        "target": "369",
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "370",
            "target": "369",
            "edgeType": "protocol_to_dependency"
        },
        "key": 369
    }, {
        "source": "0",
        "target": "371",
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "data": {
            "source": "0",
            "target": "371",
            "edgeType": "service_to_company"
        },
        "key": 370
    }],
    "combos": []
};

/** G6VP 站点 本地上传的数据的 Schema 信息 **/
export const GI_SCHEMA_DATA = {
    "nodes": [{
        "nodeType": "cloudService",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string"
        }
    }, {
        "nodeType": "production",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string"
        }
    }, {
        "nodeType": "dependence",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string",
            "url": "string"
        }
    }, {
        "nodeType": "protocol",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string",
            "url": "string"
        }
    }, {
        "nodeType": "developer",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string",
            "url": "string",
            "country": "string",
            "position": "string"
        }
    }, {
        "nodeType": "company",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string",
            "url": "string"
        }
    }, {
        "nodeType": "executive",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string",
            "url": "string",
            "country": "string",
            "position": "string"
        }
    }, {
        "nodeType": "foundation",
        "nodeTypeKeyFromProperties": "type",
        "properties": {
            "id": "string",
            "name": "string",
            "type": "string",
            "url": "string"
        }
    }],
    "edges": [{
        "edgeType": "production_to_service",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "production",
        "targetNodeType": "cloudService",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "dependency_to_production",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "dependence",
        "targetNodeType": "production",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "protocol_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "protocol",
        "targetNodeType": "dependence",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "developer_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "developer",
        "targetNodeType": "dependence",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "service_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "cloudService",
        "targetNodeType": "company",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "executive_to_company",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "executive",
        "targetNodeType": "company",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "foundation_to_dependency",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "foundation",
        "targetNodeType": "dependence",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }]
};

/** 导出的主题 **/
export const THEME_VALUE = "light";
