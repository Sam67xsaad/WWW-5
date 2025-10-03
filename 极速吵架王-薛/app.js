(() => {
    const STORAGE_USERS = 'jsjj_users';
    const STORAGE_CURRENT = 'jsjj_current_user';

    const baseModules = [
        {
            id: 'base-1',
            title: '模块一：高速意面论',
            body: `意大利面拌42号混凝土  我不敢苟同。我个人认为这个意大利面就应该拌42号混凝土。因为这个螺丝钉的长度，它很容易会直接影响到挖掘机的扭距，你往里砸的时候，一瞬间它就会产生大量的高能蛋白，俗称UFO会严重影响经济的发展。照你这么说，炸鸡块要用92#汽油，毕竟我们无法用光学透镜探测苏格拉底，如果二氧化氢持续侵蚀这个机床组件，那么我们早晚要在斐波那契曲线上安装一个胶原蛋白，否则我们将无法改变蜜雪冰城与阿尔别克的叠加状态，因为众所周知爱吃鸡摩人在捕鲲的时候往往需要用氢的同位素当做诱饵，但是原子弹的新鲜程度又会直接影响到我国东南部的季风和洋流，所以说在西伯利亚地区开设农学院显然是不合理的。
我知道你一定会反驳我，告诉我农业的底层思维是什么，就是不用化肥农药和种子，还包括生命之源氮气，使甲烷分子直接转化成能够捕获放射性元素释放的β射线的单质，并且使伽马射线在常温下就能用老虎钳折弯成78，否则在用望远镜观察细胞结构时，根本发现不了时空重叠时到底要叠几层才能使潼关肉夹馍更酥脆的原因。`
        },
        {
            id: 'base-2',
            title: '模块二：小区军权论',
            body: `黄龙江一派全戴狼牙耳机  你有这么高速运转的机械进入中国。记住我给出的原理，小的时候，就是研发人就是研发这个东西的原理是是阴间政权管着。
车开小区咋了！？小时候，这片区域就是各自管各自的！没有这些这些个设备！
知道为什么有生灵给他运转先位，还有还有专门饲养这个为什么地下产这种东西。它管着它说是五世同堂旗下子孙
现在又做了车闸，又养了个保安亭，还有专门的物业公司，还要整个小区都养着，说大人小孩都归他们管！
你以为我跟你闹着玩呢你不你不你不警察吗？
牛逼啥呢你，管这么宽，你以为你警察？
黄龙江一派全都带蓝牙，黄龙江我告我告诉你在阴间是是那个化名。化名我小舅亲小舅。
告诉你，管理员我全都都认识，电话我全部能摇来人！比如那个叫黄龙江的，黄龙江是我亲小舅那边的！
赵金兰的那个嫡子嫡孙咋你跟王守义玩的，那是我儿子他都管我叫太奶奶。爱因斯姐叶赫那拉我是施瓦辛格。
那个保安队长王守义，我太奶奶同宗的，我们都叫他太奶奶。是爱因斯坦、叶赫那拉、施瓦辛格那一辈的！
我跟你说句肝儿上的事你不刑警队的吗他不听命于杜康。
再深了说，你牛逼吗？刑警队杜康也也熟得很！
为什么他是韩国人，他属于合合作方合伙人，自有自己有自己的政权，这这块儿牡丹江号称小联合国。
这块小牡丹江啥人都有，韩国人什么的，就在这小区的业主和联合国似的。
但是你进入亚洲了，你触犯了军权你就可以抓他，但是你们为了什么你为了是碎银几两啊，还是限制你的数字啊，还是你你定格不了。但是在这里小区里，他们不给物业费你咋不去管呢？你在跟我逼逼赖赖，是他们有钱，还是为了几个逼子儿，你不敢说？
你没有主权你这兵不硬啊你理论不强你说不明白你人情世故你为了几个数字导致你的方向啊。
你对他们一点都不硬啊！没有按照小区管理一视同仁，你是人情世故，还是为了几个逼子儿？
因为什么这块儿有交警队的人才说这话的你天天交警队交警队你你你你干什么工作了你这军情我分析的我靠古人。
你以为是有交警我才这么说？交警办事也得在我们小区调研知道吗？
到时候你张口管我要军费的时候挺牛逼的没有定向资金你们你们的资金金是佣金。
你张口闭口的就物业管理费，你没发工资啊？就靠这点物业管理费？
就是你那吊水平你这活你给我干完了有。这个有这笔钱不干完没有。
你这就是临时工，能力还不咋的，还催催催，整天管理费，啥管理水平都没有`
        }
    ];

    const AudioCtx = window.AudioContext || window.webkitAudioContext;

    const els = {
        samplePlay: document.getElementById('sample-play'),
        sampleStatus: document.getElementById('sample-status'),
        sampleModule: document.getElementById('sample-module'),
        sampleScore: document.getElementById('sample-score'),
        sampleDuration: document.getElementById('sample-duration'),
        sampleAudio: document.getElementById('sample-audio'),
        moduleGrid: document.getElementById('module-grid'),
        moduleOverlay: document.getElementById('module-overlay'),
        moduleHeading: document.getElementById('module-heading'),
        moduleBody: document.getElementById('module-body'),
        moduleClose: document.getElementById('module-close'),
        moduleStatus: document.getElementById('module-status'),
        moduleRecordToggle: document.getElementById('module-record-toggle'),
        moduleDuration: document.getElementById('module-duration'),
        moduleAudio: document.getElementById('module-audio'),
        moduleScore: document.getElementById('module-score-value'),
        moduleCreateTrigger: document.getElementById('module-create-trigger'),
        moduleCreateOverlay: document.getElementById('module-create-overlay'),
        moduleCreateClose: document.getElementById('module-create-close'),
        moduleCreateForm: document.getElementById('module-create-form'),
        moduleCreateTitle: document.getElementById('module-create-title'),
        moduleCreateBody: document.getElementById('module-create-body'),
        moduleCreateMessage: document.getElementById('module-create-message'),
        moduleCreateSubmit: document.getElementById('module-create-submit'),
        authGreeting: document.getElementById('auth-greeting'),
        pointsDisplay: document.getElementById('points-display'),
        loginTrigger: document.getElementById('login-trigger'),
        registerTrigger: document.getElementById('register-trigger'),
        logoutBtn: document.getElementById('logout-btn'),
        authOverlay: document.getElementById('auth-overlay'),
        authHeading: document.getElementById('auth-heading'),
        authForm: document.getElementById('auth-form'),
        authUsername: document.getElementById('auth-username'),
        authPassword: document.getElementById('auth-password'),
        authMessage: document.getElementById('auth-message'),
        authSubmit: document.getElementById('auth-submit'),
        authSwitch: document.getElementById('auth-switch'),
        authClose: document.getElementById('auth-close')
    };

    const state = {
        currentModuleId: null,
        lastFocusedModule: null,
        bestSample: null,
        authMode: 'login',
        userModules: [],
        userPoints: 0
    };

    const moduleStates = new Map();

    const loadUsers = () => {
        try {
            const raw = localStorage.getItem(STORAGE_USERS);
            return raw ? JSON.parse(raw) : {};
        } catch (error) {
            console.error('读取用户数据失败', error);
            return {};
        }
    };

    const saveUsers = (users) => {
        try {
            localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
        } catch (error) {
            console.error('保存用户数据失败', error);
        }
    };

    const getCurrentUsername = () => localStorage.getItem(STORAGE_CURRENT);

    const setCurrentUsername = (username) => {
        if (username) {
            localStorage.setItem(STORAGE_CURRENT, username);
        } else {
            localStorage.removeItem(STORAGE_CURRENT);
        }
        refreshAuthState();
    };

    const ensureUserRecord = (username) => {
        const users = loadUsers();
        if (!users[username]) {
            users[username] = {
                password: '',
                createdAt: Date.now(),
                points: 0,
                modules: []
            };
            saveUsers(users);
        }
        return users[username];
    };

    const hashPassword = (password) => {
        try {
            return btoa(unescape(encodeURIComponent(password)));
        } catch (error) {
            return password;
        }
    };

    const getCombinedModules = () => [...baseModules, ...state.userModules];

    const getModuleById = (moduleId) => getCombinedModules().find((module) => module.id === moduleId) || null;

    const getModuleState = (moduleId) => {
        if (!moduleStates.has(moduleId)) {
            moduleStates.set(moduleId, {
                recorder: null,
                stream: null,
                chunks: [],
                timerId: null,
                startTimestamp: null,
                latestUrl: null,
                lastDuration: 0,
                lastScore: null
            });
        }
        return moduleStates.get(moduleId);
    };

    const renderModules = () => {
        if (!els.moduleGrid) {
            return;
        }
        els.moduleGrid.innerHTML = '';
        getCombinedModules().forEach((module) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'module-card';
            button.dataset.moduleId = module.id;

            const title = document.createElement('span');
            title.className = 'module-title';
            title.textContent = module.title;

            const hint = document.createElement('span');
            hint.className = 'module-hint';
            hint.textContent = '点击阅读';

            button.appendChild(title);
            button.appendChild(hint);
            button.addEventListener('click', () => openModule(module.id));

            els.moduleGrid.appendChild(button);
        });
    };

    const updatePointsUI = () => {
        const username = getCurrentUsername();
        const pointsText = username ? `当前积分：${state.userPoints}` : '当前积分：0';
        els.pointsDisplay.textContent = pointsText;

        const canCreate = Boolean(username) && state.userPoints >= 10;
        els.moduleCreateTrigger.disabled = !canCreate;
        els.moduleCreateTrigger.textContent = canCreate ? '添加模块（需10积分）' : '添加模块（需10积分）';
    };

    const updateAuthBar = () => {
        const username = getCurrentUsername();
        if (username) {
            els.authGreeting.textContent = `欢迎你，${username}`;
            els.loginTrigger.classList.add('hidden');
            els.registerTrigger.classList.add('hidden');
            els.logoutBtn.classList.remove('hidden');
        } else {
            els.authGreeting.textContent = '欢迎你，游客';
            els.loginTrigger.classList.remove('hidden');
            els.registerTrigger.classList.remove('hidden');
            els.logoutBtn.classList.add('hidden');
        }
        updatePointsUI();
    };

    const refreshAuthState = () => {
        const username = getCurrentUsername();
        if (username) {
            const users = loadUsers();
            const record = users[username] || ensureUserRecord(username);
            state.userPoints = record.points || 0;
            state.userModules = Array.isArray(record.modules) ? record.modules : [];
        } else {
            state.userPoints = 0;
            state.userModules = [];
        }
        updateAuthBar();
        renderModules();
        recalculateBestSample();
    };

    const saveCurrentUserData = () => {
        const username = getCurrentUsername();
        if (!username) {
            return;
        }
        const users = loadUsers();
        if (!users[username]) {
            users[username] = {
                password: '',
                createdAt: Date.now(),
                points: 0,
                modules: []
            };
        }
        users[username].points = state.userPoints;
        users[username].modules = state.userModules;
        saveUsers(users);
        updatePointsUI();
    };

    const createModuleCard = (title, body) => ({
        id: `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        title,
        body
    });

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const analyzeRecording = (buffer) => {
        const channelData = buffer.getChannelData(0);
        const sampleRate = buffer.sampleRate;
        const duration = buffer.duration || channelData.length / sampleRate;

        let sumSquares = 0;
        let activeSamples = 0;
        let transitions = 0;
        let isActive = false;
        let cooldown = 0;
        const threshold = 0.05;
        const cooldownSamples = Math.floor(sampleRate * 0.03);

        for (let i = 0; i < channelData.length; i++) {
            const sample = channelData[i];
            sumSquares += sample * sample;
            const magnitude = Math.abs(sample);

            if (magnitude > threshold) {
                activeSamples++;
                cooldown = cooldownSamples;
                if (!isActive) {
                    transitions++;
                    isActive = true;
                }
            } else if (isActive) {
                cooldown--;
                if (cooldown <= 0) {
                    isActive = false;
                }
            }
        }

        const rms = Math.sqrt(sumSquares / channelData.length);
        const activeRatio = activeSamples / channelData.length;

        const loudnessScore = clamp(rms / 0.08, 0, 1);
        const presenceScore = clamp(activeRatio / 0.45, 0, 1);
        const clarityScore = clamp((loudnessScore * 0.6 + presenceScore * 0.4) * 100, 0, 100);

        const wordsPerMinute = duration > 0 ? (transitions / duration) * 60 : 0;
        const gaussian = Math.exp(-Math.pow((wordsPerMinute - 120) / 60, 2));
        const speechRateScore = clamp(gaussian * 100, 0, 100);

        const totalScore = clamp((clarityScore * 0.5) + (speechRateScore * 0.5), 0, 100);

        return {
            clarity: clarityScore,
            speechRate: speechRateScore,
            total: totalScore,
            duration
        };
    };

    const decodeBlob = async (blob) => {
        if (!AudioCtx) {
            throw new Error('当前浏览器不支持 Web Audio API');
        }

        const arrayBuffer = await blob.arrayBuffer();
        const ctx = new AudioCtx();
        try {
            return await ctx.decodeAudioData(arrayBuffer.slice(0));
        } finally {
            ctx.close();
        }
    };

    const formatScore = (score) => `${Math.round(score)} 分`;
    const formatDuration = (seconds) => `${seconds.toFixed(1)}秒`;

    const updateSampleDisplay = () => {
        const best = state.bestSample;
        if (!best) {
            els.samplePlay.disabled = true;
            els.samplePlay.textContent = '暂无示例语音';
            els.sampleStatus.textContent = '完成任意模块录音后，这里会播放综合评分最高的示例语音。';
            els.sampleModule.textContent = '--';
            els.sampleScore.textContent = '--';
            els.sampleDuration.textContent = '--';
            els.sampleAudio.pause();
            els.sampleAudio.classList.add('hidden');
            return;
        }

        els.samplePlay.disabled = false;
        els.samplePlay.textContent = '播放最高分示例';
        els.sampleStatus.textContent = `当前最高分来自：${best.title}`;
        els.sampleModule.textContent = best.title;
        els.sampleScore.textContent = formatScore(best.score);
        els.sampleDuration.textContent = formatDuration(best.duration);

        if (els.sampleAudio.src !== best.url) {
            els.sampleAudio.src = best.url;
        }
        els.sampleAudio.classList.remove('hidden');
    };

    const recalculateBestSample = () => {
        let best = null;
        moduleStates.forEach((moduleState, moduleId) => {
            if (moduleState.lastScore == null || !moduleState.latestUrl) {
                return;
            }
            if (!best || moduleState.lastScore > best.score) {
                const module = getModuleById(moduleId);
                best = {
                    moduleId,
                    score: moduleState.lastScore,
                    duration: moduleState.lastDuration || 0,
                    url: moduleState.latestUrl,
                    title: module ? module.title : '未知模块'
                };
            }
        });
        state.bestSample = best;
        updateSampleDisplay();
    };

    const stopModuleTimer = (moduleState) => {
        if (moduleState.timerId) {
            window.clearInterval(moduleState.timerId);
            moduleState.timerId = null;
        }
    };

    const startModuleTimer = (moduleState) => {
        moduleState.startTimestamp = performance.now();
        stopModuleTimer(moduleState);
        moduleState.timerId = window.setInterval(() => {
            const elapsed = (performance.now() - moduleState.startTimestamp) / 1000;
            els.moduleDuration.textContent = formatDuration(elapsed);
        }, 100);
    };

    const resetModuleUI = (moduleState) => {
        els.moduleRecordToggle.textContent = '开始录音';
        els.moduleRecordToggle.classList.remove('recording');
        els.moduleRecordToggle.setAttribute('aria-pressed', 'false');
        stopModuleTimer(moduleState);
    };

    const cleanupModuleStream = (moduleState) => {
        moduleState.stream?.getTracks().forEach((track) => track.stop());
        moduleState.stream = null;
    };

    const explainPermissionError = (error) => {
        if (error?.name === 'NotAllowedError' || error?.name === 'PermissionDeniedError') {
            return '麦克风权限被拒。请在浏览器地址栏允许麦克风访问后重试。';
        }
        if (error?.name === 'NotFoundError' || error?.name === 'DevicesNotFoundError') {
            return '未检测到可用的麦克风设备，请连接设备后再试。';
        }
        if (error?.name === 'SecurityError') {
            return '浏览器因不安全的来源阻止了录音，请通过 https:// 或 http://localhost 访问此页面。';
        }
        return '麦克风权限被拒或不可用。';
    };

    const grantPoints = (points) => {
        const username = getCurrentUsername();
        if (!username || points <= 0) {
            return;
        }
        state.userPoints += points;
        saveCurrentUserData();
        els.moduleStatus.textContent = `本次综合得分达标，奖励 ${points} 积分！`;
    };

    const applyModuleSnapshot = (moduleId) => {
        const moduleState = getModuleState(moduleId);
        resetModuleUI(moduleState);
        els.moduleDuration.textContent = formatDuration(moduleState.lastDuration || 0);

        if (moduleState.lastScore != null) {
            els.moduleScore.textContent = formatScore(moduleState.lastScore);
            els.moduleStatus.textContent = `上一次综合得分：${Math.round(moduleState.lastScore)} 分；再录一遍冲击更高分！`;
        } else {
            els.moduleScore.textContent = '--';
            els.moduleStatus.textContent = '点击开始录音，测测你的模块造势。';
        }

        if (moduleState.latestUrl) {
            els.moduleAudio.src = moduleState.latestUrl;
            els.moduleAudio.classList.remove('hidden');
        } else {
            els.moduleAudio.removeAttribute('src');
            els.moduleAudio.classList.add('hidden');
        }
    };

    const handleModuleRecordingComplete = async (moduleId) => {
        const moduleState = getModuleState(moduleId);
        resetModuleUI(moduleState);
        cleanupModuleStream(moduleState);

        if (!moduleState.chunks.length) {
            els.moduleStatus.textContent = '没有捕获到声音，请重新录制。';
            return;
        }

        const blob = new Blob(moduleState.chunks, { type: moduleState.recorder?.mimeType || 'audio/webm' });
        moduleState.chunks = [];
        moduleState.recorder = null;

        if (moduleState.latestUrl) {
            if (state.bestSample && state.bestSample.url === moduleState.latestUrl) {
                state.bestSample = null;
            }
            URL.revokeObjectURL(moduleState.latestUrl);
        }

        const audioUrl = URL.createObjectURL(blob);
        moduleState.latestUrl = audioUrl;

        const isCurrent = state.currentModuleId === moduleId && !els.moduleOverlay.classList.contains('hidden');
        if (isCurrent) {
            els.moduleAudio.src = audioUrl;
            els.moduleAudio.classList.remove('hidden');
            els.moduleStatus.textContent = '正在分析录音...';
        }

        try {
            const buffer = await decodeBlob(blob);
            const results = analyzeRecording(buffer);
            moduleState.lastDuration = results.duration || 0;
            moduleState.lastScore = results.total;

            if (results.total >= 60) {
                grantPoints(1);
            }

            if (isCurrent) {
                els.moduleDuration.textContent = formatDuration(moduleState.lastDuration);
                els.moduleScore.textContent = formatScore(results.total);
                if (results.total >= 60) {
                    els.moduleStatus.textContent = `本次综合得分 ${Math.round(results.total)} 分，再接再厉！`;
                } else {
                    els.moduleStatus.textContent = `当前得分 ${Math.round(results.total)} 分，继续练就更快语速。`;
                }
            }
        } catch (error) {
            console.error(error);
            moduleState.lastDuration = 0;
            moduleState.lastScore = null;
            if (isCurrent) {
                els.moduleStatus.textContent = '录音处理失败，请缩短时长后重试。';
                els.moduleScore.textContent = '--';
            }
        } finally {
            recalculateBestSample();
            saveCurrentUserData();
        }
    };

    const stopModuleRecording = () => {
        if (!state.currentModuleId) {
            return;
        }
        const moduleState = getModuleState(state.currentModuleId);
        if (moduleState.recorder && moduleState.recorder.state !== 'inactive') {
            moduleState.recorder.stop();
        }
    };

    const startModuleRecording = async () => {
        if (!state.currentModuleId) {
            return;
        }

        if (!window.isSecureContext) {
            els.moduleStatus.textContent = '当前页面不在安全环境，浏览器禁止录音。请通过 https:// 或 http://localhost 访问后再试。';
            return;
        }

        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            els.moduleStatus.textContent = '当前浏览器不支持录音功能。';
            return;
        }

        const moduleState = getModuleState(state.currentModuleId);
        els.moduleStatus.textContent = '正在请求麦克风权限...';

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            moduleState.stream = stream;
            moduleState.chunks = [];

            const options = {};
            if (MediaRecorder.isTypeSupported?.('audio/webm;codecs=opus')) {
                options.mimeType = 'audio/webm;codecs=opus';
            }

            const recorder = new MediaRecorder(stream, options);
            moduleState.recorder = recorder;

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    moduleState.chunks.push(event.data);
                }
            };

            recorder.onstop = () => handleModuleRecordingComplete(state.currentModuleId);
            recorder.start();

            els.moduleStatus.textContent = '录音中...让理论落地成声浪！';
            els.moduleRecordToggle.textContent = '停止录音';
            els.moduleRecordToggle.classList.add('recording');
            els.moduleRecordToggle.setAttribute('aria-pressed', 'true');
            startModuleTimer(moduleState);
        } catch (error) {
            console.error(error);
            els.moduleStatus.textContent = explainPermissionError(error);
            resetModuleUI(moduleState);
            cleanupModuleStream(moduleState);
        }
    };

    const toggleModuleRecording = () => {
        if (!state.currentModuleId) {
            return;
        }
        const moduleState = getModuleState(state.currentModuleId);
        if (moduleState.recorder && moduleState.recorder.state === 'recording') {
            stopModuleRecording();
        } else {
            startModuleRecording();
        }
    };

    const openModule = (moduleId) => {
        const module = getModuleById(moduleId);
        if (!module) {
            return;
        }

        if (state.currentModuleId && state.currentModuleId !== moduleId) {
            const previous = getModuleState(state.currentModuleId);
            if (previous.recorder && previous.recorder.state === 'recording') {
                previous.recorder.stop();
            }
            stopModuleTimer(previous);
            cleanupModuleStream(previous);
        }

        state.currentModuleId = moduleId;
        state.lastFocusedModule = document.activeElement;

        els.moduleHeading.textContent = module.title;
        els.moduleBody.textContent = module.body;
        applyModuleSnapshot(moduleId);

        els.moduleOverlay.classList.remove('hidden');
        els.moduleClose.focus();
        document.body.style.overflow = 'hidden';
    };

    const closeModule = () => {
        if (els.moduleOverlay.classList.contains('hidden')) {
            return;
        }

        if (state.currentModuleId) {
            const moduleState = getModuleState(state.currentModuleId);
            if (moduleState.recorder && moduleState.recorder.state === 'recording') {
                moduleState.recorder.stop();
            }
            stopModuleTimer(moduleState);
            cleanupModuleStream(moduleState);
        }

        els.moduleOverlay.classList.add('hidden');
        document.body.style.overflow = '';
        els.moduleAudio.pause();

        if (state.lastFocusedModule && typeof state.lastFocusedModule.focus === 'function') {
            state.lastFocusedModule.focus();
        }
    };

    const handleOverlayClick = (event) => {
        if (event.target === els.moduleOverlay) {
            closeModule();
        }
        if (event.target === els.authOverlay) {
            closeAuthOverlay();
        }
        if (event.target === els.moduleCreateOverlay) {
            closeModuleCreateOverlay();
        }
    };

    const playSample = async () => {
        if (!state.bestSample) {
            return;
        }
        try {
            els.sampleAudio.currentTime = 0;
            await els.sampleAudio.play();
            els.sampleStatus.textContent = `正在播放：${state.bestSample.title}`;
        } catch (error) {
            console.error(error);
            els.sampleStatus.textContent = '播放失败，请检查浏览器的自动播放或声音设置。';
        }
    };

    const showAuthOverlay = (mode) => {
        state.authMode = mode;
        const isLogin = mode === 'login';
        els.authHeading.textContent = isLogin ? '用户登录' : '用户注册';
        els.authSubmit.textContent = isLogin ? '登录' : '注册';
        els.authMessage.textContent = '';
        els.authMessage.className = 'auth-message';
        els.authForm.reset();
        els.authSwitch.innerHTML = isLogin
            ? '还没有账号？<button type="button" id="switch-to-register">去注册</button>'
            : '已经有账号了？<button type="button" id="switch-to-login">去登录</button>';

        els.authOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            els.authUsername?.focus();
        }, 50);

        const switchButton = els.authSwitch.querySelector('button');
        switchButton?.addEventListener('click', () => {
            showAuthOverlay(isLogin ? 'register' : 'login');
        }, { once: true });
    };

    const closeAuthOverlay = () => {
        if (els.authOverlay.classList.contains('hidden')) {
            return;
        }
        els.authOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    };

    const handleAuthSubmit = (event) => {
        event.preventDefault();
        const username = els.authUsername.value.trim();
        const password = els.authPassword.value;

        if (username.length < 3) {
            els.authMessage.textContent = '用户名长度至少 3 个字符。';
            els.authMessage.className = 'auth-message error';
            return;
        }

        if (password.length < 6) {
            els.authMessage.textContent = '密码长度至少 6 个字符。';
            els.authMessage.className = 'auth-message error';
            return;
        }

        const users = loadUsers();
        const hashed = hashPassword(password);

        if (state.authMode === 'register') {
            if (users[username]) {
                els.authMessage.textContent = '该用户名已被注册，请尝试其他名称。';
                els.authMessage.className = 'auth-message error';
                return;
            }
            users[username] = {
                password: hashed,
                createdAt: Date.now(),
                points: 0,
                modules: []
            };
            saveUsers(users);
            els.authMessage.textContent = '注册成功，已自动为你登录。';
            els.authMessage.className = 'auth-message success';
            setCurrentUsername(username);
            setTimeout(() => {
                closeAuthOverlay();
            }, 600);
        } else {
            const record = users[username];
            if (!record || record.password !== hashed) {
                els.authMessage.textContent = '用户名或密码错误，请重试。';
                els.authMessage.className = 'auth-message error';
                return;
            }
            els.authMessage.textContent = '登录成功，欢迎回来！';
            els.authMessage.className = 'auth-message success';
            setCurrentUsername(username);
            setTimeout(() => {
                closeAuthOverlay();
            }, 400);
        }
    };

    const handleLogout = () => {
        setCurrentUsername(null);
    };

    const showModuleCreateOverlay = () => {
        const username = getCurrentUsername();
        if (!username) {
            showAuthOverlay('login');
            return;
        }
        if (state.userPoints < 10) {
            els.moduleCreateMessage.textContent = '积分不足，录制更多高分语音获取积分。';
            els.moduleCreateMessage.className = 'auth-message error';
        } else {
            els.moduleCreateMessage.textContent = '';
            els.moduleCreateMessage.className = 'auth-message';
        }
        els.moduleCreateForm.reset();
        els.moduleCreateOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            els.moduleCreateTitle?.focus();
        }, 50);
    };

    const closeModuleCreateOverlay = () => {
        if (els.moduleCreateOverlay.classList.contains('hidden')) {
            return;
        }
        els.moduleCreateOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    };

    const handleModuleCreate = (event) => {
        event.preventDefault();
        const username = getCurrentUsername();
        if (!username) {
            els.moduleCreateMessage.textContent = '请先登录再添加模块。';
            els.moduleCreateMessage.className = 'auth-message error';
            return;
        }

        if (state.userPoints < 10) {
            els.moduleCreateMessage.textContent = '积分不足，录制更多高分语音后再试。';
            els.moduleCreateMessage.className = 'auth-message error';
            return;
        }

        const title = els.moduleCreateTitle.value.trim();
        const body = els.moduleCreateBody.value.trim();

        if (title.length < 3) {
            els.moduleCreateMessage.textContent = '标题至少 3 个字符。';
            els.moduleCreateMessage.className = 'auth-message error';
            return;
        }

        if (body.length < 10) {
            els.moduleCreateMessage.textContent = '内容至少 10 个字符，写明你的吵架秘籍。';
            els.moduleCreateMessage.className = 'auth-message error';
            return;
        }

        const module = createModuleCard(title, body);
        state.userModules.push(module);
        state.userPoints -= 10;
        saveCurrentUserData();
        renderModules();
        els.moduleCreateMessage.textContent = '模块已添加，积分已扣除 10。';
        els.moduleCreateMessage.className = 'auth-message success';
        setTimeout(() => {
            closeModuleCreateOverlay();
        }, 600);
    };

    const handleEscape = (event) => {
        if (event.key === 'Escape') {
            closeModule();
            closeAuthOverlay();
            closeModuleCreateOverlay();
        }
    };

    els.samplePlay?.addEventListener('click', playSample);
    els.moduleRecordToggle?.addEventListener('click', toggleModuleRecording);
    els.loginTrigger?.addEventListener('click', () => showAuthOverlay('login'));
    els.registerTrigger?.addEventListener('click', () => showAuthOverlay('register'));
    els.logoutBtn?.addEventListener('click', handleLogout);
    els.authClose?.addEventListener('click', closeAuthOverlay);
    els.authForm?.addEventListener('submit', handleAuthSubmit);
    els.moduleClose?.addEventListener('click', closeModule);
    els.moduleOverlay?.addEventListener('click', handleOverlayClick);
    els.authOverlay?.addEventListener('click', handleOverlayClick);
    els.moduleCreateOverlay?.addEventListener('click', handleOverlayClick);
    els.moduleCreateClose?.addEventListener('click', closeModuleCreateOverlay);
    els.moduleCreateForm?.addEventListener('submit', handleModuleCreate);
    els.moduleCreateTrigger?.addEventListener('click', showModuleCreateOverlay);

    window.addEventListener('keydown', handleEscape);

    refreshAuthState();
})();
