import { Award, Heart, Leaf } from "lucide-react";

const VALUES = [
  {
    icon: Heart,
    title: "Tâm huyết",
    description:
      "Mỗi chiếc bánh được làm thủ công với tình yêu và sự tỉ mỉ từng chi tiết nhỏ.",
  },
  {
    icon: Leaf,
    title: "Nguyên liệu tươi",
    description:
      "Chọn lọc nguyên liệu sạch, tươi ngon từ các nhà cung cấp uy tín trong nước.",
  },
  {
    icon: Award,
    title: "Chất lượng cao",
    description:
      "Tiêu chuẩn an toàn thực phẩm nghiêm ngặt, bảo đảm sức khỏe cho khách hàng.",
  },
];

const MILESTONES = [
  {
    year: "2018",
    event: "Thành lập cửa hàng đầu tiên tại 12 Trần Phú, Nha Trang",
  },
  { year: "2020", event: "Mở rộng chi nhánh thứ hai tại Nguyễn Thiện Thuật" },
  {
    year: "2022",
    event: "Ra mắt menu cà phê đặc sản và bánh seasonal theo mùa",
  },
  {
    year: "2024",
    event: "Đạt chứng nhận an toàn vệ sinh thực phẩm cấp tỉnh Khánh Hòa",
  },
];

export function GioiThieuPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-4">
          <span className="font-body text-sm text-accent font-semibold tracking-widest uppercase">
            Về chúng tôi
          </span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            Huyền Trinh Coffee &amp; Bake
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Từ góc nhỏ yêu thương ở Nha Trang, chúng tôi mang đến những khoảnh
            khắc ngọt ngào đáng nhớ.
          </p>
        </div>
      </section>

      {/* Lịch sử */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Lịch sử hình thành
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Huyền Trinh bắt đầu từ niềm đam mê làm bánh thuần túy của người
                sáng lập — chị Huyền Trinh Nguyễn. Sau nhiều năm học hỏi kỹ
                thuật làm bánh tại Pháp và Nhật Bản, chị quyết định mang những
                kỹ năng đó về quê hương Nha Trang để tạo nên một không gian vừa
                tinh tế vừa gần gũi.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Khởi đầu với một chiếc lò nướng nhỏ và tình yêu vô bờ, Huyền
                Trinh đã dần trở thành điểm đến quen thuộc của những người yêu
                bánh và cà phê chất lượng tại thành phố biển.
              </p>
            </div>
            <div className="space-y-4">
              {MILESTONES.map((m) => (
                <div
                  key={m.year}
                  className="flex gap-4 items-start"
                  data-ocid="milestone-item"
                >
                  <div className="shrink-0 w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-secondary-foreground">
                      {m.year}
                    </span>
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="font-body text-sm text-foreground">
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sứ mệnh */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Sứ mệnh &amp; Tầm nhìn
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Chúng tôi tin vào sức mạnh của những điều giản dị — một chiếc bánh
              ngon, một tách cà phê ấm, và một không gian để lòng được nghỉ
              ngơi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="card-base text-center space-y-3"
                  data-ocid="value-card"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sản phẩm & dịch vụ */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10 space-y-2">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Sản phẩm &amp; Dịch vụ
            </h2>
            <p className="font-body text-muted-foreground">
              Đa dạng lựa chọn cho mọi dịp
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Bánh mặn & ngọt",
                desc: "Croissant, bánh mì, bánh kem, tart đa dạng hàng ngày",
              },
              {
                title: "Cà phê & trà",
                desc: "Cà phê phin, espresso, matcha và trà hoa theo mùa",
              },
              {
                title: "Bánh theo đặt hàng",
                desc: "Bánh sinh nhật, tiệc cưới và quà tặng cá nhân hóa",
              },
              {
                title: "Không gian cà phê",
                desc: "Không gian làm việc và thư giãn yên tĩnh, WiFi miễn phí",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="card-base space-y-2"
                data-ocid="service-card"
              >
                <h3 className="font-display font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
