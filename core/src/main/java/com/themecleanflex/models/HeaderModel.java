package com.themecleanflex.models;

import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import com.peregrine.nodetypes.models.Container;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

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
          "x-form-browserRoot": "/content/assets"
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
          "x-form-browserRoot": "/content/sites"
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
                  "x-form-browserRoot": "/content/sites"
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
                  "x-form-browserRoot": "/content/sites"
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
                    "info": {
                      "x-form-name": "Info",
                      "x-form-value": "info"
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
    	/* {"type":"string","x-source":"inject","x-form-label":"Logo","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"} */
	@Inject
	private String logo;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Alt Text","x-form-type":"text"} */
	@Inject
	private String logoalttext;

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"} */
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

	/* {"type":"object","x-source":"inject","x-form-type":"collection","x-form-label":"Links","properties":{"text":{"type":"string","x-source":"inject","x-form-label":"Link Text","x-form-type":"text"},"link":{"type":"string","x-source":"inject","x-form-label":"Link Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"}}} */
	@Inject
	private List<IComponent> links;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	@Inject
	@Default(values ="default")
	private String buttonsize;

	/* {"type":"string","x-source":"inject","x-form-label":"Buttons","x-form-type":"collection","properties":{"buttontext":{"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-type":"text"},"buttonlink":{"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"},"buttoncolor":{"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"info":{"x-form-name":"Info","x-form-value":"info"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}}}} */
	@Inject
	private List<IComponent> buttons;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Logo","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"} */
	public String getLogo() {
		return logo;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Alt Text","x-form-type":"text"} */
	public String getLogoalttext() {
		return logoalttext;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Logo Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"} */
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

	/* {"type":"object","x-source":"inject","x-form-type":"collection","x-form-label":"Links","properties":{"text":{"type":"string","x-source":"inject","x-form-label":"Link Text","x-form-type":"text"},"link":{"type":"string","x-source":"inject","x-form-label":"Link Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"}}} */
	public List<IComponent> getLinks() {
		return links;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	public String getButtonsize() {
		return buttonsize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Buttons","x-form-type":"collection","properties":{"buttontext":{"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-type":"text"},"buttonlink":{"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"},"buttoncolor":{"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"info":{"x-form-name":"Info","x-form-value":"info"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}}}} */
	public List<IComponent> getButtons() {
		return buttons;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
