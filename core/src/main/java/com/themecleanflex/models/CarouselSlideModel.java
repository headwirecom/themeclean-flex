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
  "name": "CarouselSlide",
  "modelName": "CarouselSlide",
  "componentPath": "themecleanflex/components/carousel/slides",
  "package": "com.themecleanflex.models",
  "classNameParent": "AbstractComponent",
  "definitions": {
    "CarouselSlide": {
      "x-collection-type": "CarouselSlide",
      "x-source": "inject",
      "x-form-label": "Slides",
      "x-form-fieldLabel": "heading",
      "x-form-group": "content",
      "x-form-type": "collection",
      "properties": {
        "imagepath": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Image Source",
          "x-form-type": "pathbrowser",
          "x-form-browserRoot": "/content/themecleanflex/assets"
        },
        "imagefit": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Slide Image Fit",
          "x-form-type": "materialradio",
          "x-default": "cover",
          "properties": {
            "toggle": {
              "x-form-name": "Contain",
              "x-form-value": "contain"
            },
            "accordion": {
              "x-form-name": "Cover",
              "x-form-value": "cover"
            }
          }
        },
        "colorscheme": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Slide Color Scheme",
          "x-form-type": "materialradio",
          "x-default": "inherit",
          "properties": {
            "none": {
              "x-form-name": "Inherit",
              "x-form-value": "inherit"
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
        "captionbg": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Slide Caption Background",
          "x-form-type": "materialradio",
          "x-default": "inherit",
          "properties": {
            "none": {
              "x-form-name": "Inherit",
              "x-form-value": "inherit"
            },
            "light": {
              "x-form-name": "No",
              "x-form-value": "false"
            },
            "dark": {
              "x-form-name": "Yes",
              "x-form-value": "true"
            }
          }
        },
        "captionalign": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Slide Caption Alignment",
          "x-form-type": "materialradio",
          "x-default": "inherit",
          "properties": {
            "none": {
              "x-form-name": "Inherit",
              "x-form-value": "inherit"
            },
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
        "slidelink": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Slide Link",
          "x-form-type": "pathbrowser",
          "x-form-browserRoot": "/content/themecleanflex/pages"
        },
        "text": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Image Text",
          "x-form-type": "texteditor"
        },
        "alt": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Image Alt Text",
          "x-form-type": "text"
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
        resourceType = "themecleanflex/components/carousel/slides",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class CarouselSlideModel extends AbstractComponent {

    public CarouselSlideModel(final Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
	@Inject
	private String imagepath;

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Image Fit","x-form-type":"materialradio","x-default":"cover","properties":{"toggle":{"x-form-name":"Contain","x-form-value":"contain"},"accordion":{"x-form-name":"Cover","x-form-value":"cover"}}} */
	@Inject
	@Default(values ="cover")
	private String imagefit;

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Color Scheme","x-form-type":"materialradio","x-default":"inherit","properties":{"none":{"x-form-name":"Inherit","x-form-value":"inherit"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	@Inject
	@Default(values ="inherit")
	private String colorscheme;

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Caption Background","x-form-type":"materialradio","x-default":"inherit","properties":{"none":{"x-form-name":"Inherit","x-form-value":"inherit"},"light":{"x-form-name":"No","x-form-value":"false"},"dark":{"x-form-name":"Yes","x-form-value":"true"}}} */
	@Inject
	@Default(values ="inherit")
	private String captionbg;

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Caption Alignment","x-form-type":"materialradio","x-default":"inherit","properties":{"none":{"x-form-name":"Inherit","x-form-value":"inherit"},"left":{"x-form-name":"Left","x-form-value":"left"},"center":{"x-form-name":"Center","x-form-value":"center"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	@Inject
	@Default(values ="inherit")
	private String captionalign;

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"} */
	@Inject
	private String slidelink;

	/* {"type":"string","x-source":"inject","x-form-label":"Image Text","x-form-type":"texteditor"} */
	@Inject
	private String text;

	/* {"type":"string","x-source":"inject","x-form-label":"Image Alt Text","x-form-type":"text"} */
	@Inject
	private String alt;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/assets"} */
	public String getImagepath() {
		return imagepath;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Image Fit","x-form-type":"materialradio","x-default":"cover","properties":{"toggle":{"x-form-name":"Contain","x-form-value":"contain"},"accordion":{"x-form-name":"Cover","x-form-value":"cover"}}} */
	public String getImagefit() {
		return imagefit;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Color Scheme","x-form-type":"materialradio","x-default":"inherit","properties":{"none":{"x-form-name":"Inherit","x-form-value":"inherit"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	public String getColorscheme() {
		return colorscheme;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Caption Background","x-form-type":"materialradio","x-default":"inherit","properties":{"none":{"x-form-name":"Inherit","x-form-value":"inherit"},"light":{"x-form-name":"No","x-form-value":"false"},"dark":{"x-form-name":"Yes","x-form-value":"true"}}} */
	public String getCaptionbg() {
		return captionbg;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Caption Alignment","x-form-type":"materialradio","x-default":"inherit","properties":{"none":{"x-form-name":"Inherit","x-form-value":"inherit"},"left":{"x-form-name":"Left","x-form-value":"left"},"center":{"x-form-name":"Center","x-form-value":"center"},"right":{"x-form-name":"Right","x-form-value":"right"}}} */
	public String getCaptionalign() {
		return captionalign;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Slide Link","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"} */
	public String getSlidelink() {
		return slidelink;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Image Text","x-form-type":"texteditor"} */
	public String getText() {
		return text;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Image Alt Text","x-form-type":"text"} */
	public String getAlt() {
		return alt;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
