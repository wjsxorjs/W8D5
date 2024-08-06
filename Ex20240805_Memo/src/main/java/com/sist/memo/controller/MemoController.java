package com.sist.memo.controller;

import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sist.memo.service.MemoService;
import com.sist.memo.vo.MemoVO;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/memo")
public class MemoController {
    @Autowired
    MemoService m_service;
    
    @GetMapping("/list")
    @ResponseBody
    public Map<String, Object> memoList(String cPage, String searchType, String searchValue) {
        
        int nowPage = 1;
        if(cPage != null){
            nowPage = Integer.parseInt(cPage);
        }

        // 총 메모수 얻기
        int totalRecord = m_service.getCount(searchType, searchValue);
        
        int totalPage = 1; //page.getTotalPage();

        // Paging 객체 생성;
        int begin = 1; // page.getBegin();
        int end = 10; // page.getEnd();

        
        Map<String, Object> m_map = new HashMap<>();
        
        MemoVO[] m_ar = m_service.getList(searchType, searchValue, begin, end);

        m_map.put("m_ar", m_ar);
        m_map.put("totalPage", totalPage);
        m_map.put("nowPage", nowPage);

        return m_map;
    }


    @RequestMapping("/getMemo")
    @ResponseBody
    public Map<String, Object> getMemo(@RequestParam String m_idx) {
        Map<String, Object> m_map = new HashMap<>();
        
        MemoVO mvo = m_service.getMemo(m_idx);

        m_map.put("mvo", mvo);

        return m_map;
    }

    // @PostMapping("/write")
    // public String write(String content, String writer) {
    //     Map<String, Object> m_map = new HashMap<>();
        
    //     int chk = m_service.write(content, writer);

    //     m_map.put("result", chk);
    //     // m_map.put("result", 1);

    //     return "/tableList";
    // }

    @RequestMapping("/write")
    @ResponseBody
    public Map<String, Object> write(MemoVO mvo) {
        Map<String, Object> m_map = new HashMap<>();

        int chk = m_service.write(mvo);

        m_map.put("result", chk);
        // m_map.put("result", 1);

        return m_map;
    }
    

}
