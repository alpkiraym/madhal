// ÜNİTELER 1-6 (İdeal Medhal Özeti sırası)
const UNITS = [];

UNITS.push({
id:'u1', no:1, src:'İdeal Özet s. 2', title:'İslam\'dan Önce Araplar', ar:'حالة العرب قبل الإسلام',
lead:'İslam şeriatının geldiği toplumun sosyal ve hukuki yapısını, İslam\'ın bu yapıdaki kuralları nasıl kaldırdığını, düzelttiğini veya olduğu gibi bıraktığını öğreneceğiz.',
html:`
<h2>1. Coğrafi ve Siyasi Durum</h2>
<p>Araplar Asya'nın güneybatısında, kuzeyde Şam toprakları, doğuda Basra Körfezi ve Umman Denizi, güneyde Hint Okyanusu, batıda Kızıldeniz ile çevrili <b>Arap Yarımadası</b>'nda yaşıyordu. Soy bakımından ikiye ayrılırlardı:</p>
<div class="grid2">
<div class="card-s"><h4>Kahtânîler (Güney Arapları)</h4><p>Kahtan'ın soyundan; Yemenliler bunlardandır. Genellikle yerleşik ve medenî bir hayat sürdüler.</p></div>
<div class="card-s"><h4>Adnânîler (Kuzey Arapları)</h4><p>Hz. İsmail'in soyundan; Hicaz halkı bunlardandır. Çoğunlukla bedevî ve göçebe yaşadılar.</p></div>
</div>
<p>Hz. Peygamber'den önceki döneme, o dönemin inanç, kültür, örf ve hukukunu da ifade etmek üzere <b>Cahiliye</b> <span class="ar">الجاهلية</span> denir.</p>

<h2>2. Sosyal Düzen ve Özellikleri</h2>
<ol>
<li>Çoğunluk <b>bedevî</b> hayat yaşar; geçimini hayvancılık ve yağma (gazve) ile sağlardı. Çok azı şehirlerde oturur, ticaret ve tarımla uğraşırdı.</li>
<li>Toplum <b>kabile</b> esasına dayanırdı. Kabile bir devlet değil, kan bağına dayanan sosyal bir birimdi; fertler reislerine kendi istekleriyle boyun eğerdi.</li>
<li><b>Kabile asabiyeti</b> sebebiyle nesepleriyle övünür, haklı haksız ayırmadan kabilelerine yardım ederlerdi. Kabileden birine yapılan haksızlık bütün kabileye yapılmış sayılırdı. Bu dayanışma evlatlık, antlaşma (hilf) ve komşuluk yoluyla kabileye bağlananları da kapsardı.</li>
<li>Kabile savaşları çoktu ve en basit sebeplerle çıkardı; haram aylarda (Zilkade, Zilhicce, Muharrem, Recep) savaşılmazdı.</li>
<li>Savaşan erkek yüceltilir, kadın aşağılanırdı; bazı kabilelerde kız çocukları diri diri gömülürdü.</li>
</ol>
<div class="box note">Bunların yanında Arapların övülen hasletleri de vardı: asalet, yiğitlik, ahde vefa, doğruluk, komşuyu koruma, gücü yettiği halde affetme, misafirperverlik ve cömertlik. Hz. Peygamber'in övdüğü <b>Hilfü'l-fudûl</b> bunun bir örneğidir.</div>

<h2>3. İslam'ın Sosyal Hayata Etkisi</h2>
<ol>
<li>İslam toplumda köklü bir değişiklik yaptı; bozuk olanı kaldırdı, iyi olanı korudu. Cahiliye asabiyeti hakkında: "Bırakın onu, o kokuşmuştur."</li>
<li>Üstünlük ölçüsü nesep değil <b>takva</b> oldu: <span class="ar">إن أكرمكم عند الله أتقاكم</span> (Hucurât 13). İslam evrensel bir davettir, toplumu ırk veya kabile üzerine kurmaz.</li>
<li>Müminler kardeş sayıldı: <span class="ar">إنما المؤمنون إخوة</span> (Hucurât 10).</li>
<li>Batılda yardımlaşma haram, iyilikte yardımlaşma emredildi: <span class="ar">وتعاونوا على البر والتقوى ولا تعاونوا على الإثم والعدوان</span> (Mâide 2). Hata ile öldürmede diyetin <b>âkile</b> tarafından ödenmesi bu dayanışmanın meşru şeklidir.</li>
<li>Yağma, baskın ve saldırı yasaklandı.</li>
<li>Kız çocuklarını gömme haram kılındı; kadın hukuk alanında (aile yönetimi hariç) erkekle eşit tutuldu: <span class="ar">ولهن مثل الذي عليهن بالمعروف</span> (Bakara 228).</li>
</ol>

<h2>4. Araplarda Hukuki Durum</h2>
<p>Devlet, yazılı kanun ve resmî yargı yoktu. Kurallar <b>örf, âdet ve geleneklerden</b> oluşur, anlaşmazlıkta kabile ileri gelenlerine ve bazen kâhinlere başvurulurdu. İslam şeriatı bu kurallardan bir kısmını <b>kaldırdı</b>, bir kısmını <b>düzelterek (ıslah) kabul etti</b>, bir kısmını da <b>olduğu gibi bıraktı</b>.</p>

<h3>a) Aile hukuku</h3>
<table class="t">
<tr><th>Cahiliye uygulaması</th><th>İslam'ın tutumu</th></tr>
<tr><td>Bugünkü gibi talip olup mehir vererek evlenmek</td><td>Kabul etti, şartlarını belirledi.</td></tr>
<tr><td><b>Şiğâr nikâhı</b> <span class="ar">نكاح الشغار</span>: İki velinin, mehirsiz olarak birbirlerine velayetlerindeki kadınları vermesi; her kadın diğerinin mehri sayılırdı.</td><td>Yasakladı (Buhârî, Müslim).</td></tr>
<tr><td><b>Makt nikâhı</b> <span class="ar">نكاح المقت</span>: Oğlun babasının ölümünden sonra üvey annesiyle evlenmesi, onu başkasına vermesi veya mirasına konmak için evlenmesine engel olması.</td><td>Yasakladı (Nisâ 22).</td></tr>
<tr><td>İki kız kardeşi aynı anda nikâhlamak; sınırsız eş</td><td>İki kız kardeşi bir arada nikâhlamayı yasakladı, eş sayısını dörtle sınırladı (Nisâ 3, 23).</td></tr>
<tr><td>Usûl ve fürûla (anne, kız, hala, teyze) evlenmeme</td><td>Kabul etti; evlatlıkla ilgili yasakları kaldırdı.</td></tr>
<tr><td>Mehri kızın babası (veli) alırdı.</td><td>Mehri kadının hakkı yaptı (Nisâ 4).</td></tr>
<tr><td>Sınırsız talak ve ric'at; kadını ne tam boşar ne hakkını verirdi.</td><td>Talakı kabul etti, üçle sınırladı (Bakara 229).</td></tr>
<tr><td><b>Hul'</b>: Kadının bedel karşılığı boşanması</td><td>Kabul etti (Bakara 229).</td></tr>
<tr><td><b>Îlâ</b>: Karısına yaklaşmamaya yemin; bir-iki yıl veya süresiz, talak sayılırdı.</td><td>Dört ayla sınırlayarak kabul etti (Bakara 226-227).</td></tr>
<tr><td><b>Zıhâr</b>: "Sen bana annemin sırtı gibisin"; ebedî ayrılık sayılırdı.</td><td>Talak olmaktan çıkardı, kefaret bağladı (Mücâdele 2-3).</td></tr>
<tr><td>Kocası ölen kadın bir yıl beklerdi.</td><td>İddeti 4 ay 10 güne indirdi.</td></tr>
</table>

<h3>b) Vasiyet ve miras</h3>
<p>Kişi mirasçısına da başkasına da sınırsız vasiyet edebilirdi; İslam vasiyeti <b>üçte bir</b>le sınırladı, fazlasını mirasçıların rızasına bağladı. Miras <b>nesep</b> (yalnız savaşabilen büyük erkek çocuklar; yoksa kardeş ve amca) ve <b>sebep</b> (evlatlık, antlaşma) ile alınırdı; kadınlar ve çocuklar mirasçı olamazdı. İslam kadını ve çocukları mirasçı yaptı, evlatlığın mirasını kaldırdı.</p>

<h3>c) Muâmelât</h3>
<table class="t">
<tr><th>Akit</th><th>İslam'ın tutumu</th></tr>
<tr><td>Şirket (Hz. Peygamber İslam'dan önce Sâib b. Ebi's-Sâib ile ortak olmuştu)</td><td>Kabul etti, şartlarını belirledi.</td></tr>
<tr><td>Mudârebe (sermaye birinden, emek diğerinden)</td><td>Kabul etti.</td></tr>
<tr><td>Selem (peşin para, vadeli mal)</td><td>Şartlarıyla kabul etti.</td></tr>
<tr><td>Karz ve <b>riba</b></td><td>Karzı kabul etti, ribayı bütün çeşitleriyle yasakladı.</td></tr>
<tr><td>Rehin: Borç ödenmezse rehin alan malı sahiplenirdi.</td><td>"Rehin kapanmaz" hadisiyle bu uygulamayı yasakladı, rehni kabul etti.</td></tr>
<tr><td><b>Münâbeze</b> (malı atarak), <b>mülâmese</b> (dokunarak), <b>hasât</b> (taş atarak) satışları</td><td>Garar ve belirsizlik içerdiği için yasakladı.</td></tr>
<tr><td><b>Neceş</b>: Almak niyeti olmadan fiyatı kızıştırmak</td><td>Yasakladı.</td></tr>
<tr><td>Borcunu ödeyemeyeni köle olarak satmak</td><td>Yasakladı; köle azadını teşvik etti (Beled 12-13).</td></tr>
</table>

<h3>d) Kısas ve diyet</h3>
<p>Kısas biliniyordu ama yalnız katile değil, kabilesine de uygulanır; intikam aşırıya giderdi. İslam kısası kabul edip <b>yalnız faile</b> sınırladı: <span class="ar">ولكم في القصاص حياة يا أولي الألباب</span> (Bakara 179). Diyet de biliniyordu; İslam onu yeniden düzenledi (Nisâ 92).</p>

<h3>e) Beyyinât (ispat)</h3>
<ul>
<li><b>Kasâme</b> <span class="ar">القسامة</span>: Faili meçhul öldürmede maktulün bulunduğu yerden elli kişinin "öldürmedik, öldüreni de bilmiyoruz" diye yemin etmesi. Hz. Peygamber cahiliyedeki şekliyle bıraktı.</li>
<li>Davacı delil getirir, davalı yemin ederdi. İslam bunu korudu: <span class="ar">البينة على المدعي واليمين على من أنكر</span> (Mecelle md. 76).</li>
</ul>

<div class="box key"><b>Özet: İslam'ın cahiliye hukukuna üç tavrı</b><ol>
<li><b>Olduğu gibi bıraktı (ibka):</b> kasâme, hul', şirket, mudârebe, hacılara su verme (sikâye).</li>
<li><b>Düzelterek kabul etti (ıslah):</b> mehir, talak, îlâ, zıhâr, vasiyet, iddet, kısas, selem.</li>
<li><b>Kaldırdı (ilga):</b> riba, makt ve şiğâr nikâhları, münâbeze-mülâmese-neceş, kadın ve çocuğa mirasın verilmemesi, borç karşılığı köleleştirme.</li>
</ol>Veda Hutbesi: "Kâbe'nin hizmeti ve hacılara su dağıtımı dışında cahiliyeye ait her şey ayağımın altındadır."</div>
`,
quiz:[
{q:'İki velinin, mehir vermeden velayetlerindeki kadınları birbirleriyle evlendirmesine ne denir?',o:['Makt nikâhı','Şiğâr nikâhı','Mut\'a nikâhı','İstibdâ\''],a:1,e:'Şiğârda her kadın diğerinin mehri sayılırdı; Hz. Peygamber yasakladı.'},
{q:'İslam\'ın îlâ ile ilgili düzenlemesi hangisidir?',o:['Tamamen kaldırdı','Talak saydı','Dört ayla sınırlayarak kabul etti','Bir yıla çıkardı'],a:2,e:'Cahiliyede bir-iki yıl veya süresizdi; Bakara 226-227 ile dört aya indirildi.'},
{q:'Aşağıdakilerden hangisini İslam olduğu gibi bırakmıştır?',o:['Kasâme','Riba','Neceş','Makt nikâhı'],a:0,e:'Hz. Peygamber kasâmeyi cahiliyedeki şekliyle bıraktı.'},
{q:'Cahiliyede zıhârın sonucu neydi, İslam ne yaptı?',o:['Geçici ayrılıktı; İslam talak saydı','Ebedî ayrılıktı; İslam talak olmaktan çıkarıp kefaret bağladı','Hükümsüzdü; İslam had koydu','Nikâhı tazelerdi; İslam yasakladı'],a:1,e:'Mücâdele 2-3.'},
{q:'"Rehin kapanmaz" hadisiyle kaldırılan uygulama hangisidir?',o:['Rehnin teslim edilmesi','Borç ödenmeyince rehin alanın malı sahiplenmesi','Rehin verilen malın satılması','Rehnin kefaletle birleşmesi'],a:1,e:'Rehin akdi korundu, yalnız bu cahiliye uygulaması kaldırıldı.'},
{q:'Hangisi İslam\'ın düzelterek (ıslah) kabul ettiği bir kurumdur?',o:['Mudârebe','Vasiyet','Münâbeze','Hilfü\'l-fudûl'],a:1,e:'Vasiyet üçte birle sınırlandı.'},
{q:'Adnânîler için hangisi doğrudur?',o:['Kahtan soyundandırlar, yerleşiktiler','Hz. İsmail soyundandırlar, çoğunlukla göçebeydiler','Yemen halkıdırlar','Bizans\'a bağlıydılar'],a:1,e:'Hicaz halkı Adnânîlerdendir.'}
]});

UNITS.push({
id:'u2', no:2, src:'İdeal Özet s. 3-4', title:'Şeriat, Fıkıh ve Kanun', ar:'الشريعة والفقه والقانون',
lead:'Din, şeriat, fıkıh ve kanun kavramlarını, fıkıh teriminin geçirdiği üç aşamayı, şeriat ile fıkıh arasındaki ilişkiyi ve İslam fıkhının özelliklerini öğreneceğiz.',
html:`
<h2>1. Dört Temel Kavram</h2>
<table class="t">
<tr><th>Din <span class="ar">الدين</span></th><td>Akıl sahiplerini, peygamberin bildirdiği gerçekleri benimsemeye çağıran ilahî kanun. Sözlükte boyun eğme, itaat, ceza anlamlarına gelir.</td></tr>
<tr><th>Şeriat <span class="ar">الشريعة</span></th><td>Sözlükte suya ulaşılan yol, açık ve dosdoğru yol. Terim olarak: Allah'ın kulları için Kur'an veya Hz. Peygamber'in sözü, fiili ve takriri yoluyla koyduğu hükümler. <span class="ar">الأحكام التي شرعها الله لعباده سواء أكان تشريعها بالقرآن أم بسنة النبي ﷺ من قول أو فعل أو تقرير</span></td></tr>
<tr><th>Fıkıh <span class="ar">الفقه</span></th><td>Amelî şer'î hükümleri tafsîlî delillerinden istidlal yoluyla bilmek. <span class="ar">العلم بالأحكام الشرعية العملية من أدلتها التفصيلية بالاستدلال</span><br>Mecelle: "İlm-i fıkıh, mesâil-i şer'iyye-i ameliyyeyi bilmektir."</td></tr>
<tr><th>Kanun</th><td>Bir devlette yetkili kamu organınca çıkarılan, uyulması zorunlu hukuk kuralları. Osmanlı kanunnâmeleri: Arazi Kanunnâmesi (1858), Mecelle-i Ahkâm-ı Adliyye (1869-1876), Hukuk-ı Aile Kararnamesi (1917).</td></tr>
</table>

<h2>2. İslam Şeriatının Özellikleri</h2>
<ol>
<li>Allah'ın lafız ve mana olarak (Kur'an) veya yalnız mana olarak (Sünnet) Peygamber'ine vahyettiği şeriattır. Bu yüzden beşerî zaaflardan ve kanun koyucunun kişisel eğilimlerinden uzaktır; yöneteni ve yönetileni aynı ölçüde bağlar, hukuka uymak bir kulluk olur.</li>
<li>Belli bir grubun değil bütün insanların yararını gözetir.</li>
<li>İnsanın yaratılışına uygundur, zorlayıcı değildir.</li>
<li>Kıyamete kadar geçerlidir; çünkü Kur'an korunmuştur.</li>
<li>İnsanla ilgili her şeyi kapsar.</li>
<li>Maddî ve manevî müeyyideyi birlikte uygular; ceza hem dünyevî hem uhrevîdir. Bu, uygulanabilirliği artırır, anlaşmazlıkları azaltır.</li>
<li>Kur'an'a dayanmak şartıyla içtihat sayesinde her zaman ve her yerde uygulanabilir; evrenseldir: <span class="ar">وما أرسلناك إلا كافة للناس</span> (Sebe 28).</li>
</ol>
<h3>Evrensel olmasının delilleri</h3>
<div class="grid3">
<div class="card-s"><h4>Maslahat</h4><p>Maslahatı celb, mefsedeti def ilkesine dayanır: <span class="ar">وما أرسلناك إلا رحمة للعالمين</span>; <span class="ar">ولكم في القصاص حياة</span>; meşakkatte ruhsat.</p></div>
<div class="card-s"><h4>Hükümlerin tabiatı</h4><p>Hükümler umumi ve kalıcıdır. Bir kısmı tafsîlî (aile, miras, belli suçlar gibi az değişen alanlar), bir kısmı külli kaideler şeklindedir.</p></div>
<div class="card-s"><h4>Mürûnet (esneklik)</h4><p>İcma, içtihat, kıyas, istihsan gibi kaynaklar; adalet, rıza, şûra, zaruret, ruhsat gibi ilkeler.</p></div>
</div>

<h2>3. Fıkıh Kavramının Geçirdiği Üç Aşama</h2>
<p>Sözlükte fıkıh; bir şeyi anlamak, iyi kavramak, özellikle konuşanın maksadını anlamaktır (Nisâ 78; Hûd 91).</p>
<table class="t">
<tr><th>Aşama</th><th>Tanım</th><th>Kapsam ve şeriatla ilişki</th></tr>
<tr><td>1. aşama</td><td><span class="ar">الفقه هو معرفة النفس ما لها وما عليها</span><br>Kişinin lehine ve aleyhine olanı bilmesi (Ebû Hanîfe).</td><td>İtikadî, vicdanî (ahlakî), ibadet, muamelat ve ukûbat; vahye dayansın içtihada dayansın her hüküm bilgisi. İçtihadî hükümleri de içine aldığı için fıkıh şeriattan geniştir.</td></tr>
<tr><td>2. aşama</td><td><span class="ar">العلم بالأحكام الشرعية الثابتة لأفعال المكلفين خاصة</span><br>Mükelleflerin fiillerine ait vücub, hurmet, ibâha, nedb, kerâhet gibi sabit hükümleri bilmek.</td><td>İtikadî ve ahlakî hükümler çıkarıldı; yalnız amelî hükümler kaldı.</td></tr>
<tr><td>3. aşama (muhtar)</td><td><span class="ar">العلم بالأحكام الشرعية العملية من أدلتها التفصيلية بالاستدلال</span></td><td>İçtihat ve nazar şart koşuldu; içtihada dayanmayan, dinden olduğu herkesçe bilinen hükümler ve mukallidin bilgisi dışarıda kaldı.</td></tr>
</table>
<div class="box key"><b>Muhtar tanımdaki kayıtlar</b><ul>
<li><b>Şer'î:</b> Doğrudan veya dolaylı olarak şeriattan alınan hükümler.</li>
<li><b>Amelî:</b> Mükellefin ibadet ve muamele alanındaki fiilleri.</li>
<li><b>Tafsîlî delil:</b> Belli bir meseleye ait özel delil: "Zinaya yaklaşmayın" ayetinden zinanın haramlığı.</li>
<li><b>İstidlal:</b> Mukallidin bilgisi fıkıh değildir, ona fakih denmez.</li>
</ul></div>
<p class="muted">Sonraki dönemde fıkıh kelimesi, içtihatla, taklitle ya da zorunlu olarak bilinsin, mükelleflerin fiillerine dair bütün amelî hükümlerin adı olarak da kullanıldı: <span class="ar">الفقه هو الأحكام الشرعية العملية سواء كانت بالاستدلال أم لا</span></p>
<p>Üç meşhur tanım: <b>Ebû Hanîfe</b> "İnsanın leh ve aleyhine olanları bilmesi"; <b>Şâfiî</b> "Şer'in amelî hükümlerini muayyen delillerinden çıkararak elde edilen bilgi"; <b>Mecelle</b> "Mesâil-i şer'iyye-i ameliyyeyi bilmek."</p>

<h3>Mükelleflerin fiillerine ait hükümler</h3>
<table class="t">
<tr><th colspan="2">Teklîfî hükümler</th></tr>
<tr><td>Vücub</td><td>Şâriin kesin ve bağlayıcı olarak yapılmasını istediği fiil.</td></tr>
<tr><td>Hurmet (haram)</td><td>Yapılmaması kesin ve bağlayıcı olarak istenen fiil.</td></tr>
<tr><td>Nedb (mendup)</td><td>Yapılması bağlayıcı olmayan tarzda istenen fiil.</td></tr>
<tr><td>Kerâhet (mekruh)</td><td>Yapılmaması bağlayıcı olmayan tarzda istenen fiil.</td></tr>
<tr><td>İbâha (mubah)</td><td>Mükellefin yapıp yapmamakta serbest bırakıldığı fiil.</td></tr>
<tr><th colspan="2">Vaz'î hükümler</th></tr>
<tr><td>Sıhhat</td><td>Fiilin şeriatın belirlediği esaslara uygun yapılıp sonuç doğurması; böyle fiile sahih denir.</td></tr>
<tr><td>Butlan</td><td>İbadet veya hukuki işlemin temeldeki bir eksiklik sebebiyle hükümsüz olması.</td></tr>
</table>

<h2>4. Fıkıh ile Şeriat Arasındaki İlişki</h2>
<div class="grid3">
<div class="card-s"><h4>Genellik – özellik</h4><p>Şeriat inanç, ibadet, muamelat, hudud ve ahlakın tamamını kapsar; fıkıh yalnız amelî hükümleri. Şeriat genel, fıkıh özeldir; amelî hükümlerde kesişirler.</p></div>
<div class="card-s"><h4>Kaynaklık</h4><p>Şeriatın kaynağı Kur'an ve sahih sünnettir, herkesi bağlar. Fıkıh bunların yanında icma, kıyas gibi kaynaklara da dayanır; ama bu kaynaklar ancak Kitap ve Sünnet onları meşru saydığı için geçerlidir.</p></div>
<div class="card-s"><h4>İlahîlik – beşerîlik</h4><p>Şeriat naslara dayandığından onda ihtilaf olmaz. Fakih ise nas bulunmayan yerde yanılabilir; zaman ve şartlar istinbata etki eder. Bu beşerîlik Kitap ve Sünnet ile kayıtlıdır; bu yüzden "Ebû Hanîfe'nin fıkhı" denebilir.</p></div>
</div>
<p>Fıkhî hükümler ikiye ayrılır: (1) reye ve içtihada yer olmayan, muhalefeti caiz olmayan kesin hükümler (namazın farziyeti, zinanın haramlığı); (2) reye ve içtihada açık, muhalefeti caiz olan hükümler. İkinci alan daha geniştir.</p>

<h2>5. İslam Fıkhının Özellikleri</h2>
<div class="grid2"><div><ol>
<li>Dinî bir karakter taşır; ilahî kaynaklıdır.</li>
<li>Kulluğun sınırlarını tespit eder.</li>
<li>Saygınlığını iman esaslarından alır.</li>
<li>İbadet kurallarını da belirler.</li>
<li>Ahlakî kaygıları gözetir.</li>
<li>Yaptırımları dünyevî ve uhrevîdir.</li>
</ol></div><div><ol start="7">
<li>Ayrım yapmadan tüm insanların mutluluğunu esas alır.</li>
<li>Fakihlerin içtihatlarıyla gelişir.</li>
<li>İktibas edilmemiş, kendine özgü sistematiği vardır.</li>
<li>Meseleci (kazuistik) yöntemle, örnek olaylar üzerinden işlenmiştir.</li>
<li>Kolaylık ilkesiyle ihtiyaçlara cevap verir.</li>
<li>Adaleti esas alır ve temin eder.</li>
</ol></div></div>
<p>Kaynakları (Kur'an, sünnet, icma), yöntemleri (kıyas, istihsan, maslahat, örf) ve ilkeleri (hayatın dokunulmazlığı, mülkiyet hakkı, şûra, suç ve cezanın şahsîliği, yardımlaşma) sayesinde her dönemin hukuk ihtiyacını karşılayabilir. Örfe dayanan külli kaideler: <span class="ar">العادة محكّمة</span> (md. 36), <span class="ar">المعروف عرفاً كالمشروط شرطاً</span> (md. 43).</p>

<h2>6. Beşerî Hukuk Sistemleriyle Karşılaştırma</h2>
<table class="t"><tr><th>Beşerî hukuk</th><th>İslam fıkhı</th></tr>
<tr><td>Kaynağı toplum veya fert, yani insandır (gelenek, hükümdar, parlamento hukuku).</td><td>Kaynağı vahiydir.</td></tr>
<tr><td>Kara Avrupası sisteminde kamu hukuku – özel hukuk ayrımı.</td><td>İbâdât, muâmelât (eşya, borçlar, ticaret, ahvâl-i şahsiyye, muhakemât, ferâiz), ukûbât, ahkâm-ı sultâniyye, harâc, siyer.</td></tr>
<tr><td>Yalnız dünyevî müeyyide; ibadeti düzenlemez.</td><td>Fiiller helal-haram olarak da nitelenir; müeyyide dünyevî ve uhrevîdir.</td></tr>
<tr><td>Ahlakı dolaylı gözetir.</td><td>Ahlak asli unsurdur.</td></tr></table>
<p>Fıkhın kapsamı şeriattan dar, beşerî hukuktan geniştir; hem din hem dünya nizamıdır.</p>

<h2>7. Roma Hukuku İddiası ve Cevabı</h2>
<p>Bizans topraklarının fethinden sonra bazı müsteşrikler İslam hukukunun Roma hukukundan etkilendiğini ileri sürdü.</p>
<table class="t">
<tr><th>İddia</th><th>Cevap</th></tr>
<tr><td>1. Hz. Peygamber Roma hukukunu iyi biliyordu.</td><td>Yetiştiği çevrede Roma hukukunun izi yoktu; Mekke dışına yalnız iki kez çıktı, Romalılarla teması olmadı; ümmîydi.</td></tr>
<tr><td>2. Beyrut, İstanbul, İskenderiye'deki Roma hukuk okulları ve mahkemeleri fetihten sonra da sürdü, fakihler oradan aldı.</td><td>İslam hukuk ekolleri Bizans'a ait olmayan Hicaz ve Irak'ta doğdu. Beyrut okulu 551 depreminde yıkılmış, 560'ta yanmıştı. Beyrut'a yerleşen tek fakih Evzâî idi ve mezhebinde Roma etkisine dair delil yoktur; Şâfiî Mısır'a gittiğinde görüşleri olgunlaşmıştı.</td></tr>
<tr><td>3. Fakihler fethedilen yerlerde Roma hukukunu öğrendi.</td><td>Fakihler hukukun ilahî kökenine inandıkları için Müslüman olmayan kaynaktan almadılar. Alsalardı Roma'nın en büyük başarısı olan genel "sözleşmeler ve borçlar teorisi"ni de alırlardı.</td></tr>
<tr><td>4. Roma hukuku cahiliye hukuku ve Talmud yoluyla dolaylı etkiledi.</td><td>Arapların Romalılarla ilişkisi azdı. Talmud'dan alınsaydı İslam'a aykırı fikirleri de geçerdi.</td></tr>
</table>
<div class="box note">Benzerlik etkilenme demek değildir; akla dayanan bazı evrensel kaideler farklı hukuklarda bulunabilir. Temel farklar da vardır: Roma'da evlat edinme var, İslam'da yok; havale, <b>şuf'a</b> ve <b>vakıf</b> İslam'da var, Roma'da yok; Roma'da mehir (çeyiz) erkeğe verilir, İslam'da kadına.</div>
`,
quiz:[
{q:'Fıkhın muhtar tanımına göre hangisi fıkıh sayılmaz?',o:['Müctehidin hükmü delilinden bilmesi','Mukallidin bir hükmü müftüden öğrenmesi','Kıyasla yeni bir meselenin hükmünü çıkarmak','Ayetten zinanın haramlığını istinbat etmek'],a:1,e:'"İstidlal yoluyla" kaydı mukallidin bilgisini dışarıda bırakır.'},
{q:'Fıkıh kavramının birinci aşamasında fıkıh ile şeriat arasındaki ilişki nedir?',o:['Şeriat daha geniştir','Fıkıh daha geniştir; içtihadî hükümleri de kapsar','Aynıdır','Hiç kesişmezler'],a:1,e:'İlk aşamada her türlü hüküm bilgisi fıkıhtır; içtihadî hükümler şeriata dahil değilken fıkha dahildir.'},
{q:'Aşağıdakilerden hangisi vaz\'î hükümdür?',o:['Nedb','Kerâhet','Butlan','İbâha'],a:2,e:'Sıhhat ve butlan vaz\'î, diğerleri teklîfî hükümdür.'},
{q:'"Fıkıh şeriata dayanır ama icma ve kıyas gibi kaynaklar ancak Kitap ve Sünnet onları meşru saydığı için geçerlidir" ifadesi hangi ilişkiyi anlatır?',o:['Genellik-özellik','Kaynaklık','İlahîlik-beşerîlik','Mürûnet'],a:1,e:'Faruk Yıldız notlarındaki üçlü ayrım: genellik-özellik, kaynaklık, ilahîlik-beşerîlik.'},
{q:'Roma hukuku iddiasına verilen cevaplardan biri hangisidir?',o:['Beyrut hukuk okulu fetih sırasında en parlak dönemindeydi','Fakihler Roma\'dan alsalardı genel sözleşmeler ve borçlar teorisini de alırlardı','İslam\'da evlat edinme Roma\'dan alınmıştır','Şuf\'a Roma hukukundan alınmıştır'],a:1,e:'Ayrıca şuf\'a ve vakfın Roma\'da karşılığı yoktur; Beyrut okulu fetihten önce yıkılmıştı.'},
{q:'Hangisi İslam şeriatının evrenselliğinin delillerinden biri değildir?',o:['Maslahatı celb, mefsedeti def','Hükümlerin umumi ve kalıcı olması','Mürûnet','Kanunların parlamento tarafından değiştirilebilmesi'],a:3,e:'Beşerî hukukun özelliğidir.'},
{q:'Mecelle\'ye göre fıkıh nedir?',o:['Kişinin lehine ve aleyhine olanı bilmesi','Mesâil-i şer\'iyye-i ameliyyeyi bilmek','Mükelleflerin bütün fiillerini bilmek','Usul kaidelerini bilmek'],a:1,e:'Ebû Hanîfe ve Şâfiî tanımlarıyla birlikte üç meşhur tanımdan biri.'}
]});

UNITS.push({
id:'u3', no:3, src:'İdeal Özet s. 5', title:'Şer\'î Deliller ve Önceki Şeriatler', ar:'الأدلة الشرعية والشرائع السابقة',
lead:'Şer\'î hükümlerin delillerini (Kitap, Sünnet, İcma, Kıyas ve diğerleri) ve İslam şeriatının önceki semavi şeriatlerle ilişkisini öğreneceğiz.',
html:`
<h2>1. Delillerin Tasnifi</h2>
<table class="t">
<tr><th>Aslî kaynaklar</th><th>Tâbi (tebeî) kaynaklar</th><th>Diğer deliller</th></tr>
<tr><td>1. Kitap (Kur'an-ı Kerim)<br>2. Sünnet (kavlî, fiilî, takrîrî)</td><td>1. Kıyas<br>2. Mesalih-i mürsele<br>3. Örf<br>4. İcma</td><td>1. İstihsan<br>2. Sedd-i zerâi<br>3. Sahabe kavli<br>4. Şer'u men kablenâ<br>5. İstishâb</td></tr>
</table>
<p>Usul kitaplarında deliller bir de üzerinde ittifak edilip edilmemesine göre ayrılır:</p>
<div class="grid2">
<div class="card-s"><h4>Müttefekun aleyh <span class="ar">المتفق عليها</span></h4><p>Kitap, Sünnet, İcma, Kıyas.</p></div>
<div class="card-s"><h4>Muhtelefün fîh <span class="ar">المختلف فيها</span></h4><p>Mesalih-i mürsele, istihsan, örf, sedd-i zerâi, şer'u men kablenâ, sahabe kavli, istishâb.</p></div>
</div>

<h2>2. Kitap (Kur'an)</h2>
<div class="box key">Allah tarafından Cebrâil vasıtasıyla Hz. Muhammed'e indirilen, mushaflarda yazılan, tevâtürle nakledilen, okunmasıyla ibadet edilen, Fâtiha ile başlayıp Nâs ile biten, benzerini getirmekten insanların âciz kaldığı Arapça mûciz kelâm.</div>
<div class="grid3">
<div class="card-s"><h4>Özellikleri</h4><ul><li>Arapça indirilmiştir.</li><li>Lafız ve mana Allah'a aittir.</li><li>Tevâtürle nakledilmiştir.</li></ul></div>
<div class="card-s"><h4>Hücciyeti</h4><p>Allah'ın kelâmı olmasıdır; bunun delili insanların benzerini getirmekten âciz kalmasıdır (i'câz). Kur'an'da hüküm varken başka delile başvurulmaz.</p></div>
<div class="card-s"><h4>İçerdiği hükümler</h4><ul><li>İtikadî</li><li>Ahlakî</li><li>Amelî</li></ul></div>
</div>
<p><b>Sübûtu kat'îdir:</b> Kur'an'ın aslına uygun olarak bize ulaştığı kesindir. <b>Delâleti</b> ise iki türlüdür: lafız tek manaya gelirse <b>kat'î</b> (<span class="ar">فاجلدوا كل واحد منهما مائة جلدة</span> – sayı kesin), birden fazla manaya ihtimalliyse <b>zannî</b> (<span class="ar">والمطلقات يتربصن بأنفسهن ثلاثة قروء</span> – "kurû'" hayız mı temizlik mi).</p>

<h2>3. Sünnet</h2>
<p>Hz. Peygamber'den nakledilen söz, fiil ve takrirler.</p>
<table class="t">
<tr><th>Yapısı bakımından</th><th>Tanım</th></tr>
<tr><td>Kavlî</td><td>Çeşitli münasebetlerle söylediği sözler.</td></tr>
<tr><td>Fiilî</td><td>Yaptığı fiiller.</td></tr>
<tr><td>Takrîrî</td><td>Bir söz veya davranıştan haberdar olup onaylaması veya karşı çıkmaması.</td></tr>
</table>
<table class="t">
<tr><th>Rivayet bakımından (Hanefî)</th><th>Tanım</th><th>Hükmü</th></tr>
<tr><td>Mütevâtir</td><td>Her tabakada yalan üzerinde birleşmeleri âdeten imkânsız sayıda kişinin rivayet ettiği haber. Lafzî (aynı lafızla) ve manevî (aynı anlamda farklı lafızla) olur.</td><td>Kesin bilgi ifade eder; amel farz, inkârı küfürdür.</td></tr>
<tr><td>Meşhur</td><td>Sahabe tabakasında bir veya birkaç kişinin rivayet edip tâbiûn ve tebeu't-tâbiîn döneminde yaygınlaşan haber.</td><td>Kesine yakın bilgi ifade eder.</td></tr>
<tr><td>Âhâd</td><td>Tevatür sayısına ulaşmayan sayıda ravinin naklettiği haber.</td><td>Zan ifade eder.</td></tr>
</table>
<h3>Sünnetin Kur'an'a göre konumu</h3>
<ol>
<li><b>Teyit edici:</b> Kur'an'daki hükmü aynen tekrar eder; bir hükme iki delil olur (Nisâ 29 ile "Müslümanın malı ancak gönül hoşluğuyla helal olur" hadisi).</li>
<li><b>Açıklayıcı:</b> (a) <b>Mücmeli tefsir</b>: "Namazı kılın, zekâtı verin" ayetindeki namazın kılınışı, zekâtın miktarı. (b) <b>Âmmı tahsis</b>: "Bunların dışındakiler size helal kılındı" (Nisâ 24) ayeti, kadının halası veya teyzesiyle birlikte nikâhlanamayacağı hadisiyle tahsis edildi. (c) <b>Mutlakı takyid</b>: Hırsızın elinin sağ el ve bilekten kesilmesi.</li>
<li><b>Nesh edici:</b> Akrabaya vasiyeti emreden ayet (Bakara 180), "Varise vasiyet yoktur" hadisiyle neshedildi.</li>
<li><b>Hüküm koyucu:</b> Kur'an'da hükmü bulunmayan meselelerde: zânînin recmi, nikâhta şahit şartı, şuf'a hakkı.</li>
</ol>

<h2>4. İcma <span class="ar">الإجماع</span></h2>
<div class="box key">Hz. Peygamber'in vefatından sonra herhangi bir dönemde ümmetin müctehitlerinin dinî bir hüküm üzerinde ittifak etmesi.</div>
<p><b>Şartları:</b> (1) İttifak edenler müctehit olmalı; (2) bütün müctehitler birleşmeli; (3) müctehitler Hz. Muhammed'in ümmetinden olmalı; (4) Hz. Peygamber'in vefatından sonra gerçekleşmeli; (5) mesele dinî bir mesele olmalı.</p>
<div class="grid2">
<div class="card-s"><h4>Sarih icma</h4><p>Bütün müctehitlerin görüşlerini tek tek açıklamasıyla oluşur. Cumhura göre kesin bilgi ifade eder, uymak vacip, aykırı davranmak haramdır.</p></div>
<div class="card-s"><h4>Sükûtî icma</h4><p>Bir veya birkaç müctehidin görüşünü öğrenen diğerlerinin açıkça katılmayıp susması. Şartlar: sükûtun muvafakat veya muhalefet belirtisinden uzak olması, görüş bildirmeye yetecek sürenin geçmesi, meselenin içtihada açık olması. Şâfiî ve Mâlikîler sükûtî icmayı kabul etmez.</p></div>
</div>
<p class="muted">Nazzâm, Hâricîler ve Şîa'nın bir kısmı icmayı kaynak kabul etmez.</p>

<h2>5. Kıyas <span class="ar">القياس</span></h2>
<div class="box key">Hakkında açık hüküm bulunmayan bir meselenin hükmünü, aralarındaki ortak illete dayanarak hükmü açıkça belirtilen meseleye göre belirlemek.</div>
<table class="t"><tr><th>Rükünler</th><th></th></tr>
<tr><td>Asıl</td><td>Hükmü nas veya icma ile belirlenmiş mesele (şarap).</td></tr>
<tr><td>Fer'</td><td>Hükmü belirlenmemiş mesele (diğer sarhoş edici içkiler).</td></tr>
<tr><td>Aslın hükmü</td><td>Asılda sabit olup fer'e uygulanmak istenen hüküm (haramlık).</td></tr>
<tr><td>İllet</td><td>Hükmün konulmasına sebep olan özellik (sarhoş edicilik).</td></tr></table>
<div class="grid2"><div class="card-s"><h4>Aslın hükmüyle ilgili şartlar</h4><ol><li>Kur'an ve Sünnet ile sabit olmalı.</li><li>Akılla idrak edilebilecek bir illeti olmalı.</li><li>Kâsır (asla özgü) olmamalı.</li></ol></div><div class="card-s"><h4>Fer' ile ilgili şartlar</h4><ol><li>İllet bakımından asla eşit olmalı.</li><li>Nas veya icmada kıyasla bulunacak hükme aykırı bir hüküm olmamalı.</li></ol></div></div>
<p><b>Hücciyeti:</b> Nazzâm, Zâhirîler ve bazı Şiî âlimler dışında cumhur kıyası delil kabul eder. Kitaptan: <span class="ar">فاعتبروا يا أولي الأبصار</span> (Haşr 2); Sünnetten: Hz. Peygamber'in haccı maddi bir borca kıyaslaması ve Muâz hadisi.</p>

<h2>6. Diğer Deliller</h2>
<table class="t">
<tr><th>Delil</th><th>Kısa tanım</th></tr>
<tr><td>İstihsan <span class="ar">الاستحسان</span></td><td>Daha kuvvetli bir delil sebebiyle bir meselede kıyasın gerektirdiği hükümden başka bir hükme geçmek. Şâfiî reddeder.</td></tr>
<tr><td>Mesalih-i mürsele <span class="ar">المصالح المرسلة</span></td><td>Lehinde veya aleyhinde özel nas bulunmayan, şeriatın maksatlarına uygun kamu yararı (Kur'an'ın cem'i). Mâlikîler en çok kullanır.</td></tr>
<tr><td>Örf <span class="ar">العرف</span></td><td>Toplumda yerleşmiş, şeriata aykırı olmayan âdet. <span class="ar">العادة محكّمة</span></td></tr>
<tr><td>Sedd-i zerâi <span class="ar">سد الذرائع</span></td><td>Harama götüren meşru yolları kapatmak.</td></tr>
<tr><td>Sahabe kavli <span class="ar">قول الصحابي</span></td><td>Sahabinin içtihada dayalı görüşü.</td></tr>
<tr><td>Şer'u men kablenâ <span class="ar">شرع من قبلنا</span></td><td>Önceki şeriatlerden Kur'an ve Sünnet'te reddedilmeden aktarılan hükümler.</td></tr>
<tr><td>İstishâb <span class="ar">الاستصحاب</span></td><td>Aksi sabit olana kadar önceki durumun devam ettiğine hükmetmek.</td></tr>
</table>

<h2>7. İslam Şeriatı ve Önceki Şeriatler</h2>
<p>Bütün ilahî dinler Allah'a iman, yalnız O'na ibadet, ahirete hazırlık gibi temel esaslarda aynıdır: <span class="ar">شرع لكم من الدين ما وصى به نوحاً والذي أوحينا إليك</span> (Şûrâ 13). Fertlerin Rableriyle ve birbirleriyle ilişkilerini düzenleyen tafsilî hükümlerde ise farklıdırlar.</p>
<div class="grid3">
<div class="card-s"><h4>Kaynak birliği <span class="ar">وحدة المصدر</span></h4><p>Bütün ilahî dinlerin kaynağı tektir: Allah. Peygamberlerin görevi tebliğdir. <span class="ar">قولوا آمنا بالله وما أنزل إلينا وما أنزل إلى إبراهيم...</span> (Bakara 136)</p></div>
<div class="card-s"><h4>Usul ve kaide birliği <span class="ar">وحدة الأصول والقواعد</span></h4><p>Bütün ilahî şeriatler, insanın iki dünyada mutluluğunu sağlayan aynı genel maksatları esas alır.</p></div>
<div class="card-s"><h4>Nesh <span class="ar">ناسخة لما قبلها</span></h4><p>İslam şeriatı son şeriat olarak öncekileri neshetmiştir: <span class="ar">وأنزلنا إليك الكتاب بالحق مصدقاً لما بين يديه من الكتاب ومهيمناً عليه</span> (Mâide 48)</p></div>
</div>
<div class="grid2">
<div class="card-s"><h4>Önceki şeriatlerden alınmamıştır <span class="ar">ليست مأخوذة من الشرائع السابقة</span></h4><p>Hükümlerin tamamı ilahî vahye dayanır: <span class="ar">قل إنما أتبع ما يوحى إلي من ربي</span> (A'râf 203).</p></div>
<div class="card-s"><h4>Önceki şeriatler bizim için kanun değildir</h4><p><span class="ar">إن أحكام الشرائع السابقة لا تعتبر تشريعاً لنا ولا جزءاً من الشريعة الإسلامية</span>. Kur'an ve Sünnet'in ikrar veya inkâr etmeden işaret ettiği hükümler, cumhura göre bizim için teşri sayılmaz: <span class="ar">لكل جعلنا منكم شرعة ومنهاجاً</span> (Mâide 48).</p></div>
</div>
<p class="muted">Kendisiyle çelişen konularda İslam şeriatı öncekileri nesheder; çelişmeyenlerde devamlılık esastır. Bu, yalnız Kur'an ve Sünnet'te nakledilen önceki hükümler için geçerlidir; çünkü mevcut diğer kitaplar orijinal metin değildir.</p>
`,
quiz:[
{q:'İdeal Özet\'e göre aslî kaynaklar hangileridir?',o:['Kitap ve Sünnet','Kitap, Sünnet, İcma','Kitap, Sünnet, İcma, Kıyas','Kitap ve İcma'],a:0,e:'İcma ve kıyas tâbi kaynaklar arasında sayılmıştır.'},
{q:'"Boşanmış kadınlar üç kurû\' beklerler" ayetinin delâleti nasıldır?',o:['Kat\'î','Zannî','Mütevâtir','Meşhur'],a:1,e:'"Kurû\'" hem hayız hem temizlik anlamına gelebilir.'},
{q:'Hanefîlere göre meşhur sünnetin hükmü nedir?',o:['Kesin bilgi, inkârı küfür','Kesine yakın bilgi','Zan','Hükmü yok'],a:1,e:'Mütevâtir kesin bilgi, meşhur kesine yakın bilgi, âhâd zan ifade eder.'},
{q:'"Varise vasiyet yoktur" hadisi sünnetin Kur\'an\'a göre hangi konumuna örnektir?',o:['Teyit','Tahsis','Nesh','Mücmelin tefsiri'],a:2,e:'Bakara 180\'deki akrabaya vasiyet emrini neshetmiştir.'},
{q:'Sükûtî icmayı kabul etmeyen mezhepler hangileridir?',o:['Hanefî ve Hanbelî','Şâfiî ve Mâlikî','Hanefî ve Mâlikî','Hanbelî ve Zâhirî'],a:1,e:'Faruk Yıldız usul notları.'},
{q:'Kıyasın rükünleri hangi şıkta doğru verilmiştir?',o:['Asıl, fer\', aslın hükmü, illet','Nas, icma, illet, sebep','Asıl, fer\', şart, mâni','Lafız, mana, illet, hüküm'],a:0,e:'Şarap (asıl), diğer içkiler (fer\'), haramlık (hüküm), sarhoş edicilik (illet).'},
{q:'Cumhura göre önceki şeriatlerden Kur\'an\'da ikrar veya inkâr edilmeden aktarılan hükümlerin durumu nedir?',o:['Bizim için bağlayıcıdır','Bizim için teşri sayılmaz','İcma ile bağlayıcı olur','Mekruhtur'],a:1,e:'İdeal Özet: "Geçmiş şeriatler bizim için bir kanun değildir."'}
]});

UNITS.push({
id:'u4', no:4, src:'İdeal Özet s. 6-8', title:'Fıkhın Evreleri', ar:'أدوار الفقه الإسلامي',
lead:'Hz. Peygamber döneminden günümüze fıkhın geçirdiği altı evreyi; her evrenin kaynaklarını, içtihat anlayışını, tedvin durumunu ve öne çıkan eserlerini öğreneceğiz.',
html:`
<div class="timeline">
<div><b>1</b><span>Peygamber Asrı<br><small>610-632 / h.11</small></span></div>
<div><b>2</b><span>Râşid Halifeler<br><small>h.11-40</small></span></div>
<div><b>3</b><span>Tâbiîn Asrı<br><small>h.41-132</small></span></div>
<div><b>4</b><span>Tedvin Asrı<br><small>h.132-350</small></span></div>
<div><b>5</b><span>Duraklama<br><small>h.350-656</small></span></div>
<div><b>6</b><span>Metin-Şerh-Haşiye<br><small>h.656-…</small></span></div>
</div>
<p class="muted">İdeal Özet'te 4. evre "h.120-350", 5. evre "h.350-606" olarak yazılmıştır. Abbasîlerin kuruluşu 132, Bağdat'ın Moğollarca düşüşü 656/1258'dir.</p>

<h2>1. Evre: Peygamber Asrı (fıkhın doğuşu)</h2>
<p>Bu devirde fıkıh yalnız <b>vahiy</b>dir; fıkhın esasları ve kaynakları bu dönemde oluştu. Mekke'de vahiy ağırlıkla akide ve ahlakı (külli ve icmali hükümler: adam öldürme, kız çocuklarını gömme, yetim malı yeme yasağı, iffet, emanet, ahde vefa, suçun şahsîliği), Medine'de amelî hükümleri (zekât, fitre oranları, cezalar gibi nesnel düzenlemeler) içerir.</p>
<p class="muted">Ahkâm ayetlerinin sayısı: Gazzâlî ve Râzî'ye göre 500, İbnü'l-Arabî'ye göre 800, İbnü'l-Kayyim'e göre 150. İbnü'l-Kayyim'e göre fıkıhla ilgili hadis 500, bunları açıklayanlar 4.000 civarındadır.</p>
<div class="grid2">
<div class="card-s"><h4>Teşri yolları</h4><ol><li>Hüküm gerektiren bir olayın meydana gelmesi veya Peygamber'e bir şeyin hükmünün sorulması üzerine.</li><li>Belli bir olay olmadan ve soru üzerine olmaksızın, başlangıç olarak.</li></ol></div>
<div class="card-s"><h4>Teşri özellikleri</h4><ul><li><b>Tedricîlik:</b> Zamanda ve hükümlerde; önce külli sonra tafsilî (içki: Nahl 67 → Bakara 219 → Nisâ 43 → Mâide 90-91).</li><li><b>Zorluğun kaldırılması (ref'u'l-harac):</b> Hastalık, sefer, ikrahta hafifletme; mükellefiyetlerin azlığı. <span class="ar">يريد الله بكم اليسر ولا يريد بكم العسر</span></li><li><b>Nesh:</b> Yalnız bu dönemde. Örnekler: ölüm iddeti, anne-baba ve akrabaya vasiyet, kabir ziyareti, kurban etini saklama, kıblenin değişimi.</li></ul></div>
</div>
<h3>Bu asırda içtihat</h3>
<div class="grid2"><div class="card-s"><h4>Peygamber'in içtihatları</h4><ul><li>Bedir esirlerinden fidye alınması</li><li>Tebük'e katılmayanlara izin vermesi</li><li>"Ümmetime meşakkat olmasaydı her namazda misvakı emrederdim."</li></ul></div><div class="card-s"><h4>Sahabenin içtihatları</h4><ul><li>Muâz hadisi (Kitap → Sünnet → re'y)</li><li>Teyemmüm yapan iki sahabiden birinin suyu bulunca namazı iade etmesi</li><li>Benî Kurayza'ya giderken ikindi namazı meselesi</li></ul></div></div>
<div class="box note">Bu devirdeki içtihat vahiyden ayrı, müstakil bir kaynak değildi; hatalı içtihat vahiyle düzeltilir, sahabe içtihadı Peygamber'in onayına bağlıydı. <b>Bu devirde ihtilaf yoktur.</b></div>
<p><b>Tedvin:</b> Kur'an'dan inen ayetleri yazan kâtipler vardı (Zeyd b. Sâbit, Ali, Osman); sünneti yazan resmî kâtip yoktu, bazı sahabiler bireysel yazdı; zekât oranları bizzat Peygamber'in emriyle yazıldı.</p>

<h2>2. Evre: Râşid Halifeler (fıkhın gelişmesi)</h2>
<ul><li>Fıkıh gelişti ve genişledi; İslami fetihler ve gayrimüslimlerle ilişkiler yeni meseleler doğurdu.</li><li>İhtilaf vardı; ancak içtihat edilip ittifak edildiğinde buna <b>icma</b> denildi.</li><li>Re'y "sahih" (kıyas ve diğer istidlal yollarını içeren) ve "fâsid" (hevaya dayalı) olarak anlaşıldı. Hz. Ömer'in Ebû Mûsâ'ya mektubu meşhurdur.</li></ul>
<h3>Hükümleri inceleme yolu</h3>
<p>Yeni bir olayda önce Kitap'a, bulamazlarsa Sünnet'e, sonra re'ylerine başvurdular. Ebû Bekir ve Ömer zamanında içtihat <b>şûra</b> ile toplu yapılırdı. Ebû Bekir Kitap ve Sünnet'te bulamazsa "Bu konuda Nebî'den bir şey duyan var mı?" diye sorar, sonra ileri gelenlerle istişare ederdi. İçtihat ettiklerinde görüşün kendilerinden olduğunu açıkça belirtirlerdi ("Doğruysa Allah'tandır, yanlışsa benden").</p>
<h3>Hükümlerin illetlerine ve maslahatı gözetmeye yönelim</h3>
<p>Bazı hükümler illetlerinin ortadan kalkması veya uygulama şartlarının bulunmaması sebebiyle durduruldu (nesh değil):</p>
<table class="t">
<tr><td><b>Müellefe-i kulûbun zekât payı</b></td><td>İslam güçlenince illet kalmadığı için Hz. Ömer vermedi.</td></tr>
<tr><td><b>Hırsızlık haddi</b></td><td>Kıtlık yılında Hz. Ömer uygulamadı (zaruret, şüphe).</td></tr>
<tr><td><b>Başıboş develer</b></td><td>Hadiste dokunulmaması emredilmişti; Hz. Osman toplatıp sattırdı, bedelini sahibi gelene kadar sakladı; Hz. Ali beytülmalden beslenen barınaklar yaptı.</td></tr>
<tr><td><b>Üç talak</b></td><td>Bir sözle verilen üç talak bir sayılırken Hz. Ömer, bu yolla boşamalar artınca üç saydı.</td></tr>
</table>
<p class="muted">Ölüm hastasının boşadığı kadına miras verilmesi ve iddette nikâhlanan kadının o erkeğe ebedî haram kılınması da bu dönemin maslahata dayalı içtihatlarındandır.</p>
<h3>Fukahanın ihtilaf sebepleri</h3>
<ol><li>Bazılarının sünneti bilmesi, bazılarının bilmemesi.</li><li>Sünnete güven derecesi ve anlayış-kavrayış farkı.</li><li>Hakkında nas olmayan meselelerde içtihat.</li></ol>
<p><b>Çok fetva verenler (muksirûn):</b> Hz. Ömer, Hz. Ali, İbn Mes'ûd, Hz. Âişe, İbn Abbas, Abdullah b. Ömer, Zeyd b. Sâbit. <b>Tedvin:</b> Kur'an Ebû Bekir döneminde tek nüshada toplandı, Osman döneminde çoğaltıldı; sünnet henüz tedvin edilmedi.</p>

<h2>3. Evre: Tâbiîn Asrı (h.41-132)</h2>
<p>Fıkıh bir önceki dönem gibiydi; tâbiîn fıkhı sahabeden almıştı. Bu devir üç başlıkta incelenir:</p>
<h3>a) Fıkıh alanının genişlemesi ve ihtilafın çoğalması</h3>
<p>Olayların artması, beldelerin örf ve geleneklerinin farklılığı fıkhın alanını genişletti. İhtilafın sebepleri: (1) fakihlerin farklı coğrafyalara gidip oraları vatan edinmesi, (2) içtihadın şûra ile yapılmasının imkânsızlaşması, (3) gidilen yerlerin farklı örfleri, (4) her belde halkının fıkhını farklı bir fakihten alması.</p>
<table class="t"><tr><th>Medine</th><td>Abdullah b. Ömer, Abdullah b. Abbas, Atâ b. Ebî Rebâh, Tâvûs b. Keysân</td></tr>
<tr><th>Kûfe</th><td>Abdullah b. Mes'ûd, Alkame en-Nehaî, Esved b. Yezîd, İbrâhim en-Nehaî</td></tr>
<tr><th>Basra</th><td>Ebû Mûsâ el-Eş'arî, Enes b. Mâlik, Muhammed b. Sîrîn, Hasan-ı Basrî</td></tr>
<tr><th>Şam</th><td>Muâz b. Cebel, Ubâde b. Sâmit, Ömer b. Abdülaziz</td></tr>
<tr><th>Mısır</th><td>Abdullah b. Amr b. Âs</td></tr></table>
<p><b>Medine'nin yedi fakihi:</b> Saîd b. el-Müseyyeb, Urve b. Zübeyr, Kâsım b. Muhammed, Ebû Bekir b. Abdurrahman, Ubeydullah b. Abdullah, Süleyman b. Yesâr, Hârice b. Zeyd.</p>
<h3>b) Hadis rivayetinin yaygınlaşması ve fıkha etkisi</h3>
<p>Fakihlerin farklı beldelere gitmesi ve yeni olaylar hadis rivayetini yaygınlaştırdı. Etkileri: (1) ahkâm genişledi, sünnetten istinbat çoğaldı; (2) bundan yararlanılıp yalan isnatlarla hadis uyduruldu; (3) bu, fıkhın seyrini yavaşlattı; (4) uydurucular amacına ulaşamadı, âlimler sahihi ayıkladı.</p>
<h3>c) Ehl-i hadis ve ehl-i re'y okulları</h3>
<div class="grid2"><div class="card-s"><h4>Ehl-i hadis (Medine)</h4><p>Ayet, hadis ve çeşitli eserler karşısında tevakkuf eder, re'ye az başvurur. Farazi meselelere fetva vermez. Öncüsü Saîd b. el-Müseyyeb.</p></div><div class="card-s"><h4>Ehl-i re'y (Irak/Kûfe)</h4><p>Ayet ve hadis olmadığında re'ye başvurmaktan çekinmez; meseleleri illetleriyle çözer, farazi meselelerde fetva verir. Öncüsü İbrâhim en-Nehaî.</p></div></div>
<p><b>İki ana ihtilaf sebebi:</b> (1) nas varken re'yi almak, (2) re'y bağlamında farazi meseleye fetva. Ayrışmanın arka planında hocalar (Medine'de İbn Ömer, Kûfe'de İbn Mes'ûd), rivayetin çokluğu-azlığı ve sosyal hayatın sadeliği-karmaşıklığı vardır. Sünneti resmî olarak tedvin teşebbüsü Ömer b. Abdülaziz'e (ö.101) aittir.</p>

<h2>4. Evre: Tedvin Asrı (h.132-350)</h2>
<p>"Altın fıkıh asrı", "fıkhın gelişim asrı", "tedvin asrı", "müctehitler asrı" da denir. Fıkıh büyük gelişme gösterdi; dâhi fakihler yetişti, mezhepler teşekkül etti, hadis uleması ortaya çıktı, fıkıh tedvin edildi, kaideler konuldu.</p>
<div class="grid2">
<div class="card-s"><h4>Gelişme sebepleri</h4><ol><li>Abbasî halifelerinin fıkha ve fakihlere önem vermesi (Hârûn Reşid Ebû Yûsuf'u kadılkudat yaptı, <i>Kitâbü'l-Harâc</i>'ı yazdırdı; Mansûr, Mehdî ve Hârûn Muvatta'ı hukuk kodu yapmak istedi, Malik kabul etmedi).</li><li>İslam beldelerinin İspanya'dan Çin'e genişlemesi.</li><li>Geniş melekeli büyük müctehitlerin yetişip medreseler kurması.</li><li>Sünnetin tedvini; sahih ve zayıfın ayrılması.</li></ol></div>
<div class="card-s"><h4>Tedvin</h4><ul><li>Sünnet tam anlamıyla tedvin edildi (Abbasîler döneminde); Kütüb-i Sitte yazıldı; cerh ve ta'dil kullanıldı.</li><li>Mezhepler teşekkül edince fıkıh kitapları yazıldı.</li><li>Usul kitapları tedvin edildi (er-Risâle).</li><li>Mukayeseli fıkıh çalışmaları başladı.</li></ul></div>
</div>
<p>Hicazlılar-Iraklılar ayrımı metodolojik bir ayrıma (ehl-i hadis – ehl-i re'y) dönüştü. Hayrettin Karaman'ın tasnifi: <b>müfrit eserciler</b> (Dâvûd ez-Zâhirî), <b>mutedil eserciler</b> (Leys b. Sa'd, Ahmed b. Hanbel), <b>müfrit re'yciler</b> (bazı Mutezile ve Hâricî grupları; temsilcileri kalmadı), <b>mutedil re'yciler</b> (Ebû Hanîfe, İbn Ebî Leylâ, Rabîatü'r-re'y, Evzâî, Sevrî, Malik).</p>

<h2>5. Evre: Duraklama Devri (h.350-656)</h2>
<p>Fıkıhta aslolan, müstakil bir müctehit olup hiçbir mezhebi taklit etmemekti. Bu dönemde fakihlerin himmeti zayıfladı; önceki müctehitlerin birikimi karşısında acziyet hissettiler, sünnetin tedvinine kolayca ulaşmaları içtihattan geri durmalarına sebep oldu. Ayrıca:</p>
<ol><li>Siyasi sultanın zayıflaması,</li><li>İslami mezheplerin tam manasıyla teşekkülü,</li><li>Özgüven eksikliği ve içtihattan çekinme.</li></ol>
<div class="box note">Ehil olmayanların içtihatlarının çoğalması ve dinin ifsat olunması tehlikesi sebebiyle "içtihat kapısının kapandığı" düşüncesi ortaya çıktı; fetvalar buna göre verildi (sedd-i zerâi). Kerhî (ö.340): "Arkadaşlarımızın görüşüne aykırı her ayet ya mensuhtur ya tevil edilmelidir."</div>
<p><b>Buna rağmen bu devrin âlimleri şu faydalı işleri yaptı:</b> (1) imamlarından gelen hükümleri illetlendirme (ta'lîl); (2) mezhebin fürû meselelerinden kaide çıkarma (tahrîc); (3) imamlardan gelen görüşlerden birini tercih etme; (4) mezhebi büyütme ve genişletme. Mukayeseli fıkıh da sürdü: Cessâs, Kudûrî'nin <i>et-Tecrîd</i>'i, İbn Rüşd'ün <i>Bidâyetü'l-müctehid</i>'i.</p>
<table class="t"><tr><th>Bu devirde yazılan bazı eserler</th><th>Müellif (vefat)</th></tr>
<tr><td>el-Kitâb (Muhtasar)</td><td>Kudûrî (428)</td></tr>
<tr><td>el-Mebsût</td><td>Serahsî (483)</td></tr>
<tr><td>Tuhfetü'l-fukahâ</td><td>Semerkandî (539)</td></tr>
<tr><td>Bedâiu's-sanâi'</td><td>Kâsânî (587)</td></tr>
<tr><td>Fetâvâ-yı Kâdîhân</td><td>Kâdîhân (592)</td></tr>
<tr><td>el-Hidâye</td><td>Merğînânî (593)</td></tr></table>

<h2>6. Evre: Bağdat'ın Düşüşünden Günümüze (Metin-Şerh-Haşiye Devri)</h2>
<ul><li>Taklit iyice yayıldı ve olağan hale geldi; az da olsa içtihat eden âlimler vardı: İbn Teymiyye, öğrencisi İbnü'l-Kayyim, Şevkânî.</li><li>Fakihler genelde metin, şerh ve haşiye gibi teliflere yöneldi.</li><li>Fetva kitapları yazıldı (Bezzâziyye, Hindiyye); sultanların kanunnâmeleri arttı.</li><li>Kanunlaşma hareketleri doğdu (Mecelle-i Ahkâm-ı Adliyye).</li></ul>
<div class="grid2">
<div><table class="t"><tr><th>Bu devirde yazılan bazı eserler</th><th>Müellif</th></tr>
<tr><td>el-Minhâc</td><td>Nevevî (676)</td></tr>
<tr><td>el-Muhtâr</td><td>Mevsılî (683)</td></tr>
<tr><td>Mecmau'l-bahreyn</td><td>İbnü's-Sâatî (694)</td></tr>
<tr><td>Kenzü'd-dekâik</td><td>Nesefî (710)</td></tr>
<tr><td>el-Fetâvâ'l-Hindiyye</td><td>Heyet</td></tr>
<tr><td>el-Fetâvâ'l-Bezzâziyye</td><td>Bezzâz (827)</td></tr></table></div>
<div><table class="t"><tr><th colspan="2">Kavramlar</th></tr>
<tr><td><b>Şerh</b></td><td>İbareyi kelime kelime veya toplu olarak açıklayan eser.</td></tr>
<tr><td><b>Haşiye</b></td><td>Dışarıdan bazı kavilller getiren, her cümleyi açmayan eser.</td></tr>
<tr><td><b>Ta'lîk ve takrîr</b></td><td>Haşiyeyi açıklayan eser.</td></tr>
<tr><td><b>Zeyl</b></td><td>Ek.</td></tr></table></div>
</div>
<h3>Kanunlaştırma dönemi</h3>
<table class="t">
<tr><td><b>Arazi Kanunnâmesi</b></td><td>1858</td></tr>
<tr><td><b>Mecelle-i Ahkâm-ı Adliyye</b></td><td>Ahmed Cevdet Paşa başkanlığında, 1869-1876 arasında fasiküller halinde; 16 kitap, 1851 madde; Hanefî fıkhına dayalı; borçlar, eşya ve muhakeme usulü. 1926'da Medeni Kanun ile yürürlükten kalktı (57 yıl uygulandı).</td></tr>
<tr><td><b>Mürşidü'l-hayrân</b></td><td>Mısır'da Kadri Paşa, 1875, 941 madde, Hanefî; yürürlüğe girmedi.</td></tr>
<tr><td><b>Hukuk-ı Aile Kararnamesi</b></td><td>1917; dört mezhepten ve İbn Şübrüme gibi müctehitlerden yararlanıldı.</td></tr>
</table>
<p>Mecelle ile başlayan süreçte ansiklopedik ve monografik çalışmalar, akademik tezler, makâsıd eksenli nazariyeler ve kurumsal iftâ kurulları (Din İşleri Yüksek Kurulu, İslam Fıkıh Akademisi) ortaya çıktı.</p>
`,
quiz:[
{q:'Peygamber asrında içtihat için hangisi doğrudur?',o:['Müstakil bir kaynaktı','Vahiyden ayrı, müstakil değildi; ihtilaf yoktu','Sahabe içtihadı onaysız bağlayıcıydı','Kıyas yasaklanmıştı'],a:1,e:'İdeal Özet notu: Bu devirdeki içtihat vahiyden ayrı, müstakil değildi; ihtilaf yoktu.'},
{q:'İdeal Özet\'te sayılan nesh örneklerinden biri değildir?',o:['Ölüm iddeti','Kabir ziyareti','Kıblenin değişimi','Müellefe-i kulûbun payı'],a:3,e:'Müellefe-i kulûb meselesi Râşid halifeler döneminde illet zail olduğu için hükmün durdurulmasıdır, nesh değildir.'},
{q:'Râşid halifeler döneminde hükümler hangi sırayla incelenirdi?',o:['Re\'y, Sünnet, Kitap','Kitap, Sünnet, re\'y','Kitap, icma, kıyas','Sünnet, Kitap, şûra'],a:1,e:'Bulamazlarsa ileri gelenlerle istişare ederlerdi.'},
{q:'Tâbiîn asrında ihtilafın sebeplerinden biri değildir?',o:['Fakihlerin farklı beldelere dağılması','Şûra ile içtihadın imkânsızlaşması','Farklı örfler','Mezheplerin vakıflarla desteklenmesi'],a:3,e:'Vakıf tahsisi duraklama devrinin taklit sebeplerindendir.'},
{q:'Bedâiu\'s-sanâi\' kime aittir ve hangi devirde yazılmıştır?',o:['Serahsî – tedvin','Kâsânî – duraklama devri','Nevevî – metin-şerh-haşiye','Merğînânî – tâbiîn'],a:1,e:'Kâsânî (587).'},
{q:'"Haşiyeyi açıklayan eser"e ne denir?',o:['Şerh','Zeyl','Ta\'lîk ve takrîr','Muhtasar'],a:2,e:'Şerh ibareyi açar, haşiye dışarıdan kaviller getirir, zeyl ektir.'},
{q:'Duraklama devri âlimlerinin yaptığı faydalı işlerden biri değildir?',o:['Hükümleri illetlendirme','Fürûdan kaide çıkarma','Görüşler arasında tercih','Yeni bir mezhep kurma'],a:3,e:'İdeal Özet\'te sayılan dört iş: ta\'lîl, kaide çıkarma, tercih, mezhebi genişletme.'},
{q:'Mürşidü\'l-hayrân için hangisi doğrudur?',o:['Osmanlı\'da yürürlüğe girdi','Mısır\'da Kadri Paşa\'nın hazırladığı, yürürlüğe girmeyen Hanefî kodifikasyonudur','Dört mezhebe dayanır','Ceza kanunudur'],a:1,e:'1875, 941 madde.'}
]});

UNITS.push({
id:'u5', no:5, src:'İdeal Özet s. 9-10', title:'Yaşayan Ehl-i Sünnet Mezhepleri', ar:'المذاهب السنية الباقية',
lead:'Dört Sünnî mezhebin imamlarını, kaynak sıralarını, hocalarını, talebelerini ve tedvin süreçlerini; ayrıca Zeydiyye, Ca\'feriyye ve silinen mezhepleri tanıyacağız.',
html:`
<div class="mezhep">
<h3>Ebû Hanîfe (80-150)</h3>
<p>Nu'mân b. Sâbit; Kûfe doğumlu, aslen Farisî. Önce kumaş ticareti yaptı. Kûfe'de re'y ile meşhur oldu; zamanında re'y ve kıyasın sancaktarı addedildi.</p>
<ul><li>Tevakkuf etmeyip hüküm istinbat etti; naslardan illetler çıkararak farazi meseleler oluşturdu ve illet devam ettiği sürece kıyası uyguladı. Bu yüzden "İmâmü'l-kıyâsiyyîn" denir.</li></ul>
<div class="grid2">
<div class="card-s"><h4>Kaynakları</h4><p class="flow">Kitap → Sünnet → Sahabe kavli → İçtihat</p><p>İçtihat hem kıyası hem istihsanı kapsar. Senedi sahih ise mürseli kıyasa tercih eder.</p>
<blockquote>"Hükmü Kitap'ta bulursam alırım; bulamazsam Sünnet'e bakarım; orada da bulamazsam sahabe kavline bakar, dilediğimi alır dilediğimi almam. Sahabe sözünden sonra başka söze ihtiyaç duymam. Ama iş tâbiîne gelince, onlar nasıl içtihat ettiyse ben de içtihat ederim."</blockquote></div>
<div class="card-s"><h4>Hadis hakkındaki görüşü</h4><p>Diğerlerine göre az hadis rivayet etti; çünkü Irak'ta uydurma hadis çoktu, sıhhatin tespiti için ağır şartlar koştu. Hadis ona ulaşmamış veya sıhhati sabit olmamışsa kıyası öne aldı.</p>
<h4>Yöntem ve eğitim anlayışı</h4><p>Meseleyi öğrencilerine sunar, mecliste tartışılır, varılan sonucu yazdırırdı. Hanefî mezhebi <b>şûra ile işleyen kolektif bir mezheptir</b>.</p>
<h4>İstinbat usulü</h4><p>Tedvin edilmedi; öğrencileri fer'î hükümlerden usulü çıkardı.</p></div>
</div>
<div class="grid2">
<div class="card-s"><h4>Hocaları</h4><ol><li>Hammâd b. Ebî Süleyman</li><li>İbrâhim en-Nehaî</li><li>Alkame b. Kays en-Nehaî</li><li>Abdullah b. Mes'ûd</li><li>Zeyd b. Ali Zeynelâbidîn</li><li>Ca'fer es-Sâdık</li><li>Abdullah b. Hasan</li></ol><p class="muted">İlk dördü bir rivayet zinciridir: İbn Mes'ûd → Alkame → Nehaî → Hammâd → Ebû Hanîfe.</p></div>
<div class="card-s"><h4>Talebeleri</h4><ol><li><b>Ebû Yûsuf</b> (ö.182): <i>Kitâbü'l-Harâc, İhtilâfü'l-emsâr, er-Red alâ Mâlik b. Enes</i>. Kadılkudat oldu; Hanefîlikte ilk kitap yazan.</li><li><b>Muhammed b. Hasan eş-Şeybânî</b> (ö.189): <i>Zâhirü'r-rivâye, Nâdirü'r-rivâye</i>; mezhebin tedvincisi.</li><li><b>Züfer b. Hüzeyl</b></li><li><b>Hasan b. Ziyâd el-Lü'lüî</b></li></ol></div>
</div>
<table class="t"><tr><th>Zâhirü'r-rivâye (6 kitap)</th><td>el-Mebsût (el-Asl), ez-Ziyâdât, el-Câmiu'l-kebîr, el-Câmiu's-sağîr, es-Siyerü'l-kebîr, es-Siyerü's-sağîr. Hâkim eş-Şehîd (ö.334) <i>el-Kâfî</i>'de topladı, Serahsî <i>el-Mebsût</i>'ta şerh etti.</td></tr>
<tr><th>Nevâdir</th><td>Keysâniyyât, Hârûniyyât, Cürcâniyyât, Rakkıyyât, Ziyâdâtü'z-ziyâdât.</td></tr>
<tr><th>Terimler</th><td>Şeyhayn: E. Hanîfe + E. Yûsuf · İmameyn/Sâhibeyn: E. Yûsuf + Muhammed · Tarafeyn: E. Hanîfe + Muhammed</td></tr></table>
</div>

<div class="mezhep">
<h3>İmam Mâlik (93-179)</h3>
<p>Mâlik b. Enes, aslen Yemenli, Medine imamı. Hac ve umre dışında Medine'den ayrılmadı. Yetmiş fakihin ehliyetine şahitlik etmesinden sonra ders vermeye başladı. Hem Emevî hem Abbasî dönemlerinde tarafsız kaldı; 146'da Medine valisinin emriyle kırbaçlandı, Mansûr özür diledi. Derslerinde yüksek sesle konuşulmasına ve tartışmaya izin vermezdi.</p>
<div class="grid2">
<div class="card-s"><h4>Fetva usulü</h4><ol><li>Farazi olaylara cevap vermez.</li><li>Re'ye ihtiyaç olunca başvurur.</li><li>Hadis-i şerif ve fetvaları imlâ ettirir.</li><li>Talebeleriyle münakaşa etmez, onların görüşleri yazılmaz.</li><li>Medine halkının uygulamasını, ona ters düşen haber-i âhâda tercih eder.</li></ol></div>
<div class="card-s"><h4>Kaynakları</h4><p class="flow">Kitap → Sünnet → İcma → Ehl-i Medine ameli → Kıyas → Sahabe kavli → Mesalih-i mürsele → Örf-âdet → Sedd-i zerâi → İstihsan → İstishâb</p></div>
</div>
<div class="grid2">
<div class="card-s"><h4>Hocaları</h4><ol><li>Abdurrahman b. Hürmüz</li><li>İbn Şihâb ez-Zührî</li><li>Ebü'z-Zinâd</li><li>Yahyâ b. Saîd</li><li>Rabîatü'r-re'y</li><li>Ca'fer b. Muhammed el-Bâkır (es-Sâdık)</li></ol></div>
<div class="card-s"><h4>Talebeleri</h4><ol><li>Abdullah b. Vehb</li><li>Abdurrahman b. el-Kâsım el-Mısrî</li><li>Eşheb b. Abdülaziz el-Kaysî</li><li>Ebü'l-Hasen el-Kurtubî</li><li>Esed b. Furât</li></ol><p class="muted">İmam Şâfiî ve İmam Muhammed de ondan ders aldı.</p></div>
</div>
<h4>Tedvin: el-Muvatta' ve el-Müdevvene</h4>
<p><b>el-Muvatta'</b>: Hadis, sahabe fetvaları, tâbiîn sözleri ve Malik'in görüşleri; bablara göre, kırk yılda. <b>el-Müdevvene</b>: Medine'de Malik'in ders halkasına katılan <b>Esed b. Furât</b> farazi meselelere dair çok soru sorunca Malik onu Irak'a yönlendirdi. Esed Irak'ta İmam Muhammed'den yararlandı; Malik'in vefatından sonra Mısır'a gidip Irak'ta öğrendiği meseleler hakkında Malik'in görüşlerini derlemek istedi. İbn Vehb ve Eşheb ile görüştükten sonra Malik'in fıkhına en yakın bulduğu <b>İbnü'l-Kâsım</b> ile çalıştı. İbnü'l-Kâsım, Malik'in görüşünü bilmediği yerde tahrîc ile hüküm verdi. Ortaya çıkan altmış bölümlük esere <b>el-Esediyye</b> denir. <b>Sahnûn</b> bu eseri yeniden tasnif etti, hadis ve eserler ekledi, diğer öğrencilerin rivayetleriyle zenginleştirdi; çıkan metne <b>el-Müdevvene</b> denildi.</p>
<p class="muted">Diğer temel kitaplar: Halîl b. İshak'ın <i>Muhtasar</i>'ı (mezhebin en meşhur metni), Harâşî ve Derdîr şerhleri, Desûkî haşiyesi, Karâfî'nin <i>ez-Zahîra</i>'sı. Yayıldığı yerler: Kuzey Afrika, Endülüs, Mısır, Sudan.</p>
</div>

<div class="mezhep">
<h3>İmam Şâfiî (150-204)</h3>
<p>Muhammed b. İdrîs; Gazze doğumlu, Mısır'da vefat etti. İki yaşında babasını kaybetti, Mekke'de büyüdü, 10-12 yaşında Muvatta'ı ezberledi; dokuz yıl Malik'ten okudu. Yemen'de Râfızîlikle suçlanıp 184'te Bağdat'a getirildi, İmam Muhammed'in araya girmesiyle beraat etti. 195'te Bağdat'ta <i>er-Risâle</i>'yi yazdı; 199'da Mısır'a geçti.</p>
<ul><li>Ehl-i hadis ile ehl-i re'yin ortasındadır.</li><li>Âhâd hadisi mürsele ve kıyasa tercih eder; Hanefîlerin şart koştuğu gibi umûmü'l-belvâda şöhret şartı aramaz.</li><li>Medine amelini şart koşmaz.</li><li>Saîd b. el-Müseyyeb gibi önde gelen tâbiîn dışındakilerin mürselini hüccet almaz.</li></ul>
<div class="grid2">
<div class="card-s"><h4>Usulü</h4><p class="flow">Kitap → Sünnet → İcma → Sahabe kavli → Râşid halifeler → Kıyas</p><p><b>Not:</b> İstihsan, mesalih-i mürsele ve ehl-i Medine ameliyle istidlali reddeder (<i>İbtâlü'l-istihsân</i>).</p></div>
<div class="card-s"><h4>Tedvin</h4><ol><li><i>er-Risâle</i>: Fıkıh usulünde bize ulaşan ilk eser.</li><li><i>el-Ümm</i>: Fıkıh; kavl-i cedîd.</li><li><i>el-Hucce</i>: Kavl-i kadîm.</li></ol><p class="muted">Irak'taki görüşleri <b>mezheb-i kadîm</b>, Mısır'daki değişen görüşleri <b>mezheb-i cedîd</b>.</p></div>
</div>
<div class="grid2">
<div class="card-s"><h4>Hocaları</h4><ol><li>Müslim b. Hâlid ez-Zencî</li><li>Mâlik b. Enes</li><li>Ömer b. Ebû Seleme</li><li>Yahyâ b. Hassân</li><li>Muhammed b. Hasan eş-Şeybânî</li></ol></div>
<div class="card-s"><h4>Öğrencileri</h4><ol><li>Za'ferânî (Irak)</li><li>Kerâbîsî (Irak)</li><li>İsmâil b. Yahyâ el-Müzenî (Mısır)</li><li>Ebû Ya'kūb el-Büveytî (Mısır)</li><li>Rebî' b. Süleyman el-Murâdî (Mısır)</li></ol></div>
</div>
<p class="muted">Sonraki temel eserler: Mâverdî <i>el-Hâvî</i>, Gazzâlî <i>el-Vecîz</i>, Şîrâzî <i>el-Mühezzeb</i>, Nevevî <i>el-Mecmû'</i> ve <i>el-Minhâc</i>; Minhâc şerhleri: İbn Hacer el-Heytemî <i>Tuhfe</i>, Şirbînî <i>Muğni'l-muhtâc</i>, Remlî <i>Nihâye</i>.</p>
</div>

<div class="mezhep">
<h3>Ahmed b. Hanbel (164-241)</h3>
<p>Ebû Abdullah Ahmed b. Hanbel; Bağdat doğumlu ve vefatlı. Mekke, Medine, Şam ve Yemen'e ilim yolculukları yaptı; Şâfiî'den fıkıh okudu. Halku'l-Kur'an meselesinde <b>mihne</b> döneminde işkenceye maruz kaldı (Me'mûn ve Mu'tasım dönemlerinde iki yılı aşkın hapis). <i>el-Müsned</i> 40.000'den fazla hadis içerir. Şâfiî: "Bağdat'tan ayrıldığımda arkamda Ahmed'den daha fakih birini bırakmadım."</p>
<ul><li>Sahabe kavlinde ihtilaf varsa Kitap ve Sünnete en yakın olanı tercih eder.</li><li>Delil yoksa kıyastan önce mürsel ve zayıf hadise başvurur; zayıf hadis kıyastan kuvvetlidir.</li><li>Kıyasa en son başvurur.</li></ul>
<div class="grid2">
<div class="card-s"><h4>Usulü</h4><p class="flow">Kitap → Sünnet → Sahabe fetvası → Mürsel ve zayıf hadis → Kıyas</p><h4>Tedvin</h4><p>Görüş ve fetvalarını yazmayı kerih gördüğü için fıkıh eseri telif etmedi; öğrencileri derledi. Görüşleri <b>rivâyât</b> (doğrudan), <b>tenbîhât</b> (işaret) ve <b>vücûh</b> (içtihatlarından çıkarılan) olarak nakledilir.</p></div>
<div class="card-s"><h4>Hocaları</h4><ol><li>Süfyân b. Uyeyne</li><li>Yahyâ b. Saîd el-Kattân</li><li>Abdurrahman b. Mehdî</li><li>İmam Şâfiî</li><li>Abdürrezzâk b. Hemmâm</li><li>Vekî' b. Cerrâh</li></ol></div>
</div>
<div class="card-s"><h4>Talebeleri ve mezhep âlimleri</h4><ol><li>Ahmed b. Muhammed b. Hârûn</li><li>Ebû Bekir el-Hallâl (<i>el-Câmi'</i>)</li><li>el-Merrûzî</li><li>Ebü'l-Kâsım el-Hırakî (<i>el-Muhtasar</i>, mezhebin en meşhur metni)</li><li>İbn Kudâme el-Makdisî (<i>el-Muğnî</i>, Hırakî şerhi)</li><li>İbn Teymiyye</li><li>İbnü'l-Kayyim</li><li>Muhammed b. Abdülvehhâb (Vehhâbîliğin kurucusu)</li></ol><p class="muted">Hadisçi öğrencileri arasında Buhârî, Müslim, Ebû Dâvûd da sayılır.</p></div>
</div>

<h2>Diğer Mezhepler (tamamlayıcı bilgi)</h2>
<div class="grid2">
<div class="mezhep"><h3>Zeydiyye — Zeyd b. Ali (ö.122)</h3><p>Ebû Hanîfe'nin de hocaları arasında sayılır. Dört mezhebe çok yakındır. <i>el-Mecmû'</i>; el-Hâdî Yemen'de Zeydî devletini kurdu. Usul: Kitap, Sünnet, icma, kıyas, istihsan, maslahat, akıl. Yemen.</p></div>
<div class="mezhep"><h3>Ca'feriyye — Ca'fer es-Sâdık (ö.148)</h3><p>İmâmiyye'nin 6. imamı; Ebû Hanîfe ve Malik'in hocaları arasında sayılır. Kaynaklar: Kitap, Sünnet (imamların sözleri dahil), icma, akıl. Dört temel kitap: <i>el-Kâfî, Men lâ yahduruhu'l-fakîh, et-Tehzîb, el-İstibsâr</i>.</p></div>
</div>
<h3>Bağlısı kalmamış müctehitler <span class="ar">المذاهب المنقرضة</span></h3>
<table class="t">
<tr><th>Müctehit</th><th>Vefat / Bölge</th></tr>
<tr><td>Hasan el-Basrî</td><td>110, Basra</td></tr>
<tr><td>İbn Ebî Leylâ</td><td>148, Kûfe</td></tr>
<tr><td>Evzâî</td><td>157, Şam</td></tr>
<tr><td>Süfyân es-Sevrî</td><td>161, Kûfe</td></tr>
<tr><td>Leys b. Sa'd</td><td>175, Mısır</td></tr>
<tr><td>Süfyân b. Uyeyne</td><td>198, Hicaz</td></tr>
<tr><td>İshâk b. Râhûye</td><td>238, Nişabur</td></tr>
<tr><td>Ebû Sevr</td><td>240, Bağdat</td></tr>
<tr><td>Dâvûd ez-Zâhirî (İbn Hazm, <i>el-Muhallâ</i>)</td><td>270, Kûfe/Bağdat</td></tr>
<tr><td>Taberî</td><td>310</td></tr>
</table>
`,
quiz:[
{q:'İdeal Özet\'e göre Ebû Hanîfe\'nin kaynak sırası hangisidir?',o:['Kitap → Sünnet → İcma → Kıyas','Kitap → Sünnet → Sahabe kavli → İçtihat','Kitap → Sünnet → Medine ameli → Kıyas','Kitap → Sahabe → Sünnet → Kıyas'],a:1,e:'İçtihat hem kıyası hem istihsanı kapsar.'},
{q:'Mezhebi "şûra ile işleyen kolektif bir mezhep" olarak nitelenen imam kimdir?',o:['İmam Mâlik','Ebû Hanîfe','İmam Şâfiî','Ahmed b. Hanbel'],a:1,e:'Malik ise talebeleriyle münakaşa etmez, imlâ ettirirdi.'},
{q:'Medine halkının uygulamasını haber-i âhâda tercih eden imam kimdir?',o:['Ebû Hanîfe','İmam Mâlik','İmam Şâfiî','Ahmed b. Hanbel'],a:1,e:'Fetva usulünün beşinci maddesi.'},
{q:'el-Esediyye\'yi yeniden tasnif edip el-Müdevvene\'ye dönüştüren kimdir?',o:['İbn Vehb','Eşheb','Sahnûn','Esed b. Furât'],a:2,e:'Esed eseri İbnü\'l-Kâsım ile hazırlamıştı.'},
{q:'İstihsan, mesalih-i mürsele ve Medine amelini reddeden imam kimdir?',o:['Ebû Hanîfe','İmam Mâlik','İmam Şâfiî','Ahmed b. Hanbel'],a:2,e:'Şâfiî\'nin İbtâlü\'l-istihsân adlı bir eseri de vardır.'},
{q:'Ahmed b. Hanbel\'in usulünde kıyastan önce gelen delil hangisidir?',o:['İstihsan','Mürsel ve zayıf hadis','Medine ameli','Maslahat'],a:1,e:'Kitap → Sünnet → Sahabe fetvası → Mürsel ve zayıf hadis → Kıyas.'},
{q:'Hanbelî mezhebinin en meşhur metni ve şerhi hangisidir?',o:['Muhtasaru\'l-Hırakî – el-Muğnî','el-Minhâc – Tuhfe','Muhtasaru Halîl – Harâşî','el-Kudûrî – el-Hidâye'],a:0,e:'İbn Kudâme el-Muğnî\'de Hırakî\'yi şerh etti.'},
{q:'Aşağıdakilerden hangisi Ebû Hanîfe\'nin hocası değildir?',o:['Hammâd b. Ebî Süleyman','Zeyd b. Ali','Ca\'fer es-Sâdık','Rabîatü\'r-re\'y'],a:3,e:'Rabîatü\'r-re\'y İmam Malik\'in hocasıdır.'}
]});

UNITS.push({
id:'u6', no:6, src:'İdeal Özet s. 11', title:'Mülkiyet Teorisi: Malın Tanımı ve Haklar', ar:'نظرية الملكية: تعريف المال',
lead:'Malın üç tanımını, muhtar tanımdan çıkan sonuçları ve hak ile menfaatlerin mal sayılıp sayılmayacağı tartışmasını sonuçlarıyla birlikte öğreneceğiz.',
html:`
<h2>1. Malın Tanımları <span class="ar">المال</span></h2>
<table class="t">
<tr><th>Tanım</th><th>Değerlendirme</th></tr>
<tr><td><b>1. Hanefî tanımı:</b> İnsan tabiatının meyledip ihtiyaç zamanı için biriktirilebilen şey. <span class="ar">ما يميل إليه الطبع ويمكن ادخاره لوقت الحاجة</span></td><td>Yeşillik ve ilaç gibi tabiatın istemediği ama mal olan şeyleri ve menfaati kapsamadığı için eleştirilmiştir.</td></tr>
<tr><td><b>2.</b> Âdemoğlunun maslahatı için yaratılmış, ihrazı mümkün ve ihtiyarla tasarruf edilebilen, insan dışındaki her şey.</td><td>Tasarrufa imkân vermesi ve mütekavvim olması şartı eklenmiş; domuz ve şarap zimmîler için mal sayılmıştır.</td></tr>
<tr><td><b>3. Muhtar tarif:</b> Hiyâzeti ve mutad yolla kendisinden faydalanılması mümkün her şey. <span class="ar">المال كل ما يمكن حيازته والانتفاع به على وجه معتاد</span></td><td>Tercih edilen tanım.</td></tr>
</table>

<h2>2. Muhtar Tarife Göre Çıkarsamalar</h2>
<ol>
<li>Fiilen ihraz edip faydalandığımız her şey maldır: ev, arazi, araba.</li>
<li>Fiilen ihraz etmediğimiz ama hiyâzeti mümkün olanlar maldır: sudaki balık, havadaki kuş, topraktaki maden.</li>
<li>Fiilen faydalansak bile hiyâzeti mümkün olmayanlar mal değildir: güneş ışığı, ayın nuru.</li>
<li>Mutad yolla faydalanamadığımız şeyler ihraz etsek bile mal değildir: bir damla su, bir pirinç tanesi.</li>
<li>Fiilen faydalanıp ihraz etsek bile Şâri tarafından umumi bir yasak varsa mal sayılmaz: eceliyle ölmüş hayvan (meyte). Ancak tabaklanan derisi mal olur. Bazıları için yasak, bazıları için caiz olan (şarap) ise mal sayılır.</li>
</ol>

<h2>3. Haklar ve Menfaatler Mal Sayılır mı?</h2>
<div class="grid2">
<div class="card-s"><h4>Mal ile ilgisi olmayan haklar</h4><p>İttifakla mal sayılmaz: <b>hidâne</b> (çocuk bakımı), velayet hakkı.</p></div>
<div class="card-s"><h4>Mal ile ilgili haklar ve menfaatler</h4><p>İhtilaflıdır: su içme (şirb), geçiş (mürûr) hakkı; evde oturma, aracı kullanma menfaati.</p></div>
</div>
<div class="grid2">
<div class="card-s"><h4>Hanefîler: Mal olarak itibar etmez</h4><ul>
<li>Kendi tanımlarında menfaati mal saymamışlardı: menfaat <b>hiyâzet ve biriktirmeyi kabul etmez</b>; süreç boyunca doğar ve anlık olarak yok olur.</li>
<li>Varlıklar ya cevher ya arazdır; menfaat arazdır. Arazı madde saymak hakikati değiştirmektir.</li>
<li>İcâre gibi akitlerde menfaatin mal sayılması ihtiyacın baskısıyla oluşmuş <b>istihsan</b> kaynaklı bir hükümdür; bu tasarruflar üzerinden menfaatleri mal kapsamına almak isabetli değildir.</li>
<li>İcâre <b>kıyasa aykırı</b> (alâ hilâfi'l-kıyâs) caiz olduğu için diğer menfaatler ona kıyas edilmez.</li>
</ul></div>
<div class="card-s"><h4>Cumhur: Mal olarak itibar eder</h4><ul>
<li>Mal âdemoğlunun maslahatı için yaratılmıştır; menfaatler de böyledir. Eşya menfaati sebebiyle mal sayılırken asıl olan menfaati mal saymamak makul değildir.</li>
<li>Menfaatin hiyâzeti, aslının ve mahallinin hiyâzeti ile mümkündür.</li>
<li>Şâri menfaati (Kur'an öğretimini) <b>mehir</b> kılmıştır; mehir ise ancak mal olabilir.</li>
<li>İcâre akdinde menfaat tazmin edilir.</li>
</ul></div>
</div>
<div class="box note"><b>Tercih:</b> Hukuk sistemleri öteden beri menfaati esas alan akitlerde menfaatleri mal saymıştır. Tasarruf kavramının kendisi de şer'î bir varsayım olduğundan menfaatin aynı anlayışla mal sayılması daha uygundur; pek çok işlemi istihsan üzerinden kural dışı kabul etmek doğru değildir. Günümüz araştırmacılarının tercihi cumhurun görüşüdür.</div>

<h2>4. İhtilafın Pratik Sonucu</h2>
<table class="t">
<tr><th>Mesele</th><th>Hanefîler</th><th>Cumhur</th></tr>
<tr><td><b>Gasp edilen menfaat</b>: Birinin evini gasp edip bir ay oturmak</td><td>Ev geri verilir ama menfaat karşılığı kira bedeli tazmin ettirilmez. "Ücret ile damân bir araya gelmez": <span class="ar">الأجر والضمان لا يجتمعان</span></td><td>Emsal kira bedeli (ecr-i misil) tazmin ettirilir.</td></tr>
<tr><td><b>Kiracının ölümü</b></td><td>Menfaat miras konusu olmadığı için kira akdi sona erer; oturma menfaati ailesine intikal etmez.</td><td>Kira akdi infisah etmez; menfaat miras kalır, ailesi süre sonuna kadar oturur.</td></tr>
</table>
`,
quiz:[
{q:'Hanefîlerin mal tanımı neden eleştirilmiştir?',o:['Menfaati ve yeşillik, ilaç gibi tabiatın istemediği malları kapsamadığı için','Araziyi kapsamadığı için','Parayı kapsamadığı için','Zimmîleri dışladığı için'],a:0,e:'İdeal Özet\'teki not.'},
{q:'Muhtar tarife göre hangisi maldır?',o:['Güneş ışığı','Bir damla su','Havadaki kuş','Eceliyle ölmüş hayvanın eti'],a:2,e:'Fiilen ihraz edilmemiş ama hiyâzeti mümkün olan şey maldır.'},
{q:'Hidâne hakkının mal sayılması hakkında hüküm nedir?',o:['İttifakla maldır','İttifakla mal değildir','Hanefîlere göre maldır','Cumhura göre maldır'],a:1,e:'Mal ile ilgisi olmayan haklar ittifakla mal değildir.'},
{q:'Cumhurun menfaatin mal olduğuna dair delillerinden biri hangisidir?',o:['Menfaat saklanabilir','Şâri menfaati mehir kılmıştır, mehir ise ancak mal olabilir','İcâre kıyasa aykırıdır','Menfaat araz değildir'],a:1,e:'Kur\'an öğretiminin mehir olarak tayin edilmesi.'},
{q:'"Ücret ile damân bir araya gelmez" kaidesi hangi görüşün sonucunu açıklar?',o:['Cumhurun gasp edilen menfaati tazmin ettirmesi','Hanefîlerin gasp edilen menfaati tazmin ettirmemesi','Şuf\'anın komşuya tanınması','İcârenin ölümle devam etmesi'],a:1,e:'الأجر والضمان لا يجتمعان'},
{q:'Cumhura göre kiracı ölürse ne olur?',o:['Kira sona erer','Menfaat miras kalır, ailesi süre sonuna kadar oturur','Akit fasit olur','Kira bedeli düşer'],a:1,e:'Hanefîlere göre ise akit sona erer.'}
]});
