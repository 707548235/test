/**
 * Created by Administrator on 2017/7/29 0029.
 */
$(function () {
    var L, t,nm,nt,nc, l,c1,lb, f, S, N, p, q, Q,de,c2,pe,Q2;
    var flag;
    $("#result_a").click(function () {
        L = $("#val_a1").val();
        t = $("#val_a2").val();
        nm = $("#val_a3").val();
        nt = $("#val_a4").val();
        nc = $("#val_a5").val();
        flag = doFlag(L) || doFlag(t) || doFlag(nm) || doFlag(nt) || doFlag(nc);
        if(flag){
            layerDialog("请输入正确的值");
        } else{
            l = L/(t*nm*nt*nc);
            $("#val_a6").val(l.toFixed(2));
        }
    });
    $("#result_b").click(function () {
        c1 = $("#val_b1").val();
        flag = doFlag(l) || doFlag(c1);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(c1<0.8||c1>0.95){
            countShake("#box_b1","η取值范围0.80~0.95");
        } else{
            lb = l/c1;
            $("#val_b2").val(lb.toFixed(2));
        }
    });
    $("#result_c").click(function () {
        f = $("#val_c1").val();
        S = $("#val_c2").val();
        flag = doFlag(f) || doFlag(S);
        if(flag){
            layerDialog("请输入正确的值");
        } else{
            N = 3.3*Math.pow(f*S*S,0.5);
            $("#val_c3").val(N.toFixed(2));
        }
    });
    $("#result_d").click(function () {
        p = $("#val_d1").val();
        flag = doFlag(q) || doFlag(f) || doFlag(S);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(p<295||p>330){
            countShake("#box_d1","p取值范围295~330");
        }else{
            q = 1.1*(525/q)*Math.pow(f/S,0.5);
            $("#val_d2").val(q.toFixed(2));
        }
    });
    $("#result_e").click(function () {
        flag = doFlag(q) || doFlag(S) || doFlag(lb) || doFlag(c1);
        if(flag){
            layerDialog("请输入正确的值");
        } else{
            Q = q*S*lb*c1;
            $("#val_e1").val(Q.toFixed(2));
        }
    });
    $("#result_f").click(function () {
        de = $("#val_f1").val();
        c2 = $("#val_f2").val();
        pe = $("#val_f3").val();
        flag = doFlag(de) || doFlag(c2) || doFlag(pe) || doFlag(pl) || doFlag(de);
        if(flag){
            layerDialog("请输入正确的值");
        } else if(c2<0.4||c2>0.8){
            countShake("#box_f2","ψ取值范围0.40~0.80");
        } else if(pe<0.95||pe>1.35){
            countShake("#box_f3","ρ取值范围0.95~1.35");
        } else{
            Q2 = (Math.PI*Math.pow(de,2)/4)*c2*lb*pe*Math.pow(10,-3);
            $("#val_f4").val(Q2.toFixed(2));
        }
    });

});