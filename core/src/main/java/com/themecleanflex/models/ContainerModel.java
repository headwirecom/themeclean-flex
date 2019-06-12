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
    "Container": {
      "type": "object",
      "x-type": "component",
      "properties": {
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
        }
      }
    }
  },
  "name": "Container",
  "componentPath": "themecleanflex/components/container",
  "package": "com.themecleanflex.models",
  "modelName": "Container",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/container",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class ContainerModel extends Container {

    public ContainerModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
	@Inject
	@Default(values ="section")
	private String htmlelement;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Semantic Element","x-form-type":"materialselect","x-default":"section","properties":{"section":{"x-form-name":"section","x-form-value":"section"},"article":{"x-form-name":"article","x-form-value":"article"},"main":{"x-form-name":"main","x-form-value":"main"},"div":{"x-form-name":"div","x-form-value":"div"},"header":{"x-form-name":"header","x-form-value":"header"},"nav":{"x-form-name":"nav","x-form-value":"nav"},"footer":{"x-form-name":"footer","x-form-value":"footer"}}} */
	public String getHtmlelement() {
		return htmlelement;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]

}
