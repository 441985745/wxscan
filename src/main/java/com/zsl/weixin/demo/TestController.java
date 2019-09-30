package com.zsl.weixin.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Map;

@Controller
@RequestMapping("/test")
public class TestController {


    @RequestMapping("/hello")
    public String hello(){
        return "test1";
    }
    //token  25_dDokn3nU4F6LPq1SuJMKf5Hm8DtWtt9rIdxxZQ3BZ7XFfmOqXeFly5hH_DwXJQr4zEoxXsf5WHcserEhB7TAA-vWR96rbN9pwLfn7NCVlqTroKYgrC9aRthqsqbeUPJtlmptxuPB1KW2o649HMVeAJAPUD


    @RequestMapping("/sm")
    public Object test(HttpServletRequest request,Model model) throws IOException {

        String url =  request.getRequestURL().toString();
        System.out.println("aaaaaaaaaaaaaaaa="+url);
        Map<String, String> sign = JsSignUtil.sign(url);

        model.addAttribute("sign",sign);
        return "test";
    }




}
