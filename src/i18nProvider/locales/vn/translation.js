const TRANSLATIONS_VN = {
  title: 'Câu Truyện',
  auth: {
    auth_check_error: 'Vui lòng đăng nhập để tiếp tục',
    auth_check_expired: 'Mã thông báo hết hạn',
    user_menu: 'Hồ sơ',
    username: 'Tên người dùng',
    password: 'Mật khẩu',
    sign_in: 'Sign in',
    sign_in_error: 'Xác thực không thành công, vui lòng thử lại',
    logout: 'Đăng xuất'
  },
  users: {
    title: 'Câu Truyện React',
    labels: {
      first_name: 'Họ',
      last_name: 'Tên',
      email: 'Email',
      password: 'Mật khẩu',
      password_confirm: 'Xác nhận mật khẩu',
      remember_me: 'Ghi nhớ tôi'
    },
    texts: {
      or: 'Hoặc',
      not_account: 'Bạn chưa có tài khoản?',
      has_account: 'Bạn đã có tài khoản?',
      welcome: 'Chào mừng bạn đến',
      subtitle: 'Câu Truyện React!',
      description: 'Mẫu quản trị trang demo cho Ứng dụng web.'
    },
    forgotPass: 'Quên mật khẩu?',
    actions: {
      login: 'Đăng nhập',
      login_google: 'Đăng nhập with Google',
      login_facebook: 'Đăng nhập with Facebook',
      register_account: 'Tạo tài khoản',
      register: 'Đăng ký'
    },
    notification: {
      register: {
        success: 'Đăng ký người dùng thành công!',
        duplicate_email: 'Email trùng lặp',
        password_confirm_not_match:
          'Mật khẩu xác nhận không khớp với mật khẩu hiện tại'
      },
      login: {
        success: 'Đăng nhập thành công!',
        email_not_found: 'Không tìm thấy email',
        incorrect_password: 'Mật khẩu không đúng'
      },
      logout: {
        success: 'Đăng xuất thành công!'
      }
    }
  },
  appBar: {
    toolbar: {
      title: 'Chào mừng đến với trang demo',
      tooltip: {
        github: 'Github của trang',
        change_language: 'Thay đổi ngôn ngữ',
        change_setting: 'Thay đổi cài đặt',
        change_profile: 'Thay đổi thông tin',
        notification: 'Thông báo',
        refresh: 'Làm mới'
      },
      language: {
        en: 'English',
        vn: 'VietNam'
      },
      setting: {
        title: 'Cài đặt',
        mode: 'Chế độ',
        themes: {
          light: 'Sáng',
          dark: 'Tối'
        }
      },
      profile: {
        show_profile: 'Thông tin cá nhân',
        logout: 'Đăng xuất'
      }
    }
  },
  resources: {
    dashboard: {
      name: 'Trang chủ',
      welcome: {
        title:
          'Chào mừng bạn đến với bản demo thương mại điện tử của trang quản trị',
        subtitle: 'Đây là quản trị viên của cửa hàng sách truyện'
      },
      report: {
        weeklySales: 'Doanh số hàng tuần',
        newCustomers: 'Khách hàng mới',
        itemOrders: 'Đơn đặt hàng',
        pendingOrders: 'Hàng đang chờ xử lý'
      },
      chart: {
        line: {
          title: 'Biểu đồ thống kê bán hàng',
          labels: {
            jan: 'Tháng 1',
            feb: 'Tháng 2',
            mar: 'Tháng 3',
            apr: 'Tháng 4',
            may: 'Tháng 5',
            jun: 'Tháng 6',
            july: 'Tháng 7',
            aug: 'Tháng 8',
            sep: 'Tháng 9',
            oct: 'Tháng 10',
            nov: 'Tháng 11',
            dec: 'Tháng 12'
          },
          datasets: {
            labels: {
              newVisitor: 'Khách mới',
              repeatedUser: 'Khách lặp lại',
              subscriber: 'Khách đăng ký',
              share: 'Khách chia sẻ'
            }
          }
        },
        pie: {
          title: 'Biểu đồ lượt truy cập hiện tại',
          labels: {
            america: 'Châu mỹ',
            asia: 'Châu Á',
            europe: 'Châu Âu',
            africa: 'Châu phi'
          },
          datasets: {
            labels: {
              newVisitor: 'New Visitor',
              repeatedUser: 'Repeated User',
              subscriber: 'Subscriber',
              share: 'Share'
            }
          }
        }
      },
      quickReport: {
        newCustomers: 'Khách hàng mới',
        pendingOrders: 'Hàng đang chờ xử lý',
        bestSalesman: 'Nhân viên bán hàng tốt nhất',
        top5: 'Top 5',
        seller: 'Người bán',
        product: 'Sản phẩm',
        country: 'Quốc gia',
        total: 'Tổng cộng',
        rank: 'Cấp hạng'
      }
    },
    ancients: {
      name: 'Cổ đại',
      vampires: {
        name: 'Ma ca rồng'
      },
      monsters: {
        name: 'Quái vật'
      }
    },
    animes: {
      name: 'Hoạt hình'
    }
  },
  page: {
    error: {
      name: 'Đã xảy ra sự cố',
      message:
        'Đã xảy ra lỗi máy khách và không thể hoàn thành yêu cầu của bạn.',
      message_text: 'Cần giúp đỡ với lỗi này? Hãy thử những cách sau',
      message_help: 'Nhận trợ giúp từ nhóm cốt lõi qua',
      search_on: 'Tìm kiếm trên',
      community_answers: 'cho câu trả lời của cộng đồng'
    },
    not_found: {
      name: 'Không tìm thấy',
      message: 'Bạn đã nhập sai URL hoặc bạn đã theo một liên kết không hợp lệ.'
    }
  },
  actions: {
    button: {
      back: 'Quay lại'
    }
  },
  validation: {
    required: 'Bắt buộc',
    minLength: 'Ít nhất phải có {{min}} ký tự',
    maxLength: 'Phải có {{max}} ký tự trở xuống',
    minValue: 'Ít nhất phải là {{min}}',
    maxValue: 'Phải từ {{max}} trở xuống',
    users: {
      email: 'Email không khớp với định dạng',
      password:
        'Phải chứa 8 ký tự, một chữ hoa, một chữ thường, một số và một ký tự chữ hoa đặc biệt',
      password_confirm: 'Mật khẩu xác nhận không khớp với mật khẩu'
    }
  },
  common: {
    action: {
      undo: 'Hoàn tác'
    },
    button: {
      viewAll: 'Xem tất cả'
    }
  },
  routes: {
    dashBoard: {
      label: 'Bảng điều khiển'
    },
    ancient: {
      label: 'Cổ đại',
      child: {
        vampire: {
          label: 'Ma cà rồng'
        },
        monster: {
          label: 'Quái vật'
        }
      }
    }
  }
};

export default TRANSLATIONS_VN;
