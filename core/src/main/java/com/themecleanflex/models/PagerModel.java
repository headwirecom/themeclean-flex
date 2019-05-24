package com.themecleanflex.models;

import com.peregrine.adaption.PerPage;
import com.peregrine.nodetypes.models.AbstractComponent;
import com.peregrine.nodetypes.models.IComponent;
import com.peregrine.nodetypes.models.Container;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;


/*
    //GEN[:DATA
    {
  "definitions": {
    "Pager": {
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
        },
        "prevlabel": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Previous Label",
          "x-form-type": "text"
        },
        "nextlabel": {
          "type": "string",
          "x-source": "inject",
          "x-form-label": "Next Label",
          "x-form-type": "text"
        }
      }
    }
  },
  "name": "Pager",
  "componentPath": "themecleanflex/components/pager",
  "package": "com.themecleanflex.models",
  "modelName": "Pager",
  "classNameParent": "AbstractComponent"
}
//GEN]
*/

//GEN[:DEF
@Model(
        adaptables = Resource.class,
        resourceType = "themecleanflex/components/pager",
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        adapters = IComponent.class
)
@Exporter(
        name = "jackson",
        extensions = "json"
)

//GEN]
public class PagerModel extends AbstractComponent {

  private static final Logger LOG = LoggerFactory.getLogger(PagerModel.class);

    public PagerModel(Resource r) { super(r); }

    //GEN[:INJECT
    	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	@Inject
	@Default(values ="default")
	private String buttonsize;

	/* {"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"info":{"x-form-name":"Info","x-form-value":"info"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	@Inject
	@Default(values ="primary")
	private String buttoncolor;

	/* {"type":"string","x-source":"inject","x-form-label":"Previous Label","x-form-type":"text"} */
	@Inject
	private String prevlabel;

	/* {"type":"string","x-source":"inject","x-form-label":"Next Label","x-form-type":"text"} */
	@Inject
	private String nextlabel;


//GEN]

    //GEN[:GETTERS
    	/* {"type":"string","x-source":"inject","x-form-label":"Button Size","x-form-type":"materialselect","x-default":"default","properties":{"default":{"x-form-name":"Default","x-form-value":"default"},"large":{"x-form-name":"Large","x-form-value":"large"},"small":{"x-form-name":"Small","x-form-value":"small"}}} */
	public String getButtonsize() {
		return buttonsize;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Button Color","x-form-type":"materialselect","x-default":"primary","properties":{"primary":{"x-form-name":"Primary","x-form-value":"primary"},"secondary":{"x-form-name":"Secondary","x-form-value":"secondary"},"success":{"x-form-name":"Success","x-form-value":"success"},"danger":{"x-form-name":"Danger","x-form-value":"danger"},"warning":{"x-form-name":"Warning","x-form-value":"warning"},"info":{"x-form-name":"Info","x-form-value":"info"},"light":{"x-form-name":"Light","x-form-value":"light"},"dark":{"x-form-name":"Dark","x-form-value":"dark"}}} */
	public String getButtoncolor() {
		return buttoncolor;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Previous Label","x-form-type":"text"} */
	public String getPrevlabel() {
		return prevlabel;
	}

	/* {"type":"string","x-source":"inject","x-form-label":"Next Label","x-form-type":"text"} */
	public String getNextlabel() {
		return nextlabel;
	}


//GEN]

    //GEN[:CUSTOMGETTERS
    //GEN]
    public String getPrevious() {
      Resource res = getCurrentPage(getRootResource());
      LOG.debug("resource: {}",res);
      if(res == null) res = getCurrentPage(getResource());
      PerPage page = res.adaptTo(PerPage.class);
      if(page == null) return "not adaptable";
      PerPage prev = page.getPrevious();
      return prev != null ? prev.getPath(): "unknown";
    }

    public String getNext() {
      Resource res = getCurrentPage(getRootResource());
      if(res == null) res = getCurrentPage(getResource());
      PerPage page = res.adaptTo(PerPage.class);
      if(page == null) return "not adaptable";
      PerPage next = page.getNext();
      return next != null ? next.getPath(): "unknown";
    }
    
    private Resource getCurrentPage(Resource resource) {
      if(resource == null) { return null; }
      String resourceType = null;
      try{
        
        ValueMap props = resource.adaptTo(ValueMap.class);
        resourceType = props.get("jcr:primaryType", "type not found");
        LOG.debug("resource type is: " + resourceType + "  path is:" + resource.getPath());
        // we only care about per:page node
        if("per:Page".equals(resourceType)) {
          LOG.debug("returned resource type is: " + resourceType + "  path is:" + resource.getPath());
          return resource;
        }
        else {
          if(resource.getParent() != null) {
            return getCurrentPage(resource.getParent());
          }
        }
      } catch(Exception e){
          LOG.error("Exception: " + e);
      }
      return null;
    }

}
