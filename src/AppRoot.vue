<template>
  <div id="app" class="low_browser ios">
    <!--<router-view></router-view>-->
    <div class="fixed-top">
      <div class="bar bgc-1 color-9">
        <div class="icon logo">
          <i class="iconfont icon-btime_icon_logo-copy"></i>
        </div>
        <div class="refresh">
          <i class="iconfont icon-btime_icon_refresh"></i>
        </div>
        <div class="search ">
          <i class="iconfont icon-btime_icon_search"></i>
        </div>
      </div>
      <div class="channel-bar bgc-9 borderc-5">
        <div class="list">
          <div class="scroll" id="channel-scroll"
               style="touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); overflow: hidden;">
            <div class="xs-container"
                 style="transform-origin: 0px 0px 0px; transform: translate(0px, 0px) translateZ(0px);">
              <div class="xs-content channels"
                   style="transform-origin: 0px 0px 0px; transform: translateX(0px) scale(1) translateZ(0px);">
                <div class="channel color-4 font4_const b_2da8f707e9d514c562162540d2b0ad57" data-cname="推荐"
                     data-cid="2da8f707e9d514c562162540d2b0ad57">推荐
                </div>
                <div class="channel color-4 font4_const b_7389193781085e10178780f6bbb3c79e active" data-cname="新闻"
                     data-cid="7389193781085e10178780f6bbb3c79e">新闻
                </div>
                <div class="channel color-4 font4_const b_3ea38d7ceaf218aee879343ce6d2c826" data-cname="视频"
                     data-cid="3ea38d7ceaf218aee879343ce6d2c826">视频
                </div>
                <div class="channel color-4 font4_const b_7af450a9dcc60c0af56db7421a461c02" data-cname="娱乐"
                     data-cid="7af450a9dcc60c0af56db7421a461c02">娱乐
                </div>
                <div class="channel color-4 font4_const b_eaabd3750a92632e39431d1197b80acc" data-cname="体育"
                     data-cid="eaabd3750a92632e39431d1197b80acc">体育
                </div>
                <div class="channel color-4 font4_const b_cbe17b8edb6d4ed5dcdd8e97c6a3f9ce" data-cname="调查"
                     data-cid="cbe17b8edb6d4ed5dcdd8e97c6a3f9ce">调查
                </div>
                <div class="channel color-4 font4_const b_cde065b013e874b45414c7eb5bb4567e" data-cname="军事"
                     data-cid="cde065b013e874b45414c7eb5bb4567e">军事
                </div>
                <div class="channel color-4 font4_const b_ccaa7b3dafbdd70a7a0abeb17902e994" data-cname="科技"
                     data-cid="ccaa7b3dafbdd70a7a0abeb17902e994">科技
                </div>
                <div class="channel color-4 font4_const b_5669459fffd471c7adb81621ccc652f2" data-cname="财经"
                     data-cid="5669459fffd471c7adb81621ccc652f2">财经
                </div>
                <div class="channel color-4 font4_const b_4e9715a3087a5cf063107c9132be55f5" data-cname="生活"
                     data-cid="4e9715a3087a5cf063107c9132be55f5">生活
                </div>
                <div class="channel color-4 font4_const b_0cb13d67ec9dcf5c335fc1df70a05877" data-cname="国际"
                     data-cid="0cb13d67ec9dcf5c335fc1df70a05877">国际
                </div>
                <div class="channel color-4 font4_const b_db497643fe8a6c9f0bffd1e53c9cadff" data-cname="时间号"
                     data-cid="db497643fe8a6c9f0bffd1e53c9cadff">时间号
                </div>
                <div class="channel color-4 font4_const b_bdcc0f20dae9ca6ac5962411009cd53f" data-cname="社会"
                     data-cid="bdcc0f20dae9ca6ac5962411009cd53f">社会
                </div>
                <div class="channel color-4 font4_const b_d4a31ae5b087c9020b0916e6bdcd0306" data-cname="证券"
                     data-cid="d4a31ae5b087c9020b0916e6bdcd0306">证券
                </div>
                <div class="channel color-4 font4_const b_92db0f7330c8f3b412c048a65e6d6f66" data-cname="房产"
                     data-cid="92db0f7330c8f3b412c048a65e6d6f66">房产
                </div>
                <div class="channel color-4 font4_const b_7409440d13cc5d06b272cfb53e06059e" data-cname="足球"
                     data-cid="7409440d13cc5d06b272cfb53e06059e">足球
                </div>
                <div class="channel color-4 font4_const b_ae801ae961bddd701be109aabe7ccda5" data-cname="NBA"
                     data-cid="ae801ae961bddd701be109aabe7ccda5">NBA
                </div>
                <div class="channel color-4 font4_const b_02c061301ff7f127b8e249066dbd75f5" data-cname="电影"
                     data-cid="02c061301ff7f127b8e249066dbd75f5">电影
                </div>
                <div class="channel color-4 font4_const b_897f5023c68a873ee0b0e789178ab632" data-cname="电视"
                     data-cid="897f5023c68a873ee0b0e789178ab632">电视
                </div>
                <div class="channel color-4 font4_const b_274dfb0b7c5136ec4fc50066a2423c3f" data-cname="明星"
                     data-cid="274dfb0b7c5136ec4fc50066a2423c3f">明星
                </div>
                <div class="channel color-4 font4_const b_9f8829e7ef34b714e136b7dbbc283041" data-cname="数码"
                     data-cid="9f8829e7ef34b714e136b7dbbc283041">数码
                </div>
                <div class="channel color-4 font4_const b_fff830a5cc01c921e6f031857f812502" data-cname="武器"
                     data-cid="fff830a5cc01c921e6f031857f812502">武器
                </div>
                <div class="channel color-4 font4_const b_963a9c98ca184610c2a3054749eec76f" data-cname="时尚"
                     data-cid="963a9c98ca184610c2a3054749eec76f">时尚
                </div>
                <div class="channel color-4 font4_const b_6732ac35350bcbbc2a8dda02a08a98dd" data-cname="健康"
                     data-cid="6732ac35350bcbbc2a8dda02a08a98dd">健康
                </div>
                <div class="channel color-4 font4_const b_0bd9f2755fe97a7faf17a825c0491e12" data-cname="亲子"
                     data-cid="0bd9f2755fe97a7faf17a825c0491e12">亲子
                </div>
                <div class="channel color-4 font4_const b_711eb84d9b95d66b86cd397eaba55d12" data-cname="美食"
                     data-cid="711eb84d9b95d66b86cd397eaba55d12">美食
                </div>
                <div class="channel color-4 font4_const b_14c4c9d4cc9cac1af79926a5fd5bd85f" data-cname="星座"
                     data-cid="14c4c9d4cc9cac1af79926a5fd5bd85f">星座
                </div>
                <div class="channel color-4 font4_const b_74b8334b484cbcb5d07e0ba82833e51d" data-cname="旅游"
                     data-cid="74b8334b484cbcb5d07e0ba82833e51d">旅游
                </div>
                <div class="channel color-4 font4_const b_339af3318afb7adf81788aca69e4a14a" data-cname="搞笑"
                     data-cid="339af3318afb7adf81788aca69e4a14a">搞笑
                </div>
                <div class="channel color-4 font4_const b_f5fc97507007cf44a70d940311b952d2" data-cname="汽车"
                     data-cid="f5fc97507007cf44a70d940311b952d2">汽车
                </div>
                <div class="channel color-4 font4_const b_a85d434a76c02be094245d08b18961fb" data-cname="评论"
                     data-cid="a85d434a76c02be094245d08b18961fb">评论
                </div>
                <div class="channel color-4 font4_const b_b513112bbf4fae3127e405d4ec73d466" data-cname="文化"
                     data-cid="b513112bbf4fae3127e405d4ec73d466">文化
                </div>
                <div class="channel color-4 font4_const b_d42839e8902d2eded18d54bc66519ffd" data-cname="中青报"
                     data-cid="d42839e8902d2eded18d54bc66519ffd">中青报
                </div>
              </div>
            </div>
            <div class=" xs-fixed-container"></div>
          </div>
        </div>
        <div class="click-down">
          <div class="inner borderc-5">
            <div class="iconfont icon-btime_icon_pull color-4"></div>
          </div>
        </div>
      </div>

      <div class="status info font5" style="display: none;">更新了12条新资讯</div>
      <div class="status loading font5" style="display: none;">加载中...</div>
      <div class="status error font5 color-3" style="display: none;"></div>
    </div>
    <div class="channel-table bgc-6" style="display: none;">
      <div class="block"></div>
      <div class="title">
        <div class="word color-4 font5">点击切换频道</div>
        <div class="close">
          <i class="iconfont icon-btime_icon_close color-2"></i>
        </div>
      </div>

      <div class="channels">
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_2da8f707e9d514c562162540d2b0ad57"
               data-cid="2da8f707e9d514c562162540d2b0ad57">推荐
          </div>
          <div class="channel font4_const color-2 bgc-9 t_7389193781085e10178780f6bbb3c79e active"
               data-cid="7389193781085e10178780f6bbb3c79e">新闻
          </div>
          <div class="channel font4_const color-2 bgc-9 t_3ea38d7ceaf218aee879343ce6d2c826"
               data-cid="3ea38d7ceaf218aee879343ce6d2c826">视频
          </div>
          <div class="channel font4_const color-2 bgc-9 t_7af450a9dcc60c0af56db7421a461c02"
               data-cid="7af450a9dcc60c0af56db7421a461c02">娱乐
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_eaabd3750a92632e39431d1197b80acc"
               data-cid="eaabd3750a92632e39431d1197b80acc">体育
          </div>
          <div class="channel font4_const color-2 bgc-9 t_cbe17b8edb6d4ed5dcdd8e97c6a3f9ce"
               data-cid="cbe17b8edb6d4ed5dcdd8e97c6a3f9ce">调查
          </div>
          <div class="channel font4_const color-2 bgc-9 t_cde065b013e874b45414c7eb5bb4567e"
               data-cid="cde065b013e874b45414c7eb5bb4567e">军事
          </div>
          <div class="channel font4_const color-2 bgc-9 t_ccaa7b3dafbdd70a7a0abeb17902e994"
               data-cid="ccaa7b3dafbdd70a7a0abeb17902e994">科技
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_5669459fffd471c7adb81621ccc652f2"
               data-cid="5669459fffd471c7adb81621ccc652f2">财经
          </div>
          <div class="channel font4_const color-2 bgc-9 t_4e9715a3087a5cf063107c9132be55f5"
               data-cid="4e9715a3087a5cf063107c9132be55f5">生活
          </div>
          <div class="channel font4_const color-2 bgc-9 t_0cb13d67ec9dcf5c335fc1df70a05877"
               data-cid="0cb13d67ec9dcf5c335fc1df70a05877">国际
          </div>
          <div class="channel font4_const color-2 bgc-9 t_db497643fe8a6c9f0bffd1e53c9cadff"
               data-cid="db497643fe8a6c9f0bffd1e53c9cadff">时间号
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_bdcc0f20dae9ca6ac5962411009cd53f"
               data-cid="bdcc0f20dae9ca6ac5962411009cd53f">社会
          </div>
          <div class="channel font4_const color-2 bgc-9 t_d4a31ae5b087c9020b0916e6bdcd0306"
               data-cid="d4a31ae5b087c9020b0916e6bdcd0306">证券
          </div>
          <div class="channel font4_const color-2 bgc-9 t_92db0f7330c8f3b412c048a65e6d6f66"
               data-cid="92db0f7330c8f3b412c048a65e6d6f66">房产
          </div>
          <div class="channel font4_const color-2 bgc-9 t_7409440d13cc5d06b272cfb53e06059e"
               data-cid="7409440d13cc5d06b272cfb53e06059e">足球
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_ae801ae961bddd701be109aabe7ccda5"
               data-cid="ae801ae961bddd701be109aabe7ccda5">NBA
          </div>
          <div class="channel font4_const color-2 bgc-9 t_02c061301ff7f127b8e249066dbd75f5"
               data-cid="02c061301ff7f127b8e249066dbd75f5">电影
          </div>
          <div class="channel font4_const color-2 bgc-9 t_897f5023c68a873ee0b0e789178ab632"
               data-cid="897f5023c68a873ee0b0e789178ab632">电视
          </div>
          <div class="channel font4_const color-2 bgc-9 t_274dfb0b7c5136ec4fc50066a2423c3f"
               data-cid="274dfb0b7c5136ec4fc50066a2423c3f">明星
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_9f8829e7ef34b714e136b7dbbc283041"
               data-cid="9f8829e7ef34b714e136b7dbbc283041">数码
          </div>
          <div class="channel font4_const color-2 bgc-9 t_fff830a5cc01c921e6f031857f812502"
               data-cid="fff830a5cc01c921e6f031857f812502">武器
          </div>
          <div class="channel font4_const color-2 bgc-9 t_963a9c98ca184610c2a3054749eec76f"
               data-cid="963a9c98ca184610c2a3054749eec76f">时尚
          </div>
          <div class="channel font4_const color-2 bgc-9 t_6732ac35350bcbbc2a8dda02a08a98dd"
               data-cid="6732ac35350bcbbc2a8dda02a08a98dd">健康
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_0bd9f2755fe97a7faf17a825c0491e12"
               data-cid="0bd9f2755fe97a7faf17a825c0491e12">亲子
          </div>
          <div class="channel font4_const color-2 bgc-9 t_711eb84d9b95d66b86cd397eaba55d12"
               data-cid="711eb84d9b95d66b86cd397eaba55d12">美食
          </div>
          <div class="channel font4_const color-2 bgc-9 t_14c4c9d4cc9cac1af79926a5fd5bd85f"
               data-cid="14c4c9d4cc9cac1af79926a5fd5bd85f">星座
          </div>
          <div class="channel font4_const color-2 bgc-9 t_74b8334b484cbcb5d07e0ba82833e51d"
               data-cid="74b8334b484cbcb5d07e0ba82833e51d">旅游
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_339af3318afb7adf81788aca69e4a14a"
               data-cid="339af3318afb7adf81788aca69e4a14a">搞笑
          </div>
          <div class="channel font4_const color-2 bgc-9 t_f5fc97507007cf44a70d940311b952d2"
               data-cid="f5fc97507007cf44a70d940311b952d2">汽车
          </div>
          <div class="channel font4_const color-2 bgc-9 t_a85d434a76c02be094245d08b18961fb"
               data-cid="a85d434a76c02be094245d08b18961fb">评论
          </div>
          <div class="channel font4_const color-2 bgc-9 t_b513112bbf4fae3127e405d4ec73d466"
               data-cid="b513112bbf4fae3127e405d4ec73d466">文化
          </div>
        </div>
        <div class="row">
          <div class="channel font4_const color-2 bgc-9 t_d42839e8902d2eded18d54bc66519ffd"
               data-cid="d42839e8902d2eded18d54bc66519ffd">中青报
          </div>
          <div class="channel font4_const color-2 bgc-9 disabled"></div>
          <div class="channel font4_const color-2 bgc-9 disabled"></div>
          <div class="channel font4_const color-2 bgc-9 disabled"></div>
        </div>
      </div>
    </div>

    <div class="tabs">
      <div class="pull-down-status bgc-9 font5 color-4" style="display: block;">下拉加载更多</div>
      <div class="inner">

        <div class="tab">
          <div class="scroll" id="t_1489223041287"
               style="touch-action: auto; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
            <div class="xs-container">
              <div class="xs-content content" style="min-height: 1175px;">
                <div class="top-line"></div>
                <div class="news-list">
                  <div class="content_item bgc-9 m-3 tmpl_video ">
                    <a bk="m_news_click_23ai2u5ubuvm8k4nbg2blo1ug9n"
                       href="http://h5.btime.com/item/router?gid=23ai2u5ubuvm8k4nbg2blo1ug9n">
                      <div class="content_main borderc-6">
                        <div class="pic"
                             style="background-image: url(http://p1.qhimg.com/dmfd/700_395_60/t012004236a519a8559.jpg?size=720x576)">
                          <div class="bottom">
                            <div class="word">
                              <div class="title-word color-9 font2_const">警察夫妻结婚7年仅有一张全家福</div>
                              <div class="tips font6_const color-6">

                                <div class="tip">BTV新闻</div>


                                <div class="tip">8小时前</div>


                              </div>
                            </div>
                          </div>


                          <div class="play-icon"></div>


                          <div class="tip border-9 font8_const color-9">00:25</div>

                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="content_item bgc-9 m-3 tmpl_video ">
                    <a bk="m_news_click_232tlhpu09jdi8icovsjls8863n"
                       href="http://h5.btime.com/item/router?gid=232tlhpu09jdi8icovsjls8863n">
                      <div class="content_main borderc-6">
                        <div class="pic"
                             style="background-image: url(http://p0.qhimg.com/dmfd/700_395_60/t01163f658e168d1e3f.jpg?size=720x576)">
                          <div class="bottom">
                            <div class="word">
                              <div class="title-word color-9 font2_const">格鲁吉亚滑雪胜地用集装箱建豪华酒店</div>
                              <div class="tips font6_const color-6">

                                <div class="tip">BTV新闻</div>


                                <div class="tip">8小时前</div>


                              </div>
                            </div>
                          </div>


                          <div class="play-icon"></div>


                          <div class="tip border-9 font8_const color-9">00:42</div>

                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="content_item bgc-9 m-3 tmpl_video ">
                    <a bk="m_news_click_23927rb5o76pc0te96a5kv0gvve"
                       href="http://h5.btime.com/item/router?gid=23927rb5o76pc0te96a5kv0gvve">
                      <div class="content_main borderc-6">
                        <div class="pic"
                             style="background-image: url(http://p4.qhimg.com/dmfd/700_395_60/t01c6db29d6a4ac98d7.jpg?size=720x576)">
                          <div class="bottom">
                            <div class="word">
                              <div class="title-word color-9 font2_const">瑞士老爸为女儿创作奇妙探险之旅</div>
                              <div class="tips font6_const color-6">

                                <div class="tip">BTV新闻</div>


                                <div class="tip">8小时前</div>


                              </div>
                            </div>
                          </div>


                          <div class="play-icon"></div>


                          <div class="tip border-9 font8_const color-9">00:14</div>

                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="content_item common bgc-9 tmpl_news ">
                    <a bk="m_news_click_0270t262b165ektf7rfl168fabr"
                       href="http://h5.btime.com/item/router?gid=0270t262b165ektf7rfl168fabr">

                      <div class="content_main borderc-6">
                        <div class="info">
                          <div class="title font2_const color-2">中国游船取消韩国之行改道日本?外交部回应</div>

                          <div class="tips font6_const color-4">

                            <div class="tip">海外网</div>


                            <div class="tip">8小时前</div>


                          </div>

                        </div>
                        <div class="img font8_const color-9"
                             style="background-image: url(http://p5.qhimg.com/dmfd/225_128_60/t010c96ea8753c4e125.jpg?size=486x341)">


                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="content_item bgc-9 m-3 tmpl_video ">
                    <a bk="m_news_click_209nh441gjnp008tudp77rac9ei"
                       href="http://h5.btime.com/item/router?gid=209nh441gjnp008tudp77rac9ei">
                      <div class="content_main borderc-6">
                        <div class="pic"
                             style="background-image: url(http://p2.qhimg.com/dmfd/700_395_60/t015c0e6309c7d5644a.jpg?size=720x576)">
                          <div class="bottom">
                            <div class="word">
                              <div class="title-word color-9 font2_const">辣妈一年瘦231斤 获6万余粉丝</div>
                              <div class="tips font6_const color-6">

                                <div class="tip">BTV新闻</div>


                                <div class="tip">8小时前</div>


                              </div>
                            </div>
                          </div>


                          <div class="play-icon"></div>


                          <div class="tip border-9 font8_const color-9">00:34</div>

                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="content_item common bgc-9 tmpl_news ">
                    <a bk="m_news_click_36n7pdnt19e86famcd4la4hq3vn"
                       href="http://h5.btime.com/item/router?gid=36n7pdnt19e86famcd4la4hq3vn">

                      <div class="content_main borderc-6">
                        <div class="info">
                          <div class="title font2_const color-2">全国人大代表朱虹:农村电商大有可为</div>

                          <div class="tips font6_const color-4">

                            <div class="tip">中国青年网</div>


                            <div class="tip">1小时前</div>


                          </div>

                        </div>
                        <div class="img font8_const color-9"
                             style="background-image: url(http://p4.qhimg.com/dmfd/225_128_60/t016d2fd14474a23d38.jpg?size=550x367)">


                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="content_item news_nopic bgc-9 tmpl_news ">
                    <a bk="m_news_click_05ct5s3oft7i1d0nqjj1vfs3f1m"
                       href="http://h5.btime.com/item/router?gid=05ct5s3oft7i1d0nqjj1vfs3f1m">
                      <div class="content_main borderc-6">
                        <div class="title font2_const color-2">BBC节目正谈韩国政治 闯进俩萌娃画风突变</div>
                        <div class="tips font6_const color-4">

                          <div class="tip">环球网</div>


                          <div class="tip">3小时前</div>


                        </div>
                      </div>

                    </a>
                  </div>
                  <div class="content_item news_nopic bgc-9 tmpl_news ">
                    <a bk="m_news_click_32dqq203fk89v3rjactjde82ae1"
                       href="http://h5.btime.com/item/router?gid=32dqq203fk89v3rjactjde82ae1">
                      <div class="content_main borderc-6">
                        <div class="title font2_const color-2">政协委员建议取缔"娱乐性吃喝玩乐"真人秀节目</div>
                        <div class="tips font6_const color-4">

                          <div class="tip">中国网</div>


                          <div class="tip">7小时前</div>


                        </div>
                      </div>

                    </a>
                  </div>
                  <div class="content_item news_nopic bgc-9 tmpl_news ">
                    <a bk="m_news_click_001mkv9169jbgtcba87vubc82lu"
                       href="http://h5.btime.com/item/router?gid=001mkv9169jbgtcba87vubc82lu">
                      <div class="content_main borderc-6">
                        <div class="title font2_const color-2">河南首座"活态非遗博物馆"将在洛阳开放迎宾</div>
                        <div class="tips font6_const color-4">

                          <div class="tip">新华网</div>


                          <div class="tip">5小时前</div>


                        </div>
                      </div>

                    </a>
                  </div>
                  <div class="content_item common bgc-9 tmpl_news ">
                    <a bk="m_news_click_36drh3gid728omovlkr4buju95a"
                       href="http://h5.btime.com/item/router?gid=36drh3gid728omovlkr4buju95a">

                      <div class="content_main borderc-6">
                        <div class="info">
                          <div class="title font2_const color-2">工信部长:推动取消漫游费进度 力争提前完成</div>

                          <div class="tips font6_const color-4">

                            <div class="tip">中国网</div>


                            <div class="tip">7小时前</div>


                          </div>

                        </div>
                        <div class="img font8_const color-9"
                             style="background-image: url(http://p7.qhimg.com/dmfd/225_128_60/t01672cd46222347a6a.jpg?size=550x366)">


                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="content_item news_nopic bgc-9 tmpl_news ">
                    <a bk="m_news_click_37u6h1e46s99sq9og3ln0fnjlv2"
                       href="http://h5.btime.com/item/router?gid=37u6h1e46s99sq9og3ln0fnjlv2">
                      <div class="content_main borderc-6">
                        <div class="title font2_const color-2">卫计委副主任:中国人口不缺数量 100年都不缺</div>
                        <div class="tips font6_const color-4">

                          <div class="tip">央视</div>


                          <div class="tip">5小时前</div>


                        </div>
                      </div>

                    </a>
                  </div>
                  <div class="content_item common bgc-9 tmpl_news ">
                    <a bk="m_news_click_30n21erbpuo99joq6p7dpobkmb5"
                       href="http://h5.btime.com/item/router?gid=30n21erbpuo99joq6p7dpobkmb5">

                      <div class="content_main borderc-6">
                        <div class="info">
                          <div class="title font2_const color-2">小伙7年攒30万不买房买房车:想以车为家看风景</div>

                          <div class="tips font6_const color-4">

                            <div class="tip">中新网</div>


                            <div class="tip">9小时前</div>


                          </div>

                        </div>
                        <div class="img font8_const color-9"
                             style="background-image: url(http://p4.qhimg.com/dmfd/225_128_60/t01756aa74b1a5a17f2.jpg?size=400x266)">


                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="loading-status bgc-9 font5 color-4" style="display: block;">上拉加载更多</div>
              </div>
            </div>
            <div class=" xs-fixed-container"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bgc-9 low-loading font5 color-4"></div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import "./assets/css/common.css";
  @import "./assets/css/other.css";
  @import "./assets/css/other02.css";
</style>


