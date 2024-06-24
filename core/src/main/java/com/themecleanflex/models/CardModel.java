package com.themecleanflex.models;

import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

import javax.inject.Inject;

import com.peregrine.model.api.ImageInfo;
import java.awt.Dimension;


/*
    //GEN[:DATA
    {
  "name": "Card",
  "modelName": "Card",
  "componentPath": "themecleanflex/components/cards/cards",
  "package": "com.themecleanflex.models",
  "classNameParent": "AbstractComponent",
  "definitions": {
    "Card": {
      "type": "string",
      "x-source": "inject",
      "x-form-label": "Cards",
      "x-form-fieldLabel": "title",
      "x-form-type": "collection",
      "x-collection-type": "Card",
      "properties": {
        "title": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Card Title",
          "x-form-visible": "model.showtitle == 'true'",
          "x-form-type": "text"
        },
        "text": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Card Text",
          "x-form-visible": "model.showtext == 'true'",
          "x-form-type": "texteditor"
        },
        "image": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Card Image",
          "x-form-type": "pathbrowser",
          "x-form-browserRoot": "/content/themecleanflex/assets",
          "x-annotate": "size"
        },
        "imagewidth": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Image Width",
          "x-form-type": "materialrange",
          "x-default": "100",
          "x-form-min": "10",
          "x-form-max": "100"
        },
        "imagealttext": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Image Alt Text",
          "x-form-type": "text"
        },
        "buttontext": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Button Text",
          "x-form-visible": "model.showbutton == 'true'",
          "x-form-type": "text"
        },
        "buttonlink": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Button Link",
          "x-form-visible": "model.showbutton == 'true'",
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
            "info": {
              "x-form-name": "Info",
              "x-form-value": "info"
            }
          }
        },
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
        "buttonalign": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Button Alignment",
          "x-form-type": "materialselect",
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
        }
      }
    }
  }
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
//GEN]
public class CardModel extends AbstractComponent {

    public CardModel(final Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Card Title","x-form-visible":"model.showtitle == 'true'","x-form-type":"text"} */
	@Inject
	private String title;

	/* {"type":"string","x-source":"inject","x-form-label":"Card Text","x-form-visible":"model.showtext == 'true'","x-form-type":"texteditor"} */
	@Inject
	private String text;

	/* {"type":"string","x-source":"inject","x-form-label":"Card Image","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets","x-annotate":"size"} */
	@Inject
	private String image;

	@Inject
	@ImageInfo(name="image")
	private Dimension imageSize;

	/* {"type":"string","x-source":"inject","x-form-label":"Image Width","x-form-type":"materialrange","x-default":"100","x-form-min":"10","x-form-max":"100"} */
	@Inject
	@Default(values ="100")
	private String imagewidth;

	/* {"type":"string","x-source":"inject","x-form-label":"Image Alt Text","x-form-type":"text"} */
	@Inject
	private String imagealttext;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-visible":"model.showbutton == 'true'","x-form-type":"text"} */
	@Inject
	private String buttontext;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-visible":"model.showbutton == 'true'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"} */
	@Inject
	private String buttonlink;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"info":{"x-form-name":"Info","x-form-value":"info"}}} */
	@Inject
	@Default(values ="primary")
	private String buttoncolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	@Inject
	@Default(values ="default")
	private String buttonsize;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Alignment","x-form-type":"materialselect","x-default":"center","properties":{"left":{"x-form-name":"Left","x-form-value":"left"},"center":{"x-form-name":"Center","x-form-value":"center"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	@Inject
	@Default(values ="center")
	private String buttonalign;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Card Title","x-form-visible":"model.showtitle == 'true'","x-form-type":"text"} */
	public String getTitle() {
		return title;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Card Text","x-form-visible":"model.showtext == 'true'","x-form-type":"texteditor"} */
	public String getText() {
		return text;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Card Image","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets","x-annotate":"size"} */
	public String getImage() {
		return image;
	}

	public Dimension getImageSize() {
		return imageSize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Image Width","x-form-type":"materialrange","x-default":"100","x-form-min":"10","x-form-max":"100"} */
	public String getImagewidth() {
		return imagewidth;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Image Alt Text","x-form-type":"text"} */
	public String getImagealttext() {
		return imagealttext;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Text","x-form-visible":"model.showbutton == 'true'","x-form-type":"text"} */
	public String getButtontext() {
		return buttontext;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Link","x-form-visible":"model.showbutton == 'true'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"} */
	public String getButtonlink() {
		return buttonlink;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"info":{"x-form-name":"Info","x-form-value":"info"}}} */
	public String getButtoncolor() {
		return buttoncolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	public String getButtonsize() {
		return buttonsize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Alignment","x-form-type":"materialselect","x-default":"center","properties":{"left":{"x-form-name":"Left","x-form-value":"left"},"center":{"x-form-name":"Center","x-form-value":"center"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	public String getButtonalign() {
		return buttonalign;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
