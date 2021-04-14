package com.themecleanflex.models;

import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

/*
    //GEN[:DATA
    {
  "definitions": {
    "Block": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "anchorname": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Anchor Name",
          "x-form-group": "advanced",
          "x-form-type": "text"
        },
        "extraclasses": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Additonal Classes",
          "x-form-group": "advanced",
          "x-form-type": "text"
        },
        "htmlelement": {
          "type": "string",
          "x-form-group": "advanced",
          "x-source": "inject",
          "x-form-label": "Semantic Element",
          "x-form-type": "materialselect",
          "x-default": "section",
          "properties": {
            "section": {
              "x-form-name": "section",
              "x-form-value": "section"
            },
            "article": {
              "x-form-name": "article",
              "x-form-value": "article"
            },
            "main": {
              "x-form-name": "main",
              "x-form-value": "main"
            },
            "div": {
              "x-form-name": "div",
              "x-form-value": "div"
            },
            "header": {
              "x-form-name": "header",
              "x-form-value": "header"
            },
            "nav": {
              "x-form-name": "nav",
              "x-form-value": "nav"
            },
            "footer": {
              "x-form-name": "footer",
              "x-form-value": "footer"
            }
          }
        },
        "colorscheme": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Block Color Scheme",
          "x-form-type": "materialradio",
          "x-form-group": "style",
          "x-default": "",
          "properties": {
            "none": {
              "x-form-name": "None",
              "x-form-value": ""
            },
            "light": {
              "x-form-name": "Light",
              "x-form-value": "light"
            },
            "dark": {
              "x-form-name": "Dark",
              "x-form-value": "dark"
            }
          }
        },
        "custombackground": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Custom Background",
          "x-form-group": "style",
          "x-form-type": "materialswitch",
          "x-default": "false"
        },
        "backgroundtype": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Background Type",
          "x-form-group": "style",
          "x-form-type": "materialradio",
          "x-form-visible": "model.custombackground == 'true'",
          "properties": {
            "color": {
              "x-form-name": "Color",
              "x-form-value": "color"
            },
            "gradient": {
              "x-form-name": "Gradient",
              "x-form-value": "gradient"
            },
            "image": {
              "x-form-name": "Image",
              "x-form-value": "image"
            },
            "video": {
              "x-form-name": "Video",
              "x-form-value": "video"
            }
          }
        },
        "bgvideo": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Background Video",
          "x-form-group": "style",
          "x-form-type": "pathbrowser",
          "x-form-visible": "model.backgroundtype == 'video' and model.custombackground == 'true'",
          "x-default": "https://www.youtube.com/embed/Ju86mknumYM",
          "x-form-browserRoot": "/content/themecleanflex/assets"
        },
        "bgimage": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Background Image",
          "x-form-type": "pathbrowser",
          "x-form-group": "style",
          "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
          "x-form-browserRoot": "/content/themecleanflex/assets"
        },
        "bgxposition": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Background X Position",
          "x-form-type": "materialrange",
          "x-form-group": "style",
          "x-form-min": 0,
          "x-form-max": 100,
          "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
          "x-default": "50"
        },
        "bgyposition": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Background Y Position",
          "x-form-group": "style",
          "x-form-type": "materialrange",
          "x-form-min": 0,
          "x-form-max": 100,
          "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
          "x-default": "50"
        },
        "bgsize": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Background Size Style",
          "x-form-type": "text",
          "x-form-group": "style",
          "x-default": "cover"
        },
        "overlay": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Overlay",
          "x-form-type": "materialswitch",
          "x-form-group": "style",
          "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'"
        },
        "overlaycolor": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Overlay Color",
          "x-form-group": "style",
          "x-form-type": "color",
          "x-form-visible": "model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'",
          "x-default": "#ffffff"
        },
        "overlayopacity": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Overlay opacity",
          "x-form-group": "style",
          "x-form-type": "materialrange",
          "x-form-min": 0,
          "x-form-max": 100,
          "x-form-visible": "model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'",
          "x-default": "50"
        },
        "bgcolor": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Background Color",
          "x-form-group": "style",
          "x-form-type": "color",
          "x-form-visible": "(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'",
          "x-default": "#ffffff"
        },
        "color2": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Color 2",
          "x-form-group": "style",
          "x-form-type": "color",
          "x-form-visible": "model.backgroundtype == 'gradient' and model.custombackground == 'true'",
          "x-default": "#c0c0c0"
        },
        "blockwidth": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Block Width",
          "x-form-type": "materialradio",
          "x-form-group": "style",
          "x-default": "default",
          "properties": {
            "default": {
              "x-form-name": "Default",
              "x-form-value": "default"
            },
            "full": {
              "x-form-name": "Full Width",
              "x-form-value": "full"
            },
            "article": {
              "x-form-name": "Article Width",
              "x-form-value": "article"
            }
          }
        },
        "fullheight": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Full Height",
          "x-form-type": "materialswitch",
          "x-form-group": "style",
          "x-default": "false"
        },
        "toppadding": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Top Padding",
          "x-form-type": "materialrange",
          "x-form-min": 0,
          "x-form-max": 300,
          "x-form-group": "style",
          "x-form-visible": "model.fullheight != 'true'"
        },
        "bottompadding": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Bottom Padding",
          "x-form-type": "materialrange",
          "x-form-min": 0,
          "x-form-max": 300,
          "x-form-group": "style",
          "x-form-visible": "model.fullheight != 'true'"
        },
        "contentname": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Content Name",
          "x-form-group": "advanced",
          "x-form-type": "text"
        }
      }
    }
  },
  "name": "Block",
  "componentPath": "themecleanflex/components/block",
  "package": "com.themecleanflex.models",
  "modelName": "Block",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
    adaptables = Resource.class,
    resourceType = "themecleanflex/components/block",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
    adapters = IComponent.class
)
@Exporter(
    name = "jackson",
    extensions = "json"
)

//GEN]
public class BlockModel extends AbstractComponent {

    public BlockModel(Resource r) {
        super(r);
    }

    //GEN[:INJECT
    /* {"type":"string","x-source":"inject","x-form-label":"Anchor Name","x-form-group":"advanced","x-form-type":"text"} */
    @Inject
    private String anchorname;

    /* {"type":"string","x-source":"inject","x-form-label":"Additonal Classes","x-form-group":"advanced","x-form-type":"text"} */
    @Inject
    private String extraclasses;

    /* {"type":"string","x-form-group":"advanced","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
    @Inject
    @Default(values = "section")
    private String htmlelement;

    /* {"type":"string","x-source":"inject","x-form-label":"Block Color Scheme","x-form-type":"materialradio","x-form-group":"style","x-default":"","properties":{"none":{"x-form-name":"None","x-form-value":""},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
    @Inject
    @Default(values = "")
    private String colorscheme;

    /* {"type":"string","x-source":"inject","x-form-label":"Custom Background","x-form-group":"style","x-form-type":"materialswitch","x-default":"false"} */
    @Inject
    @Default(values = "false")
    private String custombackground;

    /* {"type":"string","x-source":"inject","x-form-label":"Background Type","x-form-group":"style","x-form-type":"materialradio","x-form-visible":"model.custombackground == 'true'","properties":{"color":{"x-form-name":"Color","x-form-value":"color"},"gradient":{"x-form-name":"Gradient","x-form-value":"gradient"},"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"}}} */
    @Inject
    private String backgroundtype;

    /* {"type":"string","x-source":"inject","x-form-label":"Background Video","x-form-group":"style","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'video' and model.custombackground == 'true'","x-default":"https://www.youtube.com/embed/Ju86mknumYM","x-form-browserRoot":"/content/themecleanflex/assets"} */
    @Inject
    @Default(values = "https://www.youtube.com/embed/Ju86mknumYM")
    private String bgvideo;

    /* {"type":"string","x-source":"inject","x-form-label":"Background Image","x-form-type":"pathbrowser","x-form-group":"style","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-form-browserRoot":"/content/themecleanflex/assets"} */
    @Inject
    private String bgimage;

    /* {"type":"string","x-source":"inject","x-form-label":"Background X Position","x-form-type":"materialrange","x-form-group":"style","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
    @Inject
    @Default(values = "50")
    private String bgxposition;

    /* {"type":"string","x-source":"inject","x-form-label":"Background Y Position","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
    @Inject
    @Default(values = "50")
    private String bgyposition;

    /* {"type":"string","x-source":"inject","x-form-label":"Background Size Style","x-form-type":"text","x-form-group":"style","x-default":"cover"} */
    @Inject
    @Default(values = "cover")
    private String bgsize;

    /* {"type":"string","x-source":"inject","x-form-label":"Overlay","x-form-type":"materialswitch","x-form-group":"style","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'"} */
    @Inject
    private String overlay;

    /* {"type":"string","x-source":"inject","x-form-label":"Overlay Color","x-form-group":"style","x-form-type":"color","x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"#ffffff"} */
    @Inject
    @Default(values = "#ffffff")
    private String overlaycolor;

    /* {"type":"string","x-source":"inject","x-form-label":"Overlay opacity","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
    @Inject
    @Default(values = "50")
    private String overlayopacity;

    /* {"type":"string","x-source":"inject","x-form-label":"Background Color","x-form-group":"style","x-form-type":"color","x-form-visible":"(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'","x-default":"#ffffff"} */
    @Inject
    @Default(values = "#ffffff")
    private String bgcolor;

    /* {"type":"string","x-source":"inject","x-form-label":"Color 2","x-form-group":"style","x-form-type":"color","x-form-visible":"model.backgroundtype == 'gradient' and model.custombackground == 'true'","x-default":"#c0c0c0"} */
    @Inject
    @Default(values = "#c0c0c0")
    private String color2;

    /* {"type":"string","x-source":"inject","x-form-label":"Block Width","x-form-type":"materialradio","x-form-group":"style","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"full":{"x-form-name":"Full Width","x-form-value":"full"},"article":{"x-form-name":"Article Width","x-form-value":"article"}}} */
    @Inject
    @Default(values = "default")
    private String blockwidth;

    /* {"type":"string","x-source":"inject","x-form-label":"Full Height","x-form-type":"materialswitch","x-form-group":"style","x-default":"false"} */
    @Inject
    @Default(values = "false")
    private String fullheight;

    /* {"type":"string","x-source":"inject","x-form-label":"Top Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-group":"style","x-form-visible":"model.fullheight != 'true'"} */
    @Inject
    private String toppadding;

    /* {"type":"string","x-source":"inject","x-form-label":"Bottom Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-group":"style","x-form-visible":"model.fullheight != 'true'"} */
    @Inject
    private String bottompadding;

    /* {"type":"string","x-source":"inject","x-form-label":"Content Name","x-form-group":"advanced","x-form-type":"text"} */
    @Inject
    private String contentname;


//GEN]

    //GEN[:GETTERS
    /* {"type":"string","x-source":"inject","x-form-label":"Anchor Name","x-form-group":"advanced","x-form-type":"text"} */
    public String getAnchorname() {
        return anchorname;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Additonal Classes","x-form-group":"advanced","x-form-type":"text"} */
    public String getExtraclasses() {
        return extraclasses;
    }

    /* {"type":"string","x-form-group":"advanced","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
    public String getHtmlelement() {
        return htmlelement;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Block Color Scheme","x-form-type":"materialradio","x-form-group":"style","x-default":"","properties":{"none":{"x-form-name":"None","x-form-value":""},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
    public String getColorscheme() {
        return colorscheme;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Custom Background","x-form-group":"style","x-form-type":"materialswitch","x-default":"false"} */
    public String getCustombackground() {
        return custombackground;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Background Type","x-form-group":"style","x-form-type":"materialradio","x-form-visible":"model.custombackground == 'true'","properties":{"color":{"x-form-name":"Color","x-form-value":"color"},"gradient":{"x-form-name":"Gradient","x-form-value":"gradient"},"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"}}} */
    public String getBackgroundtype() {
        return backgroundtype;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Background Video","x-form-group":"style","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'video' and model.custombackground == 'true'","x-default":"https://www.youtube.com/embed/Ju86mknumYM","x-form-browserRoot":"/content/themecleanflex/assets"} */
    public String getBgvideo() {
        return bgvideo;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Background Image","x-form-type":"pathbrowser","x-form-group":"style","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-form-browserRoot":"/content/themecleanflex/assets"} */
    public String getBgimage() {
        return bgimage;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Background X Position","x-form-type":"materialrange","x-form-group":"style","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
    public String getBgxposition() {
        return bgxposition;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Background Y Position","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
    public String getBgyposition() {
        return bgyposition;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Background Size Style","x-form-type":"text","x-form-group":"style","x-default":"cover"} */
    public String getBgsize() {
        return bgsize;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Overlay","x-form-type":"materialswitch","x-form-group":"style","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'"} */
    public String getOverlay() {
        return overlay;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Overlay Color","x-form-group":"style","x-form-type":"color","x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"#ffffff"} */
    public String getOverlaycolor() {
        return overlaycolor;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Overlay opacity","x-form-group":"style","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
    public String getOverlayopacity() {
        return overlayopacity;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Background Color","x-form-group":"style","x-form-type":"color","x-form-visible":"(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'","x-default":"#ffffff"} */
    public String getBgcolor() {
        return bgcolor;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Color 2","x-form-group":"style","x-form-type":"color","x-form-visible":"model.backgroundtype == 'gradient' and model.custombackground == 'true'","x-default":"#c0c0c0"} */
    public String getColor2() {
        return color2;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Block Width","x-form-type":"materialradio","x-form-group":"style","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"full":{"x-form-name":"Full Width","x-form-value":"full"},"article":{"x-form-name":"Article Width","x-form-value":"article"}}} */
    public String getBlockwidth() {
        return blockwidth;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Full Height","x-form-type":"materialswitch","x-form-group":"style","x-default":"false"} */
    public String getFullheight() {
        return fullheight;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Top Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-group":"style","x-form-visible":"model.fullheight != 'true'"} */
    public String getToppadding() {
        return toppadding;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Bottom Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-group":"style","x-form-visible":"model.fullheight != 'true'"} */
    public String getBottompadding() {
        return bottompadding;
    }

    /* {"type":"string","x-source":"inject","x-form-label":"Content Name","x-form-group":"advanced","x-form-type":"text"} */
    public String getContentname() {
        return contentname;
    }


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
