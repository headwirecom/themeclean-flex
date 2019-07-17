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
    "Tags": {
      "type": "object",
      "x-type": "component",
      "properties": {
        "tagcolor": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Tag Color",
          "x-form-type": "materialselect",
          "x-default": "blue",
          "properties": {
            "note": {
              "x-form-name": "Blue",
              "x-form-value": "blue"
            },
            "tip": {
              "x-form-name": "Green",
              "x-form-value": "green"
            },
            "important": {
              "x-form-name": "Orange",
              "x-form-value": "orange"
            },
            "caution": {
              "x-form-name": "Red",
              "x-form-value": "red"
            },
            "warning": {
              "x-form-name": "Yellow",
              "x-form-value": "yellow"
            }
          }
        }
      }
    }
  },
  "name": "Tags",
  "componentPath": "themecleanflex/components/tags",
  "package": "com.themecleanflex.models",
  "modelName": "Tags",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/tags",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class TagsModel extends AbstractComponent {

    public TagsModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Tag Color","x-form-type":"materialselect","x-default":"blue","properties":{"note":{"x-form-name":"Blue","x-form-value":"blue"},"tip":{"x-form-name":"Green","x-form-value":"green"},"important":{"x-form-name":"Orange","x-form-value":"orange"},"caution":{"x-form-name":"Red","x-form-value":"red"},"warning":{"x-form-name":"Yellow","x-form-value":"yellow"}}} */
	@Inject
	@Default(values ="blue")
	private String tagcolor;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Tag Color","x-form-type":"materialselect","x-default":"blue","properties":{"note":{"x-form-name":"Blue","x-form-value":"blue"},"tip":{"x-form-name":"Green","x-form-value":"green"},"important":{"x-form-name":"Orange","x-form-value":"orange"},"caution":{"x-form-name":"Red","x-form-value":"red"},"warning":{"x-form-name":"Yellow","x-form-value":"yellow"}}} */
	public String getTagcolor() {
		return tagcolor;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
