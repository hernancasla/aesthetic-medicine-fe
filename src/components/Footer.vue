<template>
  <!-- <footer>
    <SocialNetworksLinks />
  </footer>-->

  <footer class="new_footer_area bg_color">
    <div class="new_footer_top">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div
              class="f_widget company_widget wow fadeInLeft"
              data-wow-delay="0.2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
            >
              <h3 class="f-title f_600 t_color f_size_18">{{ $t('footer.getInTouch.title') }}</h3>
              <p>{{ $t('footer.getInTouch.description') }}</p>
              <form
                action="#"
                class="f_subscribe_two mailchimp"
                method="post"
                novalidate="true"
                _lpchecked="1"
              >
                <input type="text" name="EMAIL" class="form-control memail" placeholder="Email" />
                <button
                  class="btn btn_get btn_get_two"
                  type="submit"
                >{{ $t('footer.getInTouch.subscribe') }}</button>
                <p class="mchimp-errmessage" style="display: none;"></p>
                <p class="mchimp-sucmessage" style="display: none;"></p>
              </form>
            </div>
          </div>
          <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-12">
            <h3 class="f-title f_600 t_color f_size_18">{{ $t('footer.teamSolution') }}</h3>
            <TeamSolutions style="text-align:left" />
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="f_widget about-widget pl_70 wow fadeInLeft"
              data-wow-delay="0.6s"
              style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;"
            >
              <h3 class="f-title f_600 t_color f_size_18">{{ $t('footer.contact.title') }}</h3>
              <ul class="list-unstyled f_list">
                <li>
                  <a href="#">{{ $t('footer.contact.celltelephone') }}</a>
                </li>
                <li>
                  <a href="#">{{ $t('footer.contact.telephone') }}</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/4PPob9ZfyrdKzE9r9"
                  >{{ $t('footer.contact.address') }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer_bg">
        <div class="footer_bg_one"></div>
        <div class="footer_bg_two"></div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-7">
            <p class="mb-0 f_400">{{ $t('footer.allRigthsReserved') }}</p>
          </div>
          <div class="col-lg-6 col-sm-5 text-right">
            <p>
              {{ $t('footer.madeBy') }}
              <!-- <i class="icon_heart"></i> in
              <a href="#">CakeCounter</a>-->
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import TeamSolutions from "./TeamSolutions";

export default {
  name: "Footer",

  components: {
    TeamSolutions
  }
};
</script>
<style scoped>
/* footer social icons
footer {
  background-color: rgb(181, 128, 108);
  padding: 20px 0;
  text-align: center;
} */
footer {
  background: rgba(204, 152, 134, 0.8);
  background: -moz-linear-gradient(
    top,
    rgba(204, 152, 134, 0.8) 0%,
    rgba(204, 152, 134, 0.81) 0%,
    rgba(255, 255, 255, 0.81) 65%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(204, 152, 134, 0.8)),
    color-stop(0%, rgba(204, 152, 134, 0.81)),
    color-stop(65%, rgba(255, 255, 255, 0.81))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(204, 152, 134, 0.8) 0%,
    rgba(204, 152, 134, 0.81) 0%,
    rgba(255, 255, 255, 0.81) 65%
  );
  background: -o-linear-gradient(
    top,
    rgba(204, 152, 134, 0.8) 0%,
    rgba(204, 152, 134, 0.81) 0%,
    rgba(255, 255, 255, 0.81) 65%
  );
  background: -ms-linear-gradient(
    top,
    rgba(204, 152, 134, 0.8) 0%,
    rgba(204, 152, 134, 0.81) 0%,
    rgba(255, 255, 255, 0.81) 65%
  );
  background: linear-gradient(
    to bottom,
    rgba(204, 152, 134, 0.8) 0%,
    rgba(204, 152, 134, 0.81) 0%,
    rgba(255, 255, 255, 0.81) 65%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc9886', endColorstr='#ffffff', GradientType=0 );
}

.new_footer_area {
  /* background: #fbfbfd; */
}

.new_footer_top {
  padding: 120px 0px 270px;
  position: relative;
  overflow-x: hidden;
}
.new_footer_area .footer_bottom {
  padding-top: 5px;
  padding-bottom: 50px;
}
.footer_bottom {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #7f88a6;
  padding: 27px 0px;
}
.new_footer_top .company_widget p {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  color: #6a7695;
  margin-bottom: 20px;
}
.new_footer_top .company_widget .f_subscribe_two .btn_get {
  border-width: 1px;
  margin-top: 20px;
}
.btn_get_two:hover {
  background: transparent;
  color: #fff;
}
.btn_get:hover {
  color: #fff;
  background: #6754e2;
  -webkit-box-shadow: none;
  box-shadow: none;
}
a:hover,
a:focus,
.btn:hover,
.btn:focus,
button:hover,
button:focus {
  text-decoration: none;
  outline: none;
}

.new_footer_top .f_widget.about-widget .f_list li a:hover {
  color: #5e2ced;
}
.new_footer_top .f_widget.about-widget .f_list li {
  margin-bottom: 11px;
}
.f_widget.about-widget .f_list li:last-child {
  margin-bottom: 0px;
}
.f_widget.about-widget .f_list li {
  margin-bottom: 15px;
}
.f_widget.about-widget .f_list {
  margin-bottom: 0px;
}
.new_footer_top .f_social_icon a {
  width: 44px;
  height: 44px;
  line-height: 43px;
  background: transparent;
  border: 1px solid #e2e2eb;
  font-size: 24px;
}
.f_social_icon a {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 45px;
  color: #858da8;
  display: inline-block;
  background: #ebeef5;
  text-align: center;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.ti-facebook:before {
  content: "\e741";
}
.ti-twitter-alt:before {
  content: "\e74b";
}
.ti-vimeo-alt:before {
  content: "\e74a";
}
.ti-pinterest:before {
  content: "\e731";
}

.btn_get_two {
  -webkit-box-shadow: none;
  box-shadow: none;
  /* background:#b3bdca91; */
  border-color: #b3bdcab6;
  color: #6a7695;
}

.btn_get_two:hover {
  background: #b3bdca91;
}

.new_footer_top .f_social_icon a:hover {
  background: #5e2ced;
  border-color: #5e2ced;
  color: white;
}
.new_footer_top .f_social_icon a + a {
  margin-left: 4px;
}
.new_footer_top .f-title {
  margin-bottom: 30px;
  color: #263b5e;
}
.f_600 {
  font-weight: 600;
}
.f_size_18 {
  font-size: 18px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #4b505e;
}
.new_footer_top .f_widget.about-widget .f_list li a {
  color: #6a7695;
}

.new_footer_top .footer_bg {
  position: absolute;
  bottom: 0;
  background: url("/images/footer_bg.png") scroll center 0;
  width: 100%;
  height: 266px;
}

.new_footer_top .footer_bg .footer_bg_one {
  background: url("/images/volks.gif") no-repeat center center;
  width: 330px;
  height: 105px;
  background-size: 100%;
  position: absolute;
  bottom: 0;
  left: 30%;
  -webkit-animation: myfirst 22s linear infinite;
  animation: myfirst 22s linear infinite;
}

.new_footer_top .footer_bg .footer_bg_two {
  background: url("/images/cyclist.gif") no-repeat center center;
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 0;
  left: 38%;
  position: absolute;
  -webkit-animation: myfirst 30s linear infinite;
  animation: myfirst 30s linear infinite;
}

@-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}
</style>