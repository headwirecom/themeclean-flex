package com.themecleanflex.models;

import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import java.util.List;
import javax.inject.Inject;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

/*
    //GEN[:DATA
    {
  "definitions": {
    "Header": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "logo": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo",
          "x-form-type": "pathbrowser",
          "x-form-browserRoot": "/content/themecleanflex/assets"
        },
        "logoalttext": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo Alt Text",
          "x-form-type": "text"
        },
        "logourl": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo Url",
          "x-form-type": "pathbrowser",
          "x-form-browserRoot": "/content/themecleanflex/pages"
        },
        "logosize": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Logo Size",
          "x-form-type": "materialrange",
          "x-default": 50,
          "x-form-min": 1,
          "x-form-max": 300
        },
        "collapsed": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Collapse Menu",
          "x-form-type": "materialswitch"
        },
        "elevation": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Elevation",
          "x-form-visible": "",
          "x-form-type": "materialrange",
          "x-default": 0,
          "x-form-min": 0,
          "x-form-max": 5
        },
        "sticky": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Sticky",
          "x-form-type": "materialswitch"
        },
        "linksref": {
          "x-form-type": "reference",
          "type": "object",
          "x-type": "component",
          "properties": {
            "links": {
              "type": "object",
              "x-source": "inject",
              "x-form-type": "collection",
              "x-form-label": "Links",
              "properties": {
                "text": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Link Text",
                  "x-form-type": "text"
                },
                "link": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Link Url",
                  "x-form-type": "pathbrowser",
                  "x-form-browserRoot": "/content/themecleanflex/pages"
                }
              }
            },
            "linkcolor": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Link Color",
              "x-form-type": "materialselect",
              "x-default": "text-blue-800",
              "properties": {
                "primary": {
                  "x-form-name": "Primary",
                  "x-form-value": "primary"
                },
                "success": {
                  "x-form-name": "Success",
                  "x-form-value": "success"
                },
                "danger": {
                  "x-form-name": "Danger",
                  "x-form-value": "danger"
                },
                "warning": {
                  "x-form-name": "Warning",
                  "x-form-value": "warning"
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
            }
          }
        },
        "buttonsref": {
          "x-form-type": "reference",
          "type": "object",
          "x-type": "component",
          "properties": {
            "buttonsize": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Button Size",
              "x-form-type": "materialselect",
              "x-default": "default",
              "properties": {
                "default": {
                  "x-form-name": "Default",
                  "x-form-value": "default"
                },
                "large": {
                  "x-form-name": "Large",
                  "x-form-value": "large"
                },
                "small": {
                  "x-form-name": "Small",
                  "x-form-value": "small"
                }
              }
            },
            "buttons": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Buttons",
              "x-form-type": "collection",
              "properties": {
                "buttontext": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Button Text",
                  "x-form-type": "text"
                },
                "buttonlink": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Button Link",
                  "x-form-type": "pathbrowser",
                  "x-form-browserRoot": "/content/themecleanflex/pages"
                },
                "buttoncolor": {
                  "type": "string",
                  "x-source": "inject",
                  "x-form-label": "Button Color",
                  "x-form-type": "materialselect",
                  "x-default": "primary",
                  "properties": {
                    "primary": {
                      "x-form-name": "Primary",
                      "x-form-value": "primary"
                    },
                    "secondary": {
                      "x-form-name": "Secondary",
                      "x-form-value": "secondary"
                    },
                    "success": {
                      "x-form-name": "Success",
                      "x-form-value": "success"
                    },
                    "danger": {
                      "x-form-name": "Danger",
                      "x-form-value": "danger"
                    },
                    "warning": {
                      "x-form-name": "Warning",
                      "x-form-value": "warning"
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
                }
              }
            }
          }
        },
        "bgref": {
          "x-form-type": "reference",
          "type": "object",
          "x-type": "component",
          "properties": {
            "anchorname": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Anchor Name",
              "x-form-type": "text"
            },
            "extraclasses": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Additonal Classes",
              "x-form-type": "text"
            },
            "htmlelement": {
              "type": "string",
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
              "x-form-type": "materialswitch",
              "x-default": "false"
            },
            "backgroundtype": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Type",
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
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-form-browserRoot": "/content/themecleanflex/assets"
            },
            "bgxposition": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background X Position",
              "x-form-type": "materialrange",
              "x-form-min": 0,
              "x-form-max": 100,
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-default": "50"
            },
            "bgyposition": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Background Y Position",
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
              "x-default": "cover"
            },
            "overlay": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Overlay",
              "x-form-type": "materialswitch",
              "x-form-visible": "model.backgroundtype == 'image' and model.custombackground == 'true'"
            },
            "overlaycolor": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Overlay Color",
              "x-form-type": "color",
              "x-form-visible": "model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'",
              "x-default": "#ffffff"
            },
            "overlayopacity": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Overlay opacity",
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
              "x-form-type": "color",
              "x-form-visible": "(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'",
              "x-default": "#ffffff"
            },
            "color2": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Color 2",
              "x-form-type": "color",
              "x-form-visible": "model.backgroundtype == 'gradient' and model.custombackground == 'true'",
              "x-default": "#c0c0c0"
            },
            "blockwidth": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Block Width",
              "x-form-type": "materialradio",
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
              "x-default": "false"
            },
            "toppadding": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Top Padding",
              "x-form-type": "materialrange",
              "x-form-min": 0,
              "x-form-max": 300,
              "x-form-visible": "model.fullheight != 'true'"
            },
            "bottompadding": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Bottom Padding",
              "x-form-type": "materialrange",
              "x-form-min": 0,
              "x-form-max": 300,
              "x-form-visible": "model.fullheight != 'true'"
            }
          }
        }
      }
    }
  },
  "name": "Header",
  "componentPath": "themecleanflex/components/header",
  "package": "com.themecleanflex.models",
  "modelName": "Header",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/header",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class HeaderModel extends AbstractComponent {

    public HeaderModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Logo","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
	@Inject
	private String logo;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Alt Text","x-form-type":"text"} */
	@Inject
	private String logoalttext;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"} */
	@Inject
	private String logourl;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Size","x-form-type":"materialrange","x-default":50,"x-form-min":1,"x-form-max":300} */
	@Inject
	@Default(values ="50")
	private String logosize;

	/* {"type":"string","x-source":"inject","x-form-label":"Collapse Menu","x-form-type":"materialswitch"} */
	@Inject
	private String collapsed;

	/* {"type":"string","x-source":"inject","x-form-label":"Elevation","x-form-visible":"","x-form-type":"materialrange","x-default":0,"x-form-min":0,"x-form-max":5} */
	@Inject
	private String elevation;

	/* {"type":"string","x-source":"inject","x-form-label":"Sticky","x-form-type":"materialswitch"} */
	@Inject
	private String sticky;

	/* {"type":"object","x-source":"inject","x-form-type":"collection","x-form-label":"Links","properties":{"text":{"type":"string","x-source":"inject","x-form-label":"Link Text","x-form-type":"text"},"link":{"type":"string","x-source":"inject","x-form-label":"Link Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"}}} */
	@Inject
	private List<IComponent> links;

	/* {"type":"string","x-source":"inject","x-form-label":"Link Color","x-form-type":"materialselect","x-default":"text-blue-800","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	@Inject
	@Default(values ="text-blue-800")
	private String linkcolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	@Inject
	@Default(values ="default")
	private String buttonsize;

	/* {"type":"string","x-source":"inject","x-form-label":"Buttons","x-form-type":"collection","properties":{"buttontext":{"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-type":"text"},"buttonlink":{"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"},"buttoncolor":{"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}}}} */
	@Inject
	private List<IComponent> buttons;

	/* {"type":"string","x-source":"inject","x-form-label":"Anchor Name","x-form-type":"text"} */
	@Inject
	private String anchorname;

	/* {"type":"string","x-source":"inject","x-form-label":"Additonal Classes","x-form-type":"text"} */
	@Inject
	private String extraclasses;

	/* {"type":"string","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
	@Inject
	@Default(values ="section")
	private String htmlelement;

	/* {"type":"string","x-source":"inject","x-form-label":"Block Color Scheme","x-form-type":"materialradio","x-default":"","properties":{"none":{"x-form-name":"None","x-form-value":""},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	@Inject
	@Default(values ="")
	private String colorscheme;

	/* {"type":"string","x-source":"inject","x-form-label":"Custom Background","x-form-type":"materialswitch","x-default":"false"} */
	@Inject
	@Default(values ="false")
	private String custombackground;

	/* {"type":"string","x-source":"inject","x-form-label":"Background Type","x-form-type":"materialradio","x-form-visible":"model.custombackground == 'true'","properties":{"color":{"x-form-name":"Color","x-form-value":"color"},"gradient":{"x-form-name":"Gradient","x-form-value":"gradient"},"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"}}} */
	@Inject
	private String backgroundtype;

	/* {"type":"string","x-source":"inject","x-form-label":"Background Video","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'video' and model.custombackground == 'true'","x-default":"https://www.youtube.com/embed/Ju86mknumYM","x-form-browserRoot":"/content/themecleanflex/assets"} */
	@Inject
	@Default(values ="https://www.youtube.com/embed/Ju86mknumYM")
	private String bgvideo;

	/* {"type":"string","x-source":"inject","x-form-label":"Background Image","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-form-browserRoot":"/content/themecleanflex/assets"} */
	@Inject
	private String bgimage;

	/* {"type":"string","x-source":"inject","x-form-label":"Background X Position","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
	@Inject
	@Default(values ="50")
	private String bgxposition;

	/* {"type":"string","x-source":"inject","x-form-label":"Background Y Position","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
	@Inject
	@Default(values ="50")
	private String bgyposition;

	/* {"type":"string","x-source":"inject","x-form-label":"Background Size Style","x-form-type":"text","x-default":"cover"} */
	@Inject
	@Default(values ="cover")
	private String bgsize;

	/* {"type":"string","x-source":"inject","x-form-label":"Overlay","x-form-type":"materialswitch","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'"} */
	@Inject
	private String overlay;

	/* {"type":"string","x-source":"inject","x-form-label":"Overlay Color","x-form-type":"color","x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"#ffffff"} */
	@Inject
	@Default(values ="#ffffff")
	private String overlaycolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Overlay opacity","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
	@Inject
	@Default(values ="50")
	private String overlayopacity;

	/* {"type":"string","x-source":"inject","x-form-label":"Background Color","x-form-type":"color","x-form-visible":"(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'","x-default":"#ffffff"} */
	@Inject
	@Default(values ="#ffffff")
	private String bgcolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Color 2","x-form-type":"color","x-form-visible":"model.backgroundtype == 'gradient' and model.custombackground == 'true'","x-default":"#c0c0c0"} */
	@Inject
	@Default(values ="#c0c0c0")
	private String color2;

	/* {"type":"string","x-source":"inject","x-form-label":"Block Width","x-form-type":"materialradio","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"full":{"x-form-name":"Full Width","x-form-value":"full"},"article":{"x-form-name":"Article Width","x-form-value":"article"}}} */
	@Inject
	@Default(values ="default")
	private String blockwidth;

	/* {"type":"string","x-source":"inject","x-form-label":"Full Height","x-form-type":"materialswitch","x-default":"false"} */
	@Inject
	@Default(values ="false")
	private String fullheight;

	/* {"type":"string","x-source":"inject","x-form-label":"Top Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-visible":"model.fullheight != 'true'"} */
	@Inject
	private String toppadding;

	/* {"type":"string","x-source":"inject","x-form-label":"Bottom Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-visible":"model.fullheight != 'true'"} */
	@Inject
	private String bottompadding;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Logo","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
	public String getLogo() {
		return logo;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Alt Text","x-form-type":"text"} */
	public String getLogoalttext() {
		return logoalttext;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"} */
	public String getLogourl() {
		return logourl;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Size","x-form-type":"materialrange","x-default":50,"x-form-min":1,"x-form-max":300} */
	public String getLogosize() {
		return logosize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Collapse Menu","x-form-type":"materialswitch"} */
	public String getCollapsed() {
		return collapsed;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Elevation","x-form-visible":"","x-form-type":"materialrange","x-default":0,"x-form-min":0,"x-form-max":5} */
	public String getElevation() {
		return elevation;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Sticky","x-form-type":"materialswitch"} */
	public String getSticky() {
		return sticky;
	}

	/* {"type":"object","x-source":"inject","x-form-type":"collection","x-form-label":"Links","properties":{"text":{"type":"string","x-source":"inject","x-form-label":"Link Text","x-form-type":"text"},"link":{"type":"string","x-source":"inject","x-form-label":"Link Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"}}} */
	public List<IComponent> getLinks() {
		return links;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Link Color","x-form-type":"materialselect","x-default":"text-blue-800","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	public String getLinkcolor() {
		return linkcolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	public String getButtonsize() {
		return buttonsize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Buttons","x-form-type":"collection","properties":{"buttontext":{"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-type":"text"},"buttonlink":{"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"},"buttoncolor":{"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}}}} */
	public List<IComponent> getButtons() {
		return buttons;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Anchor Name","x-form-type":"text"} */
	public String getAnchorname() {
		return anchorname;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Additonal Classes","x-form-type":"text"} */
	public String getExtraclasses() {
		return extraclasses;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
	public String getHtmlelement() {
		return htmlelement;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Block Color Scheme","x-form-type":"materialradio","x-default":"","properties":{"none":{"x-form-name":"None","x-form-value":""},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	public String getColorscheme() {
		return colorscheme;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Custom Background","x-form-type":"materialswitch","x-default":"false"} */
	public String getCustombackground() {
		return custombackground;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Background Type","x-form-type":"materialradio","x-form-visible":"model.custombackground == 'true'","properties":{"color":{"x-form-name":"Color","x-form-value":"color"},"gradient":{"x-form-name":"Gradient","x-form-value":"gradient"},"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"}}} */
	public String getBackgroundtype() {
		return backgroundtype;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Background Video","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'video' and model.custombackground == 'true'","x-default":"https://www.youtube.com/embed/Ju86mknumYM","x-form-browserRoot":"/content/themecleanflex/assets"} */
	public String getBgvideo() {
		return bgvideo;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Background Image","x-form-type":"pathbrowser","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-form-browserRoot":"/content/themecleanflex/assets"} */
	public String getBgimage() {
		return bgimage;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Background X Position","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
	public String getBgxposition() {
		return bgxposition;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Background Y Position","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
	public String getBgyposition() {
		return bgyposition;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Background Size Style","x-form-type":"text","x-default":"cover"} */
	public String getBgsize() {
		return bgsize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Overlay","x-form-type":"materialswitch","x-form-visible":"model.backgroundtype == 'image' and model.custombackground == 'true'"} */
	public String getOverlay() {
		return overlay;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Overlay Color","x-form-type":"color","x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"#ffffff"} */
	public String getOverlaycolor() {
		return overlaycolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Overlay opacity","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-form-visible":"model.overlay == 'true' and model.backgroundtype == 'image' and model.custombackground == 'true'","x-default":"50"} */
	public String getOverlayopacity() {
		return overlayopacity;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Background Color","x-form-type":"color","x-form-visible":"(model.backgroundtype == 'color' or model.backgroundtype == 'gradient') and model.custombackground == 'true'","x-default":"#ffffff"} */
	public String getBgcolor() {
		return bgcolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Color 2","x-form-type":"color","x-form-visible":"model.backgroundtype == 'gradient' and model.custombackground == 'true'","x-default":"#c0c0c0"} */
	public String getColor2() {
		return color2;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Block Width","x-form-type":"materialradio","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"full":{"x-form-name":"Full Width","x-form-value":"full"},"article":{"x-form-name":"Article Width","x-form-value":"article"}}} */
	public String getBlockwidth() {
		return blockwidth;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Full Height","x-form-type":"materialswitch","x-default":"false"} */
	public String getFullheight() {
		return fullheight;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Top Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-visible":"model.fullheight != 'true'"} */
	public String getToppadding() {
		return toppadding;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Bottom Padding","x-form-type":"materialrange","x-form-min":0,"x-form-max":300,"x-form-visible":"model.fullheight != 'true'"} */
	public String getBottompadding() {
		return bottompadding;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
