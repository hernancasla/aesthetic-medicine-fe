<template>
  <div class="socialnetwork-links" id="team-solutions">
    <div class="row">
      <div class="d-lg-none">
        <ul class="social-network social-circle">
          <li>
            <a class="icoMail" :href="$t('me.mailAccount')" title="Mail">
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
              </i>
            </a>
          </li>
          <li>
            <a
              class="icoFacebook"
              target="_blank"
              :href="$t('me.facebookAccount')"
              title="Facebook"
            >
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
              </i>
            </a>
          </li>
          <li>
            <a
              class="icoInstagram"
              target="_blank"
              :href="$t('me.instagramAccount')"
              title="Instagram"
            >
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
              </i>
            </a>
          </li>
          <li>
            <a
              class="icoWhatsapp"
              target="_blank"
              :href="$t('me.whatsappAccount')"
              title="Whatsapp"
            >
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="d-none d-lg-block">
        <ul class="social-network social-circle">
          <li>
            <a class="icoMail" :href="$t('me.mailAccount')" title="Mail">
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'envelope' }" />
              </i>
            </a>
          </li>
          <li>
            <a
              class="icoFacebook"
              target="_blank"
              :href="$t('me.facebookAccount')"
              title="Facebook"
            >
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f' }" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="d-none d-lg-block">
        <ul class="social-network social-circle">
          <li>
            <a
              class="icoInstagram"
              target="_blank"
              :href="$t('me.instagramAccount')"
              title="Instagram"
            >
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }" />
              </i>
            </a>
          </li>
          <li>
            <a
              class="icoWhatsapp"
              target="_blank"
              :href="$t('me.whatsappAccount')"
              title="Whatsapp"
            >
              <i class>
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TeamSolutions",
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
div#team-solutions {
  /* background-color: #fafcff; */
  text-align: right;
}

div#team-solutions ul.social-network {
  list-style: none;
  display: inline;
  margin: auto;
  padding: 0px;
}
div#team-solutions ul.social-network li {
  display: inline;
  margin: 0 5px;
}

/* footer social icons */
div#team-solutions .social-network a.icoFacebook:hover {
  background-color: #3b5898a1;
}
div#team-solutions .social-network a.icoTwitter:hover {
  background-color: #33ccff9d;
}
div#team-solutions .social-network a.icoWhatsapp:hover {
  background-color: #00ab6cb0;
}
div#team-solutions .social-network a.icoMail:hover {
  background-color: #aa2200c2;
}
div#team-solutions .social-network a.icoLinkedin:hover {
  background-color: #007ab7ab;
}
div#team-solutions .social-network a.icoInstagram:hover {
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

div#team-solutions .social-network a.icoRss:hover i,
div#team-solutions .social-network a.icoFacebook:hover i,
div#team-solutions .social-network a.icoTwitter:hover i,
div#team-solutions .social-network a.icoMail:hover i,
div#team-solutions .social-network a.icoVimeo:hover i,
div#team-solutions .social-network a.icoLinkedin:hover i {
  color: #fff;
}

div#team-solutions .social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 1rem auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 60px;
  height: 60px;
  font-size: 16px;
}

div#team-solutions .social-circle li i {
  margin: 0;
  line-height: 60px;
  text-align: center;
}

div#team-solutions .social-circle li a:hover i,
div#team-solutions .triggeredHover {
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

div#team-solutions .social-circle i {
  color: #fff;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}

div#team-solutions .social-circle a {
  background-color: #b3bdca88;
}

/* @media screen and (max-width: 768px) {
  div#team-solutions ul.social-network li {
    display: inline;
    margin: 1rem 1rem 1rem 1rem;
  }
  div#team-solutions {
    text-align: center;
  }
}
@media screen and (max-width: 450px) {
  div#team-solutions {
    text-align: center;
  }
  div#team-solutions ul.social-network li {
    display: inline;
    margin: 1rem 0 1rem 0;
  }

  div#team-solutions .social-circle li a {
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

  div#team-solutions .social-circle li i {
    margin: 0;
    line-height: 40px;
    text-align: center;
  }
}
@media screen and (max-width: 350px) {
  div#team-solutions ul.social-network li {
    display: inline;
    margin: 0 2px;
  }

  div#team-solutions .social-circle li a {
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

  div#team-solutions .social-circle li i {
    margin: 0;
    line-height: 40px;
    text-align: center;
  } 
}*/
</style>