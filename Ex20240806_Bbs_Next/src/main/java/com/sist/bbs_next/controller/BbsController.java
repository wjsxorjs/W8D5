package com.sist.bbs_next.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.bbs_next.util.Paging2;
import com.sist.bbs_next.service.BbsService;
import com.sist.bbs_next.vo.BbsVO;

import org.springframework.web.bind.annotation.ResponseBody;


@RestController
@RequestMapping("/api/bbs")
public class BbsController {

    @Autowired
    private BbsService b_service;

    @RequestMapping("list")
    @ResponseBody
    public Map<String, Object> bbsList(String bname,String searchType, String searchValue, String cPage) {
        Map<String,Object> b_map = new HashMap<>();
        int nowPage = 1;

        if(cPage != null){
            nowPage = Integer.parseInt(cPage);
        }

        if(bname == null || bname.trim().length()==0){
            bname = "bbs";
        }

        int totalRecord = b_service.count(bname, searchType, searchValue);

        // 위에서 전체 게시물의 수를 얻었다면 이제 페이징 기법을
        // 사용하는 객체를 생성할 수 있다.
        Paging2 page = new Paging2(5, 3, totalRecord, nowPage, bname);

        nowPage = page.getNowPage();

        // 페이징기법의 HTML코드를 얻어낸다.
        String pageCode = page.getSb().toString();

        // 뷰 페이지에서 표현할 목록 가져오기
        int begin = page.getBegin();
        int end = page.getEnd();

        BbsVO[] b_ar = b_service.bbsList(bname, searchType, searchValue, begin, end);

        b_map.put("b_ar", b_ar);
        b_map.put("nowPage", nowPage);
        b_map.put("totalRecord", totalRecord);
        b_map.put("bname", bname);
        b_map.put("totalPage", page.getTotalPage());
        b_map.put("pagePerBlock", page.getPagePerBlock());

        return b_map;
    }
    
    @RequestMapping("getBbs")
    @ResponseBody
    public Map<String, Object> getBbs(String b_idx) {
        Map<String,Object> b_map = new HashMap<>();

        BbsVO bvo = b_service.getBbs(b_idx);

        b_map.put("bvo", bvo);

        return b_map;
    }

}
