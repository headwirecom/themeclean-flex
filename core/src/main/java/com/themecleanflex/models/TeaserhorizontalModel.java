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
    "Teaserhorizontal": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "aligncontent": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Align Content",
          "x-form-type": "materialradio",
          "x-default": "center",
          "properties": {
            "left": {
              "x-form-name": "Left",
              "x-form-value": "left"
            },
            "center": {
              "x-form-name": "Center",
              "x-form-value": "center"
            },
            "right": {
              "x-form-name": "Right",
              "x-form-value": "right"
            }
          }
        },
        "isprimary": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Enlarge Text",
          "x-form-type": "materialswitch",
          "x-form-default": "false"
        },
        "showtitle": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Show Title",
          "x-form-type": "materialswitch"
        },
        "title": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Title",
          "x-form-visible": "model.showtitle == 'true'",
          "x-form-type": "text"
        },
        "showsubtitle": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Show Subtitle",
          "x-form-type": "materialswitch"
        },
        "subtitle": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Subtitle",
          "x-form-visible": "model.showsubtitle == 'true'",
          "x-form-rows": 3,
          "x-form-type": "textarea"
        },
        "showtext": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Show Text",
          "x-form-type": "materialswitch"
        },
        "text": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Text",
          "x-form-visible": "model.showtext == 'true'",
          "x-form-type": "texteditor"
        },
        "textwidth": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Text Width",
          "x-form-type": "materialrange",
          "x-form-min": 0,
          "x-form-max": 100,
          "x-default": 100
        },
        "showbutton": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Show Button",
          "x-form-type": "materialswitch"
        },
        "buttonside": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Button Side",
          "x-form-type": "materialradio",
          "x-form-visible": "model.showbutton == 'true'",
          "x-default": "right",
          "properties": {
            "left": {
              "x-form-name": "Left",
              "x-form-value": "left"
            },
            "right": {
              "x-form-name": "Right",
              "x-form-value": "right"
            }
          }
        },
        "buttonsize": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Button Size",
          "x-form-type": "materialselect",
          "x-form-visible": "model.showbutton == 'true'",
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
          "x-form-visible": "model.showbutton == 'true'",
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
  },
  "name": "Teaserhorizontal",
  "componentPath": "themecleanflex/components/teaserhorizontal",
  "package": "com.themecleanflex.models",
  "modelName": "Teaserhorizontal",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/teaserhorizontal",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class TeaserhorizontalModel extends AbstractComponent {

    public TeaserhorizontalModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Align Content","x-form-type":"materialradio","x-default":"center","properties":{"left":{"x-form-name":"Left","x-form-value":"left"},"center":{"x-form-name":"Center","x-form-value":"center"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	@Inject
	@Default(values ="center")
	private String aligncontent;

	/* {"type":"string","x-source":"inject","x-form-label":"Enlarge Text","x-form-type":"materialswitch","x-form-default":"false"} */
	@Inject
	private String isprimary;

	/* {"type":"string","x-source":"inject","x-form-label":"Show Title","x-form-type":"materialswitch"} */
	@Inject
	private String showtitle;

	/* {"type":"string","x-source":"inject","x-form-label":"Title","x-form-visible":"model.showtitle == 'true'","x-form-type":"text"} */
	@Inject
	private String title;

	/* {"type":"string","x-source":"inject","x-form-label":"Show Subtitle","x-form-type":"materialswitch"} */
	@Inject
	private String showsubtitle;

	/* {"type":"string","x-source":"inject","x-form-label":"Subtitle","x-form-visible":"model.showsubtitle == 'true'","x-form-rows":3,"x-form-type":"textarea"} */
	@Inject
	private String subtitle;

	/* {"type":"string","x-source":"inject","x-form-label":"Show Text","x-form-type":"materialswitch"} */
	@Inject
	private String showtext;

	/* {"type":"string","x-source":"inject","x-form-label":"Text","x-form-visible":"model.showtext == 'true'","x-form-type":"texteditor"} */
	@Inject
	private String text;

	/* {"type":"string","x-source":"inject","x-form-label":"Text Width","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-default":100} */
	@Inject
	@Default(values ="100")
	private String textwidth;

	/* {"type":"string","x-source":"inject","x-form-label":"Show Button","x-form-type":"materialswitch"} */
	@Inject
	private String showbutton;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Side","x-form-type":"materialradio","x-form-visible":"model.showbutton == 'true'","x-default":"right","properties":{"left":{"x-form-name":"Left","x-form-value":"left"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	@Inject
	@Default(values ="right")
	private String buttonside;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-form-visible":"model.showbutton == 'true'","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	@Inject
	@Default(values ="default")
	private String buttonsize;

	/* {"type":"string","x-source":"inject","x-form-label":"Buttons","x-form-type":"collection","x-form-visible":"model.showbutton == 'true'","properties":{"buttontext":{"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-type":"text"},"buttonlink":{"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"},"buttoncolor":{"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}}}} */
	@Inject
	private List<IComponent> buttons;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Align Content","x-form-type":"materialradio","x-default":"center","properties":{"left":{"x-form-name":"Left","x-form-value":"left"},"center":{"x-form-name":"Center","x-form-value":"center"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	public String getAligncontent() {
		return aligncontent;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Enlarge Text","x-form-type":"materialswitch","x-form-default":"false"} */
	public String getIsprimary() {
		return isprimary;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Show Title","x-form-type":"materialswitch"} */
	public String getShowtitle() {
		return showtitle;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Title","x-form-visible":"model.showtitle == 'true'","x-form-type":"text"} */
	public String getTitle() {
		return title;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Show Subtitle","x-form-type":"materialswitch"} */
	public String getShowsubtitle() {
		return showsubtitle;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Subtitle","x-form-visible":"model.showsubtitle == 'true'","x-form-rows":3,"x-form-type":"textarea"} */
	public String getSubtitle() {
		return subtitle;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Show Text","x-form-type":"materialswitch"} */
	public String getShowtext() {
		return showtext;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Text","x-form-visible":"model.showtext == 'true'","x-form-type":"texteditor"} */
	public String getText() {
		return text;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Text Width","x-form-type":"materialrange","x-form-min":0,"x-form-max":100,"x-default":100} */
	public String getTextwidth() {
		return textwidth;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Show Button","x-form-type":"materialswitch"} */
	public String getShowbutton() {
		return showbutton;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Side","x-form-type":"materialradio","x-form-visible":"model.showbutton == 'true'","x-default":"right","properties":{"left":{"x-form-name":"Left","x-form-value":"left"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	public String getButtonside() {
		return buttonside;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-form-visible":"model.showbutton == 'true'","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	public String getButtonsize() {
		return buttonsize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Buttons","x-form-type":"collection","x-form-visible":"model.showbutton == 'true'","properties":{"buttontext":{"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-type":"text"},"buttonlink":{"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/sites"},"buttoncolor":{"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}}}} */
	public List<IComponent> getButtons() {
		return buttons;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
