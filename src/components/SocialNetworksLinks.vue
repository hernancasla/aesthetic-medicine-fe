<template>
  <div class="socialnetwork-links" id="socialnetwork">
    <ul class="social-network social-circle">
      <li>
        <a class="icoMail" href="mailto:hernancasla@gmail.com" title="Mail">
          <i class>
            <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
          </i>
        </a>
      </li>
      <li>
        <a class="icoFacebook" href="https://www.facebook.com/cinthya.vega" title="Linkedin">
          <i class>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
          </i>
        </a>
      </li>
      <li>
        <a class="icoInstagram" href="https://www.instagram.com/dra.cinthya.vega" title="Instagram">
          <i class>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
          </i>
        </a>
      </li>
      <li>
        <a class="icoLinkedin" href title="Linkedin">
          <i class>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
          </i>
        </a>
      </li>
      <li>
        <a
          class="icoWhatsapp"
          href="whatsapp://send?abid=+54913512827976&text=Hello%2C%20World!"
          title="Whatsapp"
        >
          <i class>
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" />
          </i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "SocialNetworksLinks",
  computed: {
    ...mapState("account", ["status"]),
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions("account", ["login", "logout"])
  }
};
</script>
<style>
/* footer social icons */
div#socialnetwork {
  /* background-color: #fafcff; */
  padding: 10px 0;
  text-align: right;
}

div#socialnetwork ul.social-network {
  list-style: none;
  display: inline;
  margin: auto;
  padding: 0px;
}
div#socialnetwork ul.social-network li {
  display: inline;
  margin: 0 5px;
}

/* footer social icons */
div#socialnetwork .social-network a.icoFacebook:hover {
  background-color: #3b5898a1;
}
div#socialnetwork .social-network a.icoTwitter:hover {
  background-color: #33ccff9d;
}
div#socialnetwork .social-network a.icoWhatsapp:hover {
  background-color: #00ab6cb0;
}
div#socialnetwork .social-network a.icoMail:hover {
  background-color: #aa2200c2;
}
div#socialnetwork .social-network a.icoLinkedin:hover {
  background-color: #007ab7ab;
}
div#socialnetwork .social-network a.icoInstagram:hover {
  background: #f09533bd;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888', GradientType=1);
}

div#socialnetwork .social-network a.icoRss:hover i,
div#socialnetwork .social-network a.icoFacebook:hover i,
div#socialnetwork .social-network a.icoTwitter:hover i,
div#socialnetwork .social-network a.icoMail:hover i,
div#socialnetwork .social-network a.icoVimeo:hover i,
div#socialnetwork .social-network a.icoLinkedin:hover i {
  color: #fff;
}

div#socialnetwork .social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  font-size: 16px;
}

div#socialnetwork .social-circle li i {
  margin: 0;
  line-height: 40px;
  text-align: center;
}

div#socialnetwork .social-circle li a:hover i,
div#socialnetwork .triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.2s;
}

div#socialnetwork .social-circle i {
  color: #fff;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}

div#socialnetwork .social-circle a {
  background-color: #b3bdca2e;
}

@media screen and (max-width: 768px) {
  div#socialnetwork ul.social-network li {
    display: inline;
    margin: 0 5px;
  }
  div#socialnetwork {
    text-align: center;
  }
}
@media screen and (max-width: 450px) {
  div#socialnetwork {
    text-align: center;
  }
  div#socialnetwork ul.social-network li {
    display: inline;
    margin: 0 5px;
  }

  div#socialnetwork .social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto 0 auto;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  div#socialnetwork .social-circle li i {
    margin: 0;
    line-height: 40px;
    text-align: center;
  }
}
@media screen and (max-width: 350px) {
  div#socialnetwork ul.social-network li {
    display: inline;
    margin: 0 2px;
  }

  div#socialnetwork .social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto 0 auto;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    text-align: center;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  div#socialnetwork .social-circle li i {
    margin: 0;
    line-height: 40px;
    text-align: center;
  }
}
</style>