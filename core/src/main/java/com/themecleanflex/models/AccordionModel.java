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
    "Accordion": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "toggletype": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Collapse Style",
          "x-form-type": "materialradio",
          "x-default": "accordion",
          "properties": {
            "toggle": {
              "x-form-name": "Toggle",
              "x-form-value": "toggle"
            },
            "accordion": {
              "x-form-name": "Accordion",
              "x-form-value": "accordion"
            }
          }
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
        "mediaref": {
          "x-form-type": "reference",
          "type": "object",
          "x-type": "component",
          "properties": {
            "showmedia": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Show Media",
              "x-form-type": "materialswitch"
            },
            "mediatype": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Media type",
              "x-form-visible": "model.showmedia == 'true'",
              "x-form-type": "materialradio",
              "properties": {
                "image": {
                  "x-form-name": "Image",
                  "x-form-value": "image"
                },
                "video": {
                  "x-form-name": "Video",
                  "x-form-value": "video"
                },
                "icon": {
                  "x-form-name": "Icon",
                  "x-form-value": "icon"
                }
              }
            },
            "mediaicon": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Icon Chooser",
              "x-form-type": "iconbrowser",
              "x-form-hint": "Select an icon.",
              "x-form-validator": "required",
              "x-form-visible": "model.mediatype == 'icon' and model.showmedia == 'true'",
              "x-form-families": [
                "material",
                "font awesome"
              ]
            },
            "mediaiconsize": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Icon Size",
              "x-form-type": "materialrange",
              "x-form-visible": "model.mediatype == 'icon' and model.showmedia == 'true'",
              "x-default": 50,
              "x-form-min": 1,
              "x-form-max": 1000
            },
            "mediaiconcolor": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Icon Color",
              "x-form-type": "color",
              "x-form-visible": "model.mediatype == 'icon' and model.showmedia == 'true'",
              "x-default": "#000000"
            },
            "imagesrc": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Image Source",
              "x-form-visible": "model.mediatype == 'image' and model.showmedia == 'true'",
              "x-form-type": "pathbrowser",
              "x-form-browserRoot": "/content/assets"
            },
            "mediatitle": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Media Alt Text/Title",
              "x-form-type": "text"
            },
            "videosrc": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Video Source",
              "x-form-visible": "model.mediatype == 'video' and model.showmedia == 'true'",
              "x-form-type": "pathbrowser",
              "x-form-browserRoot": "/content/assets"
            },
            "mediawidth": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Width",
              "x-form-type": "materialrange",
              "x-form-visible": "model.showmedia == 'true'",
              "x-default": 100,
              "x-form-min": 10,
              "x-form-max": 100
            }
          }
        },
        "mediaposition": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Media Position",
          "x-form-type": "materialradio",
          "x-form-visible": "model.showmedia == 'true'",
          "x-default": "before",
          "properties": {
            "type1": {
              "x-form-name": "Before Content",
              "x-form-value": "before"
            },
            "type2": {
              "x-form-name": "After Content",
              "x-form-value": "after"
            }
          }
        },
        "accordiontoggle": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Accordion/Toggle",
          "x-form-type": "collection",
          "properties": {
            "title": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Title",
              "x-form-type": "text"
            },
            "text": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Text",
              "x-form-type": "texteditor"
            }
          }
        }
      }
    }
  },
  "name": "Accordion",
  "componentPath": "themecleanflex/components/accordion",
  "package": "com.themecleanflex.models",
  "modelName": "Accordion",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/accordion",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class AccordionModel extends AbstractComponent {

    public AccordionModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Collapse Style","x-form-type":"materialradio","x-default":"accordion","properties":{"toggle":{"x-form-name":"Toggle","x-form-value":"toggle"},"accordion":{"x-form-name":"Accordion","x-form-value":"accordion"}}} */
	@Inject
	@Default(values ="accordion")
	private String toggletype;

	/* {"type":"string","x-source":"inject","x-form-label":"Show Title","x-form-type":"materialswitch"} */
	@Inject
	private String showtitle;

	/* {"type":"string","x-source":"inject","x-form-label":"Title","x-form-visible":"model.showtitle == 'true'","x-form-type":"text"} */
	@Inject
	private String title;

	/* {"type":"string","x-source":"inject","x-form-label":"Show Media","x-form-type":"materialswitch"} */
	@Inject
	private String showmedia;

	/* {"type":"string","x-source":"inject","x-form-label":"Media type","x-form-visible":"model.showmedia == 'true'","x-form-type":"materialradio","properties":{"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"},"icon":{"x-form-name":"Icon","x-form-value":"icon"}}} */
	@Inject
	private String mediatype;

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Chooser","x-form-type":"iconbrowser","x-form-hint":"Select an icon.","x-form-validator":"required","x-form-visible":"model.mediatype == 'icon' and model.showmedia == 'true'","x-form-families":["material","font awesome"]} */
	@Inject
	private String mediaicon;

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Size","x-form-type":"materialrange","x-form-visible":"model.mediatype == 'icon' and model.showmedia == 'true'","x-default":50,"x-form-min":1,"x-form-max":1000} */
	@Inject
	@Default(values ="50")
	private String mediaiconsize;

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Color","x-form-type":"color","x-form-visible":"model.mediatype == 'icon' and model.showmedia == 'true'","x-default":"#000000"} */
	@Inject
	@Default(values ="#000000")
	private String mediaiconcolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-visible":"model.mediatype == 'image' and model.showmedia == 'true'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"} */
	@Inject
	private String imagesrc;

	/* {"type":"string","x-source":"inject","x-form-label":"Media Alt Text/Title","x-form-type":"text"} */
	@Inject
	private String mediatitle;

	/* {"type":"string","x-source":"inject","x-form-label":"Video Source","x-form-visible":"model.mediatype == 'video' and model.showmedia == 'true'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"} */
	@Inject
	private String videosrc;

	/* {"type":"string","x-source":"inject","x-form-label":"Width","x-form-type":"materialrange","x-form-visible":"model.showmedia == 'true'","x-default":100,"x-form-min":10,"x-form-max":100} */
	@Inject
	@Default(values ="100")
	private String mediawidth;

	/* {"type":"string","x-source":"inject","x-form-label":"Media Position","x-form-type":"materialradio","x-form-visible":"model.showmedia == 'true'","x-default":"before","properties":{"type1":{"x-form-name":"Before Content","x-form-value":"before"},"type2":{"x-form-name":"After Content","x-form-value":"after"}}} */
	@Inject
	@Default(values ="before")
	private String mediaposition;

	/* {"type":"string","x-source":"inject","x-form-label":"Accordion/Toggle","x-form-type":"collection","properties":{"title":{"type":"string","x-source":"inject","x-form-label":"Title","x-form-type":"text"},"text":{"type":"string","x-source":"inject","x-form-label":"Text","x-form-type":"texteditor"}}} */
	@Inject
	private List<IComponent> accordiontoggle;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Collapse Style","x-form-type":"materialradio","x-default":"accordion","properties":{"toggle":{"x-form-name":"Toggle","x-form-value":"toggle"},"accordion":{"x-form-name":"Accordion","x-form-value":"accordion"}}} */
	public String getToggletype() {
		return toggletype;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Show Title","x-form-type":"materialswitch"} */
	public String getShowtitle() {
		return showtitle;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Title","x-form-visible":"model.showtitle == 'true'","x-form-type":"text"} */
	public String getTitle() {
		return title;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Show Media","x-form-type":"materialswitch"} */
	public String getShowmedia() {
		return showmedia;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Media type","x-form-visible":"model.showmedia == 'true'","x-form-type":"materialradio","properties":{"image":{"x-form-name":"Image","x-form-value":"image"},"video":{"x-form-name":"Video","x-form-value":"video"},"icon":{"x-form-name":"Icon","x-form-value":"icon"}}} */
	public String getMediatype() {
		return mediatype;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Chooser","x-form-type":"iconbrowser","x-form-hint":"Select an icon.","x-form-validator":"required","x-form-visible":"model.mediatype == 'icon' and model.showmedia == 'true'","x-form-families":["material","font awesome"]} */
	public String getMediaicon() {
		return mediaicon;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Size","x-form-type":"materialrange","x-form-visible":"model.mediatype == 'icon' and model.showmedia == 'true'","x-default":50,"x-form-min":1,"x-form-max":1000} */
	public String getMediaiconsize() {
		return mediaiconsize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Icon Color","x-form-type":"color","x-form-visible":"model.mediatype == 'icon' and model.showmedia == 'true'","x-default":"#000000"} */
	public String getMediaiconcolor() {
		return mediaiconcolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-visible":"model.mediatype == 'image' and model.showmedia == 'true'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"} */
	public String getImagesrc() {
		return imagesrc;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Media Alt Text/Title","x-form-type":"text"} */
	public String getMediatitle() {
		return mediatitle;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Video Source","x-form-visible":"model.mediatype == 'video' and model.showmedia == 'true'","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"} */
	public String getVideosrc() {
		return videosrc;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Width","x-form-type":"materialrange","x-form-visible":"model.showmedia == 'true'","x-default":100,"x-form-min":10,"x-form-max":100} */
	public String getMediawidth() {
		return mediawidth;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Media Position","x-form-type":"materialradio","x-form-visible":"model.showmedia == 'true'","x-default":"before","properties":{"type1":{"x-form-name":"Before Content","x-form-value":"before"},"type2":{"x-form-name":"After Content","x-form-value":"after"}}} */
	public String getMediaposition() {
		return mediaposition;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Accordion/Toggle","x-form-type":"collection","properties":{"title":{"type":"string","x-source":"inject","x-form-label":"Title","x-form-type":"text"},"text":{"type":"string","x-source":"inject","x-form-label":"Text","x-form-type":"texteditor"}}} */
	public List<IComponent> getAccordiontoggle() {
		return accordiontoggle;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
