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
    "Textlinks": {
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
    }
  },
  "name": "Textlinks",
  "componentPath": "themecleanflex/components/textlinks",
  "package": "com.themecleanflex.models",
  "modelName": "Textlinks",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/textlinks",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class TextlinksModel extends AbstractComponent {

    public TextlinksModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"object","x-source":"inject","x-form-type":"collection","x-form-label":"Links","properties":{"text":{"type":"string","x-source":"inject","x-form-label":"Link Text","x-form-type":"text"},"link":{"type":"string","x-source":"inject","x-form-label":"Link Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"}}} */
	@Inject
	private List<IComponent> links;

	/* {"type":"string","x-source":"inject","x-form-label":"Link Color","x-form-type":"materialselect","x-default":"text-blue-800","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	@Inject
	@Default(values ="text-blue-800")
	private String linkcolor;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"object","x-source":"inject","x-form-type":"collection","x-form-label":"Links","properties":{"text":{"type":"string","x-source":"inject","x-form-label":"Link Text","x-form-type":"text"},"link":{"type":"string","x-source":"inject","x-form-label":"Link Url","x-form-type":"pathbrowser","x-form-browserRoot":"/content/themecleanflex/pages"}}} */
	public List<IComponent> getLinks() {
		return links;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Link Color","x-form-type":"materialselect","x-default":"text-blue-800","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	public String getLinkcolor() {
		return linkcolor;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
