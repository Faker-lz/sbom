
/** G6VP 站点自动生成的配置 **/
export const GI_PROJECT_CONFIG = {
    "nodes": [{
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#ddd",
            "label": [],
            "advanced": {
                "label": {
                    "fill": "#000"
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
            "color": "#F69F7F",
            "label": [],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "desktop",
                    "fill": "#fff",
                    "visible": true
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 12,
                    "position": "bottom"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "在线设备资产 TYPE",
        "expressions": [{
            "name": "legendType",
            "operator": "eql",
            "value": "在线设备资产"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#F6D87B",
            "label": ["国家.id"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "",
                    "fill": "#fff"
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 12,
                    "position": "bottom"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "国家 TYPE",
        "expressions": [{
            "name": "legendType",
            "operator": "eql",
            "value": "国家"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#795AE1",
            "label": ["设备制造商.id"],
            "advanced": {
                "label": {
                    "fill": "#000"
                }
            }
        },
        "groupName": "设备制造商 TYPE",
        "expressions": [{
            "name": "legendType",
            "operator": "eql",
            "value": "设备制造商"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#622CD8",
            "label": [],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "wifi",
                    "fill": "#fff",
                    "visible": true
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 12,
                    "position": "bottom"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "固件 TYPE",
        "expressions": [{
            "name": "legendType",
            "operator": "eql",
            "value": "固件"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#82E6C7",
            "label": [],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "android-fill",
                    "fill": "#fff",
                    "visible": true
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 12,
                    "position": "bottom"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "单文件 TYPE",
        "expressions": [{
            "name": "legendType",
            "operator": "eql",
            "value": "单文件"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#F6D87B",
            "label": ["漏洞事件.id", "漏洞事件.legendType"],
            "advanced": {
                "icon": {
                    "type": "font",
                    "value": "google",
                    "fill": "#fff",
                    "visible": true
                },
                "keyshape": {
                    "fillOpacity": 0.8
                },
                "label": {
                    "visible": true,
                    "fill": "#000",
                    "fontSize": 12,
                    "position": "bottom"
                },
                "badge": {
                    "visible": false
                }
            }
        },
        "groupName": "漏洞事件 TYPE",
        "expressions": [{
            "name": "legendType",
            "operator": "eql",
            "value": "漏洞事件"
        }],
        "logic": true
    }, {
        "id": "SimpleNode",
        "props": {
            "size": 26,
            "color": "#F69F7F",
            "label": ["僵尸网络家族.id"],
            "advanced": {
                "label": {
                    "fill": "#000"
                }
            }
        },
        "groupName": "僵尸网络家族 TYPE",
        "expressions": [{
            "name": "legendType",
            "operator": "eql",
            "value": "僵尸网络家族"
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
            "color": "#F69F7F",
            "label": [],
            "advanced": {
                "keyshape": {
                    "customPoly": false,
                    "lineDash": [],
                    "opacity": 1
                },
                "label": {
                    "visible": true,
                    "fontSize": 12,
                    "offset": [0, 0],
                    "fill": "#ddd",
                    "backgroundEnable": true,
                    "backgroundFill": "#fff",
                    "backgroundStroke": "#fff"
                },
                "animate": {
                    "visible": false
                }
            }
        },
        "groupName": "ASSETS_TO_COUNTRY TYPE",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "assets_to_country"
        }],
        "logic": true
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#622CD8",
            "label": []
        },
        "groupName": "FIRMWARE_TO_ASSETS TYPE",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "firmware_to_assets"
        }],
        "logic": true
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#795AE1",
            "label": []
        },
        "groupName": "MANU_TO_COUNTRY TYPE",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "manu_to_country"
        }],
        "logic": true
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#622CD8",
            "label": []
        },
        "groupName": "FIRMWARE_TO_MANU TYPE",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "firmware_to_manu"
        }],
        "logic": true
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#82E6C7",
            "label": []
        },
        "groupName": "FILE_TO_FIRMWARE TYPE",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "file_to_firmware"
        }],
        "logic": true
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#F6D87B",
            "label": []
        },
        "groupName": "CVE_TO_FILE TYPE",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "cve_to_file"
        }],
        "logic": true
    }, {
        "id": "SimpleEdge",
        "props": {
            "size": 1,
            "color": "#3056E3",
            "label": ["botnet_to_cve.edgeType"],
            "advanced": {
                "keyshape": {
                    "customPoly": false,
                    "lineDash": [],
                    "opacity": 1
                },
                "label": {
                    "visible": true,
                    "fontSize": 12,
                    "offset": [0, 0],
                    "fill": "#3056E3",
                    "backgroundEnable": true,
                    "backgroundFill": "#fff",
                    "backgroundStroke": "#fff"
                },
                "animate": {
                    "visible": false
                }
            }
        },
        "groupName": "BOTNET_TO_CVE TYPE",
        "expressions": [{
            "name": "edgeType",
            "operator": "eql",
            "value": "botnet_to_cve"
        }],
        "logic": true
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
            "sortKey": "legendType",
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
    "GI_SITE_PROJECT_ID": "a5244ebe-a747-4008-aa1b-0bf0ac440e12",
    "engineId": "GI",
    "data": {
        "nodes": [{
            "id": "91.219.218.86",
            "data": {
                "id": "91.219.218.86",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Stevens, Armstrong and Gonzalez.and Sons",
                "type": "entity",
                "latitude": "33.7207",
                "longitude": "-116.21677",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Indio",
                "device_type": "路由器",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "133.102.109.244",
            "data": {
                "id": "133.102.109.244",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Bentley, Walters and Davis.LLC",
                "type": "entity",
                "latitude": "34.09668",
                "longitude": "-117.71978",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Claremont",
                "device_type": "光猫",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "253.44.233.16",
            "data": {
                "id": "253.44.233.16",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Miller, Cisneros and Mejia.Ltd",
                "type": "entity",
                "latitude": "33.7207",
                "longitude": "-116.21677",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Indio",
                "device_type": "NVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "198.242.63.234",
            "data": {
                "id": "198.242.63.234",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Lopez Group.Inc",
                "type": "entity",
                "latitude": "34.25628",
                "longitude": "-78.04471",
                "country": "United States",
                "province": "New_York",
                "city": "Leland",
                "device_type": "路由器",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "165.139.207.29",
            "data": {
                "id": "165.139.207.29",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Cruz-Hays.Inc",
                "type": "entity",
                "latitude": "26.91756",
                "longitude": "-82.07842",
                "country": "United States",
                "province": "New_York",
                "city": "Punta Gorda Isles",
                "device_type": "网络存储设备",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "41.3.228.218",
            "data": {
                "id": "41.3.228.218",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Walters-Bates.and Sons",
                "type": "entity",
                "latitude": "41.84364",
                "longitude": "-87.71255",
                "country": "United States",
                "province": "Chicago",
                "city": "South Lawndale",
                "device_type": "智能电表",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "238.115.65.77",
            "data": {
                "id": "238.115.65.77",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Bailey-Hopkins.PLC",
                "type": "entity",
                "latitude": "40.57788",
                "longitude": "-73.95958",
                "country": "United States",
                "province": "New_York",
                "city": "Brighton Beach",
                "device_type": "NVR设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "10.220.18.159",
            "data": {
                "id": "10.220.18.159",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Barrett Group.PLC",
                "type": "entity",
                "latitude": "45.0408",
                "longitude": "-93.263",
                "country": "United States",
                "province": "Chicago",
                "city": "Columbia Heights",
                "device_type": "路由器",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "188.192.225.36",
            "data": {
                "id": "188.192.225.36",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Smith, Blair and Duran.Ltd",
                "type": "entity",
                "latitude": "40.72816",
                "longitude": "-74.07764",
                "country": "United States",
                "province": "New_York",
                "city": "Jersey City",
                "device_type": "摄像头",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "220.144.235.43",
            "data": {
                "id": "220.144.235.43",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Campos-Park.Group",
                "type": "entity",
                "latitude": "33.7207",
                "longitude": "-116.21677",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Indio",
                "device_type": "网络存储设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "76.61.120.126",
            "data": {
                "id": "76.61.120.126",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Brown LLC.Group",
                "type": "entity",
                "latitude": "33.72255",
                "longitude": "-116.37697",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Palm Desert",
                "device_type": "摄像头",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "6.79.223.106",
            "data": {
                "id": "6.79.223.106",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Marsh Group.Ltd",
                "type": "entity",
                "latitude": "41.14676",
                "longitude": "-73.49484",
                "country": "United States",
                "province": "New_York",
                "city": "New Canaan",
                "device_type": "防火墙",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "70.147.91.94",
            "data": {
                "id": "70.147.91.94",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Anderson PLC.Inc",
                "type": "entity",
                "latitude": "47.80527",
                "longitude": "-122.24064",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Bothell West",
                "device_type": "路由器",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "159.76.24.149",
            "data": {
                "id": "159.76.24.149",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Garcia and Sons.Inc",
                "type": "entity",
                "latitude": "35.74788",
                "longitude": "-95.36969",
                "country": "United States",
                "province": "Chicago",
                "city": "Muskogee",
                "device_type": "防火墙",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "59.56.228.252",
            "data": {
                "id": "59.56.228.252",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Johnson, Petersen and Stevens.Group",
                "type": "entity",
                "latitude": "29.53885",
                "longitude": "-95.44744",
                "country": "United States",
                "province": "Chicago",
                "city": "Fresno",
                "device_type": "摄像头",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "231.104.58.87",
            "data": {
                "id": "231.104.58.87",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Myers Ltd.Ltd",
                "type": "entity",
                "latitude": "42.97086",
                "longitude": "-82.42491",
                "country": "United States",
                "province": "Detroit",
                "city": "Port Huron",
                "device_type": "AP设备",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "227.236.45.143",
            "data": {
                "id": "227.236.45.143",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hicks Ltd.LLC",
                "type": "entity",
                "latitude": "45.0408",
                "longitude": "-93.263",
                "country": "United States",
                "province": "Chicago",
                "city": "Columbia Heights",
                "device_type": "智能电表",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "105.134.35.50",
            "data": {
                "id": "105.134.35.50",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Gonzalez LLC.Group",
                "type": "entity",
                "latitude": "28.90054",
                "longitude": "-81.26367",
                "country": "United States",
                "province": "New_York",
                "city": "Deltona",
                "device_type": "DVR设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "184.30.78.207",
            "data": {
                "id": "184.30.78.207",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mueller, Thomas and Taylor.LLC",
                "type": "entity",
                "latitude": "33.72255",
                "longitude": "-116.37697",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Palm Desert",
                "device_type": "摄像头",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "45.234.221.156",
            "data": {
                "id": "45.234.221.156",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Kerr, Bowman and Brown.PLC",
                "type": "entity",
                "latitude": "33.95015",
                "longitude": "-118.03917",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "South Whittier",
                "device_type": "AP设备",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "93.216.37.234",
            "data": {
                "id": "93.216.37.234",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Rivera-Brooks.Group",
                "type": "entity",
                "latitude": "27.09978",
                "longitude": "-82.45426",
                "country": "United States",
                "province": "New_York",
                "city": "Venice",
                "device_type": "DVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "2.176.133.129",
            "data": {
                "id": "2.176.133.129",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wallace, Donaldson and Morgan.and Sons",
                "type": "entity",
                "latitude": "26.91756",
                "longitude": "-82.07842",
                "country": "United States",
                "province": "New_York",
                "city": "Punta Gorda Isles",
                "device_type": "DVR设备",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1.181.75.114",
            "data": {
                "id": "1.181.75.114",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mendoza Group.Group",
                "type": "entity",
                "latitude": "41.14676",
                "longitude": "-73.49484",
                "country": "United States",
                "province": "New_York",
                "city": "New Canaan",
                "device_type": "安防设备",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "6.156.222.211",
            "data": {
                "id": "6.156.222.211",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Lambert-Thompson.Group",
                "type": "entity",
                "latitude": "34.95303",
                "longitude": "-120.43572",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Santa Maria",
                "device_type": "NVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "146.57.148.63",
            "data": {
                "id": "146.57.148.63",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Rodriguez and Sons.and Sons",
                "type": "entity",
                "latitude": "35.05266",
                "longitude": "-78.87836",
                "country": "United States",
                "province": "New_York",
                "city": "Fayetteville",
                "device_type": "NVR设备",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "160.51.3.109",
            "data": {
                "id": "160.51.3.109",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "King and Sons.Inc",
                "type": "entity",
                "latitude": "31.76212",
                "longitude": "-95.63079",
                "country": "United States",
                "province": "Chicago",
                "city": "Palestine",
                "device_type": "防火墙",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "153.144.200.99",
            "data": {
                "id": "153.144.200.99",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Davis-Tucker.Ltd",
                "type": "entity",
                "latitude": "34.21639",
                "longitude": "-119.0376",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Camarillo",
                "device_type": "路由器",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "85.96.69.136",
            "data": {
                "id": "85.96.69.136",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Williams-Stanley.LLC",
                "type": "entity",
                "latitude": "33.44872",
                "longitude": "-86.78777",
                "country": "United States",
                "province": "Chicago",
                "city": "Vestavia Hills",
                "device_type": "NVR设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "90.208.46.115",
            "data": {
                "id": "90.208.46.115",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Brown Group.Inc",
                "type": "entity",
                "latitude": "45.53929",
                "longitude": "-122.38731",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Troutdale",
                "device_type": "AP设备",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "6.125.158.237",
            "data": {
                "id": "6.125.158.237",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Bryant, Thompson and Patterson.LLC",
                "type": "entity",
                "latitude": "26.2173",
                "longitude": "-80.22588",
                "country": "United States",
                "province": "New_York",
                "city": "North Lauderdale",
                "device_type": "防火墙",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "74.109.124.159",
            "data": {
                "id": "74.109.124.159",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Paul, Craig and Kerr.and Sons",
                "type": "entity",
                "latitude": "47.64995",
                "longitude": "-117.23991",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Opportunity",
                "device_type": "安防设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "149.118.6.147",
            "data": {
                "id": "149.118.6.147",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wilson, Schmidt and Perez.Inc",
                "type": "entity",
                "latitude": "38.91817",
                "longitude": "-78.19444",
                "country": "United States",
                "province": "New_York",
                "city": "Front Royal",
                "device_type": "网络存储设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "202.218.41.145",
            "data": {
                "id": "202.218.41.145",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Bruce, Brown and Thomas.LLC",
                "type": "entity",
                "latitude": "33.35283",
                "longitude": "-111.78903",
                "country": "United States",
                "province": "Phoenix",
                "city": "Gilbert",
                "device_type": "摄像头",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "214.17.242.34",
            "data": {
                "id": "214.17.242.34",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Cameron-Hansen.and Sons",
                "type": "entity",
                "latitude": "41.66394",
                "longitude": "-83.55521",
                "country": "United States",
                "province": "New_York",
                "city": "Toledo",
                "device_type": "网络存储设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "21.132.106.162",
            "data": {
                "id": "21.132.106.162",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Lee, Walker and Delgado.Group",
                "type": "entity",
                "latitude": "39.96097",
                "longitude": "-75.60804",
                "country": "United States",
                "province": "New_York",
                "city": "West Chester",
                "device_type": "路由器",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "54.125.106.58",
            "data": {
                "id": "54.125.106.58",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hebert Ltd.and Sons",
                "type": "entity",
                "latitude": "41.14676",
                "longitude": "-73.49484",
                "country": "United States",
                "province": "New_York",
                "city": "New Canaan",
                "device_type": "路由器",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "132.182.169.210",
            "data": {
                "id": "132.182.169.210",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Waller, White and Davis.Group",
                "type": "entity",
                "latitude": "33.76446",
                "longitude": "-117.79394",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "North Tustin",
                "device_type": "摄像头",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "169.210.181.208",
            "data": {
                "id": "169.210.181.208",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Watts Group.LLC",
                "type": "entity",
                "latitude": "42.16808",
                "longitude": "-88.42814",
                "country": "United States",
                "province": "Chicago",
                "city": "Huntley",
                "device_type": "智能电表",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "17.127.137.115",
            "data": {
                "id": "17.127.137.115",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Stevens-Harris.and Sons",
                "type": "entity",
                "latitude": "41.57721",
                "longitude": "-93.71133",
                "country": "United States",
                "province": "Chicago",
                "city": "West Des Moines",
                "device_type": "网络存储设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "3.47.159.36",
            "data": {
                "id": "3.47.159.36",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Thomas Ltd.Inc",
                "type": "entity",
                "latitude": "33.03699",
                "longitude": "-117.29198",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Encinitas",
                "device_type": "NVR设备",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "49.123.159.57",
            "data": {
                "id": "49.123.159.57",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Newton, Mason and White.LLC",
                "type": "entity",
                "latitude": "26.68451",
                "longitude": "-80.66756",
                "country": "United States",
                "province": "New_York",
                "city": "Belle Glade",
                "device_type": "路由器",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "201.182.91.21",
            "data": {
                "id": "201.182.91.21",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Jacobs and Sons.PLC",
                "type": "entity",
                "latitude": "46.09273",
                "longitude": "-88.64235",
                "country": "United States",
                "province": "Menominee",
                "city": "Iron River",
                "device_type": "路由器",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "231.44.202.102",
            "data": {
                "id": "231.44.202.102",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Murphy, Fisher and Ross.Ltd",
                "type": "entity",
                "latitude": "39.45621",
                "longitude": "-77.96389",
                "country": "United States",
                "province": "New_York",
                "city": "Martinsburg",
                "device_type": "DVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "114.72.197.181",
            "data": {
                "id": "114.72.197.181",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Campos Inc.and Sons",
                "type": "entity",
                "latitude": "31.84568",
                "longitude": "-102.36764",
                "country": "United States",
                "province": "Chicago",
                "city": "Odessa",
                "device_type": "智能电表",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "153.35.142.189",
            "data": {
                "id": "153.35.142.189",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Ware Ltd.PLC",
                "type": "entity",
                "latitude": "41.55838",
                "longitude": "-81.56929",
                "country": "United States",
                "province": "New_York",
                "city": "Collinwood",
                "device_type": "光猫",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "0.24.80.255",
            "data": {
                "id": "0.24.80.255",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Stanley-Black.Ltd",
                "type": "entity",
                "latitude": "39.96097",
                "longitude": "-75.60804",
                "country": "United States",
                "province": "New_York",
                "city": "West Chester",
                "device_type": "智能电表",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "212.81.47.85",
            "data": {
                "id": "212.81.47.85",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Prince LLC.Group",
                "type": "entity",
                "latitude": "37.71715",
                "longitude": "-122.40433",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Visitacion Valley",
                "device_type": "NVR设备",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "143.56.126.199",
            "data": {
                "id": "143.56.126.199",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Warner-Davis.Ltd",
                "type": "entity",
                "latitude": "43.1009",
                "longitude": "-75.23266",
                "country": "United States",
                "province": "New_York",
                "city": "Utica",
                "device_type": "摄像头",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "151.174.239.54",
            "data": {
                "id": "151.174.239.54",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Logan, Smith and Williams.Inc",
                "type": "entity",
                "latitude": "40.93121",
                "longitude": "-73.89875",
                "country": "United States",
                "province": "New_York",
                "city": "Yonkers",
                "device_type": "网络存储设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "91.1.100.56",
            "data": {
                "id": "91.1.100.56",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wells-Wilson.PLC",
                "type": "entity",
                "latitude": "32.44874",
                "longitude": "-99.73314",
                "country": "United States",
                "province": "Chicago",
                "city": "Abilene",
                "device_type": "网络存储设备",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "62.38.49.27",
            "data": {
                "id": "62.38.49.27",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Murphy-Abbott.PLC",
                "type": "entity",
                "latitude": "35.88264",
                "longitude": "-80.08199",
                "country": "United States",
                "province": "New_York",
                "city": "Thomasville",
                "device_type": "防火墙",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "115.108.176.150",
            "data": {
                "id": "115.108.176.150",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Smith, Williams and Garcia.Ltd",
                "type": "entity",
                "latitude": "47.4943",
                "longitude": "-122.24092",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Bryn Mawr-Skyway",
                "device_type": "防火墙",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "120.93.70.57",
            "data": {
                "id": "120.93.70.57",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Palmer and Sons.Group",
                "type": "entity",
                "latitude": "42.58342",
                "longitude": "-71.8023",
                "country": "United States",
                "province": "New_York",
                "city": "Fitchburg",
                "device_type": "摄像头",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "97.63.236.9",
            "data": {
                "id": "97.63.236.9",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Torres, King and Webb.PLC",
                "type": "entity",
                "latitude": "37.71715",
                "longitude": "-122.40433",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Visitacion Valley",
                "device_type": "DVR设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "83.230.35.214",
            "data": {
                "id": "83.230.35.214",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Gutierrez, Brown and Dyer.Ltd",
                "type": "entity",
                "latitude": "41.48199",
                "longitude": "-81.79819",
                "country": "United States",
                "province": "New_York",
                "city": "Lakewood",
                "device_type": "摄像头",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "251.141.166.223",
            "data": {
                "id": "251.141.166.223",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Collins, Padilla and Wilson.and Sons",
                "type": "entity",
                "latitude": "47.80527",
                "longitude": "-122.24064",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Bothell West",
                "device_type": "防火墙",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "254.138.176.45",
            "data": {
                "id": "254.138.176.45",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Rhodes LLC.Inc",
                "type": "entity",
                "latitude": "28.90054",
                "longitude": "-81.26367",
                "country": "United States",
                "province": "New_York",
                "city": "Deltona",
                "device_type": "智能电表",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "39.89.223.149",
            "data": {
                "id": "39.89.223.149",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Gilmore, Green and Baird.LLC",
                "type": "entity",
                "latitude": "30.17746",
                "longitude": "-81.38758",
                "country": "United States",
                "province": "New_York",
                "city": "Palm Valley",
                "device_type": "光猫",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "172.227.40.93",
            "data": {
                "id": "172.227.40.93",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Taylor Ltd.and Sons",
                "type": "entity",
                "latitude": "32.9156",
                "longitude": "-117.14392",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Mira Mesa",
                "device_type": "AP设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "133.188.198.242",
            "data": {
                "id": "133.188.198.242",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Reese PLC.Inc",
                "type": "entity",
                "latitude": "38.54491",
                "longitude": "-121.74052",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Davis",
                "device_type": "摄像头",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "98.225.232.251",
            "data": {
                "id": "98.225.232.251",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hall-Smith.Ltd",
                "type": "entity",
                "latitude": "40.34912",
                "longitude": "-111.90466",
                "country": "United States",
                "province": "Denver",
                "city": "Saratoga Springs",
                "device_type": "路由器",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "78.19.110.88",
            "data": {
                "id": "78.19.110.88",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Robinson Ltd.Group",
                "type": "entity",
                "latitude": "44.73941",
                "longitude": "-93.12577",
                "country": "United States",
                "province": "Chicago",
                "city": "Rosemount",
                "device_type": "防火墙",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "204.63.202.180",
            "data": {
                "id": "204.63.202.180",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Oliver-Stevens.and Sons",
                "type": "entity",
                "latitude": "33.50921",
                "longitude": "-111.89903",
                "country": "United States",
                "province": "Phoenix",
                "city": "Scottsdale",
                "device_type": "智能电表",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "109.162.41.153",
            "data": {
                "id": "109.162.41.153",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Johnson PLC.and Sons",
                "type": "entity",
                "latitude": "40.93121",
                "longitude": "-73.89875",
                "country": "United States",
                "province": "New_York",
                "city": "Yonkers",
                "device_type": "NVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "90.132.130.213",
            "data": {
                "id": "90.132.130.213",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Thompson, Scott and Johnson.and Sons",
                "type": "entity",
                "latitude": "32.54044",
                "longitude": "-82.90375",
                "country": "United States",
                "province": "New_York",
                "city": "Dublin",
                "device_type": "摄像头",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "143.32.71.217",
            "data": {
                "id": "143.32.71.217",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Torres-Holt.LLC",
                "type": "entity",
                "latitude": "26.91756",
                "longitude": "-82.07842",
                "country": "United States",
                "province": "New_York",
                "city": "Punta Gorda Isles",
                "device_type": "智能电表",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "108.24.165.15",
            "data": {
                "id": "108.24.165.15",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Aguilar Ltd.Ltd",
                "type": "entity",
                "latitude": "40.60538",
                "longitude": "-73.75513",
                "country": "United States",
                "province": "New_York",
                "city": "Far Rockaway",
                "device_type": "网络存储设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "14.231.249.158",
            "data": {
                "id": "14.231.249.158",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Jones-Holmes.Ltd",
                "type": "entity",
                "latitude": "39.72943",
                "longitude": "-104.83192",
                "country": "United States",
                "province": "Denver",
                "city": "Aurora",
                "device_type": "智能电表",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "13.215.189.230",
            "data": {
                "id": "13.215.189.230",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Schmidt, Guerrero and Smith.Group",
                "type": "entity",
                "latitude": "40.5576",
                "longitude": "-74.28459",
                "country": "United States",
                "province": "New_York",
                "city": "Woodbridge",
                "device_type": "智能电表",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "103.98.249.62",
            "data": {
                "id": "103.98.249.62",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Ortega Ltd.LLC",
                "type": "entity",
                "latitude": "45.16024",
                "longitude": "-93.08883",
                "country": "United States",
                "province": "Chicago",
                "city": "Lino Lakes",
                "device_type": "摄像头",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "122.18.38.231",
            "data": {
                "id": "122.18.38.231",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Holland Group.and Sons",
                "type": "entity",
                "latitude": "42.24113",
                "longitude": "-88.3162",
                "country": "United States",
                "province": "Chicago",
                "city": "Crystal Lake",
                "device_type": "智能电表",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "135.231.37.17",
            "data": {
                "id": "135.231.37.17",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Downs-Johnson.Group",
                "type": "entity",
                "latitude": "41.27621",
                "longitude": "-72.86843",
                "country": "United States",
                "province": "New_York",
                "city": "East Haven",
                "device_type": "路由器",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "71.16.232.117",
            "data": {
                "id": "71.16.232.117",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wilson Group.Group",
                "type": "entity",
                "latitude": "40.58654",
                "longitude": "-122.39168",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Redding",
                "device_type": "AP设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "253.227.96.162",
            "data": {
                "id": "253.227.96.162",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Miller, Holmes and Watts.and Sons",
                "type": "entity",
                "latitude": "40.81",
                "longitude": "-73.9625",
                "country": "United States",
                "province": "New_York",
                "city": "Morningside Heights",
                "device_type": "AP设备",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "216.98.100.1",
            "data": {
                "id": "216.98.100.1",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Ramirez LLC.Inc",
                "type": "entity",
                "latitude": "39.08367",
                "longitude": "-84.50855",
                "country": "United States",
                "province": "New_York",
                "city": "Covington",
                "device_type": "光猫",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "69.208.127.54",
            "data": {
                "id": "69.208.127.54",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hanson, Coleman and Torres.Inc",
                "type": "entity",
                "latitude": "34.09668",
                "longitude": "-117.71978",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Claremont",
                "device_type": "网络存储设备",
                "port": 80
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "45.229.195.214",
            "data": {
                "id": "45.229.195.214",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mullins Ltd.Inc",
                "type": "entity",
                "latitude": "34.63915",
                "longitude": "-120.45794",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Lompoc",
                "device_type": "NVR设备",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "207.189.243.166",
            "data": {
                "id": "207.189.243.166",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Miller Group.Group",
                "type": "entity",
                "latitude": "41.75338",
                "longitude": "-86.11084",
                "country": "United States",
                "province": "Indianapolis",
                "city": "Granger",
                "device_type": "DVR设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "188.201.128.238",
            "data": {
                "id": "188.201.128.238",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Fields, Smith and Taylor.LLC",
                "type": "entity",
                "latitude": "45.0408",
                "longitude": "-93.263",
                "country": "United States",
                "province": "Chicago",
                "city": "Columbia Heights",
                "device_type": "安防设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "81.64.56.179",
            "data": {
                "id": "81.64.56.179",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wilson PLC.LLC",
                "type": "entity",
                "latitude": "40.60538",
                "longitude": "-73.75513",
                "country": "United States",
                "province": "New_York",
                "city": "Far Rockaway",
                "device_type": "NVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "54.86.105.66",
            "data": {
                "id": "54.86.105.66",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Ramirez Ltd.Ltd",
                "type": "entity",
                "latitude": "34.14251",
                "longitude": "-118.25508",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Glendale",
                "device_type": "安防设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "140.101.53.179",
            "data": {
                "id": "140.101.53.179",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hamilton, Johnson and Thomas.PLC",
                "type": "entity",
                "latitude": "35.61452",
                "longitude": "-88.81395",
                "country": "United States",
                "province": "Chicago",
                "city": "Jackson",
                "device_type": "AP设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "112.67.153.161",
            "data": {
                "id": "112.67.153.161",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wallace, Turner and Campbell.Group",
                "type": "entity",
                "latitude": "41.16704",
                "longitude": "-73.20483",
                "country": "United States",
                "province": "New_York",
                "city": "Bridgeport",
                "device_type": "光猫",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "142.146.66.63",
            "data": {
                "id": "142.146.66.63",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "White Ltd.LLC",
                "type": "entity",
                "latitude": "34.09668",
                "longitude": "-117.71978",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Claremont",
                "device_type": "光猫",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "162.59.255.233",
            "data": {
                "id": "162.59.255.233",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Burton-Kennedy.LLC",
                "type": "entity",
                "latitude": "41.85059",
                "longitude": "-87.882",
                "country": "United States",
                "province": "Chicago",
                "city": "Westchester",
                "device_type": "安防设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "250.218.224.65",
            "data": {
                "id": "250.218.224.65",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Simpson Group.Inc",
                "type": "entity",
                "latitude": "41.9001",
                "longitude": "-71.08977",
                "country": "United States",
                "province": "New_York",
                "city": "Taunton",
                "device_type": "智能电表",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "156.223.36.16",
            "data": {
                "id": "156.223.36.16",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Fox Group.LLC",
                "type": "entity",
                "latitude": "38.54491",
                "longitude": "-121.74052",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Davis",
                "device_type": "安防设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "164.95.68.188",
            "data": {
                "id": "164.95.68.188",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Scott Inc.Group",
                "type": "entity",
                "latitude": "25.67927",
                "longitude": "-80.31727",
                "country": "United States",
                "province": "New_York",
                "city": "Kendall",
                "device_type": "NVR设备",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "4.166.95.134",
            "data": {
                "id": "4.166.95.134",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Beltran and Sons.Group",
                "type": "entity",
                "latitude": "42.52787",
                "longitude": "-70.92866",
                "country": "United States",
                "province": "New_York",
                "city": "Peabody",
                "device_type": "NVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "202.58.175.122",
            "data": {
                "id": "202.58.175.122",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Schultz, Hill and Anderson.and Sons",
                "type": "entity",
                "latitude": "40.94065",
                "longitude": "-73.99681",
                "country": "United States",
                "province": "New_York",
                "city": "Dumont",
                "device_type": "网络存储设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "129.46.83.206",
            "data": {
                "id": "129.46.83.206",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hubbard LLC.Inc",
                "type": "entity",
                "latitude": "29.65163",
                "longitude": "-82.32483",
                "country": "United States",
                "province": "New_York",
                "city": "Gainesville",
                "device_type": "AP设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "242.121.167.130",
            "data": {
                "id": "242.121.167.130",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Evans, Parker and Oconnor.Inc",
                "type": "entity",
                "latitude": "31.84568",
                "longitude": "-102.36764",
                "country": "United States",
                "province": "Chicago",
                "city": "Odessa",
                "device_type": "DVR设备",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "213.156.187.160",
            "data": {
                "id": "213.156.187.160",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "James, Kemp and Madden.Ltd",
                "type": "entity",
                "latitude": "44.73941",
                "longitude": "-93.12577",
                "country": "United States",
                "province": "Chicago",
                "city": "Rosemount",
                "device_type": "防火墙",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "132.148.147.135",
            "data": {
                "id": "132.148.147.135",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Campos Inc.PLC",
                "type": "entity",
                "latitude": "34.25628",
                "longitude": "-78.04471",
                "country": "United States",
                "province": "New_York",
                "city": "Leland",
                "device_type": "NVR设备",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "172.88.24.150",
            "data": {
                "id": "172.88.24.150",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Salinas Ltd.Inc",
                "type": "entity",
                "latitude": "42.55308",
                "longitude": "-87.93341",
                "country": "United States",
                "province": "Chicago",
                "city": "Pleasant Prairie",
                "device_type": "NVR设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "0.124.228.66",
            "data": {
                "id": "0.124.228.66",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Thompson, Garcia and Vasquez.Inc",
                "type": "entity",
                "latitude": "39.08367",
                "longitude": "-84.50855",
                "country": "United States",
                "province": "New_York",
                "city": "Covington",
                "device_type": "摄像头",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "252.160.2.48",
            "data": {
                "id": "252.160.2.48",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Taylor, Johnson and James.and Sons",
                "type": "entity",
                "latitude": "40.82232",
                "longitude": "-74.15987",
                "country": "United States",
                "province": "New_York",
                "city": "Nutley",
                "device_type": "DVR设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "237.178.159.171",
            "data": {
                "id": "237.178.159.171",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Warren, Buck and Macias.PLC",
                "type": "entity",
                "latitude": "41.55815",
                "longitude": "-73.0515",
                "country": "United States",
                "province": "New_York",
                "city": "Waterbury",
                "device_type": "防火墙",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "254.27.249.71",
            "data": {
                "id": "254.27.249.71",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Ramos Group.and Sons",
                "type": "entity",
                "latitude": "25.67927",
                "longitude": "-80.31727",
                "country": "United States",
                "province": "New_York",
                "city": "Kendall",
                "device_type": "路由器",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "193.147.222.51",
            "data": {
                "id": "193.147.222.51",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Alexander-Elliott.and Sons",
                "type": "entity",
                "latitude": "41.84364",
                "longitude": "-87.71255",
                "country": "United States",
                "province": "Chicago",
                "city": "South Lawndale",
                "device_type": "光猫",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "99.190.224.53",
            "data": {
                "id": "99.190.224.53",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Camacho-Gomez.Ltd",
                "type": "entity",
                "latitude": "31.76212",
                "longitude": "-95.63079",
                "country": "United States",
                "province": "Chicago",
                "city": "Palestine",
                "device_type": "网络存储设备",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "243.21.143.167",
            "data": {
                "id": "243.21.143.167",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Miles-Whitney.Ltd",
                "type": "entity",
                "latitude": "41.6764",
                "longitude": "-91.58045",
                "country": "United States",
                "province": "Chicago",
                "city": "Coralville",
                "device_type": "路由器",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "241.250.90.13",
            "data": {
                "id": "241.250.90.13",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Myers-Nguyen.Inc",
                "type": "entity",
                "latitude": "42.52787",
                "longitude": "-70.92866",
                "country": "United States",
                "province": "New_York",
                "city": "Peabody",
                "device_type": "DVR设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "224.248.79.38",
            "data": {
                "id": "224.248.79.38",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Berger, Warren and Anthony.and Sons",
                "type": "entity",
                "latitude": "38.70734",
                "longitude": "-77.02303",
                "country": "United States",
                "province": "New_York",
                "city": "Fort Washington",
                "device_type": "NVR设备",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "249.238.205.50",
            "data": {
                "id": "249.238.205.50",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Arroyo Ltd.PLC",
                "type": "entity",
                "latitude": "34.06635",
                "longitude": "-84.67837",
                "country": "United States",
                "province": "New_York",
                "city": "Acworth",
                "device_type": "防火墙",
                "port": 80
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "252.34.179.155",
            "data": {
                "id": "252.34.179.155",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mendez, Drake and Flores.Ltd",
                "type": "entity",
                "latitude": "42.52787",
                "longitude": "-70.92866",
                "country": "United States",
                "province": "New_York",
                "city": "Peabody",
                "device_type": "安防设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "80.157.88.148",
            "data": {
                "id": "80.157.88.148",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Kramer-Dickerson.LLC",
                "type": "entity",
                "latitude": "41.55838",
                "longitude": "-81.56929",
                "country": "United States",
                "province": "New_York",
                "city": "Collinwood",
                "device_type": "防火墙",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "54.89.235.39",
            "data": {
                "id": "54.89.235.39",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Kane Ltd.PLC",
                "type": "entity",
                "latitude": "40.24537",
                "longitude": "-75.64963",
                "country": "United States",
                "province": "New_York",
                "city": "Pottstown",
                "device_type": "安防设备",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "156.240.120.51",
            "data": {
                "id": "156.240.120.51",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Fowler-Smith.and Sons",
                "type": "entity",
                "latitude": "44.99012",
                "longitude": "-123.02621",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Keizer",
                "device_type": "NVR设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "141.135.198.206",
            "data": {
                "id": "141.135.198.206",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Espinoza, White and Hardy.Inc",
                "type": "entity",
                "latitude": "45.0408",
                "longitude": "-93.263",
                "country": "United States",
                "province": "Chicago",
                "city": "Columbia Heights",
                "device_type": "NVR设备",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1.127.247.219",
            "data": {
                "id": "1.127.247.219",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Black-Reynolds.Inc",
                "type": "entity",
                "latitude": "31.76212",
                "longitude": "-95.63079",
                "country": "United States",
                "province": "Chicago",
                "city": "Palestine",
                "device_type": "路由器",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "121.126.157.32",
            "data": {
                "id": "121.126.157.32",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Richard, Patterson and Anthony.LLC",
                "type": "entity",
                "latitude": "33.76446",
                "longitude": "-117.79394",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "North Tustin",
                "device_type": "防火墙",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "100.55.234.23",
            "data": {
                "id": "100.55.234.23",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Townsend-Palmer.Group",
                "type": "entity",
                "latitude": "33.92946",
                "longitude": "-116.97725",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Beaumont",
                "device_type": "安防设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "46.32.39.223",
            "data": {
                "id": "46.32.39.223",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Williams-Santiago.Inc",
                "type": "entity",
                "latitude": "36.06523",
                "longitude": "-119.01677",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Porterville",
                "device_type": "智能电表",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "49.68.16.91",
            "data": {
                "id": "49.68.16.91",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Johnson, Johnson and Smith.LLC",
                "type": "entity",
                "latitude": "33.76446",
                "longitude": "-117.79394",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "North Tustin",
                "device_type": "DVR设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "147.123.254.52",
            "data": {
                "id": "147.123.254.52",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Butler-Adams.Group",
                "type": "entity",
                "latitude": "32.35126",
                "longitude": "-95.30106",
                "country": "United States",
                "province": "Chicago",
                "city": "Tyler",
                "device_type": "智能电表",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "52.197.31.216",
            "data": {
                "id": "52.197.31.216",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Krause Ltd.PLC",
                "type": "entity",
                "latitude": "38.91817",
                "longitude": "-78.19444",
                "country": "United States",
                "province": "New_York",
                "city": "Front Royal",
                "device_type": "网络存储设备",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "219.238.255.208",
            "data": {
                "id": "219.238.255.208",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Williams, Lopez and Miller.LLC",
                "type": "entity",
                "latitude": "34.25628",
                "longitude": "-78.04471",
                "country": "United States",
                "province": "New_York",
                "city": "Leland",
                "device_type": "DVR设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "53.236.26.88",
            "data": {
                "id": "53.236.26.88",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Garza-Bartlett.Inc",
                "type": "entity",
                "latitude": "27.09978",
                "longitude": "-82.45426",
                "country": "United States",
                "province": "New_York",
                "city": "Venice",
                "device_type": "DVR设备",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "48.242.131.1",
            "data": {
                "id": "48.242.131.1",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hale-Black.and Sons",
                "type": "entity",
                "latitude": "33.50921",
                "longitude": "-111.89903",
                "country": "United States",
                "province": "Phoenix",
                "city": "Scottsdale",
                "device_type": "DVR设备",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "15.5.24.139",
            "data": {
                "id": "15.5.24.139",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Gordon, Hines and West.Ltd",
                "type": "entity",
                "latitude": "40.57788",
                "longitude": "-73.95958",
                "country": "United States",
                "province": "New_York",
                "city": "Brighton Beach",
                "device_type": "防火墙",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "83.91.90.159",
            "data": {
                "id": "83.91.90.159",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Arnold, Edwards and Clark.Ltd",
                "type": "entity",
                "latitude": "33.44872",
                "longitude": "-86.78777",
                "country": "United States",
                "province": "Chicago",
                "city": "Vestavia Hills",
                "device_type": "NVR设备",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "141.120.181.116",
            "data": {
                "id": "141.120.181.116",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Beck, Huynh and Jennings.Group",
                "type": "entity",
                "latitude": "44.99012",
                "longitude": "-123.02621",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Keizer",
                "device_type": "安防设备",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "208.160.23.170",
            "data": {
                "id": "208.160.23.170",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Davis-Martinez.Inc",
                "type": "entity",
                "latitude": "26.91756",
                "longitude": "-82.07842",
                "country": "United States",
                "province": "New_York",
                "city": "Punta Gorda Isles",
                "device_type": "AP设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "236.237.55.139",
            "data": {
                "id": "236.237.55.139",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Garrett, Thomas and Barton.LLC",
                "type": "entity",
                "latitude": "45.49428",
                "longitude": "-122.86705",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Aloha",
                "device_type": "路由器",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "152.142.28.104",
            "data": {
                "id": "152.142.28.104",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Vaughn, Martin and Campbell.PLC",
                "type": "entity",
                "latitude": "40.93121",
                "longitude": "-73.89875",
                "country": "United States",
                "province": "New_York",
                "city": "Yonkers",
                "device_type": "防火墙",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "103.114.253.112",
            "data": {
                "id": "103.114.253.112",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mcintosh Inc.LLC",
                "type": "entity",
                "latitude": "30.16688",
                "longitude": "-96.39774",
                "country": "United States",
                "province": "Chicago",
                "city": "Brenham",
                "device_type": "DVR设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "226.113.20.177",
            "data": {
                "id": "226.113.20.177",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Jenkins-Cameron.Group",
                "type": "entity",
                "latitude": "45.53929",
                "longitude": "-122.38731",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Troutdale",
                "device_type": "AP设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "45.13.59.31",
            "data": {
                "id": "45.13.59.31",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Rivas-Baker.LLC",
                "type": "entity",
                "latitude": "45.16024",
                "longitude": "-93.08883",
                "country": "United States",
                "province": "Chicago",
                "city": "Lino Lakes",
                "device_type": "光猫",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "13.157.128.158",
            "data": {
                "id": "13.157.128.158",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Williams and Sons.Inc",
                "type": "entity",
                "latitude": "41.84364",
                "longitude": "-87.71255",
                "country": "United States",
                "province": "Chicago",
                "city": "South Lawndale",
                "device_type": "网络存储设备",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "14.204.255.246",
            "data": {
                "id": "14.204.255.246",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Howard PLC.Group",
                "type": "entity",
                "latitude": "30.5427",
                "longitude": "-97.54667",
                "country": "United States",
                "province": "Chicago",
                "city": "Hutto",
                "device_type": "摄像头",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "181.64.162.171",
            "data": {
                "id": "181.64.162.171",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Duncan, Fisher and Fitzgerald.Inc",
                "type": "entity",
                "latitude": "41.16704",
                "longitude": "-73.20483",
                "country": "United States",
                "province": "New_York",
                "city": "Bridgeport",
                "device_type": "网络存储设备",
                "port": 80
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "37.29.21.95",
            "data": {
                "id": "37.29.21.95",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Greer, Cox and Holloway.Ltd",
                "type": "entity",
                "latitude": "42.4251",
                "longitude": "-71.06616",
                "country": "United States",
                "province": "New_York",
                "city": "Malden",
                "device_type": "安防设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "178.48.45.238",
            "data": {
                "id": "178.48.45.238",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Shepherd Inc.LLC",
                "type": "entity",
                "latitude": "34.09611",
                "longitude": "-118.10583",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "San Gabriel",
                "device_type": "智能电表",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "229.16.117.170",
            "data": {
                "id": "229.16.117.170",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Nguyen and Sons.Ltd",
                "type": "entity",
                "latitude": "41.6764",
                "longitude": "-91.58045",
                "country": "United States",
                "province": "Chicago",
                "city": "Coralville",
                "device_type": "AP设备",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "101.220.166.228",
            "data": {
                "id": "101.220.166.228",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Gomez PLC.Ltd",
                "type": "entity",
                "latitude": "28.54944",
                "longitude": "-81.77285",
                "country": "United States",
                "province": "New_York",
                "city": "Clermont",
                "device_type": "NVR设备",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "85.255.6.118",
            "data": {
                "id": "85.255.6.118",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Cunningham, Mcclure and Callahan.PLC",
                "type": "entity",
                "latitude": "31.84568",
                "longitude": "-102.36764",
                "country": "United States",
                "province": "Chicago",
                "city": "Odessa",
                "device_type": "NVR设备",
                "port": 80
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "67.133.218.48",
            "data": {
                "id": "67.133.218.48",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mitchell and Sons.LLC",
                "type": "entity",
                "latitude": "42.55308",
                "longitude": "-87.93341",
                "country": "United States",
                "province": "Chicago",
                "city": "Pleasant Prairie",
                "device_type": "路由器",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "248.172.226.250",
            "data": {
                "id": "248.172.226.250",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Johnson-Dickson.Ltd",
                "type": "entity",
                "latitude": "32.44874",
                "longitude": "-99.73314",
                "country": "United States",
                "province": "Chicago",
                "city": "Abilene",
                "device_type": "AP设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "254.86.68.38",
            "data": {
                "id": "254.86.68.38",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Bennett, Hodges and Green.Ltd",
                "type": "entity",
                "latitude": "40.82232",
                "longitude": "-74.15987",
                "country": "United States",
                "province": "New_York",
                "city": "Nutley",
                "device_type": "摄像头",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "115.189.112.63",
            "data": {
                "id": "115.189.112.63",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Brooks, Mays and Harrington.Group",
                "type": "entity",
                "latitude": "41.24255",
                "longitude": "-82.61573",
                "country": "United States",
                "province": "New_York",
                "city": "Norwalk",
                "device_type": "DVR设备",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "67.92.219.36",
            "data": {
                "id": "67.92.219.36",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Cox, Hurley and Brown.Inc",
                "type": "entity",
                "latitude": "42.52787",
                "longitude": "-70.92866",
                "country": "United States",
                "province": "New_York",
                "city": "Peabody",
                "device_type": "摄像头",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "124.45.31.170",
            "data": {
                "id": "124.45.31.170",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Taylor-Luna.Ltd",
                "type": "entity",
                "latitude": "44.73941",
                "longitude": "-93.12577",
                "country": "United States",
                "province": "Chicago",
                "city": "Rosemount",
                "device_type": "NVR设备",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "179.253.30.175",
            "data": {
                "id": "179.253.30.175",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Dillon, Smith and Bryant.LLC",
                "type": "entity",
                "latitude": "35.25064",
                "longitude": "-91.73625",
                "country": "United States",
                "province": "Chicago",
                "city": "Searcy",
                "device_type": "网络存储设备",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "69.70.61.245",
            "data": {
                "id": "69.70.61.245",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Briggs Inc.LLC",
                "type": "entity",
                "latitude": "30.5427",
                "longitude": "-97.54667",
                "country": "United States",
                "province": "Chicago",
                "city": "Hutto",
                "device_type": "DVR设备",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "118.135.6.139",
            "data": {
                "id": "118.135.6.139",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Simmons-Foster.PLC",
                "type": "entity",
                "latitude": "26.91756",
                "longitude": "-82.07842",
                "country": "United States",
                "province": "New_York",
                "city": "Punta Gorda Isles",
                "device_type": "安防设备",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "128.56.12.83",
            "data": {
                "id": "128.56.12.83",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Vaughn LLC.Inc",
                "type": "entity",
                "latitude": "40.63316",
                "longitude": "-74.13653",
                "country": "United States",
                "province": "New_York",
                "city": "Port Richmond",
                "device_type": "摄像头",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "190.74.145.159",
            "data": {
                "id": "190.74.145.159",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Johnson-Carrillo.LLC",
                "type": "entity",
                "latitude": "33.98154",
                "longitude": "-81.23621",
                "country": "United States",
                "province": "New_York",
                "city": "Lexington",
                "device_type": "AP设备",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "2.156.33.232",
            "data": {
                "id": "2.156.33.232",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Snyder LLC.LLC",
                "type": "entity",
                "latitude": "34.25628",
                "longitude": "-78.04471",
                "country": "United States",
                "province": "New_York",
                "city": "Leland",
                "device_type": "防火墙",
                "port": 23
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "99.36.237.19",
            "data": {
                "id": "99.36.237.19",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Reed Ltd.PLC",
                "type": "entity",
                "latitude": "40.5576",
                "longitude": "-74.28459",
                "country": "United States",
                "province": "New_York",
                "city": "Woodbridge",
                "device_type": "安防设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "85.239.136.59",
            "data": {
                "id": "85.239.136.59",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mitchell LLC.LLC",
                "type": "entity",
                "latitude": "36.20829",
                "longitude": "-115.98391",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Pahrump",
                "device_type": "路由器",
                "port": 80
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "94.40.57.176",
            "data": {
                "id": "94.40.57.176",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mendoza-Welch.Ltd",
                "type": "entity",
                "latitude": "35.05266",
                "longitude": "-78.87836",
                "country": "United States",
                "province": "New_York",
                "city": "Fayetteville",
                "device_type": "路由器",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "180.187.192.44",
            "data": {
                "id": "180.187.192.44",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Briggs, Freeman and Price.Inc",
                "type": "entity",
                "latitude": "27.09978",
                "longitude": "-82.45426",
                "country": "United States",
                "province": "New_York",
                "city": "Venice",
                "device_type": "AP设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "174.53.26.76",
            "data": {
                "id": "174.53.26.76",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Kelly, Mitchell and Bryan.Ltd",
                "type": "entity",
                "latitude": "40.64621",
                "longitude": "-73.97069",
                "country": "United States",
                "province": "New_York",
                "city": "Kensington",
                "device_type": "DVR设备",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "128.205.143.114",
            "data": {
                "id": "128.205.143.114",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Gill and Sons.and Sons",
                "type": "entity",
                "latitude": "40.57788",
                "longitude": "-73.95958",
                "country": "United States",
                "province": "New_York",
                "city": "Brighton Beach",
                "device_type": "网络存储设备",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "148.207.31.115",
            "data": {
                "id": "148.207.31.115",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Dixon, Jordan and Oliver.Inc",
                "type": "entity",
                "latitude": "34.21639",
                "longitude": "-119.0376",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Camarillo",
                "device_type": "防火墙",
                "port": 80
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "222.38.202.85",
            "data": {
                "id": "222.38.202.85",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Sheppard Inc.Group",
                "type": "entity",
                "latitude": "38.91817",
                "longitude": "-78.19444",
                "country": "United States",
                "province": "New_York",
                "city": "Front Royal",
                "device_type": "NVR设备",
                "port": 443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "6.189.198.91",
            "data": {
                "id": "6.189.198.91",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Kennedy Group.Group",
                "type": "entity",
                "latitude": "41.55815",
                "longitude": "-73.0515",
                "country": "United States",
                "province": "New_York",
                "city": "Waterbury",
                "device_type": "路由器",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "109.234.191.249",
            "data": {
                "id": "109.234.191.249",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wang-Wells.Ltd",
                "type": "entity",
                "latitude": "32.42067",
                "longitude": "-104.22884",
                "country": "United States",
                "province": "Denver",
                "city": "Carlsbad",
                "device_type": "NVR设备",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "176.214.212.38",
            "data": {
                "id": "176.214.212.38",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mcdaniel-Payne.and Sons",
                "type": "entity",
                "latitude": "26.18924",
                "longitude": "-98.15529",
                "country": "United States",
                "province": "Chicago",
                "city": "San Juan",
                "device_type": "防火墙",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "108.41.75.183",
            "data": {
                "id": "108.41.75.183",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wilson, Fuentes and Cooke.and Sons",
                "type": "entity",
                "latitude": "40.65995",
                "longitude": "-111.99633",
                "country": "United States",
                "province": "Denver",
                "city": "Kearns",
                "device_type": "防火墙",
                "port": 554
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "15.177.120.189",
            "data": {
                "id": "15.177.120.189",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hall, Jordan and Blackwell.Group",
                "type": "entity",
                "latitude": "32.5007",
                "longitude": "-94.74049",
                "country": "United States",
                "province": "Chicago",
                "city": "Longview",
                "device_type": "安防设备",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "88.211.126.204",
            "data": {
                "id": "88.211.126.204",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Green-Green.Inc",
                "type": "entity",
                "latitude": "37.60876",
                "longitude": "-77.37331",
                "country": "United States",
                "province": "New_York",
                "city": "Mechanicsville",
                "device_type": "光猫",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "187.13.183.148",
            "data": {
                "id": "187.13.183.148",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Harrison and Sons.Inc",
                "type": "entity",
                "latitude": "40.60538",
                "longitude": "-73.75513",
                "country": "United States",
                "province": "New_York",
                "city": "Far Rockaway",
                "device_type": "光猫",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "230.39.199.251",
            "data": {
                "id": "230.39.199.251",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Fleming Inc.LLC",
                "type": "entity",
                "latitude": "36.61033",
                "longitude": "-88.31476",
                "country": "United States",
                "province": "Chicago",
                "city": "Murray",
                "device_type": "DVR设备",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "147.114.150.94",
            "data": {
                "id": "147.114.150.94",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Taylor PLC.Ltd",
                "type": "entity",
                "latitude": "32.9156",
                "longitude": "-117.14392",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Mira Mesa",
                "device_type": "光猫",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "141.159.101.196",
            "data": {
                "id": "141.159.101.196",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Garcia, Gonzalez and Bailey.and Sons",
                "type": "entity",
                "latitude": "40.24537",
                "longitude": "-75.64963",
                "country": "United States",
                "province": "New_York",
                "city": "Pottstown",
                "device_type": "DVR设备",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "237.107.99.68",
            "data": {
                "id": "237.107.99.68",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Hernandez Group.and Sons",
                "type": "entity",
                "latitude": "42.16808",
                "longitude": "-88.42814",
                "country": "United States",
                "province": "Chicago",
                "city": "Huntley",
                "device_type": "网络存储设备",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "105.132.85.252",
            "data": {
                "id": "105.132.85.252",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Wheeler-Owen.LLC",
                "type": "entity",
                "latitude": "33.08014",
                "longitude": "-83.2321",
                "country": "United States",
                "province": "New_York",
                "city": "Milledgeville",
                "device_type": "路由器",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "236.103.123.78",
            "data": {
                "id": "236.103.123.78",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Graves-Brown.and Sons",
                "type": "entity",
                "latitude": "44.73941",
                "longitude": "-93.12577",
                "country": "United States",
                "province": "Chicago",
                "city": "Rosemount",
                "device_type": "安防设备",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "201.201.81.46",
            "data": {
                "id": "201.201.81.46",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Mann and Sons.Ltd",
                "type": "entity",
                "latitude": "47.4943",
                "longitude": "-122.24092",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Bryn Mawr-Skyway",
                "device_type": "防火墙",
                "port": 8443
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "201.22.187.55",
            "data": {
                "id": "201.22.187.55",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Estrada Inc.and Sons",
                "type": "entity",
                "latitude": "44.73941",
                "longitude": "-93.12577",
                "country": "United States",
                "province": "Chicago",
                "city": "Rosemount",
                "device_type": "摄像头",
                "port": 9200
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "28.8.247.190",
            "data": {
                "id": "28.8.247.190",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Burton LLC.Group",
                "type": "entity",
                "latitude": "36.91023",
                "longitude": "-121.75689",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "Watsonville",
                "device_type": "NVR设备",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "122.163.1.143",
            "data": {
                "id": "122.163.1.143",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Salinas-Kelley.PLC",
                "type": "entity",
                "latitude": "41.54566",
                "longitude": "-71.29144",
                "country": "United States",
                "province": "New_York",
                "city": "Middletown",
                "device_type": "光猫",
                "port": 3306
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "194.2.74.88",
            "data": {
                "id": "194.2.74.88",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Nguyen Group.Inc",
                "type": "entity",
                "latitude": "36.02506",
                "longitude": "-86.77917",
                "country": "United States",
                "province": "Chicago",
                "city": "Brentwood Estates",
                "device_type": "网络存储设备",
                "port": 22
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "207.199.27.220",
            "data": {
                "id": "207.199.27.220",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Lane Inc.LLC",
                "type": "entity",
                "latitude": "41.9001",
                "longitude": "-71.08977",
                "country": "United States",
                "province": "New_York",
                "city": "Taunton",
                "device_type": "防火墙",
                "port": 8080
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "12.203.79.180",
            "data": {
                "id": "12.203.79.180",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Marshall-Fields.Ltd",
                "type": "entity",
                "latitude": "43.54072",
                "longitude": "-116.56346",
                "country": "United States",
                "province": "Boise",
                "city": "Nampa",
                "device_type": "光猫",
                "port": 8081
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "222.56.75.4",
            "data": {
                "id": "222.56.75.4",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Taylor, Sims and Miller.LLC",
                "type": "entity",
                "latitude": "32.54044",
                "longitude": "-82.90375",
                "country": "United States",
                "province": "New_York",
                "city": "Dublin",
                "device_type": "摄像头",
                "port": 9000
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "176.60.31.134",
            "data": {
                "id": "176.60.31.134",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Gonzalez, Campbell and Lowe.Ltd",
                "type": "entity",
                "latitude": "45.0408",
                "longitude": "-93.263",
                "country": "United States",
                "province": "Chicago",
                "city": "Columbia Heights",
                "device_type": "智能电表",
                "port": 8089
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "72.19.95.30",
            "data": {
                "id": "72.19.95.30",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Townsend-Gibson.and Sons",
                "type": "entity",
                "latitude": "34.09611",
                "longitude": "-118.10583",
                "country": "United States",
                "province": "Los_Angeles",
                "city": "San Gabriel",
                "device_type": "网络存储设备",
                "port": 80
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "11.220.158.114",
            "data": {
                "id": "11.220.158.114",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Pearson, White and Reid.Group",
                "type": "entity",
                "latitude": "40.65538",
                "longitude": "-74.38987",
                "country": "United States",
                "province": "New_York",
                "city": "Scotch Plains",
                "device_type": "NVR设备",
                "port": 4567
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "232.255.113.31",
            "data": {
                "id": "232.255.113.31",
                "dataType": "asset",
                "legendType": "在线设备资产",
                "company": "Davis-Martin.Group",
                "type": "entity",
                "latitude": "33.35283",
                "longitude": "-111.78903",
                "country": "United States",
                "province": "Phoenix",
                "city": "Gilbert",
                "device_type": "网络存储设备",
                "port": 9100
            },
            "nodeType": "asset",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "France",
            "data": {
                "id": "France",
                "dataType": "country",
                "legendType": "国家"
            },
            "nodeType": "country",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "Canada",
            "data": {
                "id": "Canada",
                "dataType": "country",
                "legendType": "国家"
            },
            "nodeType": "country",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "Australia",
            "data": {
                "id": "Australia",
                "dataType": "country",
                "legendType": "国家"
            },
            "nodeType": "country",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "China",
            "data": {
                "id": "China",
                "dataType": "country",
                "legendType": "国家"
            },
            "nodeType": "country",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "Juniper",
            "data": {
                "id": "Juniper",
                "dataType": "manu",
                "legendType": "设备制造商",
                "country": "France"
            },
            "nodeType": "manu",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "Trendnet",
            "data": {
                "id": "Trendnet",
                "dataType": "manu",
                "legendType": "设备制造商",
                "country": "China"
            },
            "nodeType": "manu",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "QNAP",
            "data": {
                "id": "QNAP",
                "dataType": "manu",
                "legendType": "设备制造商",
                "country": "Australia"
            },
            "nodeType": "manu",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1673",
            "data": {
                "id": 1673,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "525852fd5f1ddbeb4317f31ea1f21d8c",
                "manu": "Cisco",
                "device_type": "路由器",
                "name": "yyy_v3.2.zip",
                "os": "ZynOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "8443",
            "data": {
                "id": 8443,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "0a1cd4956037792c8c5e390b4518515a",
                "manu": "ASUS",
                "device_type": "网络存储设备",
                "name": "vvv_v20200902.tar",
                "os": "Linux"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "4793",
            "data": {
                "id": 4793,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "26fec2543faeb345acfef192457fe8ca",
                "manu": "Juniper",
                "device_type": "安防设备",
                "name": "vvv_v20200902.tar",
                "os": "JunOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "4360",
            "data": {
                "id": 4360,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "b2987b8a8f516cdb1222c32f3eae8c9f",
                "manu": "D-Link",
                "device_type": "摄像头",
                "name": "xxx_v1.0.bin",
                "os": "DrayOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "4971",
            "data": {
                "id": 4971,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "278d3217c710a74f1381ae46060b0737",
                "manu": "ASUS",
                "device_type": "防火墙",
                "name": "xxx_v1.0.bin",
                "os": "Linux"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "6300",
            "data": {
                "id": 6300,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "a053c7c3fd37455724025a875a01bb8e",
                "manu": "D-Link",
                "device_type": "AP设备",
                "name": "xxx_v1.0.bin",
                "os": "DrayOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1367",
            "data": {
                "id": 1367,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "b9c1d56cd6f04ad4b6458a3f37bcc46a",
                "manu": "Draytek",
                "device_type": "防火墙",
                "name": "zzz_v3.9.tar.gz",
                "os": "QNX"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1825",
            "data": {
                "id": 1825,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "005b79783d711b066479b4c45c1ab478",
                "manu": "ABB",
                "device_type": "安防设备",
                "name": "zzz_v3.9.tar.gz",
                "os": "JunOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "8074",
            "data": {
                "id": 8074,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "298919e8dce46e9cee62c60f0f88f299",
                "manu": "Synology",
                "device_type": "摄像头",
                "name": "xxx_v1.0.bin",
                "os": "JunOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "5525",
            "data": {
                "id": 5525,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "275b3c09904967aff64d6068a44ad50e",
                "manu": "Trendnet",
                "device_type": "光猫",
                "name": "xxx_v1.0.bin",
                "os": "QNX"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "6884",
            "data": {
                "id": 6884,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "c056153bc64cc3d0fdcb9402f316a720",
                "manu": "Juniper",
                "device_type": "摄像头",
                "name": "yyy_v3.2.zip",
                "os": "JunOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "6967",
            "data": {
                "id": 6967,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "c61a82a2693b43b7720ee15e50e05671",
                "manu": "Trendnet",
                "device_type": "安防设备",
                "name": "ssc_md_20220303.bin",
                "os": "DrayOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "7721",
            "data": {
                "id": 7721,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "1893ff1c83cb6a3f272c32bc3590634f",
                "manu": "QNAP",
                "device_type": "AP设备",
                "name": "yyy_v3.2.zip",
                "os": "JunOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1788",
            "data": {
                "id": 1788,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "263ba615aa6993f4fce485dfe5b88748",
                "manu": "ABB",
                "device_type": "路由器",
                "name": "xxx_v1.0.bin",
                "os": "QNX"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "5317",
            "data": {
                "id": 5317,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "2463b91a02dd4496517837985a6c1cee",
                "manu": "Trendnet",
                "device_type": "防火墙",
                "name": "xxx_v1.09.tar",
                "os": "Linux"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "3371",
            "data": {
                "id": 3371,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "9c8c643f8aeed93d7e61a4df10ffc0dd",
                "manu": "ASUS",
                "device_type": "路由器",
                "name": "xxx_v1.0.bin",
                "os": "DrayOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "3117",
            "data": {
                "id": 3117,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "3614deac95d4945d166c1db4bd445c18",
                "manu": "QNAP",
                "device_type": "路由器",
                "name": "xxx_v1.0.bin",
                "os": "FortiOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1713",
            "data": {
                "id": 1713,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "222667d440edfd8a87113aca749f980f",
                "manu": "ASUS",
                "device_type": "摄像头",
                "name": "xxx_v1.09.tar",
                "os": "FreeRTOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "8898",
            "data": {
                "id": 8898,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "b1e8d2f7af9607ea7f05d3657677115e",
                "manu": "Draytek",
                "device_type": "DVR设备",
                "name": "ssc_md_20220303.bin",
                "os": "ZynOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "1597",
            "data": {
                "id": 1597,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "73904b9faeedfbbac434d469530d7048",
                "manu": "Synology",
                "device_type": "光猫",
                "name": "xxx_v1.09.tar",
                "os": "FortiOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "5054",
            "data": {
                "id": 5054,
                "dataType": "firmware",
                "legendType": "固件",
                "md5": "c7de34720026c7e0bb45fe9a6b5be745",
                "manu": "Juniper",
                "device_type": "智能电表",
                "name": "xxx_v1.0.bin",
                "os": "FortiOS"
            },
            "nodeType": "firmware",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "dc09ee2ff472a54051ed99ba760604c6",
            "data": {
                "id": "dc09ee2ff472a54051ed99ba760604c6",
                "name": "busybox",
                "dataType": "file",
                "legendType": "单文件",
                "md5": "dc09ee2ff472a54051ed99ba760604c6"
            },
            "nodeType": "file",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "42cea58ac6bd53546977a199dfae338b",
            "data": {
                "id": "42cea58ac6bd53546977a199dfae338b",
                "name": "busybox",
                "dataType": "file",
                "legendType": "单文件",
                "md5": "42cea58ac6bd53546977a199dfae338b"
            },
            "nodeType": "file",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "62d9e1385c974b239ecea83e584869bc",
            "data": {
                "id": "62d9e1385c974b239ecea83e584869bc",
                "name": "busybox",
                "dataType": "file",
                "legendType": "单文件",
                "md5": "62d9e1385c974b239ecea83e584869bc"
            },
            "nodeType": "file",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "CVE-2019-2528",
            "data": {
                "id": "CVE-2019-2528",
                "dataType": "cve",
                "legendType": "漏洞事件"
            },
            "nodeType": "cve",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "CVE-2021-5191",
            "data": {
                "id": "CVE-2021-5191",
                "dataType": "cve",
                "legendType": "漏洞事件"
            },
            "nodeType": "cve",
            "nodeTypeKeyFromProperties": "dataType"
        }, {
            "id": "pink_botnet",
            "data": {
                "id": "pink_botnet",
                "dataType": "botnet",
                "legendType": "僵尸网络家族",
                "first_seen": "2020-06-06",
                "last_seen": "2021-07-18"
            },
            "nodeType": "botnet",
            "nodeTypeKeyFromProperties": "dataType"
        }],
        "edges": [{
            "data": {
                "source": "6.79.223.106",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "6.79.223.106",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "6.79.223.106",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "6.79.223.106",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "141.120.181.116",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "141.120.181.116",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "141.120.181.116",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "141.120.181.116",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "91.1.100.56",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "91.1.100.56",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "91.219.218.86",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "91.219.218.86",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "133.102.109.244",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "133.102.109.244",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "253.44.233.16",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "253.44.233.16",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "198.242.63.234",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "198.242.63.234",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "165.139.207.29",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "165.139.207.29",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "41.3.228.218",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "41.3.228.218",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "238.115.65.77",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "238.115.65.77",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "10.220.18.159",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "10.220.18.159",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "188.192.225.36",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "188.192.225.36",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "220.144.235.43",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "220.144.235.43",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "76.61.120.126",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "76.61.120.126",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "70.147.91.94",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "70.147.91.94",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "159.76.24.149",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "159.76.24.149",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "59.56.228.252",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "59.56.228.252",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "231.104.58.87",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "231.104.58.87",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "227.236.45.143",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "227.236.45.143",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "105.134.35.50",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "105.134.35.50",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "184.30.78.207",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "184.30.78.207",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "45.234.221.156",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "45.234.221.156",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "93.216.37.234",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "93.216.37.234",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "2.176.133.129",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "2.176.133.129",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "1.181.75.114",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "1.181.75.114",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "6.156.222.211",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "6.156.222.211",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "146.57.148.63",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "146.57.148.63",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "160.51.3.109",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "160.51.3.109",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "153.144.200.99",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "153.144.200.99",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "85.96.69.136",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "85.96.69.136",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "90.208.46.115",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "90.208.46.115",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "6.125.158.237",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "6.125.158.237",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "74.109.124.159",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "74.109.124.159",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "149.118.6.147",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "149.118.6.147",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "202.218.41.145",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "202.218.41.145",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "214.17.242.34",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "214.17.242.34",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "21.132.106.162",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "21.132.106.162",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "54.125.106.58",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "54.125.106.58",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "132.182.169.210",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "132.182.169.210",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "169.210.181.208",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "169.210.181.208",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "17.127.137.115",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "17.127.137.115",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "3.47.159.36",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "3.47.159.36",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "49.123.159.57",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "49.123.159.57",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "201.182.91.21",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "201.182.91.21",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "231.44.202.102",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "231.44.202.102",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "114.72.197.181",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "114.72.197.181",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "153.35.142.189",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "153.35.142.189",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "0.24.80.255",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "0.24.80.255",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "212.81.47.85",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "212.81.47.85",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "143.56.126.199",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "143.56.126.199",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "151.174.239.54",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "151.174.239.54",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "91.1.100.56",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "91.1.100.56",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62.38.49.27",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "62.38.49.27",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "115.108.176.150",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "115.108.176.150",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "120.93.70.57",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "120.93.70.57",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "97.63.236.9",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "97.63.236.9",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "83.230.35.214",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "83.230.35.214",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "251.141.166.223",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "251.141.166.223",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "254.138.176.45",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "254.138.176.45",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "39.89.223.149",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "39.89.223.149",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "172.227.40.93",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "172.227.40.93",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "133.188.198.242",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "133.188.198.242",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "98.225.232.251",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "98.225.232.251",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "78.19.110.88",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "78.19.110.88",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "204.63.202.180",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "204.63.202.180",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "109.162.41.153",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "109.162.41.153",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "90.132.130.213",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "90.132.130.213",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "143.32.71.217",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "143.32.71.217",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "108.24.165.15",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "108.24.165.15",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "14.231.249.158",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "14.231.249.158",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "13.215.189.230",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "13.215.189.230",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "103.98.249.62",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "103.98.249.62",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "122.18.38.231",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "122.18.38.231",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "135.231.37.17",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "135.231.37.17",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "71.16.232.117",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "71.16.232.117",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "253.227.96.162",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "253.227.96.162",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "216.98.100.1",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "216.98.100.1",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "69.208.127.54",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "69.208.127.54",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "45.229.195.214",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "45.229.195.214",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "207.189.243.166",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "207.189.243.166",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "188.201.128.238",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "188.201.128.238",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "81.64.56.179",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "81.64.56.179",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "54.86.105.66",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "54.86.105.66",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "140.101.53.179",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "140.101.53.179",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "112.67.153.161",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "112.67.153.161",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "142.146.66.63",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "142.146.66.63",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "162.59.255.233",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "162.59.255.233",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "250.218.224.65",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "250.218.224.65",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "156.223.36.16",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "156.223.36.16",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "164.95.68.188",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "164.95.68.188",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "4.166.95.134",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "4.166.95.134",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "202.58.175.122",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "202.58.175.122",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "129.46.83.206",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "129.46.83.206",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "242.121.167.130",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "242.121.167.130",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "213.156.187.160",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "213.156.187.160",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "132.148.147.135",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "132.148.147.135",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "172.88.24.150",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "172.88.24.150",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "0.124.228.66",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "0.124.228.66",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "252.160.2.48",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "252.160.2.48",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "237.178.159.171",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "237.178.159.171",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "254.27.249.71",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "254.27.249.71",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "193.147.222.51",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "193.147.222.51",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "99.190.224.53",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "99.190.224.53",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "243.21.143.167",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "243.21.143.167",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "241.250.90.13",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "241.250.90.13",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "224.248.79.38",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "224.248.79.38",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "249.238.205.50",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "249.238.205.50",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "252.34.179.155",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "252.34.179.155",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "80.157.88.148",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "80.157.88.148",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "54.89.235.39",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "54.89.235.39",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "156.240.120.51",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "156.240.120.51",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "141.135.198.206",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "141.135.198.206",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "1.127.247.219",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "1.127.247.219",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "121.126.157.32",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "121.126.157.32",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "100.55.234.23",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "100.55.234.23",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "46.32.39.223",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "46.32.39.223",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "49.68.16.91",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "49.68.16.91",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "147.123.254.52",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "147.123.254.52",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "52.197.31.216",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "52.197.31.216",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "219.238.255.208",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "219.238.255.208",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "53.236.26.88",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "53.236.26.88",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "48.242.131.1",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "48.242.131.1",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "15.5.24.139",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "15.5.24.139",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "83.91.90.159",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "83.91.90.159",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "208.160.23.170",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "208.160.23.170",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "236.237.55.139",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "236.237.55.139",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "152.142.28.104",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "152.142.28.104",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "103.114.253.112",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "103.114.253.112",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "226.113.20.177",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "226.113.20.177",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "45.13.59.31",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "45.13.59.31",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "13.157.128.158",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "13.157.128.158",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "14.204.255.246",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "14.204.255.246",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "181.64.162.171",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "181.64.162.171",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "37.29.21.95",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "37.29.21.95",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "178.48.45.238",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "178.48.45.238",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "229.16.117.170",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "229.16.117.170",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "101.220.166.228",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "101.220.166.228",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "85.255.6.118",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "85.255.6.118",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "67.133.218.48",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "67.133.218.48",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "248.172.226.250",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "248.172.226.250",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "254.86.68.38",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "254.86.68.38",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "115.189.112.63",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "115.189.112.63",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "67.92.219.36",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "67.92.219.36",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "124.45.31.170",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "124.45.31.170",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "179.253.30.175",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "179.253.30.175",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "69.70.61.245",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "69.70.61.245",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "118.135.6.139",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "118.135.6.139",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "128.56.12.83",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "128.56.12.83",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "190.74.145.159",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "190.74.145.159",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "2.156.33.232",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "2.156.33.232",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "99.36.237.19",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "99.36.237.19",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "85.239.136.59",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "85.239.136.59",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "94.40.57.176",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "94.40.57.176",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "180.187.192.44",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "180.187.192.44",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "174.53.26.76",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "174.53.26.76",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "128.205.143.114",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "128.205.143.114",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "148.207.31.115",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "148.207.31.115",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "222.38.202.85",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "222.38.202.85",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "6.189.198.91",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "6.189.198.91",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "109.234.191.249",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "109.234.191.249",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "176.214.212.38",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "176.214.212.38",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "108.41.75.183",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "108.41.75.183",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "15.177.120.189",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "15.177.120.189",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "88.211.126.204",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "88.211.126.204",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "187.13.183.148",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "187.13.183.148",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "230.39.199.251",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "230.39.199.251",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "147.114.150.94",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "147.114.150.94",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "141.159.101.196",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "141.159.101.196",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "237.107.99.68",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "237.107.99.68",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "105.132.85.252",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "105.132.85.252",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "236.103.123.78",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "236.103.123.78",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "201.201.81.46",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "201.201.81.46",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "201.22.187.55",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "201.22.187.55",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "28.8.247.190",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "28.8.247.190",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "122.163.1.143",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "122.163.1.143",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "194.2.74.88",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "194.2.74.88",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "207.199.27.220",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "207.199.27.220",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "12.203.79.180",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "12.203.79.180",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "222.56.75.4",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "222.56.75.4",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "176.60.31.134",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "176.60.31.134",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "72.19.95.30",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "72.19.95.30",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "11.220.158.114",
                "target": "China",
                "edgeType": "assets_to_country"
            },
            "source": "11.220.158.114",
            "target": "China",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "232.255.113.31",
                "target": "Australia",
                "edgeType": "assets_to_country"
            },
            "source": "232.255.113.31",
            "target": "Australia",
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1673,
                "target": "21.132.106.162",
                "edgeType": "firmware_to_assets"
            },
            "source": "1673",
            "target": "21.132.106.162",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 8443,
                "target": "120.93.70.57",
                "edgeType": "firmware_to_assets"
            },
            "source": "8443",
            "target": "120.93.70.57",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 4793,
                "target": "135.231.37.17",
                "edgeType": "firmware_to_assets"
            },
            "source": "4793",
            "target": "135.231.37.17",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 4360,
                "target": "45.13.59.31",
                "edgeType": "firmware_to_assets"
            },
            "source": "4360",
            "target": "45.13.59.31",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 4971,
                "target": "250.218.224.65",
                "edgeType": "firmware_to_assets"
            },
            "source": "4971",
            "target": "250.218.224.65",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 6300,
                "target": "162.59.255.233",
                "edgeType": "firmware_to_assets"
            },
            "source": "6300",
            "target": "162.59.255.233",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1367,
                "target": "14.204.255.246",
                "edgeType": "firmware_to_assets"
            },
            "source": "1367",
            "target": "14.204.255.246",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1825,
                "target": "253.44.233.16",
                "edgeType": "firmware_to_assets"
            },
            "source": "1825",
            "target": "253.44.233.16",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 8074,
                "target": "178.48.45.238",
                "edgeType": "firmware_to_assets"
            },
            "source": "8074",
            "target": "178.48.45.238",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5525,
                "target": "241.250.90.13",
                "edgeType": "firmware_to_assets"
            },
            "source": "5525",
            "target": "241.250.90.13",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 6884,
                "target": "238.115.65.77",
                "edgeType": "firmware_to_assets"
            },
            "source": "6884",
            "target": "238.115.65.77",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 6967,
                "target": "21.132.106.162",
                "edgeType": "firmware_to_assets"
            },
            "source": "6967",
            "target": "21.132.106.162",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 7721,
                "target": "0.24.80.255",
                "edgeType": "firmware_to_assets"
            },
            "source": "7721",
            "target": "0.24.80.255",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1788,
                "target": "252.160.2.48",
                "edgeType": "firmware_to_assets"
            },
            "source": "1788",
            "target": "252.160.2.48",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5317,
                "target": "83.230.35.214",
                "edgeType": "firmware_to_assets"
            },
            "source": "5317",
            "target": "83.230.35.214",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 3371,
                "target": "147.114.150.94",
                "edgeType": "firmware_to_assets"
            },
            "source": "3371",
            "target": "147.114.150.94",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 3117,
                "target": "147.123.254.52",
                "edgeType": "firmware_to_assets"
            },
            "source": "3117",
            "target": "147.123.254.52",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1713,
                "target": "254.138.176.45",
                "edgeType": "firmware_to_assets"
            },
            "source": "1713",
            "target": "254.138.176.45",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 8898,
                "target": "237.107.99.68",
                "edgeType": "firmware_to_assets"
            },
            "source": "8898",
            "target": "237.107.99.68",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1597,
                "target": "99.190.224.53",
                "edgeType": "firmware_to_assets"
            },
            "source": "1597",
            "target": "99.190.224.53",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5054,
                "target": "108.41.75.183",
                "edgeType": "firmware_to_assets"
            },
            "source": "5054",
            "target": "108.41.75.183",
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "QNAP",
                "target": "France",
                "edgeType": "manu_to_country"
            },
            "source": "QNAP",
            "target": "France",
            "edgeType": "manu_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "QNAP",
                "target": "Canada",
                "edgeType": "manu_to_country"
            },
            "source": "QNAP",
            "target": "Canada",
            "edgeType": "manu_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "QNAP",
                "target": "Canada",
                "edgeType": "manu_to_country"
            },
            "source": "QNAP",
            "target": "Canada",
            "edgeType": "manu_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "Juniper",
                "target": "France",
                "edgeType": "manu_to_country"
            },
            "source": "Juniper",
            "target": "France",
            "edgeType": "manu_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "Trendnet",
                "target": "France",
                "edgeType": "manu_to_country"
            },
            "source": "Trendnet",
            "target": "France",
            "edgeType": "manu_to_country",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1713,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "1713",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1713,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "1713",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5317,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "5317",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5317,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "5317",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5317,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "5317",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1673,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "1673",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 8443,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "8443",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 4793,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "4793",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 4360,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "4360",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 4971,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "4971",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 6300,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "6300",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1367,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "1367",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1825,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "1825",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 8074,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "8074",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5525,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "5525",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 6884,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "6884",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 6967,
                "target": "Juniper",
                "edgeType": "firmware_to_manu"
            },
            "source": "6967",
            "target": "Juniper",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 7721,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "7721",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1788,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "1788",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 3371,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "3371",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 3117,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "3117",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 8898,
                "target": "Trendnet",
                "edgeType": "firmware_to_manu"
            },
            "source": "8898",
            "target": "Trendnet",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 1597,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "1597",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": 5054,
                "target": "QNAP",
                "edgeType": "firmware_to_manu"
            },
            "source": "5054",
            "target": "QNAP",
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 1673,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "1673",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 8443,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "8443",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 4793,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "4793",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "dc09ee2ff472a54051ed99ba760604c6",
                "target": 4360,
                "edgeType": "file_to_firmware"
            },
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": "4360",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 4971,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "4971",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "dc09ee2ff472a54051ed99ba760604c6",
                "target": 6300,
                "edgeType": "file_to_firmware"
            },
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": "6300",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "dc09ee2ff472a54051ed99ba760604c6",
                "target": 1367,
                "edgeType": "file_to_firmware"
            },
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": "1367",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 1825,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "1825",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 8074,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "8074",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "dc09ee2ff472a54051ed99ba760604c6",
                "target": 5525,
                "edgeType": "file_to_firmware"
            },
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": "5525",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 6884,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "6884",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 6967,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "6967",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 7721,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "7721",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 1788,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "1788",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 5317,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "5317",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 3371,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "3371",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 3117,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "3117",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "dc09ee2ff472a54051ed99ba760604c6",
                "target": 1713,
                "edgeType": "file_to_firmware"
            },
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": "1713",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 8898,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "8898",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 1597,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "1597",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 5054,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "5054",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "dc09ee2ff472a54051ed99ba760604c6",
                "target": 1825,
                "edgeType": "file_to_firmware"
            },
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": "1825",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "42cea58ac6bd53546977a199dfae338b",
                "target": 4793,
                "edgeType": "file_to_firmware"
            },
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": "4793",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "62d9e1385c974b239ecea83e584869bc",
                "target": 1597,
                "edgeType": "file_to_firmware"
            },
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": "1597",
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "CVE-2021-5191",
                "target": "dc09ee2ff472a54051ed99ba760604c6",
                "edgeType": "cve_to_file"
            },
            "source": "CVE-2021-5191",
            "target": "dc09ee2ff472a54051ed99ba760604c6",
            "edgeType": "cve_to_file",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "CVE-2021-5191",
                "target": "dc09ee2ff472a54051ed99ba760604c6",
                "edgeType": "cve_to_file"
            },
            "source": "CVE-2021-5191",
            "target": "dc09ee2ff472a54051ed99ba760604c6",
            "edgeType": "cve_to_file",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "CVE-2019-2528",
                "target": "42cea58ac6bd53546977a199dfae338b",
                "edgeType": "cve_to_file"
            },
            "source": "CVE-2019-2528",
            "target": "42cea58ac6bd53546977a199dfae338b",
            "edgeType": "cve_to_file",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "CVE-2021-5191",
                "target": "62d9e1385c974b239ecea83e584869bc",
                "edgeType": "cve_to_file"
            },
            "source": "CVE-2021-5191",
            "target": "62d9e1385c974b239ecea83e584869bc",
            "edgeType": "cve_to_file",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "CVE-2019-2528",
                "target": "dc09ee2ff472a54051ed99ba760604c6",
                "edgeType": "cve_to_file"
            },
            "source": "CVE-2019-2528",
            "target": "dc09ee2ff472a54051ed99ba760604c6",
            "edgeType": "cve_to_file",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "pink_botnet",
                "target": "CVE-2019-2528",
                "edgeType": "botnet_to_cve"
            },
            "source": "pink_botnet",
            "target": "CVE-2019-2528",
            "edgeType": "botnet_to_cve",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "pink_botnet",
                "target": "CVE-2021-5191",
                "edgeType": "botnet_to_cve"
            },
            "source": "pink_botnet",
            "target": "CVE-2021-5191",
            "edgeType": "botnet_to_cve",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "pink_botnet",
                "target": "CVE-2021-5191",
                "edgeType": "botnet_to_cve"
            },
            "source": "pink_botnet",
            "target": "CVE-2021-5191",
            "edgeType": "botnet_to_cve",
            "edgeTypeKeyFromProperties": "edgeType"
        }, {
            "data": {
                "source": "pink_botnet",
                "target": "CVE-2021-5191",
                "edgeType": "botnet_to_cve"
            },
            "source": "pink_botnet",
            "target": "CVE-2021-5191",
            "edgeType": "botnet_to_cve",
            "edgeTypeKeyFromProperties": "edgeType"
        }]
    },
    "schemaData": {
        "nodes": [{
            "nodeType": "在线设备资产",
            "nodeTypeKeyFromProperties": "legendType",
            "properties": {
                "id": "string",
                "dataType": "string",
                "legendType": "string",
                "company": "string",
                "type": "string",
                "latitude": "string",
                "longitude": "string",
                "country": "string",
                "province": "string",
                "city": "string",
                "device_type": "string",
                "port": "number"
            }
        }, {
            "nodeType": "国家",
            "nodeTypeKeyFromProperties": "legendType",
            "properties": {
                "id": "string",
                "dataType": "string",
                "legendType": "string"
            }
        }, {
            "nodeType": "设备制造商",
            "nodeTypeKeyFromProperties": "legendType",
            "properties": {
                "id": "string",
                "dataType": "string",
                "legendType": "string",
                "country": "string"
            }
        }, {
            "nodeType": "固件",
            "nodeTypeKeyFromProperties": "legendType",
            "properties": {
                "id": "number",
                "dataType": "string",
                "legendType": "string",
                "md5": "string",
                "manu": "string",
                "device_type": "string",
                "name": "string",
                "os": "string"
            }
        }, {
            "nodeType": "单文件",
            "nodeTypeKeyFromProperties": "legendType",
            "properties": {
                "id": "string",
                "name": "string",
                "dataType": "string",
                "legendType": "string",
                "md5": "string"
            }
        }, {
            "nodeType": "漏洞事件",
            "nodeTypeKeyFromProperties": "legendType",
            "properties": {
                "id": "string",
                "dataType": "string",
                "legendType": "string"
            }
        }, {
            "nodeType": "僵尸网络家族",
            "nodeTypeKeyFromProperties": "legendType",
            "properties": {
                "id": "string",
                "dataType": "string",
                "legendType": "string",
                "first_seen": "string",
                "last_seen": "string"
            }
        }],
        "edges": [{
            "edgeType": "assets_to_country",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "在线设备资产",
            "targetNodeType": "国家",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "firmware_to_assets",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "固件",
            "targetNodeType": "在线设备资产",
            "properties": {
                "source": "number",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "manu_to_country",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "设备制造商",
            "targetNodeType": "国家",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "firmware_to_manu",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "固件",
            "targetNodeType": "设备制造商",
            "properties": {
                "source": "number",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "file_to_firmware",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "单文件",
            "targetNodeType": "固件",
            "properties": {
                "source": "string",
                "target": "number",
                "edgeType": "string"
            }
        }, {
            "edgeType": "cve_to_file",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "漏洞事件",
            "targetNodeType": "单文件",
            "properties": {
                "source": "string",
                "target": "string",
                "edgeType": "string"
            }
        }, {
            "edgeType": "botnet_to_cve",
            "edgeTypeKeyFromProperties": "edgeType",
            "sourceNodeType": "僵尸网络家族",
            "targetNodeType": "漏洞事件",
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
        "id": "91.219.218.86",
        "data": {
            "id": "91.219.218.86",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Stevens, Armstrong and Gonzalez.and Sons",
            "type": "entity",
            "latitude": "33.7207",
            "longitude": "-116.21677",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Indio",
            "device_type": "路由器",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "133.102.109.244",
        "data": {
            "id": "133.102.109.244",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Bentley, Walters and Davis.LLC",
            "type": "entity",
            "latitude": "34.09668",
            "longitude": "-117.71978",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Claremont",
            "device_type": "光猫",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "253.44.233.16",
        "data": {
            "id": "253.44.233.16",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Miller, Cisneros and Mejia.Ltd",
            "type": "entity",
            "latitude": "33.7207",
            "longitude": "-116.21677",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Indio",
            "device_type": "NVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "198.242.63.234",
        "data": {
            "id": "198.242.63.234",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Lopez Group.Inc",
            "type": "entity",
            "latitude": "34.25628",
            "longitude": "-78.04471",
            "country": "United States",
            "province": "New_York",
            "city": "Leland",
            "device_type": "路由器",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "165.139.207.29",
        "data": {
            "id": "165.139.207.29",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Cruz-Hays.Inc",
            "type": "entity",
            "latitude": "26.91756",
            "longitude": "-82.07842",
            "country": "United States",
            "province": "New_York",
            "city": "Punta Gorda Isles",
            "device_type": "网络存储设备",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "41.3.228.218",
        "data": {
            "id": "41.3.228.218",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Walters-Bates.and Sons",
            "type": "entity",
            "latitude": "41.84364",
            "longitude": "-87.71255",
            "country": "United States",
            "province": "Chicago",
            "city": "South Lawndale",
            "device_type": "智能电表",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "238.115.65.77",
        "data": {
            "id": "238.115.65.77",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Bailey-Hopkins.PLC",
            "type": "entity",
            "latitude": "40.57788",
            "longitude": "-73.95958",
            "country": "United States",
            "province": "New_York",
            "city": "Brighton Beach",
            "device_type": "NVR设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "10.220.18.159",
        "data": {
            "id": "10.220.18.159",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Barrett Group.PLC",
            "type": "entity",
            "latitude": "45.0408",
            "longitude": "-93.263",
            "country": "United States",
            "province": "Chicago",
            "city": "Columbia Heights",
            "device_type": "路由器",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "188.192.225.36",
        "data": {
            "id": "188.192.225.36",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Smith, Blair and Duran.Ltd",
            "type": "entity",
            "latitude": "40.72816",
            "longitude": "-74.07764",
            "country": "United States",
            "province": "New_York",
            "city": "Jersey City",
            "device_type": "摄像头",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "220.144.235.43",
        "data": {
            "id": "220.144.235.43",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Campos-Park.Group",
            "type": "entity",
            "latitude": "33.7207",
            "longitude": "-116.21677",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Indio",
            "device_type": "网络存储设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "76.61.120.126",
        "data": {
            "id": "76.61.120.126",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Brown LLC.Group",
            "type": "entity",
            "latitude": "33.72255",
            "longitude": "-116.37697",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Palm Desert",
            "device_type": "摄像头",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "6.79.223.106",
        "data": {
            "id": "6.79.223.106",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Marsh Group.Ltd",
            "type": "entity",
            "latitude": "41.14676",
            "longitude": "-73.49484",
            "country": "United States",
            "province": "New_York",
            "city": "New Canaan",
            "device_type": "防火墙",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "70.147.91.94",
        "data": {
            "id": "70.147.91.94",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Anderson PLC.Inc",
            "type": "entity",
            "latitude": "47.80527",
            "longitude": "-122.24064",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Bothell West",
            "device_type": "路由器",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "159.76.24.149",
        "data": {
            "id": "159.76.24.149",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Garcia and Sons.Inc",
            "type": "entity",
            "latitude": "35.74788",
            "longitude": "-95.36969",
            "country": "United States",
            "province": "Chicago",
            "city": "Muskogee",
            "device_type": "防火墙",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "59.56.228.252",
        "data": {
            "id": "59.56.228.252",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Johnson, Petersen and Stevens.Group",
            "type": "entity",
            "latitude": "29.53885",
            "longitude": "-95.44744",
            "country": "United States",
            "province": "Chicago",
            "city": "Fresno",
            "device_type": "摄像头",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "231.104.58.87",
        "data": {
            "id": "231.104.58.87",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Myers Ltd.Ltd",
            "type": "entity",
            "latitude": "42.97086",
            "longitude": "-82.42491",
            "country": "United States",
            "province": "Detroit",
            "city": "Port Huron",
            "device_type": "AP设备",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "227.236.45.143",
        "data": {
            "id": "227.236.45.143",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hicks Ltd.LLC",
            "type": "entity",
            "latitude": "45.0408",
            "longitude": "-93.263",
            "country": "United States",
            "province": "Chicago",
            "city": "Columbia Heights",
            "device_type": "智能电表",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "105.134.35.50",
        "data": {
            "id": "105.134.35.50",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Gonzalez LLC.Group",
            "type": "entity",
            "latitude": "28.90054",
            "longitude": "-81.26367",
            "country": "United States",
            "province": "New_York",
            "city": "Deltona",
            "device_type": "DVR设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "184.30.78.207",
        "data": {
            "id": "184.30.78.207",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mueller, Thomas and Taylor.LLC",
            "type": "entity",
            "latitude": "33.72255",
            "longitude": "-116.37697",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Palm Desert",
            "device_type": "摄像头",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "45.234.221.156",
        "data": {
            "id": "45.234.221.156",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Kerr, Bowman and Brown.PLC",
            "type": "entity",
            "latitude": "33.95015",
            "longitude": "-118.03917",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "South Whittier",
            "device_type": "AP设备",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "93.216.37.234",
        "data": {
            "id": "93.216.37.234",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Rivera-Brooks.Group",
            "type": "entity",
            "latitude": "27.09978",
            "longitude": "-82.45426",
            "country": "United States",
            "province": "New_York",
            "city": "Venice",
            "device_type": "DVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "2.176.133.129",
        "data": {
            "id": "2.176.133.129",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wallace, Donaldson and Morgan.and Sons",
            "type": "entity",
            "latitude": "26.91756",
            "longitude": "-82.07842",
            "country": "United States",
            "province": "New_York",
            "city": "Punta Gorda Isles",
            "device_type": "DVR设备",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1.181.75.114",
        "data": {
            "id": "1.181.75.114",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mendoza Group.Group",
            "type": "entity",
            "latitude": "41.14676",
            "longitude": "-73.49484",
            "country": "United States",
            "province": "New_York",
            "city": "New Canaan",
            "device_type": "安防设备",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "6.156.222.211",
        "data": {
            "id": "6.156.222.211",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Lambert-Thompson.Group",
            "type": "entity",
            "latitude": "34.95303",
            "longitude": "-120.43572",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Santa Maria",
            "device_type": "NVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "146.57.148.63",
        "data": {
            "id": "146.57.148.63",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Rodriguez and Sons.and Sons",
            "type": "entity",
            "latitude": "35.05266",
            "longitude": "-78.87836",
            "country": "United States",
            "province": "New_York",
            "city": "Fayetteville",
            "device_type": "NVR设备",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "160.51.3.109",
        "data": {
            "id": "160.51.3.109",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "King and Sons.Inc",
            "type": "entity",
            "latitude": "31.76212",
            "longitude": "-95.63079",
            "country": "United States",
            "province": "Chicago",
            "city": "Palestine",
            "device_type": "防火墙",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "153.144.200.99",
        "data": {
            "id": "153.144.200.99",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Davis-Tucker.Ltd",
            "type": "entity",
            "latitude": "34.21639",
            "longitude": "-119.0376",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Camarillo",
            "device_type": "路由器",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "85.96.69.136",
        "data": {
            "id": "85.96.69.136",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Williams-Stanley.LLC",
            "type": "entity",
            "latitude": "33.44872",
            "longitude": "-86.78777",
            "country": "United States",
            "province": "Chicago",
            "city": "Vestavia Hills",
            "device_type": "NVR设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "90.208.46.115",
        "data": {
            "id": "90.208.46.115",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Brown Group.Inc",
            "type": "entity",
            "latitude": "45.53929",
            "longitude": "-122.38731",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Troutdale",
            "device_type": "AP设备",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "6.125.158.237",
        "data": {
            "id": "6.125.158.237",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Bryant, Thompson and Patterson.LLC",
            "type": "entity",
            "latitude": "26.2173",
            "longitude": "-80.22588",
            "country": "United States",
            "province": "New_York",
            "city": "North Lauderdale",
            "device_type": "防火墙",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "74.109.124.159",
        "data": {
            "id": "74.109.124.159",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Paul, Craig and Kerr.and Sons",
            "type": "entity",
            "latitude": "47.64995",
            "longitude": "-117.23991",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Opportunity",
            "device_type": "安防设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "149.118.6.147",
        "data": {
            "id": "149.118.6.147",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wilson, Schmidt and Perez.Inc",
            "type": "entity",
            "latitude": "38.91817",
            "longitude": "-78.19444",
            "country": "United States",
            "province": "New_York",
            "city": "Front Royal",
            "device_type": "网络存储设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "202.218.41.145",
        "data": {
            "id": "202.218.41.145",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Bruce, Brown and Thomas.LLC",
            "type": "entity",
            "latitude": "33.35283",
            "longitude": "-111.78903",
            "country": "United States",
            "province": "Phoenix",
            "city": "Gilbert",
            "device_type": "摄像头",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "214.17.242.34",
        "data": {
            "id": "214.17.242.34",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Cameron-Hansen.and Sons",
            "type": "entity",
            "latitude": "41.66394",
            "longitude": "-83.55521",
            "country": "United States",
            "province": "New_York",
            "city": "Toledo",
            "device_type": "网络存储设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "21.132.106.162",
        "data": {
            "id": "21.132.106.162",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Lee, Walker and Delgado.Group",
            "type": "entity",
            "latitude": "39.96097",
            "longitude": "-75.60804",
            "country": "United States",
            "province": "New_York",
            "city": "West Chester",
            "device_type": "路由器",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "54.125.106.58",
        "data": {
            "id": "54.125.106.58",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hebert Ltd.and Sons",
            "type": "entity",
            "latitude": "41.14676",
            "longitude": "-73.49484",
            "country": "United States",
            "province": "New_York",
            "city": "New Canaan",
            "device_type": "路由器",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "132.182.169.210",
        "data": {
            "id": "132.182.169.210",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Waller, White and Davis.Group",
            "type": "entity",
            "latitude": "33.76446",
            "longitude": "-117.79394",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "North Tustin",
            "device_type": "摄像头",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "169.210.181.208",
        "data": {
            "id": "169.210.181.208",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Watts Group.LLC",
            "type": "entity",
            "latitude": "42.16808",
            "longitude": "-88.42814",
            "country": "United States",
            "province": "Chicago",
            "city": "Huntley",
            "device_type": "智能电表",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "17.127.137.115",
        "data": {
            "id": "17.127.137.115",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Stevens-Harris.and Sons",
            "type": "entity",
            "latitude": "41.57721",
            "longitude": "-93.71133",
            "country": "United States",
            "province": "Chicago",
            "city": "West Des Moines",
            "device_type": "网络存储设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "3.47.159.36",
        "data": {
            "id": "3.47.159.36",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Thomas Ltd.Inc",
            "type": "entity",
            "latitude": "33.03699",
            "longitude": "-117.29198",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Encinitas",
            "device_type": "NVR设备",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "49.123.159.57",
        "data": {
            "id": "49.123.159.57",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Newton, Mason and White.LLC",
            "type": "entity",
            "latitude": "26.68451",
            "longitude": "-80.66756",
            "country": "United States",
            "province": "New_York",
            "city": "Belle Glade",
            "device_type": "路由器",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "201.182.91.21",
        "data": {
            "id": "201.182.91.21",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Jacobs and Sons.PLC",
            "type": "entity",
            "latitude": "46.09273",
            "longitude": "-88.64235",
            "country": "United States",
            "province": "Menominee",
            "city": "Iron River",
            "device_type": "路由器",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "231.44.202.102",
        "data": {
            "id": "231.44.202.102",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Murphy, Fisher and Ross.Ltd",
            "type": "entity",
            "latitude": "39.45621",
            "longitude": "-77.96389",
            "country": "United States",
            "province": "New_York",
            "city": "Martinsburg",
            "device_type": "DVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "114.72.197.181",
        "data": {
            "id": "114.72.197.181",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Campos Inc.and Sons",
            "type": "entity",
            "latitude": "31.84568",
            "longitude": "-102.36764",
            "country": "United States",
            "province": "Chicago",
            "city": "Odessa",
            "device_type": "智能电表",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "153.35.142.189",
        "data": {
            "id": "153.35.142.189",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Ware Ltd.PLC",
            "type": "entity",
            "latitude": "41.55838",
            "longitude": "-81.56929",
            "country": "United States",
            "province": "New_York",
            "city": "Collinwood",
            "device_type": "光猫",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "0.24.80.255",
        "data": {
            "id": "0.24.80.255",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Stanley-Black.Ltd",
            "type": "entity",
            "latitude": "39.96097",
            "longitude": "-75.60804",
            "country": "United States",
            "province": "New_York",
            "city": "West Chester",
            "device_type": "智能电表",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "212.81.47.85",
        "data": {
            "id": "212.81.47.85",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Prince LLC.Group",
            "type": "entity",
            "latitude": "37.71715",
            "longitude": "-122.40433",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Visitacion Valley",
            "device_type": "NVR设备",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "143.56.126.199",
        "data": {
            "id": "143.56.126.199",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Warner-Davis.Ltd",
            "type": "entity",
            "latitude": "43.1009",
            "longitude": "-75.23266",
            "country": "United States",
            "province": "New_York",
            "city": "Utica",
            "device_type": "摄像头",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "151.174.239.54",
        "data": {
            "id": "151.174.239.54",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Logan, Smith and Williams.Inc",
            "type": "entity",
            "latitude": "40.93121",
            "longitude": "-73.89875",
            "country": "United States",
            "province": "New_York",
            "city": "Yonkers",
            "device_type": "网络存储设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "91.1.100.56",
        "data": {
            "id": "91.1.100.56",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wells-Wilson.PLC",
            "type": "entity",
            "latitude": "32.44874",
            "longitude": "-99.73314",
            "country": "United States",
            "province": "Chicago",
            "city": "Abilene",
            "device_type": "网络存储设备",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "62.38.49.27",
        "data": {
            "id": "62.38.49.27",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Murphy-Abbott.PLC",
            "type": "entity",
            "latitude": "35.88264",
            "longitude": "-80.08199",
            "country": "United States",
            "province": "New_York",
            "city": "Thomasville",
            "device_type": "防火墙",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "115.108.176.150",
        "data": {
            "id": "115.108.176.150",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Smith, Williams and Garcia.Ltd",
            "type": "entity",
            "latitude": "47.4943",
            "longitude": "-122.24092",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Bryn Mawr-Skyway",
            "device_type": "防火墙",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "120.93.70.57",
        "data": {
            "id": "120.93.70.57",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Palmer and Sons.Group",
            "type": "entity",
            "latitude": "42.58342",
            "longitude": "-71.8023",
            "country": "United States",
            "province": "New_York",
            "city": "Fitchburg",
            "device_type": "摄像头",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "97.63.236.9",
        "data": {
            "id": "97.63.236.9",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Torres, King and Webb.PLC",
            "type": "entity",
            "latitude": "37.71715",
            "longitude": "-122.40433",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Visitacion Valley",
            "device_type": "DVR设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "83.230.35.214",
        "data": {
            "id": "83.230.35.214",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Gutierrez, Brown and Dyer.Ltd",
            "type": "entity",
            "latitude": "41.48199",
            "longitude": "-81.79819",
            "country": "United States",
            "province": "New_York",
            "city": "Lakewood",
            "device_type": "摄像头",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "251.141.166.223",
        "data": {
            "id": "251.141.166.223",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Collins, Padilla and Wilson.and Sons",
            "type": "entity",
            "latitude": "47.80527",
            "longitude": "-122.24064",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Bothell West",
            "device_type": "防火墙",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "254.138.176.45",
        "data": {
            "id": "254.138.176.45",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Rhodes LLC.Inc",
            "type": "entity",
            "latitude": "28.90054",
            "longitude": "-81.26367",
            "country": "United States",
            "province": "New_York",
            "city": "Deltona",
            "device_type": "智能电表",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "39.89.223.149",
        "data": {
            "id": "39.89.223.149",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Gilmore, Green and Baird.LLC",
            "type": "entity",
            "latitude": "30.17746",
            "longitude": "-81.38758",
            "country": "United States",
            "province": "New_York",
            "city": "Palm Valley",
            "device_type": "光猫",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "172.227.40.93",
        "data": {
            "id": "172.227.40.93",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Taylor Ltd.and Sons",
            "type": "entity",
            "latitude": "32.9156",
            "longitude": "-117.14392",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Mira Mesa",
            "device_type": "AP设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "133.188.198.242",
        "data": {
            "id": "133.188.198.242",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Reese PLC.Inc",
            "type": "entity",
            "latitude": "38.54491",
            "longitude": "-121.74052",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Davis",
            "device_type": "摄像头",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "98.225.232.251",
        "data": {
            "id": "98.225.232.251",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hall-Smith.Ltd",
            "type": "entity",
            "latitude": "40.34912",
            "longitude": "-111.90466",
            "country": "United States",
            "province": "Denver",
            "city": "Saratoga Springs",
            "device_type": "路由器",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "78.19.110.88",
        "data": {
            "id": "78.19.110.88",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Robinson Ltd.Group",
            "type": "entity",
            "latitude": "44.73941",
            "longitude": "-93.12577",
            "country": "United States",
            "province": "Chicago",
            "city": "Rosemount",
            "device_type": "防火墙",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "204.63.202.180",
        "data": {
            "id": "204.63.202.180",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Oliver-Stevens.and Sons",
            "type": "entity",
            "latitude": "33.50921",
            "longitude": "-111.89903",
            "country": "United States",
            "province": "Phoenix",
            "city": "Scottsdale",
            "device_type": "智能电表",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "109.162.41.153",
        "data": {
            "id": "109.162.41.153",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Johnson PLC.and Sons",
            "type": "entity",
            "latitude": "40.93121",
            "longitude": "-73.89875",
            "country": "United States",
            "province": "New_York",
            "city": "Yonkers",
            "device_type": "NVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "90.132.130.213",
        "data": {
            "id": "90.132.130.213",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Thompson, Scott and Johnson.and Sons",
            "type": "entity",
            "latitude": "32.54044",
            "longitude": "-82.90375",
            "country": "United States",
            "province": "New_York",
            "city": "Dublin",
            "device_type": "摄像头",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "143.32.71.217",
        "data": {
            "id": "143.32.71.217",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Torres-Holt.LLC",
            "type": "entity",
            "latitude": "26.91756",
            "longitude": "-82.07842",
            "country": "United States",
            "province": "New_York",
            "city": "Punta Gorda Isles",
            "device_type": "智能电表",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "108.24.165.15",
        "data": {
            "id": "108.24.165.15",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Aguilar Ltd.Ltd",
            "type": "entity",
            "latitude": "40.60538",
            "longitude": "-73.75513",
            "country": "United States",
            "province": "New_York",
            "city": "Far Rockaway",
            "device_type": "网络存储设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "14.231.249.158",
        "data": {
            "id": "14.231.249.158",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Jones-Holmes.Ltd",
            "type": "entity",
            "latitude": "39.72943",
            "longitude": "-104.83192",
            "country": "United States",
            "province": "Denver",
            "city": "Aurora",
            "device_type": "智能电表",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "13.215.189.230",
        "data": {
            "id": "13.215.189.230",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Schmidt, Guerrero and Smith.Group",
            "type": "entity",
            "latitude": "40.5576",
            "longitude": "-74.28459",
            "country": "United States",
            "province": "New_York",
            "city": "Woodbridge",
            "device_type": "智能电表",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "103.98.249.62",
        "data": {
            "id": "103.98.249.62",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Ortega Ltd.LLC",
            "type": "entity",
            "latitude": "45.16024",
            "longitude": "-93.08883",
            "country": "United States",
            "province": "Chicago",
            "city": "Lino Lakes",
            "device_type": "摄像头",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "122.18.38.231",
        "data": {
            "id": "122.18.38.231",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Holland Group.and Sons",
            "type": "entity",
            "latitude": "42.24113",
            "longitude": "-88.3162",
            "country": "United States",
            "province": "Chicago",
            "city": "Crystal Lake",
            "device_type": "智能电表",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "135.231.37.17",
        "data": {
            "id": "135.231.37.17",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Downs-Johnson.Group",
            "type": "entity",
            "latitude": "41.27621",
            "longitude": "-72.86843",
            "country": "United States",
            "province": "New_York",
            "city": "East Haven",
            "device_type": "路由器",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "71.16.232.117",
        "data": {
            "id": "71.16.232.117",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wilson Group.Group",
            "type": "entity",
            "latitude": "40.58654",
            "longitude": "-122.39168",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Redding",
            "device_type": "AP设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "253.227.96.162",
        "data": {
            "id": "253.227.96.162",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Miller, Holmes and Watts.and Sons",
            "type": "entity",
            "latitude": "40.81",
            "longitude": "-73.9625",
            "country": "United States",
            "province": "New_York",
            "city": "Morningside Heights",
            "device_type": "AP设备",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "216.98.100.1",
        "data": {
            "id": "216.98.100.1",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Ramirez LLC.Inc",
            "type": "entity",
            "latitude": "39.08367",
            "longitude": "-84.50855",
            "country": "United States",
            "province": "New_York",
            "city": "Covington",
            "device_type": "光猫",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "69.208.127.54",
        "data": {
            "id": "69.208.127.54",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hanson, Coleman and Torres.Inc",
            "type": "entity",
            "latitude": "34.09668",
            "longitude": "-117.71978",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Claremont",
            "device_type": "网络存储设备",
            "port": 80
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "45.229.195.214",
        "data": {
            "id": "45.229.195.214",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mullins Ltd.Inc",
            "type": "entity",
            "latitude": "34.63915",
            "longitude": "-120.45794",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Lompoc",
            "device_type": "NVR设备",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "207.189.243.166",
        "data": {
            "id": "207.189.243.166",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Miller Group.Group",
            "type": "entity",
            "latitude": "41.75338",
            "longitude": "-86.11084",
            "country": "United States",
            "province": "Indianapolis",
            "city": "Granger",
            "device_type": "DVR设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "188.201.128.238",
        "data": {
            "id": "188.201.128.238",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Fields, Smith and Taylor.LLC",
            "type": "entity",
            "latitude": "45.0408",
            "longitude": "-93.263",
            "country": "United States",
            "province": "Chicago",
            "city": "Columbia Heights",
            "device_type": "安防设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "81.64.56.179",
        "data": {
            "id": "81.64.56.179",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wilson PLC.LLC",
            "type": "entity",
            "latitude": "40.60538",
            "longitude": "-73.75513",
            "country": "United States",
            "province": "New_York",
            "city": "Far Rockaway",
            "device_type": "NVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "54.86.105.66",
        "data": {
            "id": "54.86.105.66",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Ramirez Ltd.Ltd",
            "type": "entity",
            "latitude": "34.14251",
            "longitude": "-118.25508",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Glendale",
            "device_type": "安防设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "140.101.53.179",
        "data": {
            "id": "140.101.53.179",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hamilton, Johnson and Thomas.PLC",
            "type": "entity",
            "latitude": "35.61452",
            "longitude": "-88.81395",
            "country": "United States",
            "province": "Chicago",
            "city": "Jackson",
            "device_type": "AP设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "112.67.153.161",
        "data": {
            "id": "112.67.153.161",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wallace, Turner and Campbell.Group",
            "type": "entity",
            "latitude": "41.16704",
            "longitude": "-73.20483",
            "country": "United States",
            "province": "New_York",
            "city": "Bridgeport",
            "device_type": "光猫",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "142.146.66.63",
        "data": {
            "id": "142.146.66.63",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "White Ltd.LLC",
            "type": "entity",
            "latitude": "34.09668",
            "longitude": "-117.71978",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Claremont",
            "device_type": "光猫",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "162.59.255.233",
        "data": {
            "id": "162.59.255.233",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Burton-Kennedy.LLC",
            "type": "entity",
            "latitude": "41.85059",
            "longitude": "-87.882",
            "country": "United States",
            "province": "Chicago",
            "city": "Westchester",
            "device_type": "安防设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "250.218.224.65",
        "data": {
            "id": "250.218.224.65",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Simpson Group.Inc",
            "type": "entity",
            "latitude": "41.9001",
            "longitude": "-71.08977",
            "country": "United States",
            "province": "New_York",
            "city": "Taunton",
            "device_type": "智能电表",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "156.223.36.16",
        "data": {
            "id": "156.223.36.16",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Fox Group.LLC",
            "type": "entity",
            "latitude": "38.54491",
            "longitude": "-121.74052",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Davis",
            "device_type": "安防设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "164.95.68.188",
        "data": {
            "id": "164.95.68.188",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Scott Inc.Group",
            "type": "entity",
            "latitude": "25.67927",
            "longitude": "-80.31727",
            "country": "United States",
            "province": "New_York",
            "city": "Kendall",
            "device_type": "NVR设备",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "4.166.95.134",
        "data": {
            "id": "4.166.95.134",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Beltran and Sons.Group",
            "type": "entity",
            "latitude": "42.52787",
            "longitude": "-70.92866",
            "country": "United States",
            "province": "New_York",
            "city": "Peabody",
            "device_type": "NVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "202.58.175.122",
        "data": {
            "id": "202.58.175.122",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Schultz, Hill and Anderson.and Sons",
            "type": "entity",
            "latitude": "40.94065",
            "longitude": "-73.99681",
            "country": "United States",
            "province": "New_York",
            "city": "Dumont",
            "device_type": "网络存储设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "129.46.83.206",
        "data": {
            "id": "129.46.83.206",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hubbard LLC.Inc",
            "type": "entity",
            "latitude": "29.65163",
            "longitude": "-82.32483",
            "country": "United States",
            "province": "New_York",
            "city": "Gainesville",
            "device_type": "AP设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "242.121.167.130",
        "data": {
            "id": "242.121.167.130",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Evans, Parker and Oconnor.Inc",
            "type": "entity",
            "latitude": "31.84568",
            "longitude": "-102.36764",
            "country": "United States",
            "province": "Chicago",
            "city": "Odessa",
            "device_type": "DVR设备",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "213.156.187.160",
        "data": {
            "id": "213.156.187.160",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "James, Kemp and Madden.Ltd",
            "type": "entity",
            "latitude": "44.73941",
            "longitude": "-93.12577",
            "country": "United States",
            "province": "Chicago",
            "city": "Rosemount",
            "device_type": "防火墙",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "132.148.147.135",
        "data": {
            "id": "132.148.147.135",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Campos Inc.PLC",
            "type": "entity",
            "latitude": "34.25628",
            "longitude": "-78.04471",
            "country": "United States",
            "province": "New_York",
            "city": "Leland",
            "device_type": "NVR设备",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "172.88.24.150",
        "data": {
            "id": "172.88.24.150",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Salinas Ltd.Inc",
            "type": "entity",
            "latitude": "42.55308",
            "longitude": "-87.93341",
            "country": "United States",
            "province": "Chicago",
            "city": "Pleasant Prairie",
            "device_type": "NVR设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "0.124.228.66",
        "data": {
            "id": "0.124.228.66",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Thompson, Garcia and Vasquez.Inc",
            "type": "entity",
            "latitude": "39.08367",
            "longitude": "-84.50855",
            "country": "United States",
            "province": "New_York",
            "city": "Covington",
            "device_type": "摄像头",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "252.160.2.48",
        "data": {
            "id": "252.160.2.48",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Taylor, Johnson and James.and Sons",
            "type": "entity",
            "latitude": "40.82232",
            "longitude": "-74.15987",
            "country": "United States",
            "province": "New_York",
            "city": "Nutley",
            "device_type": "DVR设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "237.178.159.171",
        "data": {
            "id": "237.178.159.171",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Warren, Buck and Macias.PLC",
            "type": "entity",
            "latitude": "41.55815",
            "longitude": "-73.0515",
            "country": "United States",
            "province": "New_York",
            "city": "Waterbury",
            "device_type": "防火墙",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "254.27.249.71",
        "data": {
            "id": "254.27.249.71",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Ramos Group.and Sons",
            "type": "entity",
            "latitude": "25.67927",
            "longitude": "-80.31727",
            "country": "United States",
            "province": "New_York",
            "city": "Kendall",
            "device_type": "路由器",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "193.147.222.51",
        "data": {
            "id": "193.147.222.51",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Alexander-Elliott.and Sons",
            "type": "entity",
            "latitude": "41.84364",
            "longitude": "-87.71255",
            "country": "United States",
            "province": "Chicago",
            "city": "South Lawndale",
            "device_type": "光猫",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "99.190.224.53",
        "data": {
            "id": "99.190.224.53",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Camacho-Gomez.Ltd",
            "type": "entity",
            "latitude": "31.76212",
            "longitude": "-95.63079",
            "country": "United States",
            "province": "Chicago",
            "city": "Palestine",
            "device_type": "网络存储设备",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "243.21.143.167",
        "data": {
            "id": "243.21.143.167",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Miles-Whitney.Ltd",
            "type": "entity",
            "latitude": "41.6764",
            "longitude": "-91.58045",
            "country": "United States",
            "province": "Chicago",
            "city": "Coralville",
            "device_type": "路由器",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "241.250.90.13",
        "data": {
            "id": "241.250.90.13",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Myers-Nguyen.Inc",
            "type": "entity",
            "latitude": "42.52787",
            "longitude": "-70.92866",
            "country": "United States",
            "province": "New_York",
            "city": "Peabody",
            "device_type": "DVR设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "224.248.79.38",
        "data": {
            "id": "224.248.79.38",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Berger, Warren and Anthony.and Sons",
            "type": "entity",
            "latitude": "38.70734",
            "longitude": "-77.02303",
            "country": "United States",
            "province": "New_York",
            "city": "Fort Washington",
            "device_type": "NVR设备",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "249.238.205.50",
        "data": {
            "id": "249.238.205.50",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Arroyo Ltd.PLC",
            "type": "entity",
            "latitude": "34.06635",
            "longitude": "-84.67837",
            "country": "United States",
            "province": "New_York",
            "city": "Acworth",
            "device_type": "防火墙",
            "port": 80
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "252.34.179.155",
        "data": {
            "id": "252.34.179.155",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mendez, Drake and Flores.Ltd",
            "type": "entity",
            "latitude": "42.52787",
            "longitude": "-70.92866",
            "country": "United States",
            "province": "New_York",
            "city": "Peabody",
            "device_type": "安防设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "80.157.88.148",
        "data": {
            "id": "80.157.88.148",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Kramer-Dickerson.LLC",
            "type": "entity",
            "latitude": "41.55838",
            "longitude": "-81.56929",
            "country": "United States",
            "province": "New_York",
            "city": "Collinwood",
            "device_type": "防火墙",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "54.89.235.39",
        "data": {
            "id": "54.89.235.39",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Kane Ltd.PLC",
            "type": "entity",
            "latitude": "40.24537",
            "longitude": "-75.64963",
            "country": "United States",
            "province": "New_York",
            "city": "Pottstown",
            "device_type": "安防设备",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "156.240.120.51",
        "data": {
            "id": "156.240.120.51",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Fowler-Smith.and Sons",
            "type": "entity",
            "latitude": "44.99012",
            "longitude": "-123.02621",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Keizer",
            "device_type": "NVR设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "141.135.198.206",
        "data": {
            "id": "141.135.198.206",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Espinoza, White and Hardy.Inc",
            "type": "entity",
            "latitude": "45.0408",
            "longitude": "-93.263",
            "country": "United States",
            "province": "Chicago",
            "city": "Columbia Heights",
            "device_type": "NVR设备",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1.127.247.219",
        "data": {
            "id": "1.127.247.219",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Black-Reynolds.Inc",
            "type": "entity",
            "latitude": "31.76212",
            "longitude": "-95.63079",
            "country": "United States",
            "province": "Chicago",
            "city": "Palestine",
            "device_type": "路由器",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "121.126.157.32",
        "data": {
            "id": "121.126.157.32",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Richard, Patterson and Anthony.LLC",
            "type": "entity",
            "latitude": "33.76446",
            "longitude": "-117.79394",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "North Tustin",
            "device_type": "防火墙",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "100.55.234.23",
        "data": {
            "id": "100.55.234.23",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Townsend-Palmer.Group",
            "type": "entity",
            "latitude": "33.92946",
            "longitude": "-116.97725",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Beaumont",
            "device_type": "安防设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "46.32.39.223",
        "data": {
            "id": "46.32.39.223",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Williams-Santiago.Inc",
            "type": "entity",
            "latitude": "36.06523",
            "longitude": "-119.01677",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Porterville",
            "device_type": "智能电表",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "49.68.16.91",
        "data": {
            "id": "49.68.16.91",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Johnson, Johnson and Smith.LLC",
            "type": "entity",
            "latitude": "33.76446",
            "longitude": "-117.79394",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "North Tustin",
            "device_type": "DVR设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "147.123.254.52",
        "data": {
            "id": "147.123.254.52",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Butler-Adams.Group",
            "type": "entity",
            "latitude": "32.35126",
            "longitude": "-95.30106",
            "country": "United States",
            "province": "Chicago",
            "city": "Tyler",
            "device_type": "智能电表",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "52.197.31.216",
        "data": {
            "id": "52.197.31.216",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Krause Ltd.PLC",
            "type": "entity",
            "latitude": "38.91817",
            "longitude": "-78.19444",
            "country": "United States",
            "province": "New_York",
            "city": "Front Royal",
            "device_type": "网络存储设备",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "219.238.255.208",
        "data": {
            "id": "219.238.255.208",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Williams, Lopez and Miller.LLC",
            "type": "entity",
            "latitude": "34.25628",
            "longitude": "-78.04471",
            "country": "United States",
            "province": "New_York",
            "city": "Leland",
            "device_type": "DVR设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "53.236.26.88",
        "data": {
            "id": "53.236.26.88",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Garza-Bartlett.Inc",
            "type": "entity",
            "latitude": "27.09978",
            "longitude": "-82.45426",
            "country": "United States",
            "province": "New_York",
            "city": "Venice",
            "device_type": "DVR设备",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "48.242.131.1",
        "data": {
            "id": "48.242.131.1",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hale-Black.and Sons",
            "type": "entity",
            "latitude": "33.50921",
            "longitude": "-111.89903",
            "country": "United States",
            "province": "Phoenix",
            "city": "Scottsdale",
            "device_type": "DVR设备",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "15.5.24.139",
        "data": {
            "id": "15.5.24.139",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Gordon, Hines and West.Ltd",
            "type": "entity",
            "latitude": "40.57788",
            "longitude": "-73.95958",
            "country": "United States",
            "province": "New_York",
            "city": "Brighton Beach",
            "device_type": "防火墙",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "83.91.90.159",
        "data": {
            "id": "83.91.90.159",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Arnold, Edwards and Clark.Ltd",
            "type": "entity",
            "latitude": "33.44872",
            "longitude": "-86.78777",
            "country": "United States",
            "province": "Chicago",
            "city": "Vestavia Hills",
            "device_type": "NVR设备",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "141.120.181.116",
        "data": {
            "id": "141.120.181.116",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Beck, Huynh and Jennings.Group",
            "type": "entity",
            "latitude": "44.99012",
            "longitude": "-123.02621",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Keizer",
            "device_type": "安防设备",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "208.160.23.170",
        "data": {
            "id": "208.160.23.170",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Davis-Martinez.Inc",
            "type": "entity",
            "latitude": "26.91756",
            "longitude": "-82.07842",
            "country": "United States",
            "province": "New_York",
            "city": "Punta Gorda Isles",
            "device_type": "AP设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "236.237.55.139",
        "data": {
            "id": "236.237.55.139",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Garrett, Thomas and Barton.LLC",
            "type": "entity",
            "latitude": "45.49428",
            "longitude": "-122.86705",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Aloha",
            "device_type": "路由器",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "152.142.28.104",
        "data": {
            "id": "152.142.28.104",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Vaughn, Martin and Campbell.PLC",
            "type": "entity",
            "latitude": "40.93121",
            "longitude": "-73.89875",
            "country": "United States",
            "province": "New_York",
            "city": "Yonkers",
            "device_type": "防火墙",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "103.114.253.112",
        "data": {
            "id": "103.114.253.112",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mcintosh Inc.LLC",
            "type": "entity",
            "latitude": "30.16688",
            "longitude": "-96.39774",
            "country": "United States",
            "province": "Chicago",
            "city": "Brenham",
            "device_type": "DVR设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "226.113.20.177",
        "data": {
            "id": "226.113.20.177",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Jenkins-Cameron.Group",
            "type": "entity",
            "latitude": "45.53929",
            "longitude": "-122.38731",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Troutdale",
            "device_type": "AP设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "45.13.59.31",
        "data": {
            "id": "45.13.59.31",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Rivas-Baker.LLC",
            "type": "entity",
            "latitude": "45.16024",
            "longitude": "-93.08883",
            "country": "United States",
            "province": "Chicago",
            "city": "Lino Lakes",
            "device_type": "光猫",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "13.157.128.158",
        "data": {
            "id": "13.157.128.158",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Williams and Sons.Inc",
            "type": "entity",
            "latitude": "41.84364",
            "longitude": "-87.71255",
            "country": "United States",
            "province": "Chicago",
            "city": "South Lawndale",
            "device_type": "网络存储设备",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "14.204.255.246",
        "data": {
            "id": "14.204.255.246",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Howard PLC.Group",
            "type": "entity",
            "latitude": "30.5427",
            "longitude": "-97.54667",
            "country": "United States",
            "province": "Chicago",
            "city": "Hutto",
            "device_type": "摄像头",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "181.64.162.171",
        "data": {
            "id": "181.64.162.171",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Duncan, Fisher and Fitzgerald.Inc",
            "type": "entity",
            "latitude": "41.16704",
            "longitude": "-73.20483",
            "country": "United States",
            "province": "New_York",
            "city": "Bridgeport",
            "device_type": "网络存储设备",
            "port": 80
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "37.29.21.95",
        "data": {
            "id": "37.29.21.95",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Greer, Cox and Holloway.Ltd",
            "type": "entity",
            "latitude": "42.4251",
            "longitude": "-71.06616",
            "country": "United States",
            "province": "New_York",
            "city": "Malden",
            "device_type": "安防设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "178.48.45.238",
        "data": {
            "id": "178.48.45.238",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Shepherd Inc.LLC",
            "type": "entity",
            "latitude": "34.09611",
            "longitude": "-118.10583",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "San Gabriel",
            "device_type": "智能电表",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "229.16.117.170",
        "data": {
            "id": "229.16.117.170",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Nguyen and Sons.Ltd",
            "type": "entity",
            "latitude": "41.6764",
            "longitude": "-91.58045",
            "country": "United States",
            "province": "Chicago",
            "city": "Coralville",
            "device_type": "AP设备",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "101.220.166.228",
        "data": {
            "id": "101.220.166.228",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Gomez PLC.Ltd",
            "type": "entity",
            "latitude": "28.54944",
            "longitude": "-81.77285",
            "country": "United States",
            "province": "New_York",
            "city": "Clermont",
            "device_type": "NVR设备",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "85.255.6.118",
        "data": {
            "id": "85.255.6.118",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Cunningham, Mcclure and Callahan.PLC",
            "type": "entity",
            "latitude": "31.84568",
            "longitude": "-102.36764",
            "country": "United States",
            "province": "Chicago",
            "city": "Odessa",
            "device_type": "NVR设备",
            "port": 80
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "67.133.218.48",
        "data": {
            "id": "67.133.218.48",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mitchell and Sons.LLC",
            "type": "entity",
            "latitude": "42.55308",
            "longitude": "-87.93341",
            "country": "United States",
            "province": "Chicago",
            "city": "Pleasant Prairie",
            "device_type": "路由器",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "248.172.226.250",
        "data": {
            "id": "248.172.226.250",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Johnson-Dickson.Ltd",
            "type": "entity",
            "latitude": "32.44874",
            "longitude": "-99.73314",
            "country": "United States",
            "province": "Chicago",
            "city": "Abilene",
            "device_type": "AP设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "254.86.68.38",
        "data": {
            "id": "254.86.68.38",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Bennett, Hodges and Green.Ltd",
            "type": "entity",
            "latitude": "40.82232",
            "longitude": "-74.15987",
            "country": "United States",
            "province": "New_York",
            "city": "Nutley",
            "device_type": "摄像头",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "115.189.112.63",
        "data": {
            "id": "115.189.112.63",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Brooks, Mays and Harrington.Group",
            "type": "entity",
            "latitude": "41.24255",
            "longitude": "-82.61573",
            "country": "United States",
            "province": "New_York",
            "city": "Norwalk",
            "device_type": "DVR设备",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "67.92.219.36",
        "data": {
            "id": "67.92.219.36",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Cox, Hurley and Brown.Inc",
            "type": "entity",
            "latitude": "42.52787",
            "longitude": "-70.92866",
            "country": "United States",
            "province": "New_York",
            "city": "Peabody",
            "device_type": "摄像头",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "124.45.31.170",
        "data": {
            "id": "124.45.31.170",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Taylor-Luna.Ltd",
            "type": "entity",
            "latitude": "44.73941",
            "longitude": "-93.12577",
            "country": "United States",
            "province": "Chicago",
            "city": "Rosemount",
            "device_type": "NVR设备",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "179.253.30.175",
        "data": {
            "id": "179.253.30.175",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Dillon, Smith and Bryant.LLC",
            "type": "entity",
            "latitude": "35.25064",
            "longitude": "-91.73625",
            "country": "United States",
            "province": "Chicago",
            "city": "Searcy",
            "device_type": "网络存储设备",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "69.70.61.245",
        "data": {
            "id": "69.70.61.245",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Briggs Inc.LLC",
            "type": "entity",
            "latitude": "30.5427",
            "longitude": "-97.54667",
            "country": "United States",
            "province": "Chicago",
            "city": "Hutto",
            "device_type": "DVR设备",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "118.135.6.139",
        "data": {
            "id": "118.135.6.139",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Simmons-Foster.PLC",
            "type": "entity",
            "latitude": "26.91756",
            "longitude": "-82.07842",
            "country": "United States",
            "province": "New_York",
            "city": "Punta Gorda Isles",
            "device_type": "安防设备",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "128.56.12.83",
        "data": {
            "id": "128.56.12.83",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Vaughn LLC.Inc",
            "type": "entity",
            "latitude": "40.63316",
            "longitude": "-74.13653",
            "country": "United States",
            "province": "New_York",
            "city": "Port Richmond",
            "device_type": "摄像头",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "190.74.145.159",
        "data": {
            "id": "190.74.145.159",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Johnson-Carrillo.LLC",
            "type": "entity",
            "latitude": "33.98154",
            "longitude": "-81.23621",
            "country": "United States",
            "province": "New_York",
            "city": "Lexington",
            "device_type": "AP设备",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "2.156.33.232",
        "data": {
            "id": "2.156.33.232",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Snyder LLC.LLC",
            "type": "entity",
            "latitude": "34.25628",
            "longitude": "-78.04471",
            "country": "United States",
            "province": "New_York",
            "city": "Leland",
            "device_type": "防火墙",
            "port": 23
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "99.36.237.19",
        "data": {
            "id": "99.36.237.19",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Reed Ltd.PLC",
            "type": "entity",
            "latitude": "40.5576",
            "longitude": "-74.28459",
            "country": "United States",
            "province": "New_York",
            "city": "Woodbridge",
            "device_type": "安防设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "85.239.136.59",
        "data": {
            "id": "85.239.136.59",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mitchell LLC.LLC",
            "type": "entity",
            "latitude": "36.20829",
            "longitude": "-115.98391",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Pahrump",
            "device_type": "路由器",
            "port": 80
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "94.40.57.176",
        "data": {
            "id": "94.40.57.176",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mendoza-Welch.Ltd",
            "type": "entity",
            "latitude": "35.05266",
            "longitude": "-78.87836",
            "country": "United States",
            "province": "New_York",
            "city": "Fayetteville",
            "device_type": "路由器",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "180.187.192.44",
        "data": {
            "id": "180.187.192.44",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Briggs, Freeman and Price.Inc",
            "type": "entity",
            "latitude": "27.09978",
            "longitude": "-82.45426",
            "country": "United States",
            "province": "New_York",
            "city": "Venice",
            "device_type": "AP设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "174.53.26.76",
        "data": {
            "id": "174.53.26.76",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Kelly, Mitchell and Bryan.Ltd",
            "type": "entity",
            "latitude": "40.64621",
            "longitude": "-73.97069",
            "country": "United States",
            "province": "New_York",
            "city": "Kensington",
            "device_type": "DVR设备",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "128.205.143.114",
        "data": {
            "id": "128.205.143.114",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Gill and Sons.and Sons",
            "type": "entity",
            "latitude": "40.57788",
            "longitude": "-73.95958",
            "country": "United States",
            "province": "New_York",
            "city": "Brighton Beach",
            "device_type": "网络存储设备",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "148.207.31.115",
        "data": {
            "id": "148.207.31.115",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Dixon, Jordan and Oliver.Inc",
            "type": "entity",
            "latitude": "34.21639",
            "longitude": "-119.0376",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Camarillo",
            "device_type": "防火墙",
            "port": 80
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "222.38.202.85",
        "data": {
            "id": "222.38.202.85",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Sheppard Inc.Group",
            "type": "entity",
            "latitude": "38.91817",
            "longitude": "-78.19444",
            "country": "United States",
            "province": "New_York",
            "city": "Front Royal",
            "device_type": "NVR设备",
            "port": 443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "6.189.198.91",
        "data": {
            "id": "6.189.198.91",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Kennedy Group.Group",
            "type": "entity",
            "latitude": "41.55815",
            "longitude": "-73.0515",
            "country": "United States",
            "province": "New_York",
            "city": "Waterbury",
            "device_type": "路由器",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "109.234.191.249",
        "data": {
            "id": "109.234.191.249",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wang-Wells.Ltd",
            "type": "entity",
            "latitude": "32.42067",
            "longitude": "-104.22884",
            "country": "United States",
            "province": "Denver",
            "city": "Carlsbad",
            "device_type": "NVR设备",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "176.214.212.38",
        "data": {
            "id": "176.214.212.38",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mcdaniel-Payne.and Sons",
            "type": "entity",
            "latitude": "26.18924",
            "longitude": "-98.15529",
            "country": "United States",
            "province": "Chicago",
            "city": "San Juan",
            "device_type": "防火墙",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "108.41.75.183",
        "data": {
            "id": "108.41.75.183",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wilson, Fuentes and Cooke.and Sons",
            "type": "entity",
            "latitude": "40.65995",
            "longitude": "-111.99633",
            "country": "United States",
            "province": "Denver",
            "city": "Kearns",
            "device_type": "防火墙",
            "port": 554
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "15.177.120.189",
        "data": {
            "id": "15.177.120.189",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hall, Jordan and Blackwell.Group",
            "type": "entity",
            "latitude": "32.5007",
            "longitude": "-94.74049",
            "country": "United States",
            "province": "Chicago",
            "city": "Longview",
            "device_type": "安防设备",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "88.211.126.204",
        "data": {
            "id": "88.211.126.204",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Green-Green.Inc",
            "type": "entity",
            "latitude": "37.60876",
            "longitude": "-77.37331",
            "country": "United States",
            "province": "New_York",
            "city": "Mechanicsville",
            "device_type": "光猫",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "187.13.183.148",
        "data": {
            "id": "187.13.183.148",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Harrison and Sons.Inc",
            "type": "entity",
            "latitude": "40.60538",
            "longitude": "-73.75513",
            "country": "United States",
            "province": "New_York",
            "city": "Far Rockaway",
            "device_type": "光猫",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "230.39.199.251",
        "data": {
            "id": "230.39.199.251",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Fleming Inc.LLC",
            "type": "entity",
            "latitude": "36.61033",
            "longitude": "-88.31476",
            "country": "United States",
            "province": "Chicago",
            "city": "Murray",
            "device_type": "DVR设备",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "147.114.150.94",
        "data": {
            "id": "147.114.150.94",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Taylor PLC.Ltd",
            "type": "entity",
            "latitude": "32.9156",
            "longitude": "-117.14392",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Mira Mesa",
            "device_type": "光猫",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "141.159.101.196",
        "data": {
            "id": "141.159.101.196",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Garcia, Gonzalez and Bailey.and Sons",
            "type": "entity",
            "latitude": "40.24537",
            "longitude": "-75.64963",
            "country": "United States",
            "province": "New_York",
            "city": "Pottstown",
            "device_type": "DVR设备",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "237.107.99.68",
        "data": {
            "id": "237.107.99.68",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Hernandez Group.and Sons",
            "type": "entity",
            "latitude": "42.16808",
            "longitude": "-88.42814",
            "country": "United States",
            "province": "Chicago",
            "city": "Huntley",
            "device_type": "网络存储设备",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "105.132.85.252",
        "data": {
            "id": "105.132.85.252",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Wheeler-Owen.LLC",
            "type": "entity",
            "latitude": "33.08014",
            "longitude": "-83.2321",
            "country": "United States",
            "province": "New_York",
            "city": "Milledgeville",
            "device_type": "路由器",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "236.103.123.78",
        "data": {
            "id": "236.103.123.78",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Graves-Brown.and Sons",
            "type": "entity",
            "latitude": "44.73941",
            "longitude": "-93.12577",
            "country": "United States",
            "province": "Chicago",
            "city": "Rosemount",
            "device_type": "安防设备",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "201.201.81.46",
        "data": {
            "id": "201.201.81.46",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Mann and Sons.Ltd",
            "type": "entity",
            "latitude": "47.4943",
            "longitude": "-122.24092",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Bryn Mawr-Skyway",
            "device_type": "防火墙",
            "port": 8443
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "201.22.187.55",
        "data": {
            "id": "201.22.187.55",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Estrada Inc.and Sons",
            "type": "entity",
            "latitude": "44.73941",
            "longitude": "-93.12577",
            "country": "United States",
            "province": "Chicago",
            "city": "Rosemount",
            "device_type": "摄像头",
            "port": 9200
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "28.8.247.190",
        "data": {
            "id": "28.8.247.190",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Burton LLC.Group",
            "type": "entity",
            "latitude": "36.91023",
            "longitude": "-121.75689",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "Watsonville",
            "device_type": "NVR设备",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "122.163.1.143",
        "data": {
            "id": "122.163.1.143",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Salinas-Kelley.PLC",
            "type": "entity",
            "latitude": "41.54566",
            "longitude": "-71.29144",
            "country": "United States",
            "province": "New_York",
            "city": "Middletown",
            "device_type": "光猫",
            "port": 3306
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "194.2.74.88",
        "data": {
            "id": "194.2.74.88",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Nguyen Group.Inc",
            "type": "entity",
            "latitude": "36.02506",
            "longitude": "-86.77917",
            "country": "United States",
            "province": "Chicago",
            "city": "Brentwood Estates",
            "device_type": "网络存储设备",
            "port": 22
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "207.199.27.220",
        "data": {
            "id": "207.199.27.220",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Lane Inc.LLC",
            "type": "entity",
            "latitude": "41.9001",
            "longitude": "-71.08977",
            "country": "United States",
            "province": "New_York",
            "city": "Taunton",
            "device_type": "防火墙",
            "port": 8080
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "12.203.79.180",
        "data": {
            "id": "12.203.79.180",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Marshall-Fields.Ltd",
            "type": "entity",
            "latitude": "43.54072",
            "longitude": "-116.56346",
            "country": "United States",
            "province": "Boise",
            "city": "Nampa",
            "device_type": "光猫",
            "port": 8081
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "222.56.75.4",
        "data": {
            "id": "222.56.75.4",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Taylor, Sims and Miller.LLC",
            "type": "entity",
            "latitude": "32.54044",
            "longitude": "-82.90375",
            "country": "United States",
            "province": "New_York",
            "city": "Dublin",
            "device_type": "摄像头",
            "port": 9000
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "176.60.31.134",
        "data": {
            "id": "176.60.31.134",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Gonzalez, Campbell and Lowe.Ltd",
            "type": "entity",
            "latitude": "45.0408",
            "longitude": "-93.263",
            "country": "United States",
            "province": "Chicago",
            "city": "Columbia Heights",
            "device_type": "智能电表",
            "port": 8089
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "72.19.95.30",
        "data": {
            "id": "72.19.95.30",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Townsend-Gibson.and Sons",
            "type": "entity",
            "latitude": "34.09611",
            "longitude": "-118.10583",
            "country": "United States",
            "province": "Los_Angeles",
            "city": "San Gabriel",
            "device_type": "网络存储设备",
            "port": 80
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "11.220.158.114",
        "data": {
            "id": "11.220.158.114",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Pearson, White and Reid.Group",
            "type": "entity",
            "latitude": "40.65538",
            "longitude": "-74.38987",
            "country": "United States",
            "province": "New_York",
            "city": "Scotch Plains",
            "device_type": "NVR设备",
            "port": 4567
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "232.255.113.31",
        "data": {
            "id": "232.255.113.31",
            "dataType": "asset",
            "legendType": "在线设备资产",
            "company": "Davis-Martin.Group",
            "type": "entity",
            "latitude": "33.35283",
            "longitude": "-111.78903",
            "country": "United States",
            "province": "Phoenix",
            "city": "Gilbert",
            "device_type": "网络存储设备",
            "port": 9100
        },
        "nodeType": "asset",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "France",
        "data": {
            "id": "France",
            "dataType": "country",
            "legendType": "国家"
        },
        "nodeType": "country",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "Canada",
        "data": {
            "id": "Canada",
            "dataType": "country",
            "legendType": "国家"
        },
        "nodeType": "country",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "Australia",
        "data": {
            "id": "Australia",
            "dataType": "country",
            "legendType": "国家"
        },
        "nodeType": "country",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "China",
        "data": {
            "id": "China",
            "dataType": "country",
            "legendType": "国家"
        },
        "nodeType": "country",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "Juniper",
        "data": {
            "id": "Juniper",
            "dataType": "manu",
            "legendType": "设备制造商",
            "country": "France"
        },
        "nodeType": "manu",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "Trendnet",
        "data": {
            "id": "Trendnet",
            "dataType": "manu",
            "legendType": "设备制造商",
            "country": "China"
        },
        "nodeType": "manu",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "QNAP",
        "data": {
            "id": "QNAP",
            "dataType": "manu",
            "legendType": "设备制造商",
            "country": "Australia"
        },
        "nodeType": "manu",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1673",
        "data": {
            "id": 1673,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "525852fd5f1ddbeb4317f31ea1f21d8c",
            "manu": "Cisco",
            "device_type": "路由器",
            "name": "yyy_v3.2.zip",
            "os": "ZynOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "8443",
        "data": {
            "id": 8443,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "0a1cd4956037792c8c5e390b4518515a",
            "manu": "ASUS",
            "device_type": "网络存储设备",
            "name": "vvv_v20200902.tar",
            "os": "Linux"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "4793",
        "data": {
            "id": 4793,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "26fec2543faeb345acfef192457fe8ca",
            "manu": "Juniper",
            "device_type": "安防设备",
            "name": "vvv_v20200902.tar",
            "os": "JunOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "4360",
        "data": {
            "id": 4360,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "b2987b8a8f516cdb1222c32f3eae8c9f",
            "manu": "D-Link",
            "device_type": "摄像头",
            "name": "xxx_v1.0.bin",
            "os": "DrayOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "4971",
        "data": {
            "id": 4971,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "278d3217c710a74f1381ae46060b0737",
            "manu": "ASUS",
            "device_type": "防火墙",
            "name": "xxx_v1.0.bin",
            "os": "Linux"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "6300",
        "data": {
            "id": 6300,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "a053c7c3fd37455724025a875a01bb8e",
            "manu": "D-Link",
            "device_type": "AP设备",
            "name": "xxx_v1.0.bin",
            "os": "DrayOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1367",
        "data": {
            "id": 1367,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "b9c1d56cd6f04ad4b6458a3f37bcc46a",
            "manu": "Draytek",
            "device_type": "防火墙",
            "name": "zzz_v3.9.tar.gz",
            "os": "QNX"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1825",
        "data": {
            "id": 1825,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "005b79783d711b066479b4c45c1ab478",
            "manu": "ABB",
            "device_type": "安防设备",
            "name": "zzz_v3.9.tar.gz",
            "os": "JunOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "8074",
        "data": {
            "id": 8074,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "298919e8dce46e9cee62c60f0f88f299",
            "manu": "Synology",
            "device_type": "摄像头",
            "name": "xxx_v1.0.bin",
            "os": "JunOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "5525",
        "data": {
            "id": 5525,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "275b3c09904967aff64d6068a44ad50e",
            "manu": "Trendnet",
            "device_type": "光猫",
            "name": "xxx_v1.0.bin",
            "os": "QNX"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "6884",
        "data": {
            "id": 6884,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "c056153bc64cc3d0fdcb9402f316a720",
            "manu": "Juniper",
            "device_type": "摄像头",
            "name": "yyy_v3.2.zip",
            "os": "JunOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "6967",
        "data": {
            "id": 6967,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "c61a82a2693b43b7720ee15e50e05671",
            "manu": "Trendnet",
            "device_type": "安防设备",
            "name": "ssc_md_20220303.bin",
            "os": "DrayOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "7721",
        "data": {
            "id": 7721,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "1893ff1c83cb6a3f272c32bc3590634f",
            "manu": "QNAP",
            "device_type": "AP设备",
            "name": "yyy_v3.2.zip",
            "os": "JunOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1788",
        "data": {
            "id": 1788,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "263ba615aa6993f4fce485dfe5b88748",
            "manu": "ABB",
            "device_type": "路由器",
            "name": "xxx_v1.0.bin",
            "os": "QNX"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "5317",
        "data": {
            "id": 5317,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "2463b91a02dd4496517837985a6c1cee",
            "manu": "Trendnet",
            "device_type": "防火墙",
            "name": "xxx_v1.09.tar",
            "os": "Linux"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "3371",
        "data": {
            "id": 3371,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "9c8c643f8aeed93d7e61a4df10ffc0dd",
            "manu": "ASUS",
            "device_type": "路由器",
            "name": "xxx_v1.0.bin",
            "os": "DrayOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "3117",
        "data": {
            "id": 3117,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "3614deac95d4945d166c1db4bd445c18",
            "manu": "QNAP",
            "device_type": "路由器",
            "name": "xxx_v1.0.bin",
            "os": "FortiOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1713",
        "data": {
            "id": 1713,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "222667d440edfd8a87113aca749f980f",
            "manu": "ASUS",
            "device_type": "摄像头",
            "name": "xxx_v1.09.tar",
            "os": "FreeRTOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "8898",
        "data": {
            "id": 8898,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "b1e8d2f7af9607ea7f05d3657677115e",
            "manu": "Draytek",
            "device_type": "DVR设备",
            "name": "ssc_md_20220303.bin",
            "os": "ZynOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "1597",
        "data": {
            "id": 1597,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "73904b9faeedfbbac434d469530d7048",
            "manu": "Synology",
            "device_type": "光猫",
            "name": "xxx_v1.09.tar",
            "os": "FortiOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "5054",
        "data": {
            "id": 5054,
            "dataType": "firmware",
            "legendType": "固件",
            "md5": "c7de34720026c7e0bb45fe9a6b5be745",
            "manu": "Juniper",
            "device_type": "智能电表",
            "name": "xxx_v1.0.bin",
            "os": "FortiOS"
        },
        "nodeType": "firmware",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "dc09ee2ff472a54051ed99ba760604c6",
        "data": {
            "id": "dc09ee2ff472a54051ed99ba760604c6",
            "name": "busybox",
            "dataType": "file",
            "legendType": "单文件",
            "md5": "dc09ee2ff472a54051ed99ba760604c6"
        },
        "nodeType": "file",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "42cea58ac6bd53546977a199dfae338b",
        "data": {
            "id": "42cea58ac6bd53546977a199dfae338b",
            "name": "busybox",
            "dataType": "file",
            "legendType": "单文件",
            "md5": "42cea58ac6bd53546977a199dfae338b"
        },
        "nodeType": "file",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "62d9e1385c974b239ecea83e584869bc",
        "data": {
            "id": "62d9e1385c974b239ecea83e584869bc",
            "name": "busybox",
            "dataType": "file",
            "legendType": "单文件",
            "md5": "62d9e1385c974b239ecea83e584869bc"
        },
        "nodeType": "file",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "CVE-2019-2528",
        "data": {
            "id": "CVE-2019-2528",
            "dataType": "cve",
            "legendType": "漏洞事件"
        },
        "nodeType": "cve",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "CVE-2021-5191",
        "data": {
            "id": "CVE-2021-5191",
            "dataType": "cve",
            "legendType": "漏洞事件"
        },
        "nodeType": "cve",
        "nodeTypeKeyFromProperties": "dataType"
    }, {
        "id": "pink_botnet",
        "data": {
            "id": "pink_botnet",
            "dataType": "botnet",
            "legendType": "僵尸网络家族",
            "first_seen": "2020-06-06",
            "last_seen": "2021-07-18"
        },
        "nodeType": "botnet",
        "nodeTypeKeyFromProperties": "dataType"
    }],
    "edges": [{
        "data": {
            "source": "6.79.223.106",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "6.79.223.106",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "6.79.223.106",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "6.79.223.106",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "141.120.181.116",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "141.120.181.116",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "141.120.181.116",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "141.120.181.116",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "91.1.100.56",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "91.1.100.56",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "91.219.218.86",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "91.219.218.86",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "133.102.109.244",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "133.102.109.244",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "253.44.233.16",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "253.44.233.16",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "198.242.63.234",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "198.242.63.234",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "165.139.207.29",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "165.139.207.29",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "41.3.228.218",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "41.3.228.218",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "238.115.65.77",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "238.115.65.77",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "10.220.18.159",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "10.220.18.159",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "188.192.225.36",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "188.192.225.36",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "220.144.235.43",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "220.144.235.43",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "76.61.120.126",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "76.61.120.126",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "70.147.91.94",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "70.147.91.94",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "159.76.24.149",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "159.76.24.149",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "59.56.228.252",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "59.56.228.252",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "231.104.58.87",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "231.104.58.87",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "227.236.45.143",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "227.236.45.143",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "105.134.35.50",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "105.134.35.50",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "184.30.78.207",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "184.30.78.207",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "45.234.221.156",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "45.234.221.156",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "93.216.37.234",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "93.216.37.234",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "2.176.133.129",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "2.176.133.129",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "1.181.75.114",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "1.181.75.114",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "6.156.222.211",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "6.156.222.211",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "146.57.148.63",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "146.57.148.63",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "160.51.3.109",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "160.51.3.109",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "153.144.200.99",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "153.144.200.99",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "85.96.69.136",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "85.96.69.136",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "90.208.46.115",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "90.208.46.115",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "6.125.158.237",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "6.125.158.237",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "74.109.124.159",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "74.109.124.159",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "149.118.6.147",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "149.118.6.147",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "202.218.41.145",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "202.218.41.145",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "214.17.242.34",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "214.17.242.34",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "21.132.106.162",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "21.132.106.162",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "54.125.106.58",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "54.125.106.58",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "132.182.169.210",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "132.182.169.210",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "169.210.181.208",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "169.210.181.208",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "17.127.137.115",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "17.127.137.115",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "3.47.159.36",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "3.47.159.36",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "49.123.159.57",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "49.123.159.57",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "201.182.91.21",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "201.182.91.21",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "231.44.202.102",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "231.44.202.102",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "114.72.197.181",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "114.72.197.181",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "153.35.142.189",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "153.35.142.189",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "0.24.80.255",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "0.24.80.255",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "212.81.47.85",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "212.81.47.85",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "143.56.126.199",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "143.56.126.199",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "151.174.239.54",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "151.174.239.54",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "91.1.100.56",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "91.1.100.56",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62.38.49.27",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "62.38.49.27",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "115.108.176.150",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "115.108.176.150",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "120.93.70.57",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "120.93.70.57",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "97.63.236.9",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "97.63.236.9",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "83.230.35.214",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "83.230.35.214",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "251.141.166.223",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "251.141.166.223",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "254.138.176.45",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "254.138.176.45",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "39.89.223.149",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "39.89.223.149",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "172.227.40.93",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "172.227.40.93",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "133.188.198.242",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "133.188.198.242",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "98.225.232.251",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "98.225.232.251",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "78.19.110.88",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "78.19.110.88",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "204.63.202.180",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "204.63.202.180",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "109.162.41.153",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "109.162.41.153",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "90.132.130.213",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "90.132.130.213",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "143.32.71.217",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "143.32.71.217",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "108.24.165.15",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "108.24.165.15",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "14.231.249.158",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "14.231.249.158",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "13.215.189.230",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "13.215.189.230",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "103.98.249.62",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "103.98.249.62",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "122.18.38.231",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "122.18.38.231",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "135.231.37.17",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "135.231.37.17",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "71.16.232.117",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "71.16.232.117",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "253.227.96.162",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "253.227.96.162",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "216.98.100.1",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "216.98.100.1",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "69.208.127.54",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "69.208.127.54",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "45.229.195.214",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "45.229.195.214",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "207.189.243.166",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "207.189.243.166",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "188.201.128.238",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "188.201.128.238",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "81.64.56.179",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "81.64.56.179",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "54.86.105.66",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "54.86.105.66",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "140.101.53.179",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "140.101.53.179",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "112.67.153.161",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "112.67.153.161",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "142.146.66.63",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "142.146.66.63",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "162.59.255.233",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "162.59.255.233",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "250.218.224.65",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "250.218.224.65",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "156.223.36.16",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "156.223.36.16",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "164.95.68.188",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "164.95.68.188",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "4.166.95.134",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "4.166.95.134",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "202.58.175.122",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "202.58.175.122",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "129.46.83.206",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "129.46.83.206",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "242.121.167.130",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "242.121.167.130",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "213.156.187.160",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "213.156.187.160",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "132.148.147.135",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "132.148.147.135",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "172.88.24.150",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "172.88.24.150",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "0.124.228.66",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "0.124.228.66",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "252.160.2.48",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "252.160.2.48",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "237.178.159.171",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "237.178.159.171",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "254.27.249.71",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "254.27.249.71",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "193.147.222.51",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "193.147.222.51",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "99.190.224.53",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "99.190.224.53",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "243.21.143.167",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "243.21.143.167",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "241.250.90.13",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "241.250.90.13",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "224.248.79.38",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "224.248.79.38",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "249.238.205.50",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "249.238.205.50",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "252.34.179.155",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "252.34.179.155",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "80.157.88.148",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "80.157.88.148",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "54.89.235.39",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "54.89.235.39",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "156.240.120.51",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "156.240.120.51",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "141.135.198.206",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "141.135.198.206",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "1.127.247.219",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "1.127.247.219",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "121.126.157.32",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "121.126.157.32",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "100.55.234.23",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "100.55.234.23",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "46.32.39.223",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "46.32.39.223",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "49.68.16.91",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "49.68.16.91",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "147.123.254.52",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "147.123.254.52",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "52.197.31.216",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "52.197.31.216",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "219.238.255.208",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "219.238.255.208",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "53.236.26.88",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "53.236.26.88",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "48.242.131.1",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "48.242.131.1",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "15.5.24.139",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "15.5.24.139",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "83.91.90.159",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "83.91.90.159",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "208.160.23.170",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "208.160.23.170",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "236.237.55.139",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "236.237.55.139",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "152.142.28.104",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "152.142.28.104",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "103.114.253.112",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "103.114.253.112",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "226.113.20.177",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "226.113.20.177",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "45.13.59.31",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "45.13.59.31",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "13.157.128.158",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "13.157.128.158",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "14.204.255.246",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "14.204.255.246",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "181.64.162.171",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "181.64.162.171",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "37.29.21.95",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "37.29.21.95",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "178.48.45.238",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "178.48.45.238",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "229.16.117.170",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "229.16.117.170",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "101.220.166.228",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "101.220.166.228",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "85.255.6.118",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "85.255.6.118",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "67.133.218.48",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "67.133.218.48",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "248.172.226.250",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "248.172.226.250",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "254.86.68.38",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "254.86.68.38",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "115.189.112.63",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "115.189.112.63",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "67.92.219.36",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "67.92.219.36",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "124.45.31.170",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "124.45.31.170",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "179.253.30.175",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "179.253.30.175",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "69.70.61.245",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "69.70.61.245",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "118.135.6.139",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "118.135.6.139",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "128.56.12.83",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "128.56.12.83",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "190.74.145.159",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "190.74.145.159",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "2.156.33.232",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "2.156.33.232",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "99.36.237.19",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "99.36.237.19",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "85.239.136.59",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "85.239.136.59",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "94.40.57.176",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "94.40.57.176",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "180.187.192.44",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "180.187.192.44",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "174.53.26.76",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "174.53.26.76",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "128.205.143.114",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "128.205.143.114",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "148.207.31.115",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "148.207.31.115",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "222.38.202.85",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "222.38.202.85",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "6.189.198.91",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "6.189.198.91",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "109.234.191.249",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "109.234.191.249",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "176.214.212.38",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "176.214.212.38",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "108.41.75.183",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "108.41.75.183",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "15.177.120.189",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "15.177.120.189",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "88.211.126.204",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "88.211.126.204",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "187.13.183.148",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "187.13.183.148",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "230.39.199.251",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "230.39.199.251",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "147.114.150.94",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "147.114.150.94",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "141.159.101.196",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "141.159.101.196",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "237.107.99.68",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "237.107.99.68",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "105.132.85.252",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "105.132.85.252",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "236.103.123.78",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "236.103.123.78",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "201.201.81.46",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "201.201.81.46",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "201.22.187.55",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "201.22.187.55",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "28.8.247.190",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "28.8.247.190",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "122.163.1.143",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "122.163.1.143",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "194.2.74.88",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "194.2.74.88",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "207.199.27.220",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "207.199.27.220",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "12.203.79.180",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "12.203.79.180",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "222.56.75.4",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "222.56.75.4",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "176.60.31.134",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "176.60.31.134",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "72.19.95.30",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "72.19.95.30",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "11.220.158.114",
            "target": "China",
            "edgeType": "assets_to_country"
        },
        "source": "11.220.158.114",
        "target": "China",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "232.255.113.31",
            "target": "Australia",
            "edgeType": "assets_to_country"
        },
        "source": "232.255.113.31",
        "target": "Australia",
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1673,
            "target": "21.132.106.162",
            "edgeType": "firmware_to_assets"
        },
        "source": "1673",
        "target": "21.132.106.162",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 8443,
            "target": "120.93.70.57",
            "edgeType": "firmware_to_assets"
        },
        "source": "8443",
        "target": "120.93.70.57",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 4793,
            "target": "135.231.37.17",
            "edgeType": "firmware_to_assets"
        },
        "source": "4793",
        "target": "135.231.37.17",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 4360,
            "target": "45.13.59.31",
            "edgeType": "firmware_to_assets"
        },
        "source": "4360",
        "target": "45.13.59.31",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 4971,
            "target": "250.218.224.65",
            "edgeType": "firmware_to_assets"
        },
        "source": "4971",
        "target": "250.218.224.65",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 6300,
            "target": "162.59.255.233",
            "edgeType": "firmware_to_assets"
        },
        "source": "6300",
        "target": "162.59.255.233",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1367,
            "target": "14.204.255.246",
            "edgeType": "firmware_to_assets"
        },
        "source": "1367",
        "target": "14.204.255.246",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1825,
            "target": "253.44.233.16",
            "edgeType": "firmware_to_assets"
        },
        "source": "1825",
        "target": "253.44.233.16",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 8074,
            "target": "178.48.45.238",
            "edgeType": "firmware_to_assets"
        },
        "source": "8074",
        "target": "178.48.45.238",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5525,
            "target": "241.250.90.13",
            "edgeType": "firmware_to_assets"
        },
        "source": "5525",
        "target": "241.250.90.13",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 6884,
            "target": "238.115.65.77",
            "edgeType": "firmware_to_assets"
        },
        "source": "6884",
        "target": "238.115.65.77",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 6967,
            "target": "21.132.106.162",
            "edgeType": "firmware_to_assets"
        },
        "source": "6967",
        "target": "21.132.106.162",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 7721,
            "target": "0.24.80.255",
            "edgeType": "firmware_to_assets"
        },
        "source": "7721",
        "target": "0.24.80.255",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1788,
            "target": "252.160.2.48",
            "edgeType": "firmware_to_assets"
        },
        "source": "1788",
        "target": "252.160.2.48",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5317,
            "target": "83.230.35.214",
            "edgeType": "firmware_to_assets"
        },
        "source": "5317",
        "target": "83.230.35.214",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 3371,
            "target": "147.114.150.94",
            "edgeType": "firmware_to_assets"
        },
        "source": "3371",
        "target": "147.114.150.94",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 3117,
            "target": "147.123.254.52",
            "edgeType": "firmware_to_assets"
        },
        "source": "3117",
        "target": "147.123.254.52",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1713,
            "target": "254.138.176.45",
            "edgeType": "firmware_to_assets"
        },
        "source": "1713",
        "target": "254.138.176.45",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 8898,
            "target": "237.107.99.68",
            "edgeType": "firmware_to_assets"
        },
        "source": "8898",
        "target": "237.107.99.68",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1597,
            "target": "99.190.224.53",
            "edgeType": "firmware_to_assets"
        },
        "source": "1597",
        "target": "99.190.224.53",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5054,
            "target": "108.41.75.183",
            "edgeType": "firmware_to_assets"
        },
        "source": "5054",
        "target": "108.41.75.183",
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "QNAP",
            "target": "France",
            "edgeType": "manu_to_country"
        },
        "source": "QNAP",
        "target": "France",
        "edgeType": "manu_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "QNAP",
            "target": "Canada",
            "edgeType": "manu_to_country"
        },
        "source": "QNAP",
        "target": "Canada",
        "edgeType": "manu_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "QNAP",
            "target": "Canada",
            "edgeType": "manu_to_country"
        },
        "source": "QNAP",
        "target": "Canada",
        "edgeType": "manu_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "Juniper",
            "target": "France",
            "edgeType": "manu_to_country"
        },
        "source": "Juniper",
        "target": "France",
        "edgeType": "manu_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "Trendnet",
            "target": "France",
            "edgeType": "manu_to_country"
        },
        "source": "Trendnet",
        "target": "France",
        "edgeType": "manu_to_country",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1713,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "1713",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1713,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "1713",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5317,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "5317",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5317,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "5317",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5317,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "5317",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1673,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "1673",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 8443,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "8443",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 4793,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "4793",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 4360,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "4360",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 4971,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "4971",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 6300,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "6300",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1367,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "1367",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1825,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "1825",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 8074,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "8074",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5525,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "5525",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 6884,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "6884",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 6967,
            "target": "Juniper",
            "edgeType": "firmware_to_manu"
        },
        "source": "6967",
        "target": "Juniper",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 7721,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "7721",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1788,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "1788",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 3371,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "3371",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 3117,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "3117",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 8898,
            "target": "Trendnet",
            "edgeType": "firmware_to_manu"
        },
        "source": "8898",
        "target": "Trendnet",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 1597,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "1597",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": 5054,
            "target": "QNAP",
            "edgeType": "firmware_to_manu"
        },
        "source": "5054",
        "target": "QNAP",
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 1673,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "1673",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 8443,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "8443",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 4793,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "4793",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": 4360,
            "edgeType": "file_to_firmware"
        },
        "source": "dc09ee2ff472a54051ed99ba760604c6",
        "target": "4360",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 4971,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "4971",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": 6300,
            "edgeType": "file_to_firmware"
        },
        "source": "dc09ee2ff472a54051ed99ba760604c6",
        "target": "6300",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": 1367,
            "edgeType": "file_to_firmware"
        },
        "source": "dc09ee2ff472a54051ed99ba760604c6",
        "target": "1367",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 1825,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "1825",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 8074,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "8074",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": 5525,
            "edgeType": "file_to_firmware"
        },
        "source": "dc09ee2ff472a54051ed99ba760604c6",
        "target": "5525",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 6884,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "6884",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 6967,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "6967",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 7721,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "7721",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 1788,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "1788",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 5317,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "5317",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 3371,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "3371",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 3117,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "3117",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": 1713,
            "edgeType": "file_to_firmware"
        },
        "source": "dc09ee2ff472a54051ed99ba760604c6",
        "target": "1713",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 8898,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "8898",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 1597,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "1597",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 5054,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "5054",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "dc09ee2ff472a54051ed99ba760604c6",
            "target": 1825,
            "edgeType": "file_to_firmware"
        },
        "source": "dc09ee2ff472a54051ed99ba760604c6",
        "target": "1825",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "42cea58ac6bd53546977a199dfae338b",
            "target": 4793,
            "edgeType": "file_to_firmware"
        },
        "source": "42cea58ac6bd53546977a199dfae338b",
        "target": "4793",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "62d9e1385c974b239ecea83e584869bc",
            "target": 1597,
            "edgeType": "file_to_firmware"
        },
        "source": "62d9e1385c974b239ecea83e584869bc",
        "target": "1597",
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "CVE-2021-5191",
            "target": "dc09ee2ff472a54051ed99ba760604c6",
            "edgeType": "cve_to_file"
        },
        "source": "CVE-2021-5191",
        "target": "dc09ee2ff472a54051ed99ba760604c6",
        "edgeType": "cve_to_file",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "CVE-2021-5191",
            "target": "dc09ee2ff472a54051ed99ba760604c6",
            "edgeType": "cve_to_file"
        },
        "source": "CVE-2021-5191",
        "target": "dc09ee2ff472a54051ed99ba760604c6",
        "edgeType": "cve_to_file",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "CVE-2019-2528",
            "target": "42cea58ac6bd53546977a199dfae338b",
            "edgeType": "cve_to_file"
        },
        "source": "CVE-2019-2528",
        "target": "42cea58ac6bd53546977a199dfae338b",
        "edgeType": "cve_to_file",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "CVE-2021-5191",
            "target": "62d9e1385c974b239ecea83e584869bc",
            "edgeType": "cve_to_file"
        },
        "source": "CVE-2021-5191",
        "target": "62d9e1385c974b239ecea83e584869bc",
        "edgeType": "cve_to_file",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "CVE-2019-2528",
            "target": "dc09ee2ff472a54051ed99ba760604c6",
            "edgeType": "cve_to_file"
        },
        "source": "CVE-2019-2528",
        "target": "dc09ee2ff472a54051ed99ba760604c6",
        "edgeType": "cve_to_file",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "pink_botnet",
            "target": "CVE-2019-2528",
            "edgeType": "botnet_to_cve"
        },
        "source": "pink_botnet",
        "target": "CVE-2019-2528",
        "edgeType": "botnet_to_cve",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "pink_botnet",
            "target": "CVE-2021-5191",
            "edgeType": "botnet_to_cve"
        },
        "source": "pink_botnet",
        "target": "CVE-2021-5191",
        "edgeType": "botnet_to_cve",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "pink_botnet",
            "target": "CVE-2021-5191",
            "edgeType": "botnet_to_cve"
        },
        "source": "pink_botnet",
        "target": "CVE-2021-5191",
        "edgeType": "botnet_to_cve",
        "edgeTypeKeyFromProperties": "edgeType"
    }, {
        "data": {
            "source": "pink_botnet",
            "target": "CVE-2021-5191",
            "edgeType": "botnet_to_cve"
        },
        "source": "pink_botnet",
        "target": "CVE-2021-5191",
        "edgeType": "botnet_to_cve",
        "edgeTypeKeyFromProperties": "edgeType"
    }]
};

/** G6VP 站点 本地上传的数据的 Schema 信息 **/
export const GI_SCHEMA_DATA = {
    "nodes": [{
        "nodeType": "在线设备资产",
        "nodeTypeKeyFromProperties": "legendType",
        "properties": {
            "id": "string",
            "dataType": "string",
            "legendType": "string",
            "company": "string",
            "type": "string",
            "latitude": "string",
            "longitude": "string",
            "country": "string",
            "province": "string",
            "city": "string",
            "device_type": "string",
            "port": "number"
        }
    }, {
        "nodeType": "国家",
        "nodeTypeKeyFromProperties": "legendType",
        "properties": {
            "id": "string",
            "dataType": "string",
            "legendType": "string"
        }
    }, {
        "nodeType": "设备制造商",
        "nodeTypeKeyFromProperties": "legendType",
        "properties": {
            "id": "string",
            "dataType": "string",
            "legendType": "string",
            "country": "string"
        }
    }, {
        "nodeType": "固件",
        "nodeTypeKeyFromProperties": "legendType",
        "properties": {
            "id": "number",
            "dataType": "string",
            "legendType": "string",
            "md5": "string",
            "manu": "string",
            "device_type": "string",
            "name": "string",
            "os": "string"
        }
    }, {
        "nodeType": "单文件",
        "nodeTypeKeyFromProperties": "legendType",
        "properties": {
            "id": "string",
            "name": "string",
            "dataType": "string",
            "legendType": "string",
            "md5": "string"
        }
    }, {
        "nodeType": "漏洞事件",
        "nodeTypeKeyFromProperties": "legendType",
        "properties": {
            "id": "string",
            "dataType": "string",
            "legendType": "string"
        }
    }, {
        "nodeType": "僵尸网络家族",
        "nodeTypeKeyFromProperties": "legendType",
        "properties": {
            "id": "string",
            "dataType": "string",
            "legendType": "string",
            "first_seen": "string",
            "last_seen": "string"
        }
    }],
    "edges": [{
        "edgeType": "assets_to_country",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "在线设备资产",
        "targetNodeType": "国家",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "firmware_to_assets",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "固件",
        "targetNodeType": "在线设备资产",
        "properties": {
            "source": "number",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "manu_to_country",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "设备制造商",
        "targetNodeType": "国家",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "firmware_to_manu",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "固件",
        "targetNodeType": "设备制造商",
        "properties": {
            "source": "number",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "file_to_firmware",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "单文件",
        "targetNodeType": "固件",
        "properties": {
            "source": "string",
            "target": "number",
            "edgeType": "string"
        }
    }, {
        "edgeType": "cve_to_file",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "漏洞事件",
        "targetNodeType": "单文件",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }, {
        "edgeType": "botnet_to_cve",
        "edgeTypeKeyFromProperties": "edgeType",
        "sourceNodeType": "僵尸网络家族",
        "targetNodeType": "漏洞事件",
        "properties": {
            "source": "string",
            "target": "string",
            "edgeType": "string"
        }
    }]
};

/** 导出的主题 **/
export const THEME_VALUE = "light";
