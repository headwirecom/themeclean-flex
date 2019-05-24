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
    "Simpletext": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "text": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Text",
          "x-form-type": "text"
        },
        "element": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Choose Element Type",
          "x-form-type": "materialselect",
          "properties": {
            "h1": {
              "x-form-name": "h1",
              "x-form-value": "h1"
            },
            "h2": {
              "x-form-name": "h2",
              "x-form-value": "h2"
            },
            "h3": {
              "x-form-name": "h3",
              "x-form-value": "h3"
            },
            "h4": {
              "x-form-name": "h4",
              "x-form-value": "h4"
            },
            "h5": {
              "x-form-name": "h5",
              "x-form-value": "h5"
            },
            "p": {
              "x-form-name": "p",
              "x-form-value": "p"
            }
          }
        }
      }
    }
  },
  "name": "Simpletext",
  "componentPath": "themecleanflex/components/simpletext",
  "package": "com.themecleanflex.models",
  "modelName": "Simpletext",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/simpletext",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class SimpletextModel extends AbstractComponent {

    public SimpletextModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Text","x-form-type":"text"} */
	@Inject
	private String text;

	/* {"type":"string","x-source":"inject","x-form-label":"Choose Element Type","x-form-type":"materialselect","properties":{"h1":{"x-form-name":"h1","x-form-value":"h1"},"h2":{"x-form-name":"h2","x-form-value":"h2"},"h3":{"x-form-name":"h3","x-form-value":"h3"},"h4":{"x-form-name":"h4","x-form-value":"h4"},"h5":{"x-form-name":"h5","x-form-value":"h5"},"p":{"x-form-name":"p","x-form-value":"p"}}} */
	@Inject
	private String element;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Text","x-form-type":"text"} */
	public String getText() {
		return text;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Choose Element Type","x-form-type":"materialselect","properties":{"h1":{"x-form-name":"h1","x-form-value":"h1"},"h2":{"x-form-name":"h2","x-form-value":"h2"},"h3":{"x-form-name":"h3","x-form-value":"h3"},"h4":{"x-form-name":"h4","x-form-value":"h4"},"h5":{"x-form-name":"h5","x-form-value":"h5"},"p":{"x-form-name":"p","x-form-value":"p"}}} */
	public String getElement() {
		return element;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
