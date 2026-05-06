export default function Home() {
  return (
    <>
      <header className="topbar">
          <a className="brand" href="#top" aria-label="泡泡爪宠物洗护店首页">
            <span className="brand-mark">爪</span>
            <span>泡泡爪宠物洗护</span>
          </a>
          <nav className="nav" aria-label="主导航">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#about">环境</a>
            <a href="#reviews">口碑</a>
            <a href="#map">地图</a>
            <a className="nav-cta" href="#booking">预约</a>
          </nav>
        </header>
      
        <main id="top">
          <section className="hero" aria-label="泡泡爪宠物洗护店">
            <div className="hero-content">
              <div className="eyebrow">无笼等待 · 一宠一巾 · 透明洗护</div>
              <h1>泡泡爪宠物洗护</h1>
              <p>给猫猫狗狗做一次轻松、干净、好闻的洗护体验。从皮毛评估到吹干梳理，全程温柔照护，主人也能安心等候。</p>
              <div className="hero-actions">
                <a className="button" href="#booking">立即预约</a>
                <a className="ghost-button" href="#services">查看套餐</a>
              </div>
            </div>
          </section>
      
          <div className="hero-strip" aria-label="店铺亮点">
            <div className="strip-item">
              <strong>45分钟起</strong>
              <span>小型犬基础洗护更高效</span>
            </div>
            <div className="strip-item">
              <strong>宠物友好</strong>
              <span>低噪吹水机与安抚式操作</span>
            </div>
            <div className="strip-item">
              <strong>可视化</strong>
              <span>洗护进度实时通知主人</span>
            </div>
          </div>
      
          <section id="services">
            <div className="section-inner">
              <div className="section-head">
                <h2>常用洗护套餐</h2>
                <p>按宠物体型、毛量与皮肤状态匹配洗护方案，价格清晰，进店后会先做基础评估。</p>
              </div>
              <div className="store-carousel" aria-label="高端宠物洗护店内环境轮播">
                <div className="carousel-track">
                  <figure className="carousel-slide">
                    <img src="/assets/store-reception.png" alt="中国高端宠物洗护店接待等候区环境" />
                    <figcaption className="slide-caption">
                      <strong>接待等候区</strong>
                      <span>温润木饰面、产品陈列与透明护理视线，让主人候场时也能安心。</span>
                    </figcaption>
                  </figure>
                  <figure className="carousel-slide">
                    <img src="/assets/store-bathing.png" alt="中国高端宠物洗护店透明洗浴护理区环境" />
                    <figcaption className="slide-caption">
                      <strong>透明洗浴区</strong>
                      <span>玻璃分区、独立浴缸与整洁毛巾收纳，强调一宠一消毒的护理标准。</span>
                    </figcaption>
                  </figure>
                  <figure className="carousel-slide">
                    <img src="/assets/store-styling.png" alt="中国高端宠物洗护店造型吹护区环境" />
                    <figcaption className="slide-caption">
                      <strong>造型吹护区</strong>
                      <span>低噪吹护设备与专业修剪工位，适合细致梳理和造型服务。</span>
                    </figcaption>
                  </figure>
                </div>
                <div className="carousel-dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="services">
                <article className="card service-card">
                  <img src="/assets/store-bathing.png" alt="高端宠物洗护店透明洗浴区" />
                  <div className="service-body">
                    <h3>基础香波洗护</h3>
                    <p>适合日常清洁，包含洗澡、吹干、梳毛、耳眼清洁、脚底毛修剪与指甲护理。</p>
                    <div className="price"><span>小型犬起</span><strong>¥88</strong></div>
                  </div>
                </article>
                <article className="card service-card">
                  <img src="/assets/store-styling.png" alt="高端宠物洗护店造型吹护区" />
                  <div className="service-body">
                    <h3>精致造型修剪</h3>
                    <p>适合贵宾、比熊、雪纳瑞等造型需求，包含基础洗护与面部、身体造型修剪。</p>
                    <div className="price"><span>造型服务起</span><strong>¥168</strong></div>
                  </div>
                </article>
                <article className="card service-card">
                  <img src="/assets/store-reception.png" alt="高端宠物洗护店接待等候区" />
                  <div className="service-body">
                    <h3>猫咪舒缓洗护</h3>
                    <p>独立猫咪时段，低刺激香波、轻柔吹干与毛结处理，减少等待和环境压力。</p>
                    <div className="price"><span>猫咪洗护起</span><strong>¥158</strong></div>
                  </div>
                </article>
              </div>
            </div>
          </section>
      
          <section className="process-band" id="process">
            <div className="section-inner">
              <div className="section-head">
                <h2>每一步都让主人放心</h2>
                <p>我们把洗护拆成清楚的流程，先确认宠物状态，再开始护理，避免粗暴赶时间。</p>
              </div>
              <div className="steps">
                <article className="step">
                  <h3>到店评估</h3>
                  <p>查看皮肤、毛结、耳道和情绪状态，确认是否适合当日洗护。</p>
                </article>
                <article className="step">
                  <h3>温和清洁</h3>
                  <p>使用适配毛发的香波，避开眼鼻耳，重点清理脚底与腹部。</p>
                </article>
                <article className="step">
                  <h3>吹干梳理</h3>
                  <p>分段低噪吹干，边吹边梳，减少拉扯并检查隐藏毛结。</p>
                </article>
                <article className="step">
                  <h3>护理反馈</h3>
                  <p>交付洗护记录，提醒皮肤、耳道、牙齿或掉毛相关注意事项。</p>
                </article>
              </div>
            </div>
          </section>
      
          <section id="about">
            <div className="section-inner about-grid">
              <div className="photo-stack">
                <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=82" alt="干净明亮的宠物店环境" />
                <img src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=700&q=82" alt="美容后的可爱狗狗" />
              </div>
              <div className="about-copy">
                <h2>干净、透明，也懂宠物的小脾气</h2>
                <p>泡泡爪把洗护区、等待区和猫咪独立护理区分开管理。所有毛巾、梳具、浴盆按宠物单独消毒，护理师会根据宠物性格调整节奏。</p>
                <ul className="check-list">
                  <li>预约制控制同场宠物数量，减少吠叫、应激和长时间等待。</li>
                  <li>敏感肌、老年宠、幼宠可单独备注，使用更温和的护理流程。</li>
                  <li>护理后提供照片反馈，主人能清楚看到完成状态。</li>
                </ul>
              </div>
            </div>
          </section>
      
          <section id="reviews">
            <div className="section-inner">
              <div className="section-head">
                <h2>附近宠物主的真实选择</h2>
                <p>我们不追求流水线速度，更重视宠物走出门时的状态。</p>
              </div>
              <div className="reviews">
                <article className="card review">
                  <div className="stars">★★★★★</div>
                  <p>我家比熊以前洗澡很紧张，这次店员一直在安抚，修完脸也很自然，回家香香软软。</p>
                  <strong>雪球主人</strong>
                </article>
                <article className="card review">
                  <div className="stars">♥♥♥♥♥</div>
                  <p>猫咪洗护能约独立时段太重要了。全程有照片，耳朵和指甲也处理得很细。</p>
                  <strong>芝麻主人</strong>
                </article>
                <article className="card review">
                  <div className="stars">♥♥♥♥♥</div>
                  <p>价格说得很清楚，没有到店乱加项目。工作人员还提醒了皮肤泛红的问题。</p>
                  <strong>豆包主人</strong>
                </article>
              </div>
            </div>
          </section>
      
          <section className="map-band" id="map">
            <div className="section-inner">
              <div className="section-head">
                <h2>跟着清新小地图找到我们</h2>
                <p>门店就在上海淞发路与军工高架路交汇处，靠近黄浦江、G1503 与滨江森林公园一带。</p>
              </div>
              <div className="map-layout">
                <figure className="pet-map" aria-label="泡泡爪宠物洗护店位置示意地图">
                  <img src="/assets/pet-shop-map-guide-ai.png" alt="清新可爱的宠物店手绘地图，标记泡泡爪宠物洗护店位于上海淞发路和军工高架路交汇处" />
                  <span className="store-label">泡泡爪在这里</span>
                  <span className="map-label songfa">淞发路</span>
                  <span className="map-label jungong">军工高架路</span>
                  <span className="map-label river">黄浦江</span>
                  <span className="map-label teal g1503">G1503</span>
                  <span className="map-label teal park">滨江森林公园</span>
                  <span className="map-label teal town">高桥镇</span>
                </figure>
                <aside className="map-card">
                  <h3>到店定位</h3>
                  <p>导航搜索“淞发路与军工高架路交汇处”，看到地图上的泡泡爪爪印就是门店位置。</p>
                  <ul className="map-list">
                    <li>
                      <span>爪</span>
                      <div>
                        <strong>门店位置</strong>
                        <small>上海市宝山区淞发路与军工高架路交汇处</small>
                      </div>
                    </li>
                    <li>
                      <span>桥</span>
                      <div>
                        <strong>主要参照</strong>
                        <small>靠近黄浦江南侧，军工高架路转入淞发路后即可抵达。</small>
                      </div>
                    </li>
                    <li>
                      <span>园</span>
                      <div>
                        <strong>周边地标</strong>
                        <small>上海滨江森林公园、半岛1919文化创意产业园、高桥镇。</small>
                      </div>
                    </li>
                  </ul>
                  <div className="map-note">建议到店前 10 分钟导航确认路况</div>
                </aside>
              </div>
            </div>
          </section>
      
          <section className="booking" id="booking">
            <div className="section-inner booking-panel">
              <div className="booking-copy">
                <h2>预约一次轻松洗护</h2>
                <p>提交信息后，我们会在营业时间内联系确认宠物体型、毛量、护理需求与可选时段。</p>
                <div className="booking-info">
                  <div className="info-box">
                    <span>营业时间</span>
                    <strong>10:00 - 20:00</strong>
                  </div>
                  <div className="info-box">
                    <span>门店电话</span>
                    <strong>021-8888 6677</strong>
                  </div>
                  <div className="info-box">
                    <span>地址</span>
                    <strong>淞发路与军工高架路交汇处</strong>
                  </div>
                  <div className="info-box">
                    <span>到店建议</span>
                    <strong>提前 10 分钟</strong>
                  </div>
                </div>
              </div>
              <form className="booking-form">
                <div className="form-row">
                  <label>
                    主人姓名
                    <input type="text" name="name" placeholder="例如：李女士" />
                  </label>
                  <label>
                    联系电话
                    <input type="tel" name="phone" placeholder="请输入手机号" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    宠物类型
                    <select name="pet">
                      <option>小型犬</option>
                      <option>中大型犬</option>
                      <option>猫咪</option>
                      <option>其他宠物</option>
                    </select>
                  </label>
                  <label>
                    意向服务
                    <select name="service">
                      <option>基础香波洗护</option>
                      <option>精致造型修剪</option>
                      <option>猫咪舒缓洗护</option>
                      <option>皮肤护理咨询</option>
                    </select>
                  </label>
                </div>
                <label>
                  备注
                  <textarea name="note" placeholder="可填写宠物名字、年龄、是否怕吹风、是否有毛结等"></textarea>
                </label>
                <button className="button" type="button">提交预约</button>
              </form>
            </div>
          </section>
        </main>
      
        <footer>
          <span>© 2026 泡泡爪宠物洗护店</span>
          <span>一宠一消毒 · 预约优先 · 宠物友好护理</span>
        </footer>
    </>
  );
}
