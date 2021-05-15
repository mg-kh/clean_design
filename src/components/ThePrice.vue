<template>
  <section class="priceSection section-spacer">
    <div class="container">
      <!-- Section Title -->
      <div class="row">
        <div class="col">
          <div class="priceSection__section-detail">
            <h3>Affordable for everyone!</h3>
            <p>
              If you are planning on developing a product landing app or
              website,
            </p>
            <p>
              take a look at this beautiful-crafted and error-free HTML
              template.
            </p>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="row">
        <div
          class="col-12 col-lg-3 col-md-6 mb-lg-0 mb-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="card priceSection__price-card">
            <div class="card-body">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAAXNSR0IB2cksfwAAAv1QTFRFAAAA+fem9fac+PeiSUU68O2LRUA39faW9vWh4+NoQj0109dg6+py2Nxip7Hrn6Sa6Ohtq71M9faQ6Oh95uZp5+uMQDwy7et4y9Jbxc5a8fGRpLhHxdRrQSAIvMxikK44SEM08vOc8vOXczgW3OGB7emGTktBSSQIaioJ4OBwfTYLipN809pus8BM6eV25+qE0Nx4haE2pqyC3uFlnbdO8fSL4OV6XiEFboE32N5xcnFpa2pj+sN0eI43zNpx8PB8jqo/r8FRzdFmxtFkTEoz2N96UiwMl7JGwctVUx4E9qJZ8/OD8fCFUlBGkEYbnbQ/ssVbn7Zm7eyUUVM3kkUNnaxv3p1ZXFlQX11V3eSJgXx47/CZprxdXFlQX1tRVl40q8FWTR8GZmVcrsFiiKRIvMdSioiCiKM9mk4liqU2epNCpFUf7pJLxnc396xwYlpT3N9su2Uo/LFi8rt78rtt1pJat8VRpFYoandCuMhdp79ja3hPcFcfaXBX5q5d6++BsV4VorhYzIxV9aZ5YygJYV1Vf5w67Z5m5uaJW2kyiD4UWlhI87WXi3wygT8ZhYV9n5U/d3ZpTkpAnrhWeXlzdDAIlbBAxHpC4dB3XVhNsaVV6aqO2LJbsmdBrMFfxcBaZ2RZlq1J67OMu3VXh6BKzMhauqhipWE4tcdjrsJb78m3goV7vnRPvcxo4qB1v7Rhf2Eq58NreI5F75xSY3Y2r8Ni1pR+1ZVPi6VIVE9FWikR34ZF7LukyMNmkqtMiUQdT0o/e5U5jqk/4I9bT0s/7aSAWT8Y5Z2Al306044+nLVZTkg/+quFaWNaTkhBU05EqY9Rg3ItyKJc57Sig5lTXlxTc3Vn25VpmrNbp7ljsY9GnrJdtcZixGsRp1MIzoFeyGwufI1lXWs5t8hk25Y+yop0Z2Rb8NHCs8Zky3oaSEU7rcFZjq0+hz4G+sp91XU/xI9CnbJNg5Jh9cx25aNQqrpinrJZqL1R45NPjImMUls1jq5Gvcxo8cKYscVgSXJ+qQAAAP90Uk5TAP////////////////8CCf/////////////////////////////+/////xX///////8P//////////7////////////////////////////+Lf///yP/mv//Hv9R/2L//f/+ff//ev//////////P/////////////8+////////Wf///1j///////////9P/y/qcdr/////fP////+P/0/d//+J////zOX/mv/3/////3P//4P//7qx////////yfv1/+H//////0iu/+DUl//////Rzv//iWL/2NP//////smU//+m//T/7aTm/////8C7///5P+//UvSa6f+9sN3RzgAABEBJREFUeJxjYBhIwB/YmLz15jdtohQH3rj9VU5GRi5h4SY+goqN5r0wUBEFAn0zGfclhNRXrbCLDFJUUlKSYtU3kzsYit/RyWtVRBWZODg4mJiUpETtUjbhdfU/GaDRHGDAxC5karnvER7XxKy0i4wGGs3MyMjIzMTOLmW371cUTodsDTAAq2ZkhCr3kUlxycfpRxnXjiAmRahqoHIhYbkshTisikMfrwUGX7Qikmp2UwOTTrYFWBQbJf8BKmZVgqoGKgaaLVQv1+aigMUxMXfsgIqllJiZIYrBLhEy1THZIjYJIyGEvq400O+YsbGk5HMQRDXQbGAoCgekBCvsRA/ImJUyrvobww6vm73o6I+6aJhLvOudTSzYWNB8yjc5QcZVuC6nvbln1fNVxx98CGICm+1tX5DgEKxwxAhV9TxHGVe9LzlezWd69lyevW1N9q0OJZC77Xnk3CvYWGaiGp4cIOcqvH335qK85qPHtz1dXJ7Rt55VytTHW5zbJMuF7QiqRxsT5Czr57zP8fLyaj98f/Hc8pA+5RMqrN7e9gJl6fHoLg/8XqkjrDc9x6soL689t7A8269LWXmDk7C9PQ+vtAWbwgF+FId/dHQ285mzu8jGprjnemF2hp+flsaumr164jwiHunBXCyoUdRoEqCjyhq22eZd8d89pYUZfn3KGrvcapx4eASAhnNxoRputFDQ2YxVtTQMaPiidblAl2hpmCe6XeTl4RGRTO/kQguWGKDhwqyqTaUldU9O5jaEaE0FqlZ3m6DJI2DseNCFi2Uiist3SMtZ6rOyNjWFbX95F6LaU122Zr4ejwi3fycX1zkUt4Qekna2FGaVujR3zfSGe0DVLSDVbhMKBASMPQyD2VjOo7jllIOgU4Ewq9KM5cszQt5qaYBVy/YuFRHg5Ba0UGBjaUVRPlle0MnSjFVKatn+/SBPeiaqy6r3LuUU4eRNdYjnYnulja7c2dJMlVVK9IKysnILyOhjE7hFgKolpW0VuFhOoybdKnlpSR1NfVYpVtFlG9wSgYp753MKAFVLCDrEi6G7hUH7jX+lk6awKisrq6rK3lmz1nMDQ5ATqNrR3UJMjAs9G/H9BhsvLKzq4yMOBDwCQKONQaptFcS4WMIZ0EDgIXlBSW5NPT2wYpBqY6DqMndbFzEuNrWJ6Mr5lshPE/Tg5uXk1BThBAJjXl5uSd1pILPZMA0HFls7gOpTJSW4ubl5gZhbQiJVOn2LmBjQn5OwlXVRVzIdpAVTPSQlJSUkJDzKBP3b4kFGs6hhL7uiPqUYyvtL64KAoL+8oUUwGxsXUHU4jnKXf/XDrKw2w8zMTEND24puNTWgWjXfnfzYVQPBzynXaqsrqqtra5MiYrt9gaA7HLdqYHSlTbGysra2TkqKiIiIjY292kqgPjLqXw3UAdKTdPbZAnxGw/0Q2p+WltY/0Yiw0oEGAOe0MRg9x5O3AAAAAElFTkSuQmCC"
                alt="fire"
              />
              <article class="price-card__description">
                <h4 class="price-card__description__text">Free</h4>
                <article class="articlerice-card__description__price">
                  <span class="price"> 0 </span>
                </article>
                <article class="price-card__description__desc">
                  <p>03 projects</p>
                  <p>Power And Predictive Dialing</p>
                  <p>Quality & Customer Experience</p>
                  <p>Try for free, forever!</p>
                </article>
                <button class="btn btn-outline-info btn-lg price-card__btn">
                  Get Started
                </button>
              </article>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-lg-3 col-md-6 mb-lg-0 mb-5"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="card priceSection__price-card recommend">
            <div class="card-body">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAsCAMAAAAtr3oOAAAAAXNSR0IB2cksfwAAAv1QTFRFAAAA/wAAViwZ8AAA9gAAAwMF/8EA6QEAr2QZ4uznj5aWH0dtQYnDfIJ+7/XxtLq0z9jR/pEALniz//tkv8XANYG8VwIAED1h/nwAi7LU8RIB3QEA/GIAssXL2HoApayn2uHbx8/IU1ta/g4AcAgBJi4mZW1s/FAA3j4AChEX/S4A/qsAnqKidqbRygIAk833XJzRjMPvgJqr46kA//lWXGVn8yMA//pzNkBB/fePTERDt8/YlMjs+sUAIR4xaqzkhabAcoiUYZTEmJiXSlNVOiA0homLDCtNKnCpqwIAbIyjvgEASoO3lwIB//ZFJVOAOEZM/9EA/+oUU57b8YUA+UAAjRsEpLvDWAgO3EQAvBEA+4sALVyC7QUAKzlB/d8AkaeuibfhgAwA3CAb85IA3VNTPWuRzyQieK/g/fAs/qAAIycxSHWX6wAAf73vbXd2KTU+C06P+5YAs7OlQ0JF7sYA6QAA7RkA//2vzoaG8H16/N8h3oAA8kVBU3+jDjRWISwukpyrADRw7QcA40kAy05UoKNO85MAr+f7//4D42MA7AcA5diOzWNnQUpmlB4eFSMslD9GFiU4wQcAvB0b7TwAukNDho6WWHKHfJm54jwAOAsVZXiGSpjVhQMC/uIA1+fm960AITdWbpOv7mgA7BEAmK66rR4KNz9DgYyT++sApDIGUiww+dcNdSAAb1Bdx9reAC5trQYAV0hSR2KAICpB34UAMDk9xBQGAz95Sxoez8lnsDIvZnSNRQYJebnuFCAhrU4BKBcfrlMA1A0AUVpk3eDA0LlXLDU8ijgI87gAHVuY83sAgEo3EAgLg09U6WYA8p8A90sAuYkKnl0inISIjSssADBpuL+Ip2UGyKdCASlQzPj/v6am7H0A9KAAlKu7/84A+ekAvLCwf5/BdSYp9Dk03cQf/zkAADd1raOjcRwZw7u7xzMApKKG3uTdMUyDtn1cuMHCsLCyj6qq+NAi6nsAZAwdoNfyXi4kngUCICgtncTi1qCfWlNa5HCfjgAAAP90Uk5TAP8L/////v4T/////////f/////////////9/v7/Gf///////xz//yv//////yP/////J//////////8//T//////3n////+//////////3/////lv////838N3/2/7////9/8n///////+2/9H//+L8+v/sMXaG/////1f///+C/0ObZv//9f//7Vj//v////9T///4/13/iEv/////8f/k//+9uP//RTg5+P/K/P//Koj///9PobPw////Vf////T/Y/////9m/4P/vUn//mKsuP////+L////4P/OibmwnFvOl/////++ldke////qP/i5UvZbP//luKg5P+z+5BxowAABElJREFUeJyN1WVQI0kYBuAhCRMlBBICxJAEwgaPEtzd3d11scMWWG7xRZbF3VmXW3d3P3d3d5faTuCqyFWG4/3XNU93ff11zwwEbSJm+0bHxz8av4jahP1q9L2/MjLy8y/bW3/3/wt7/UiLM3SLinIrtfUMe25jjPL64ahT3ErL4nRUqa295/1nN9Q/vV3X29ZrJUxPd79s2+kcXL4Rx33Re+Hjg5dCGgkrbDa7863fgss3KGbfhzkDU5LUK4/ycuKcKLRbZGf/s8itGdVue+zh7bpFU7P/E/Yc3phsYn3/c0TtZVL3yli4QmuO1JvgyWQyLbf8VWTNHnEM36XQjxrr54CmGJWdRdqpF83JasRHqTX7uX+TyXiKtq9kK0LpF43YK4S8fqWe0cjB441NtAllpqfV64dO7BZh4EDWUCYvBKuRY6zQVlqSqr3qMOrY407bRYLH2MBQEBObVWeMpwDta+69XZ22ORPrbu9mVzwVGOih9XIlBY+n0LSNQClbzdYznA3YCMrmWGLA8VI7Ekmv2CM9zunoHP5bpdaShN9RKWGZkVJSksJkBsU32ZH09PRITelsCih7VZs7FqnoM1wNRbBBIT7BJF1dPdL0tLCSZgzKNrIC2lu1lB0MBcagbwTEL+jqKji44K/13KKtatPU3et1DYOh1MygkGtEf3+g7dzsbZ3P91QaEXyBdlDpyk6BVMrlcjHYwQCea5hS5wNtvdj+DUFLof9U6d0wPyZGIBBIbwwmTi6saeeWtsCmYlOtMom3Q5HK6b9gwGKx+PyY4a/3xLoSg4M9rTMyDH0ZeWPFucnhpv/VrTo6BiAsVvfVA4ddcz09rQ0N3Y9gs07kJieHEVMdTqtoXJJloQ6IQXcC5+E/fYEK7HEwL6svOSyMSNT3245TOfVoGIYtLcGUU9CdqqoTAAsl5y7U9xFB9PXfVOkgBFnAabMuLmDK89Duaw67TgqFU47xM41H9BXxKzJT1ZDog/0ijqi6ej8Ouu5IXNiSevMcnc4c8mtubvbz+cMGQgrn3my7fvjNK5N0egjXx++kz68B2J2IetvPoWJxu7mv4yX6Yf6eyfiZICymBPFD8QtMpcpk4vPH6fRMaXZmwCATi9bYgaQt5guochlVdhvo4WWzRCYWi0ZrPKPW4qqh7AgxVS6X3ebxYjuWUGaJCo1B4KLoJ5ZpoWK5XH6XF+tyD7X3S6ZCI3HcRAUcWUCtrf2edzftfej3Aww0WsnV1855JyIyMlRW28O7WnAIhesWMFY1Qh8tHkQURIqp1Jde75oVgTsUwwAYg0lJUN+WJQM4LTSU+saLXYdOgdc2iS/FgNVLLNRrKDoCbmiIaPi0y0UpsvlS0PNlxPN/AFvCsI6By7sTymE2S8DF1CAeqEUFrFNYsdS6bXWISmJ9ljKBhCEooXC+Y/4JJFrjnA5WDQ5ZQ63XOZx1zznRCB1Zy2Z+3f/mKbKjPN2UD5W5AAAAAElFTkSuQmCC"
                alt="fire"
              />
              <article class="price-card__description">
                <h4 class="price-card__description__text">Personal</h4>
                <article class="recommend_text">
                  <p>Popular Choice</p>
                </article>
                <article class="articlerice-card__description__price">
                  <span class="price"> 19 </span>
                </article>
                <article class="price-card__description__desc">
                  <p>03 projects</p>
                  <p>Power And Predictive Dialing</p>
                  <p>Quality & Customer Experience</p>
                  <p>Try for free, forever!</p>
                </article>
                <button class="btn btn-outline-info btn-lg price-card__btn">
                  Get Started
                </button>
              </article>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-lg-3 col-md-6 mb-lg-0 mb-5"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div class="card priceSection__price-card">
            <div class="card-body">
              <img
                src="data:image/png;base64,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"
                alt="fire"
              />
              <article class="price-card__description">
                <h4 class="price-card__description__text">Group</h4>
                <article class="articlerice-card__description__price">
                  <span class="price"> 29 </span>
                </article>
                <article class="price-card__description__desc">
                  <p>03 projects</p>
                  <p>Power And Predictive Dialing</p>
                  <p>Quality & Customer Experience</p>
                  <p>Try for free, forever!</p>
                </article>
                <button class="btn btn-outline-info btn-lg price-card__btn">
                  Get Started
                </button>
              </article>
            </div>
          </div>
        </div>

        <div
          class="col-12 col-lg-3 col-md-6 mb-lg-0 mb-5"
          data-aos="fade-up"
          data-aos-delay="1200"
        >
          <div class="card priceSection__price-card">
            <div class="card-body">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAuCAMAAACYhyDyAAAAAXNSR0IB2cksfwAAAv1QTFRFAAAAISz0/zgA/545/588/6I5/P3c/f7i/zsC/787w3LJ9yAA/PvO9CkA/0kA/1UA/7g3/z8A/zIA+/q6/8Q99TgA/9QB/54y/6c2/3kA/3A8/7cA/703/mAA/00D/PzG7zUs/+sA/2Q9/6sB/8wA/9c//p4A/PzU/8g7/8YA52Np+CgA/48A/9M450xI//Rs/9tF/6YA/0UA/74A/1oj/18x/+FN/7M56UlR/oQA/3Y4/5w2/fiP/5w7/rIA/vmG/5cs/Pux/PqZ7jgz8xoA/Puq8VlZ/9E+/6458mMA/2Qk8ioA/4s8+jMA/2M17kxB/3ZB/5cw+VEA/9NH/+dU/mwB+IUA/2o//8pD7Dgz/4wn/+1Z/1Uo/4M8/2sj/14d//RT/602/8gX/2cZ7i4d/3EE/2E3/3Ej9HEA/1sO/+QA7h4A/2w18DMA+UYB8EMk+pcA/6At//Jl/iUA/0sQ/08L/90A/9Qp+C4f/1AZ/34o8yMA/4g1/2Ut7ywQ/3Ac/y0A/3Au8C0A/loA/vh+//FM8TcA/7Au//A//2ow8nYi/Puj9FlK8kYA/4Ut7yUX/7cy7B0A//V2//Jd/5M//+Az/8kv9DYM6S4i9Y14/fCG8kg8+0E58zEA/+BJ7CQO/3s//6Mh/1Qy/98j8CkA9HcA9i0A9RAA/+sO80gf9lIA/2QL/+hE8B8A/+UV9UhI/TEF9lUA/7YZ/5QA/0Up8jUA//Mw+ZAA+YIG7ygB9i0A6xIA/3ga9UoA/3Mp/0sl/3cz8TUA7xcA/7so/1gI7BgA/8Qm+cdw7Cgf8BoA7RwC/64j9zcE/1cc9jEA/z4s/SMW9ywA9r8J/UM5/iEA/jUc9loH+tSN/7oL9tvJ/8MA95sA/0Us/5cO+Nem9mYL/0Y78DwK/KUA9CEA+asA/4gS/Tcr93sA+5wA/44T9yIP99e69cSC/4Ql/z8n+jEA/9sA81wA9zQA9q8c9dzE9HsA8TAC/0om/1oz/5gd+0AA/6IN+lYd9DgZ8TAfg4jUHAAAAP90Uk5TAAL//////////wb///7///////////////////////8v////////////C////xj///////////8P/////////////0D//x3///7/6v///yH///////////8r/////////////1z///////+g/8r/Sv/////9////T///zv//cv///5z////u////Qf8w/v9i/5P//////305EP85VP7/bP/////B/97//1f5///4/yX/qP//8N///mt99MP/4P///7rh//+5/z9J8on/9f+o0fbTHGf0/4vJ/8DCm7X/5YxxhODwgP943Mb/vuCF/6vr7M3TNoK5juD3/8j/j3KEa/thQwAABJVJREFUeJxjYEADzvmM6EJYQMWVOiKUKXDwn9MjqErvfa3cpxmEVFksMzXl25VCwFauiyZKpnK+O/Er46quVFJKK2Fq4sKnSmvZWSUlJdNS/MoUeL1iw8PDTeWYJuK2lDFbMIdlSrhUjglfw3w0ZTPdIG5ynjGRW87K1sNHSqq2UvBxJKqqOZfBlDP3BiYjLytmVolYqUYTI6FsFMMszj8A29YkVBseIOXDysrKbNUYJ8d00g3Z8+/85oBoPW++AwsCFrCwsjCz1nTGlTJxn0BS9czvB9gFdUKrrQICprCwMDOLBzbGHWEqno9k33e/OyAHcOVyeElJARXZMluLF1bFyzIV1yGFUMwWBRA9ey5fp5QPC8gooKo+NFWzt1SA6YdM/J0BtrZARazWgQ5R8c0c3CkIVevnQMLzIEdmjg+LLQvQi+LiQFX8TNzOSMHNmOIPpLS2CsZb2QINkpBIlACqOssvtBboqZ7ZUGXOF3qApFuboJcPM7OEh4e5eaKEQ5SJXMPJ9cAU/goStFrVV0EB4d8mmBxoLeEhAAKJ4n0mpQ0uFQyM/zZAEm5/Qwwo9CLPCNYHWicKyHBqaMiYM9f4xXAUH9p56ozgKUawUXw5TUBGvqjRHgfxCTIyIroanOYssUppi/ZzCHGUCFWDEpozb3NsyXwLvYMccnsc2oFG6eqKcJqzAlWlLVq0v0RIey0wNBm/MTW/XSC31ZuJL7MKaBRQkbsIpwBrjZ9pTExlqZGQNnc/KF5E+SWrrLwyM5PjaiSAjlJVBamSCGysNak8wifIpM0NTLRu3qL8sqn16XHp+w5Ym3OKqAJBhAinR2FUenKqJFjVUUYGhV2iQbKhocn16fv6EjlF3A2AICJCRKB94c+XOpJ8HEAbdwNV8Yrm8UuGyq6uryoUEIkwmGdmZhYcocE54fTCuzqSRlBVbt68QFWWkpJPF7bLaATPCwECs+BgjWmHT/9WSzXiYOJ1AdrItYRblE/SUkfNcNNhDXeDkOgi/aJos2D3acc2KavJGgn68i4HJf/p3Ly+oUBVyjeO6arOi9afZDNLf7KZge60JGk1fj4OX5floPTj7807Nwioys44qVw1Wr/FxtXJZlL0mqnlScaG/CALD80EJZzp2nPzLHUMQarWFNnbOAo7dtvot4JU2emkBvG69EPSRK6v6NLNhtKaYlMTWpxc5XnkhbvtJ3csVtGUVt7eywvLlAptop4FQFXrOvSBitTV1XmEnSa1LhYDqsoQXWIBS60re3vDlKU1VyTYuwqrs7Gxqcs72iesA6oqCMqFlZ49K7muBXkaGquUTbYRlmdjZ2dn4wGqyhLTtMvY6w8zSWv6r42rPMOAqlqdhHnYoaq2lYkZhzXf74KXxIx/8/g9M9RUyrJahHnAZsm76itmqRRkyK76A3cWMJ3ulV0apiyWtaIbZCPQXU6KiipqlqEfUasI/42eYQV2YoodjkDD2HiEtymqKG9+vkOLARUwdn3dbigtplgE9KQ6TwJQ0Ysd2CoHxq7bj4CmzRLm4Zn14daTz7gKX8aZx99cv/f65pfjl9BKVADgIE22vbimkgAAAABJRU5ErkJggg=="
                alt="fire"
              />
              <article class="price-card__description">
                <h4 class="price-card__description__text">Enterprise</h4>
                <article class="articlerice-card__description__price">
                  <span class="price"> 49 </span>
                </article>
                <article class="price-card__description__desc">
                  <p>03 projects</p>
                  <p>Power And Predictive Dialing</p>
                  <p>Quality & Customer Experience</p>
                  <p>Try for free, forever!</p>
                </article>
                <button class="btn btn-outline-info btn-lg price-card__btn">
                  Get Started
                </button>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
