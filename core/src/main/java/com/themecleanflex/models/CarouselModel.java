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
    "Carousel": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "carouselheight": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Carousel Height",
          "x-form-type": "materialrange",
          "x-default": 80,
          "x-form-min": 50,
          "x-form-max": 100
        },
        "autoplay": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Auto Play",
          "x-form-type": "materialswitch"
        },
        "interval": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Interval",
          "x-form-type": "materialrange",
          "x-form-visible": "model.autoplay == 'true'",
          "x-default": 5,
          "x-form-min": 1,
          "x-form-max": 20
        },
        "pause": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Pause On Hover",
          "x-form-type": "materialswitch",
          "x-form-visible": "model.autoplay == 'true'",
          "x-default": "false"
        },
        "wrap": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Wrap",
          "x-form-type": "materialswitch",
          "x-default": "true"
        },
        "indicators": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Indicators",
          "x-form-type": "materialswitch",
          "x-default": "true"
        },
        "controls": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Controls",
          "x-form-type": "materialswitch",
          "x-default": "true"
        },
        "captionbg": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Caption Background",
          "x-form-type": "materialswitch"
        },
        "slides": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Slides",
          "x-form-fieldLabel": "heading",
          "x-form-type": "collection",
          "properties": {
            "imagepath": {
              "type": "string",
              "x-source": "inject",
              "x-form-label": "Image Source",
              "x-form-type": "pathbrowser",
              "x-form-browserRoot": "/content/assets"
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
  },
  "name": "Carousel",
  "componentPath": "themecleanflex/components/carousel",
  "package": "com.themecleanflex.models",
  "modelName": "Carousel",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/carousel",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class CarouselModel extends AbstractComponent {

    public CarouselModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Carousel Height","x-form-type":"materialrange","x-default":80,"x-form-min":50,"x-form-max":100} */
	@Inject
	@Default(values ="80")
	private String carouselheight;

	/* {"type":"string","x-source":"inject","x-form-label":"Auto Play","x-form-type":"materialswitch"} */
	@Inject
	private String autoplay;

	/* {"type":"string","x-source":"inject","x-form-label":"Interval","x-form-type":"materialrange","x-form-visible":"model.autoplay == 'true'","x-default":5,"x-form-min":1,"x-form-max":20} */
	@Inject
	@Default(values ="5")
	private String interval;

	/* {"type":"string","x-source":"inject","x-form-label":"Pause On Hover","x-form-type":"materialswitch","x-form-visible":"model.autoplay == 'true'","x-default":"false"} */
	@Inject
	@Default(values ="false")
	private String pause;

	/* {"type":"string","x-source":"inject","x-form-label":"Wrap","x-form-type":"materialswitch","x-default":"true"} */
	@Inject
	@Default(values ="true")
	private String wrap;

	/* {"type":"string","x-source":"inject","x-form-label":"Indicators","x-form-type":"materialswitch","x-default":"true"} */
	@Inject
	@Default(values ="true")
	private String indicators;

	/* {"type":"string","x-source":"inject","x-form-label":"Controls","x-form-type":"materialswitch","x-default":"true"} */
	@Inject
	@Default(values ="true")
	private String controls;

	/* {"type":"string","x-source":"inject","x-form-label":"Caption Background","x-form-type":"materialswitch"} */
	@Inject
	private String captionbg;

	/* {"type":"string","x-source":"inject","x-form-label":"Slides","x-form-fieldLabel":"heading","x-form-type":"collection","properties":{"imagepath":{"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"},"text":{"type":"string","x-source":"inject","x-form-label":"Image Text","x-form-type":"texteditor"},"alt":{"type":"string","x-source":"inject","x-form-label":"Image Alt Text","x-form-type":"text"}}} */
	@Inject
	private List<IComponent> slides;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Carousel Height","x-form-type":"materialrange","x-default":80,"x-form-min":50,"x-form-max":100} */
	public String getCarouselheight() {
		return carouselheight;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Auto Play","x-form-type":"materialswitch"} */
	public String getAutoplay() {
		return autoplay;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Interval","x-form-type":"materialrange","x-form-visible":"model.autoplay == 'true'","x-default":5,"x-form-min":1,"x-form-max":20} */
	public String getInterval() {
		return interval;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Pause On Hover","x-form-type":"materialswitch","x-form-visible":"model.autoplay == 'true'","x-default":"false"} */
	public String getPause() {
		return pause;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Wrap","x-form-type":"materialswitch","x-default":"true"} */
	public String getWrap() {
		return wrap;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Indicators","x-form-type":"materialswitch","x-default":"true"} */
	public String getIndicators() {
		return indicators;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Controls","x-form-type":"materialswitch","x-default":"true"} */
	public String getControls() {
		return controls;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Caption Background","x-form-type":"materialswitch"} */
	public String getCaptionbg() {
		return captionbg;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Slides","x-form-fieldLabel":"heading","x-form-type":"collection","properties":{"imagepath":{"type":"string","x-source":"inject","x-form-label":"Image Source","x-form-type":"pathbrowser","x-form-browserRoot":"/content/assets"},"text":{"type":"string","x-source":"inject","x-form-label":"Image Text","x-form-type":"texteditor"},"alt":{"type":"string","x-source":"inject","x-form-label":"Image Alt Text","x-form-type":"text"}}} */
	public List<IComponent> getSlides() {
		return slides;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
